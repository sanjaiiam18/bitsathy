import crypto from "crypto";
import { siteContent } from "@/data/siteContent";
import { departmentsContent } from "@/data/departmentsContent";
import { query } from "./db";

export async function seedDatabase(reset = false) {
  console.log("Seeding database... Reset:", reset);

  // Drop tables if reset is true
  if (reset) {
    console.log("Resetting database tables...");
    await query("DROP TABLE IF EXISTS `sessions`");
    await query("DROP TABLE IF EXISTS `preview_drafts`");
    await query("DROP TABLE IF EXISTS `page_sections`");
    await query("DROP TABLE IF EXISTS `departments`");
    await query("DROP TABLE IF EXISTS `pages`");
    await query("DROP TABLE IF EXISTS `site_settings`");
    await query("DROP TABLE IF EXISTS `admin_users`");
  }

  // 1. Create admin_users table
  await query(`
    CREATE TABLE IF NOT EXISTS \`admin_users\` (
      \`id\` INT AUTO_INCREMENT PRIMARY KEY,
      \`username\` VARCHAR(100) UNIQUE NOT NULL,
      \`password_hash\` VARCHAR(255) NOT NULL,
      \`role\` VARCHAR(50) DEFAULT 'editor',
      \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 2. Create site_settings table
  await query(`
    CREATE TABLE IF NOT EXISTS \`site_settings\` (
      \`setting_key\` VARCHAR(100) PRIMARY KEY,
      \`setting_value\` LONGTEXT NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 3. Create pages table
  await query(`
    CREATE TABLE IF NOT EXISTS \`pages\` (
      \`id\` INT AUTO_INCREMENT PRIMARY KEY,
      \`path\` VARCHAR(255) UNIQUE NOT NULL,
      \`title\` VARCHAR(255) NOT NULL,
      \`subtitle\` VARCHAR(255) DEFAULT '',
      \`intro\` TEXT,
      \`metrics_json\` TEXT,
      \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 4. Create page_sections table
  await query(`
    CREATE TABLE IF NOT EXISTS \`page_sections\` (
      \`id\` INT AUTO_INCREMENT PRIMARY KEY,
      \`page_id\` INT NOT NULL,
      \`title\` VARCHAR(255) DEFAULT '',
      \`subtitle\` VARCHAR(255) DEFAULT '',
      \`desc\` TEXT,
      \`image_url\` VARCHAR(512) DEFAULT '',
      \`video_url\` VARCHAR(512) DEFAULT '',
      \`btn_text\` VARCHAR(255) DEFAULT '',
      \`btn_url\` VARCHAR(255) DEFAULT '',
      \`section_order\` INT DEFAULT 0,
      \`alignment\` VARCHAR(50) DEFAULT 'left',
      \`layout_type\` VARCHAR(50) DEFAULT 'standard',
      FOREIGN KEY (\`page_id\`) REFERENCES \`pages\`(\`id\`) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 5. Create departments table
  await query(`
    CREATE TABLE IF NOT EXISTS \`departments\` (
      \`id\` INT AUTO_INCREMENT PRIMARY KEY,
      \`slug\` VARCHAR(150) UNIQUE NOT NULL,
      \`name\` VARCHAR(255) NOT NULL,
      \`code\` VARCHAR(50) NOT NULL,
      \`category\` VARCHAR(150),
      \`established\` INT,
      \`intake\` INT,
      \`labs_count\` INT,
      \`placement_ratio\` VARCHAR(50),
      \`nba_accredited\` TINYINT(1) DEFAULT 0,
      \`nba_period\` VARCHAR(255) DEFAULT '',
      \`vision\` TEXT,
      \`mission_json\` TEXT,
      \`labs_json\` TEXT,
      \`recruiters_json\` TEXT,
      \`highlights_json\` TEXT,
      \`faculty_json\` TEXT,
      \`hod_name\` VARCHAR(255) DEFAULT '',
      \`hod_email\` VARCHAR(255) DEFAULT '',
      \`hod_designation\` VARCHAR(255) DEFAULT '',
      \`hod_image\` VARCHAR(512) DEFAULT '',
      \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 6. Create sessions table
  await query(`
    CREATE TABLE IF NOT EXISTS \`sessions\` (
      \`session_id\` VARCHAR(255) PRIMARY KEY,
      \`username\` VARCHAR(100) NOT NULL,
      \`expires_at\` DATETIME NOT NULL,
      \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 7. Create preview_drafts table
  await query(`
    CREATE TABLE IF NOT EXISTS \`preview_drafts\` (
      \`id\` INT AUTO_INCREMENT PRIMARY KEY,
      \`path\` VARCHAR(255) NOT NULL,
      \`page_data_json\` LONGTEXT NOT NULL,
      \`settings_json\` LONGTEXT,
      \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX (\`path\`),
      INDEX (\`created_at\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);


  // Seed Admin User
  const adminCheck = await query("SELECT * FROM `admin_users` WHERE `username` = 'admin'");
  if (adminCheck.length === 0) {
    const passwordHash = crypto.createHash("sha256").update("admin123").digest("hex");
    await query(
      "INSERT INTO `admin_users` (`username`, `password_hash`, `role`) VALUES (?, ?, ?)",
      ["admin", passwordHash, "admin"]
    );
    console.log("Seeded default admin user: admin / admin123");
  }

  // Seed Global Site Settings (colors, layout rules, branding)
  const defaultSettings = [
    { key: "brand_blue", val: "#1e3a8a" },
    { key: "brand_orange", val: "#f97316" },
    { key: "brand_cyan", val: "#06b6d4" },
    { key: "brand_purple", val: "#6366f1" },
    { key: "site_name", val: "Bannari Amman Institute of Technology" },
    { key: "site_logo", val: "/logo.png" },
    { key: "site_footer_text", val: "© 2026 Bannari Amman Institute of Technology. All Rights Reserved." },
  ];

  for (const setting of defaultSettings) {
    await query(
      "INSERT INTO `site_settings` (`setting_key`, `setting_value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `setting_value` = ?",
      [setting.key, setting.val, setting.val]
    );
  }
  console.log("Seeded default global site settings");

  // Helper function to seed pages and their sections from siteContent
  const seedPage = async (pagePath, pageData) => {
    let pageRow = await query("SELECT id FROM `pages` WHERE `path` = ?", [pagePath]);
    let pageId;
    if (pageRow.length === 0) {
      const result = await query(
        "INSERT INTO `pages` (`path`, `title`, `subtitle`, `intro`, `metrics_json`) VALUES (?, ?, ?, ?, ?)",
        [
          pagePath,
          pageData.title || "",
          pageData.subtitle || "",
          pageData.intro || "",
          JSON.stringify(pageData.metrics || []),
        ]
      );
      pageId = result.insertId;
    } else {
      pageId = pageRow[0].id;
      await query(
        "UPDATE `pages` SET `title` = ?, `subtitle` = ?, `intro` = ?, `metrics_json` = ? WHERE `id` = ?",
        [
          pageData.title || "",
          pageData.subtitle || "",
          pageData.intro || "",
          JSON.stringify(pageData.metrics || []),
          pageId,
        ]
      );
    }

    // Clean sections if reset is not active, to prevent duplicate items
    await query("DELETE FROM `page_sections` WHERE `page_id` = ?", [pageId]);

    const sections = [];
    // Insert content blocks as sections
    if (pageData.contentBlocks && Array.isArray(pageData.contentBlocks)) {
      for (let i = 0; i < pageData.contentBlocks.length; i++) {
        const block = pageData.contentBlocks[i];
        await query(
          "INSERT INTO `page_sections` (`page_id`, `title`, `subtitle`, `desc`, `image_url`, `video_url`, `section_order`, `alignment`, `layout_type`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            pageId,
            block.title || "",
            block.subtitle || "",
            block.desc || "",
            block.image || "",
            block.video || "",
            i,
            "left",
            block.image ? "image-right" : "standard",
          ]
        );
        sections.push({
          title: block.title || "",
          subtitle: block.subtitle || "",
          desc: block.desc || "",
          image_url: block.image || "",
          video_url: block.video || "",
          section_order: i,
          alignment: "left",
          layout_type: block.image ? "image-right" : "standard",
        });
      }
    }

    // Insert original layout preview draft if not already present
    const existingDraft = await query("SELECT id FROM `preview_drafts` WHERE `path` = ?", [pagePath]);
    if (existingDraft.length === 0) {
      const initialDraft = {
        title: pageData.title || "",
        subtitle: pageData.subtitle || "",
        intro: pageData.intro || "",
        metrics: pageData.metrics || [],
        sections: sections,
      };
      await query(
        "INSERT INTO `preview_drafts` (`path`, `page_data_json`) VALUES (?, ?)",
        [pagePath, JSON.stringify(initialDraft)]
      );
    }
  };

  // Seed siteContent (categorized subpages)
  for (const category in siteContent) {
    const categoryContent = siteContent[category];
    
    // Check if category is a top level page or a nested dictionary of pages
    if (categoryContent.title && categoryContent.intro) {
      // Top level page (e.g. gurugulam, product-innovation-centre)
      await seedPage(`/${category}`, categoryContent);
    } else {
      // Categorized nested page (e.g. about, academics, campus-life, research)
      for (const slug in categoryContent) {
        const pageData = categoryContent[slug];
        await seedPage(`/${category}/${slug}`, pageData);
      }
    }
  }

  // Seed top level static page placeholders to allow DB editing
  // 1. Home Page /
  await seedPage("/", {
    title: "Bannari Amman Institute of Technology",
    subtitle: "STAY AHEAD",
    intro: "Bannari Amman Institute of Technology is an autonomous institution affiliated to Anna University, approved by AICTE and accredited by NAAC with 'A+' Grade. Nestled on the banks of River Bhavani, the campus spreads over 181 acres of eco-friendly, serene atmosphere.",
    metrics: [
      { label: "Centres of Excellence", value: "30+" },
      { label: "Placement Rate", value: "95%+" },
      { label: "Eco Campus", value: "181 Acres" },
    ],
    contentBlocks: [
      { title: "Academic Excellence", desc: "Our choice-based credit curriculum offers complete flexibility, allowing students to align their engineering education with industry-relevant skills and emerging technologies." },
      { title: "Centres of Excellence", desc: "State-of-the-art laboratory hubs set up in partnership with global tech giants like AWS, Intel, NVIDIA, and Texas Instruments provide student-led practical learning." },
      { title: "Celebrating Excellence", desc: "Consistently ranked in the top bands of NIRF and recognized as a leading autonomous research campus in South India." }
    ]
  });

  // 2. Placements Page
  await seedPage("/placements", {
    title: "Placement & Corporate Relations Cell",
    subtitle: "STAY AHEAD IN YOUR CAREER",
    intro: "The Placement Cell bridges the gap between students and global employers. Securing top-tier offers from companies like Amazon, Zoho, and Philips, our students are day-one productive.",
    metrics: [
      { label: "Placement Ratio", value: "95%+" },
      { label: "Highest CTC Offer", value: "44 LPA" },
      { label: "Corporate Recruiters", value: "150+" },
    ],
    contentBlocks: [
      { title: "Placement Statistics Dashboard", desc: "Tracking placements across computing, circuits, biosciences, and core engineering branches." },
      { title: "Technical Curriculum Alignments", desc: "Training bootcamps, mock interviews, and AWS/EC-Council credentials integration are integrated directly into our core curriculum." }
    ]
  });

  // 3. Gymnasium Page
  await seedPage("/campus-life/gymnasium", {
    title: "International Standard Gymnasium",
    subtitle: "PHYSICAL WELLNESS FOR ACADEMIC EXCELLENCE",
    intro: "Fully equipped with advanced multi-station trainers, weight racks, and cardio treadmills. Separate spaces for boys and girls, supervised by professional coaches.",
    metrics: [
      { label: "Gym Area", value: "15,000 sq ft" },
      { label: "Stations Available", value: "50+" },
      { label: "Certified Coaches", value: "4" },
    ],
    contentBlocks: [
      { title: "Cardio Arena", desc: "Equipped with state-of-the-art motor-driven treadmills, cross-trainers, stationary rowing cycles, and step mills." },
      { title: "Strength Power Cage", desc: "For serious strength conditioning. Features multi-station power cages, Olympic benches, squat platforms, and free weights." },
      { title: "Aerobics & Yoga Studio", desc: "A spacious wooden-floored studio for core training, flexibility workouts, group yoga classes, and aerobics." }
    ]
  });

  // 4. Contact Page
  await seedPage("/contact", {
    title: "Contact Our Admissions Desk",
    subtitle: "GET IN TOUCH",
    intro: "Have questions about admission guidelines, course structures, hostel bookings, or scholarship criteria? Reach out to our offices or fill out our quick enquiry form.",
    metrics: [
      { label: "Hotline Number", value: "94425 46176" },
      { label: "Email Support", value: "admissions@bitsathy.ac.in" },
      { label: "Working Hours", value: "9 AM - 6 PM" },
    ],
    contentBlocks: [
      { title: "Campus Location", desc: "Bannari Amman Institute of Technology, Alathukombai Post, Sathyamangalam - 638401, Erode District, Tamil Nadu, India." },
      { title: "Admissions Office Details", desc: "Phone: +91 89401 26000 | Email: admissions@bitsathy.ac.in" }
    ]
  });

  // Seed departmentsContent
  for (const deptSlug in departmentsContent) {
    const dept = departmentsContent[deptSlug];
    const deptCheck = await query("SELECT id FROM `departments` WHERE `slug` = ?", [deptSlug]);

    const hod = dept.hod || {};
    const values = [
      dept.slug,
      dept.name || "",
      dept.code || "",
      dept.category || "",
      dept.established || null,
      dept.intake || 0,
      dept.labsCount || 0,
      dept.placementRatio || "",
      dept.nbaAccredited ? 1 : 0,
      dept.nbaPeriod || "",
      dept.vision || "",
      JSON.stringify(dept.mission || []),
      JSON.stringify(dept.labs || []),
      JSON.stringify(dept.recruiters || []),
      JSON.stringify(dept.highlights || []),
      JSON.stringify(dept.faculty || []),
      hod.name || "",
      hod.email || "",
      hod.designation || "",
      hod.image || "",
    ];

    if (deptCheck.length === 0) {
      await query(
        `INSERT INTO \`departments\` (
          \`slug\`, \`name\`, \`code\`, \`category\`, \`established\`, \`intake\`,
          \`labs_count\`, \`placement_ratio\`, \`nba_accredited\`, \`nba_period\`,
          \`vision\`, \`mission_json\`, \`labs_json\`, \`recruiters_json\`,
          \`highlights_json\`, \`faculty_json\`, \`hod_name\`, \`hod_email\`,
          \`hod_designation\`, \`hod_image\`
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        values
      );
    } else {
      await query(
        `UPDATE \`departments\` SET
          \`name\` = ?, \`code\` = ?, \`category\` = ?, \`established\` = ?, \`intake\` = ?,
          \`labs_count\` = ?, \`placement_ratio\` = ?, \`nba_accredited\` = ?, \`nba_period\` = ?,
          \`vision\` = ?, \`mission_json\` = ?, \`labs_json\` = ?, \`recruiters_json\` = ?,
          \`highlights_json\` = ?, \`faculty_json\` = ?, \`hod_name\` = ?, \`hod_email\` = ?,
          \`hod_designation\` = ?, \`hod_image\` = ?
        WHERE \`slug\` = ?`,
        [...values.slice(1), dept.slug]
      );
    }
  }
  console.log("Seeded all department data");
  console.log("Database seeding completed successfully!");
}
