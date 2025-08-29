import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db";

export async function GET(req) {
  try {
    const db = await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");
    const search = searchParams.get("search"); // Get the search string from the URL

    let whereClause =
      "WHERE p.product_location IS NOT NULL AND p.product_location <> ''";
    const params = [];

    if (categoryId) {
      whereClause += " AND p.product_category = ?";
      params.push(categoryId);
    }

    // Add a condition to filter by the search string
    if (search) {
      whereClause += " AND p.product_location LIKE ?";
      params.push(`%${search}%`); // Use wildcards to match any part of the location string
    }

    const [rows] = await db.query(
      `
      SELECT 
        p.product_location,
        MIN(p.product_name) AS sample_product_name,
        SUBSTRING_INDEX(
          GROUP_CONCAT(p.image ORDER BY p.product_name ASC),
          ',',
          1
        ) AS product_image,
        c.category_name
      FROM tbl_product p
      LEFT JOIN tbl_category c
        ON p.product_category = c.id
      ${whereClause}
      GROUP BY p.product_location, c.category_name
      ORDER BY p.product_location ASC
      `,
      params
    );

    await db.end();

    return NextResponse.json(rows);
  } catch (error) {
    console.error("❌ MySQL Error:", error);
    return NextResponse.json(
      { error: error.message || JSON.stringify(error) },
      { status: 500 }
    );
  }
}
