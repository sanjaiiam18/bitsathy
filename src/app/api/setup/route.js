import { NextResponse } from "next/server";
import { seedDatabase } from "@/lib/seed";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const reset = searchParams.get("reset") === "true";
    
    await seedDatabase(reset);
    
    return NextResponse.json({
      success: true,
      message: "Database tables created and seeded successfully!",
    });
  } catch (err) {
    console.error("Setup API Error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || "An unexpected error occurred during database setup.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const reset = body.reset === true;
    
    await seedDatabase(reset);
    
    return NextResponse.json({
      success: true,
      message: "Database tables created and seeded successfully!",
    });
  } catch (err) {
    console.error("Setup API Error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || "An unexpected error occurred during database setup.",
      },
      { status: 500 }
    );
  }
}
