import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getAdminUserFromRequest } from "@/lib/session";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");
    const id = searchParams.get("id");

    if (!path) {
      return NextResponse.json({ success: false, error: "Path parameter is required." }, { status: 400 });
    }

    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split(";").map((c) => c.trim().split("="))
    );
    const sessionId = cookies["admin_session"] || null;

    if (id) {
      const rows = await query("SELECT * FROM `preview_drafts` WHERE `id` = ? AND `path` = ?", [id, path]);
      if (rows.length === 0) {
        return NextResponse.json({ success: false, error: "Draft version not found." }, { status: 404 });
      }
      return NextResponse.json({
        success: true,
        draft: {
          pageData: JSON.parse(rows[0].page_data_json),
          settings: rows[0].settings_json ? JSON.parse(rows[0].settings_json) : null,
          created_at: rows[0].created_at
        }
      });
    }

    // Return list of history drafts for this path
    let history = await query(
      "SELECT `id`, `created_at` FROM `preview_drafts` WHERE `path` = ? ORDER BY `created_at` DESC LIMIT 20",
      [path]
    );

    if (history.length === 0) {
      // Clone live data into preview_drafts so editing starts with the current live copy
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

        history = await query(
          "SELECT `id`, `created_at` FROM `preview_drafts` WHERE `path` = ? ORDER BY `created_at` DESC LIMIT 20",
          [path]
        );
      }
    }

    return NextResponse.json({
      success: true,
      history
    });
  } catch (err) {
    console.error("Preview GET error:", err);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const username = await getAdminUserFromRequest(req);
    if (!username) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }

    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split(";").map((c) => c.trim().split("="))
    );
    const sessionId = cookies["admin_session"] || null;

    const body = await req.json();
    const { path, pageData, settings } = body;

    if (!path || !pageData) {
      return NextResponse.json({ success: false, error: "Path and pageData are required." }, { status: 400 });
    }

    await query(
      "INSERT INTO `preview_drafts` (`session_id`, `path`, `page_data_json`, `settings_json`) VALUES (?, ?, ?, ?)",
      [sessionId, path, JSON.stringify(pageData), settings ? JSON.stringify(settings) : null]
    );

    return NextResponse.json({
      success: true,
      message: "Preview draft saved successfully to database."
    });
  } catch (err) {
    console.error("Preview POST error:", err);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}
