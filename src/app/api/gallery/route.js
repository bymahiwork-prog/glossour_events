import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db";

export async function GET(req) {
  try {
    const db = await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 20); // default 10
    const offset = (page - 1) * limit;

    // Fetch random data
    const [rows] = await db.query(
      `
      SELECT id, food_type, gallery_name, image, status, created_date
      FROM tbl_gallery
      ORDER BY RAND()
      LIMIT ? OFFSET ?
      `,
      [limit, offset]
    );

    // Get total count for pagination info
    const [[{ total }]] = await db.query(
      `SELECT COUNT(*) as total FROM tbl_gallery`
    );

    await db.end();

    return NextResponse.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: rows,
    });
  } catch (error) {
    console.error("❌ MySQL Error:", error);
    return NextResponse.json(
      { error: error.message || JSON.stringify(error) },
      { status: 500 }
    );
  }
}
