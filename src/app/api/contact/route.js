import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db"; // Assuming your db connection utility is here

export async function POST(request) {
  try {
    // 1. Get the form data from the request body
    const data = await request.json();
    const { firstName, lastName, email, message } = data;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // 2. Combine first and last name for the 'feedback_name' column
    const fullName = `${firstName} ${lastName}`;

    // 3. Connect to the database
    const db = await connectToDatabase();

    // 4. Prepare and execute the SQL query to insert the data
    // We map 'email' to 'feedback_deg' as per the available columns.
    const query = `
      INSERT INTO tbl_feedback 
        (feedback_name, feedback_deg, feedback_message, status, created_date, last_update) 
      VALUES 
        (?, ?, ?, ?, NOW(), NOW())
    `;
    const values = [fullName, email, message, 1]; // Assuming status '1' means active

    await db.query(query, values);

    // 5. Close the database connection
    await db.end();

    // 6. Return a success response
    return NextResponse.json(
      { message: "Feedback submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("❌ MySQL Error:", error);
    return NextResponse.json(
      { message: "Failed to submit feedback.", error: error.message },
      { status: 500 }
    );
  }
}
