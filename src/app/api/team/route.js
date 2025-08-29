import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db"; // Assuming your db connection file is in the same location

export async function GET() {
  try {
    // 1. Establish connection to the database
    const db = await connectToDatabase();

    // 2. Execute the query to select all records from tbl_team
    const [rows] = await db.query(`
      SELECT 
        id,
        team_name,
        team_deg,
        image,
        status,
        created_date
      FROM tbl_team
      ORDER BY id DESC
    `);

    // 3. Close the database connection
    await db.end();

    // 4. Return the fetched data as a JSON response
    return NextResponse.json(rows);
  } catch (error) {
    // Log the error to the console for debugging
    console.error("❌ MySQL Error:", error);

    // Return a 500 Internal Server Error response with the error message
    return NextResponse.json(
      { message: "Failed to fetch team data.", error: error.message },
      { status: 500 }
    );
  }
}
