import crypto from "crypto";
import { query } from "./db";

export async function createSession(username) {
  const sessionId = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  // Format date for MySQL: YYYY-MM-DD HH:MM:SS
  const mysqlExpiresAt = expiresAt.toISOString().slice(0, 19).replace("T", " ");

  await query(
    "INSERT INTO `sessions` (`session_id`, `username`, `expires_at`) VALUES (?, ?, ?)",
    [sessionId, username, mysqlExpiresAt]
  );

  return sessionId;
}

export async function getSession(sessionId) {
  if (!sessionId) return null;

  try {
    const rows = await query("SELECT * FROM `sessions` WHERE `session_id` = ?", [sessionId]);
    if (rows.length === 0) return null;

    const session = rows[0];
    const expiresAt = new Date(session.expires_at);

    if (expiresAt < new Date()) {
      // Session expired, clean it up
      await query("DELETE FROM `sessions` WHERE `session_id` = ?", [sessionId]);
      return null;
    }

    return session;
  } catch (err) {
    console.error("Error retrieving session:", err);
    return null;
  }
}

export async function destroySession(sessionId) {
  if (!sessionId) return;
  await query("DELETE FROM `sessions` WHERE `session_id` = ?", [sessionId]);
}

export async function getAdminUserFromRequest(req) {
  try {
    // Next.js App Router requests hold cookies
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split(";").map((c) => c.trim().split("="))
    );
    const sessionId = cookies["admin_session"];

    if (!sessionId) return null;
    const session = await getSession(sessionId);
    return session ? session.username : null;
  } catch (err) {
    console.error("Error resolving admin user:", err);
    return null;
  }
}
