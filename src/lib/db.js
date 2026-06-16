import mysql from "mysql2/promise";

// Cached pool to prevent HMR connection leaks in development
let pool = global.mysqlPool || null;
let isSeeding = false;
let hasEnsuredTablesExist = false;

export async function getPool() {
  if (pool) return pool;

  const config = {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    port: parseInt(process.env.MYSQL_PORT || "3306", 10),
  };

  try {
    // First connect to mysql without database parameter to ensure it exists
    const connection = await mysql.createConnection(config);
    const dbName = process.env.MYSQL_DATABASE || "bit_college_db";
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    await connection.end();

    // Now create connection pool with the database
    pool = mysql.createPool({
      ...config,
      database: dbName,
      waitForConnections: true,
      connectionLimit: 3,
      queueLimit: 0,
    });

    global.mysqlPool = pool;
    return pool;
  } catch (err) {
    console.error("Failed to connect to MySQL server:", err);
    throw err;
  }
}

async function copyLivePagesToPreviewDrafts(dbPool) {
  try {
    // Fetch all live pages currently in the pages table
    const [pages] = await dbPool.execute("SELECT * FROM `pages`");
    if (pages.length > 0) {
      for (const page of pages) {
        // If a draft doesn't exist for this page in preview_drafts, clone the live copy immediately
        const [existingDrafts] = await dbPool.execute(
          "SELECT id FROM `preview_drafts` WHERE `path` = ? LIMIT 1",
          [page.path]
        );
        if (existingDrafts.length === 0) {
          // Fetch its live page sections
          const [sections] = await dbPool.execute(
            "SELECT * FROM `page_sections` WHERE `page_id` = ? ORDER BY `section_order` ASC",
            [page.id]
          );

          const livePageData = {
            title: page.title || "",
            subtitle: page.subtitle || "",
            intro: page.intro || "",
            metrics: JSON.parse(page.metrics_json || "[]"),
            sections: sections.map(sec => ({
              id: sec.id,
              title: sec.title || "",
              subtitle: sec.subtitle || "",
              desc: sec.desc || "",
              image_url: sec.image_url || "",
              video_url: sec.video_url || "",
              btn_text: sec.btn_text || "",
              btn_url: sec.btn_url || "",
              section_order: sec.section_order,
              alignment: sec.alignment || "left",
              layout_type: sec.layout_type || "standard",
            })),
          };

          await dbPool.execute(
            "INSERT INTO `preview_drafts` (`path`, `page_data_json`) VALUES (?, ?)",
            [page.path, JSON.stringify(livePageData)]
          );
          console.log(`Auto-copied live page data of ${page.path} to preview drafts table.`);
        }
      }
    }
  } catch (err) {
    console.error("Error auto-copying live pages to preview drafts:", err);
  }
}

async function ensureTablesExist(dbPool) {
  if (hasEnsuredTablesExist || isSeeding) return;
  try {
    // Check if site_settings table exists
    await dbPool.execute("SELECT 1 FROM `site_settings` LIMIT 1");
    
    // Ensure preview_drafts exists for draft previewing and history logs
    await dbPool.execute(`
      CREATE TABLE IF NOT EXISTS \`preview_drafts\` (
        \`id\` INT AUTO_INCREMENT PRIMARY KEY,
        \`session_id\` VARCHAR(255) NULL,
        \`path\` VARCHAR(255) NOT NULL,
        \`page_data_json\` LONGTEXT NOT NULL,
        \`settings_json\` LONGTEXT,
        \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX (\`path\`),
        INDEX (\`session_id\`),
        INDEX (\`created_at\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // Ensure session_id column exists for existing tables
    try {
      await dbPool.execute("ALTER TABLE `preview_drafts` ADD COLUMN `session_id` VARCHAR(255) NULL AFTER `id` , ADD INDEX (`session_id`)");
    } catch (e) {
      // Ignore error if column/index already exists
    }

    hasEnsuredTablesExist = true;

    // Dynamically clone live page records into preview drafts if missing
    await copyLivePagesToPreviewDrafts(dbPool);

  } catch (err) {
    if (err.code === "ER_NO_SUCH_TABLE" || err.errno === 1146 || String(err.message).includes("doesn't exist")) {
      isSeeding = true;
      console.log("Database table 'site_settings' is missing. Initiating automatic seeding...");
      try {
        const { seedDatabase } = await import("./seed.js");
        await seedDatabase(false);
        console.log("Automatic database seeding completed successfully.");
        hasEnsuredTablesExist = true;
        await copyLivePagesToPreviewDrafts(dbPool);
      } catch (seedErr) {
        console.error("Auto-seeding failed:", seedErr);
      } finally {
        isSeeding = false;
      }
    } else {
      throw err;
    }
  }
}

export async function query(sql, params) {
  try {
    const dbPool = await getPool();
    await ensureTablesExist(dbPool);
    const [results] = await dbPool.execute(sql, params);
    return results;
  } catch (error) {
    console.error("Database Query Error:", error);
    throw error;
  }
}
