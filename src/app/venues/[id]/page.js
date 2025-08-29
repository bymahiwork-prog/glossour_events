// NO "use client" here! This is a Server Component.
import MarketLocation from "@/utils/marketPlace/MarketLocation";
import PopularVenues from "@/utils/marketPlace/PopularVenues";
import { FarmBookingPage, MarketGallery } from "../VenueSection";
// Function to fetch data for a specific venue
async function getVenueData(venueId) {
  try {
    // This fetch runs on the server. Use the full URL if your API is external.
    // NEXT_PUBLIC_ is not needed for server-side fetches.
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE}/api/venues/${venueId}`,
      {
        cache: "no-store", // Use 'no-store' for fresh data on every request, or revalidate for ISR
      }
    );

    if (!response.ok) {
      // This will be caught by the error.js file or show a Next.js error page
      throw new Error("Failed to fetch venue data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null; // Return null if fetching fails
  }
}

// ✨ STEP 1: Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const venueData = await getVenueData(params.id);

  if (!venueData) {
    return {
      title: "Venue Not Found",
      description: "The venue you are looking for could not be found.",
    };
  }

  return {
    title: `${venueData.product_name}`,
    description: venueData.product_detail.substring(0, 160), // Use the first 160 characters for the meta description
    openGraph: {
      // For social media sharing
      title: venueData.product_name,
      description: venueData.product_detail.substring(0, 160),
      images: [
        {
          url: venueData.image || "https://placehold.co/1200x630", // Use the main image
          width: 1200,
          height: 630,
          alt: venueData.product_name,
        },
      ],
    },
  };
}

// ✨ STEP 2: The main page component is now async
export default async function VenuePage({ params }) {
  const venueData = await getVenueData(params.id);

  // Handle cases where data fetching fails or returns no data
  if (!venueData) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: Could not load venue details.
      </div>
    );
  }

  // ✨ STEP 3: Pass server-fetched data as props to Client Components
  return (
    <div className="mt-8">
      <MarketGallery venue={venueData} />
      <FarmBookingPage venue={venueData} />

      <MarketLocation venue={venueData} />
      <PopularVenues />
    </div>
  );
}
