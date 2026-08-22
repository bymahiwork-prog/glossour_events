import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db";

export async function GET(req) {
  try {
    const db = await connectToDatabase();

    const { searchParams } = new URL(req.url);

    const pageParam = parseInt(searchParams.get("page") || "1", 10);
    const limitParam = parseInt(searchParams.get("limit") || "9", 10);

    const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
    const limit =
  Number.isFinite(limitParam) && limitParam > 0 && limitParam <= 100
    ? limitParam
    : 9;

    const search = (searchParams.get("search") || "").trim();
    const categoryId = (searchParams.get("categoryId") || "").trim();

    const offset = (page - 1) * limit;

    let whereClause = "WHERE p.status = 1";

    const queryParams = [];

    /*
     * SEARCH
     *
     * Keep this limited to fields that are already being used
     * by your venue system.
     */
    if (search) {
      whereClause += `
        AND (
          p.product_name LIKE ?
          OR p.product_detail LIKE ?
          OR p.product_location LIKE ?
        )
      `;

      const searchTerm = `%${search}%`;

      queryParams.push(
        searchTerm,
        searchTerm,
        searchTerm
      );
    }

    /*
     * CATEGORY FILTER
     */
    if (categoryId) {
      whereClause += " AND p.product_category = ?";
      queryParams.push(categoryId);
    }

    /*
     * COUNT TOTAL VENUES
     */
    const countQuery = `
      SELECT COUNT(DISTINCT p.id) AS total
      FROM tbl_product p
      ${whereClause}
    `;

    const [totalResult] = await db.query(countQuery, queryParams);

    const total = Number(totalResult?.[0]?.total || 0);

    /*
     * FETCH VENUES
     */
    const selectQuery = `
      SELECT
        p.*,
        c.category_name,

        (
          SELECT GROUP_CONCAT(pi.image)
          FROM tbl_product_images pi
          WHERE pi.product_id = p.id
        ) AS images_list

      FROM tbl_product p

      LEFT JOIN tbl_category c
        ON p.product_category = c.id

      ${whereClause}

      ORDER BY p.id DESC

      LIMIT ?
      OFFSET ?
    `;

    const selectParams = [
      ...queryParams,
      limit,
      offset,
    ];

    const [rows] = await db.query(selectQuery, selectParams);

    /*
     * FORMAT RESPONSE
     */
    const products = rows.map((row) => {
      const mainImage = row.image
        ? `https://admin.effortlessevents.in/admin/${row.image}`
        : null;

      const images = row.images_list
        ? row.images_list
            .split(",")
            .filter(Boolean)
            .map(
              (img) =>
                `https://admin.effortlessevents.in/admin/${img.trim()}`
            )
        : [];

      /*
       * If there is a main image but no gallery image,
       * use the main image as the first image.
       */
      const allImages =
        images.length > 0
          ? images
          : mainImage
          ? [mainImage]
          : [];

      return {
        id: row.id,

        image: mainImage,

        images: allImages,

        product_category: row.product_category,

        rating: row.rating,

        category_name: row.category_name,

        product_name: row.product_name,

        product_location: row.product_location,

        product_address: row.product_address || "",

        product_price: row.product_price,

        product_number: row.product_number,

        product_detail: row.product_detail || "",

        status: row.status,

        created_date: row.created_date,

        last_update: row.last_update,
      };
    });

    return NextResponse.json({
      success: true,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      products,
    });
  } catch (error) {
    console.error("=================================");
    console.error("VENUES API ERROR");
    console.error("=================================");
    console.error(error);
    console.error("Message:", error?.message);
    console.error("Code:", error?.code);
    console.error("SQL State:", error?.sqlState);
    console.error("=================================");

    return NextResponse.json(
      {
        success: false,
        error: "Unable to load venues",
        details:
          process.env.NODE_ENV === "development"
            ? error?.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
