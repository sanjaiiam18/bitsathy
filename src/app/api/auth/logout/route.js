import { NextResponse } from "next/server";
import { destroySession } from "@/lib/session";

export async function POST(req) {
  try {
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split(";").map((c) => c.trim().split("="))
    );
    const sessionId = cookies["admin_session"];

    if (sessionId) {
      await destroySession(sessionId);
    }

    const response = NextResponse.json({ success: true });
    // Clear cookie
    response.headers.set(
      "Set-Cookie",
      "admin_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
    );

    return response;
  } catch (err) {
    console.error("Logout Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
