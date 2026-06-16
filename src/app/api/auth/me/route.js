import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getAdminUserFromRequest } from "@/lib/session";

export async function GET(req) {
  try {
    const username = await getAdminUserFromRequest(req);
    if (!username) {
      return NextResponse.json(
        { success: false, error: "Not authenticated." },
        { status: 401 }
      );
    }

    const users = await query("SELECT username, role FROM `admin_users` WHERE `username` = ?", [username]);
    if (users.length === 0) {
      return NextResponse.json(
        { success: false, error: "User not found." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: users[0],
    });
  } catch (err) {
    console.error("Auth Me Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
