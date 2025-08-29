import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db";
import { ro } from "date-fns/locale";

export async function GET(req) {
  try {
    const db = await connectToDatabase();

    // Parse query params
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const categoryId = searchParams.get("categoryId") || "";

    const offset = (page - 1) * limit;

    let whereClause = "WHERE 1=1";
    const countParams = [];
    const selectParams = [];

    // --- CORRECTED SEARCH LOGIC ---
    if (search) {
      // Added product_location and product_address to the search condition
      whereClause +=
        " AND (p.product_name LIKE ? OR p.product_detail LIKE ? OR p.product_location LIKE ? OR p.product_address LIKE ?)";
      const searchTerm = `%${search}%`;
      // Add the search term for each new condition
      countParams.push(searchTerm, searchTerm, searchTerm, searchTerm);
      selectParams.push(searchTerm, searchTerm, searchTerm, searchTerm);
    }

    if (categoryId) {
      whereClause += " AND p.product_category = ?";
      countParams.push(categoryId);
      selectParams.push(categoryId);
    }

    const [totalResult] = await db.query(
      `SELECT COUNT(DISTINCT p.id) as total
       FROM tbl_product p
       ${whereClause}`,
      countParams
    );
    const total = totalResult[0].total;

    selectParams.push(limit, offset);

    const [rows] = await db.query(
      `
      SELECT
        p.*,
        c.category_name,
        (SELECT GROUP_CONCAT(pi.image) FROM tbl_product_images pi WHERE pi.product_id = p.id) as images_list
      FROM tbl_product p
      LEFT JOIN tbl_category c ON p.product_category = c.id
      ${whereClause}
      ORDER BY p.id DESC
      LIMIT ? OFFSET ?
      `,
      selectParams
    );

    // --- IMPORTANT ---
    // In a serverless environment like Next.js, you should not manually end the connection.
    // The connection manager handles this. Removing this line prevents potential errors.
    // await db.end();

    const products = rows.map((row) => ({
      id: row.id,
      image: `https://effortlessevents.in/admin/${row.image}`,
      product_category: row.product_category,
      rating: row.rating,
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
            .split(",")
            .map((img) => `https://effortlessevents.in/admin/${img}`)
        : [],
    }));

    return NextResponse.json({
      page,
      limit,
      total: total,
      products,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
