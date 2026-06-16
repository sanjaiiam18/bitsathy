import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getAdminUserFromRequest } from "@/lib/session";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const isPreview = searchParams.get("preview") === "true";

    if (isPreview) {
      // Find the latest preview draft that has settings saved
      const drafts = await query(
        "SELECT `settings_json` FROM `preview_drafts` WHERE `settings_json` IS NOT NULL ORDER BY `created_at` DESC LIMIT 1"
      );
      if (drafts.length > 0 && drafts[0].settings_json) {
        try {
          const settings = JSON.parse(drafts[0].settings_json);
          return NextResponse.json({
            success: true,
            settings,
          });
        } catch (e) {
          console.error("Error parsing preview settings JSON:", e);
        }
      }
    }

    const rows = await query("SELECT * FROM `site_settings`");
    const settings = {};
    rows.forEach((row) => {
      settings[row.setting_key] = row.setting_value;
    });

    return NextResponse.json({
      success: true,
      settings,
    });
  } catch (err) {
    console.error("Settings GET Error:", err);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const username = await getAdminUserFromRequest(req);
    if (!username) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }

    const body = await req.json();
    const { settings } = body; // object of key-value pairs

    if (!settings || typeof settings !== "object") {
      return NextResponse.json({ success: false, error: "Settings object is required." }, { status: 400 });
    }

    for (const key in settings) {
      const value = String(settings[key]);
      await query(
        "INSERT INTO `site_settings` (`setting_key`, `setting_value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `setting_value` = ?",
        [key, value, value]
      );
    }

    return NextResponse.json({
      success: true,
      message: "Global settings updated successfully!",
    });
  } catch (err) {
    console.error("Settings POST Error:", err);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}
