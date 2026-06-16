import crypto from "crypto";
import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { createSession } from "@/lib/session";

export async function POST(req) {
  try {
    const { username, password } = await req.json().catch(() => ({}));

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username and password are required." },
        { status: 400 }
      );
    }

    // Fetch user
    const users = await query("SELECT * FROM `admin_users` WHERE `username` = ?", [username]);
    if (users.length === 0) {
      return NextResponse.json(
        { success: false, error: "Invalid username or password." },
        { status: 401 }
      );
    }

    const user = users[0];
    const passwordHash = crypto.createHash("sha256").update(password).digest("hex");

    if (user.password_hash !== passwordHash) {
      return NextResponse.json(
        { success: false, error: "Invalid username or password." },
        { status: 401 }
      );
    }

    // Create session
    const sessionId = await createSession(user.username);

    // Set HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      user: {
        username: user.username,
        role: user.role,
      },
    });

    response.headers.set(
      "Set-Cookie",
      `admin_session=${sessionId}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${24 * 60 * 60}; ${
        process.env.NODE_ENV === "production" ? "Secure;" : ""
      }`
    );

    return response;
  } catch (err) {
    console.error("Login Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
