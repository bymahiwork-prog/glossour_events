// /app/api/product/[id]/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/db";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const db = await connectToDatabase();

    // Fetch product details with category and aggregated images
    const [rows] = await db.query(
      `
      SELECT
        p.*,
        c.category_name,
        (SELECT GROUP_CONCAT(pi.image SEPARATOR '|||')
 FROM tbl_product_images pi
 WHERE pi.product_id = p.id) AS images_list
      FROM tbl_product p
      LEFT JOIN tbl_category c ON p.product_category = c.id
      WHERE p.id = ?
      LIMIT 1
      `,
      [id]
    );

    await db.end();

    if (rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const row = rows[0];
    const product = {
      id: row.id,
      image: `https://admin.effortlessevents.in/admin/${row.image}`,
      product_category: row.product_category,
      category_name: row.category_name,
      product_name: row.product_name,
      product_location: row.product_location,
      product_address: row.product_address,
      product_price: row.product_price,
      product_number: row.product_number,
      product_detail: row.product_detail,
      status: row.status,
      created_date: row.created_date,
      last_update: row.last_update,
      images: row.images_list
        ? row.images_list
            .split("|||")
            .map((img) => `https://admin.effortlessevents.in/admin/${img}`)
        : [],
    };

    return NextResponse.json(product);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
