import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getAdminUserFromRequest } from "@/lib/session";

// GET handler to fetch pages or departments
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");
    const type = searchParams.get("type");
    const slug = searchParams.get("slug");

    // 1. Fetch department details
    if (type === "department" && slug) {
      const depts = await query("SELECT * FROM `departments` WHERE `slug` = ?", [slug]);
      if (depts.length === 0) {
        return NextResponse.json({ success: false, error: "Department not found." }, { status: 404 });
      }
      return NextResponse.json({ success: true, department: depts[0] });
    }

    // 2. Fetch list of departments
    if (type === "departments") {
      const depts = await query("SELECT * FROM `departments` ORDER BY name ASC");
      return NextResponse.json({ success: true, departments: depts });
    }

    // 3. Fetch standard page by path
    if (path) {
      const isPreview = searchParams.get("preview") === "true";
      if (isPreview) {
        const cookieHeader = req.headers.get("cookie") || "";
        const cookies = {};
        cookieHeader.split(";").forEach((cookie) => {
          const parts = cookie.split("=");
          if (parts.length >= 2) {
            cookies[parts[0].trim()] = parts.slice(1).join("=").trim();
          }
        });
        const sessionId = cookies["admin_session"] || null;

        let drafts = [];
        if (sessionId) {
          drafts = await query(
            "SELECT * FROM `preview_drafts` WHERE `path` = ? AND `session_id` = ? ORDER BY `created_at` DESC LIMIT 1",
            [path, sessionId]
          );
        }
        if (drafts.length === 0) {
          drafts = await query(
            "SELECT * FROM `preview_drafts` WHERE `path` = ? AND `session_id` IS NULL ORDER BY `created_at` DESC LIMIT 1",
            [path]
          );
        }

        if (drafts.length === 0) {
          // Clone live page into preview_drafts first so it exists
          const pages = await query("SELECT * FROM `pages` WHERE `path` = ?", [path]);
          if (pages.length > 0) {
            const page = pages[0];
            const sections = await query(
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

            await query(
              "INSERT INTO `preview_drafts` (`session_id`, `path`, `page_data_json`) VALUES (?, ?, ?)",
              [sessionId, path, JSON.stringify(livePageData)]
            );

            // Re-fetch the draft we just created
            if (sessionId) {
              drafts = await query(
                "SELECT * FROM `preview_drafts` WHERE `path` = ? AND `session_id` = ? ORDER BY `created_at` DESC LIMIT 1",
                [path, sessionId]
              );
            } else {
              drafts = await query(
                "SELECT * FROM `preview_drafts` WHERE `path` = ? AND `session_id` IS NULL ORDER BY `created_at` DESC LIMIT 1",
                [path]
              );
            }
          }
        }

        if (drafts.length > 0) {
          try {
            const pageData = JSON.parse(drafts[0].page_data_json);
            return NextResponse.json({
              success: true,
              page: {
                path,
                title: pageData.title || "",
                subtitle: pageData.subtitle || "",
                intro: pageData.intro || "",
                metrics: pageData.metrics || [],
                sections: pageData.sections || [],
              },
            });
          } catch (e) {
            console.error("Error parsing preview draft JSON:", e);
          }
        }
      }

      const pages = await query("SELECT * FROM `pages` WHERE `path` = ?", [path]);
      if (pages.length === 0) {
        return NextResponse.json({ success: false, error: "Page not found." }, { status: 404 });
      }

      const page = pages[0];
      const sections = await query(
        "SELECT * FROM `page_sections` WHERE `page_id` = ? ORDER BY `section_order` ASC",
        [page.id]
      );

      return NextResponse.json({
        success: true,
        page: {
          ...page,
          metrics: JSON.parse(page.metrics_json || "[]"),
          sections,
        },
      });
    }

    return NextResponse.json(
      { success: false, error: "Missing query parameters 'path' or 'type'." },
      { status: 400 }
    );
  } catch (err) {
    console.error("Content API GET Error:", err);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}

// POST handler to update content (protected)
export async function POST(req) {
  try {
    // 1. Authenticate user
    const username = await getAdminUserFromRequest(req);
    if (!username) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }

    const body = await req.json();
    const { type } = body;

    // 2. Update Department
    if (type === "department") {
      const {
        slug,
        name,
        code,
        category,
        established,
        intake,
        labs_count,
        placement_ratio,
        nba_accredited,
        nba_period,
        vision,
        mission, // array
        labs, // array
        recruiters, // array
        highlights, // array
        faculty, // array
        hod_name,
        hod_email,
        hod_designation,
        hod_image,
      } = body;

      if (!slug) {
        return NextResponse.json({ success: false, error: "Slug is required for departments." }, { status: 400 });
      }

      const result = await query(
        `UPDATE \`departments\` SET
          \`name\` = ?, \`code\` = ?, \`category\` = ?, \`established\` = ?, \`intake\` = ?,
          \`labs_count\` = ?, \`placement_ratio\` = ?, \`nba_accredited\` = ?, \`nba_period\` = ?,
          \`vision\` = ?, \`mission_json\` = ?, \`labs_json\` = ?, \`recruiters_json\` = ?,
          \`highlights_json\` = ?, \`faculty_json\` = ?, \`hod_name\` = ?, \`hod_email\` = ?,
          \`hod_designation\` = ?, \`hod_image\` = ?
        WHERE \`slug\` = ?`,
        [
          name || "",
          code || "",
          category || "",
          established ? parseInt(established, 10) : null,
          intake ? parseInt(intake, 10) : 0,
          labs_count ? parseInt(labs_count, 10) : 0,
          placement_ratio || "",
          nba_accredited ? 1 : 0,
          nba_period || "",
          vision || "",
          JSON.stringify(mission || []),
          JSON.stringify(labs || []),
          JSON.stringify(recruiters || []),
          JSON.stringify(highlights || []),
          JSON.stringify(faculty || []),
          hod_name || "",
          hod_email || "",
          hod_designation || "",
          hod_image || "",
          slug,
        ]
      );

      return NextResponse.json({ success: true, message: "Department updated successfully!" });
    }

    // 3. Update Page & Sections
    const { path, title, subtitle, intro, metrics, sections } = body;
    if (!path) {
      return NextResponse.json({ success: false, error: "Path is required." }, { status: 400 });
    }

    // Get page ID
    const pages = await query("SELECT id FROM `pages` WHERE `path` = ?", [path]);
    let pageId;
    if (pages.length === 0) {
      // Create new page
      const result = await query(
        "INSERT INTO `pages` (`path`, `title`, `subtitle`, `intro`, `metrics_json`) VALUES (?, ?, ?, ?, ?)",
        [path, title || "", subtitle || "", intro || "", JSON.stringify(metrics || [])]
      );
      pageId = result.insertId;
    } else {
      pageId = pages[0].id;
      await query(
        "UPDATE `pages` SET `title` = ?, `subtitle` = ?, `intro` = ?, `metrics_json` = ? WHERE `id` = ?",
        [title || "", subtitle || "", intro || "", JSON.stringify(metrics || []), pageId]
      );
    }

    // Handle sections
    if (sections && Array.isArray(sections)) {
      const existingSections = await query("SELECT id FROM `page_sections` WHERE `page_id` = ?", [pageId]);
      const existingIds = existingSections.map((s) => s.id);
      const keepIds = [];

      for (let i = 0; i < sections.length; i++) {
        const sect = sections[i];
        if (sect.id && existingIds.includes(parseInt(sect.id, 10))) {
          // Update section
          const sectId = parseInt(sect.id, 10);
          await query(
            `UPDATE \`page_sections\` SET
              \`title\` = ?, \`subtitle\` = ?, \`desc\` = ?, \`image_url\` = ?, \`video_url\` = ?,
              \`btn_text\` = ?, \`btn_url\` = ?, \`section_order\` = ?, \`alignment\` = ?, \`layout_type\` = ?
            WHERE \`id\` = ?`,
            [
              sect.title || "",
              sect.subtitle || "",
              sect.desc || "",
              sect.image_url || "",
              sect.video_url || "",
              sect.btn_text || "",
              sect.btn_url || "",
              i, // use current index as section order
              sect.alignment || "left",
              sect.layout_type || "standard",
              sectId,
            ]
          );
          keepIds.push(sectId);
        } else {
          // Insert new section
          const insertResult = await query(
            `INSERT INTO \`page_sections\` (
              \`page_id\`, \`title\`, \`subtitle\`, \`desc\`, \`image_url\`, \`video_url\`,
              \`btn_text\`, \`btn_url\`, \`section_order\`, \`alignment\`, \`layout_type\`
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              pageId,
              sect.title || "",
              sect.subtitle || "",
              sect.desc || "",
              sect.image_url || "",
              sect.video_url || "",
              sect.btn_text || "",
              sect.btn_url || "",
              i, // use current index
              sect.alignment || "left",
              sect.layout_type || "standard",
            ]
          );
          keepIds.push(insertResult.insertId);
        }
      }

      // Delete sections that are no longer kept
      const deleteIds = existingIds.filter((id) => !keepIds.includes(id));
      if (deleteIds.length > 0) {
        await query(`DELETE FROM \`page_sections\` WHERE \`id\` IN (${deleteIds.join(",")})`);
      }
    }

    return NextResponse.json({ success: true, message: "Page content saved successfully!" });
  } catch (err) {
    console.error("Content API POST Error:", err);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}

// DELETE handler to remove a page (protected)
export async function DELETE(req) {
  try {
    const username = await getAdminUserFromRequest(req);
    if (!username) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");
    if (!path) {
      return NextResponse.json({ success: false, error: "Path is required." }, { status: 400 });
    }

    // Delete page (associated sections will be deleted by CASCADE)
    await query("DELETE FROM `pages` WHERE `path` = ?", [path]);

    return NextResponse.json({ success: true, message: "Page template deleted successfully!" });
  } catch (err) {
    console.error("Content API DELETE Error:", err);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}
