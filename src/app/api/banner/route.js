import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db";

export async function GET() {
  try {
    const db = await connectToDatabase();

    const [rows] = await db.query(`
      SELECT 
        p.id,
        p.product_name,
        p.product_location,
        c.id AS category_id,
        c.category_name,
        p.image AS main_image
      FROM tbl_product p
      LEFT JOIN tbl_category c
        ON p.product_category = c.id
      LEFT JOIN (
        SELECT product_id, MIN(image) AS image
        FROM tbl_product_images
        GROUP BY product_id
      ) pi
        ON p.id = pi.product_id
      WHERE 
        pi.image IS NOT NULL
        AND p.product_name REGEXP 'Farm8|farm67|farm45|Farm11|farm19|farm24|farm54|farm13|farm69'
      ORDER BY RAND()
      LIMIT 5
    `);

    await db.end();

    return NextResponse.json(rows);
  } catch (error) {
    console.error("❌ MySQL Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
