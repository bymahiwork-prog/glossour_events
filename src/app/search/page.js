"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
// A skeleton loader component for a consistent loading experience
const SkeletonCard = () => (
  <div className="bg-white overflow-hidden shadow-md border border-gray-200 rounded-lg h-full flex flex-col animate-pulse">
    <div className="relative h-56 bg-gray-300"></div>
    <div className="p-4 flex flex-col flex-grow">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-3">
        <div className="h-5 bg-gray-300 rounded w-20"></div>
        <div className="h-5 bg-gray-300 rounded w-24"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2 mt-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
      <div className="h-5 bg-gray-300 rounded w-1/4 mt-auto"></div>
    </div>
  </div>
);

// The main component that renders the search logic and UI
const VenueSearchComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for fetched data and UI
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [totalVenues, setTotalVenues] = useState(0);

  // Get page and search from URL, with defaults
  const currentPage = parseInt(searchParams.get("page") || "1");
  const currentSearch = searchParams.get("search") || "";

  // Local state for the search input field
  const [searchInput, setSearchInput] = useState(currentSearch);

  // Fetch venue data from the API whenever the page or search query changes
  useEffect(() => {
    const fetchVenues = async () => {
      setLoading(true);
      setError(null);
      try {
        // Construct the API URL with query parameters
        const params = new URLSearchParams({
          page: currentPage,
          limit: 9, // Show 9 venues per page
          search: currentSearch,
        });
        const response = await fetch(`/api/venues?${params.toString()}`);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setVenues(data.products || []);
        setTotalVenues(data.total || 0);
        setTotalPages(Math.ceil((data.total || 0) / 9));
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch venues:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, [currentPage, currentSearch]); // Re-run effect if these dependencies change

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Update URL to trigger re-fetch. Reset to page 1 for new search.
    const params = new URLSearchParams();
    if (searchInput) {
      params.set("search", searchInput);
    }
    params.set("page", "1");
    router.push(`/search?${params.toString()}`);
  };

  // Handle pagination clicks
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-28">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header and Search Bar */}
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-2">
            Find Your Perfect Venue
          </h1>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            Search our curated list of exclusive properties to find the ideal
            setting for your next event.
          </p>
          <form
            onSubmit={handleSearch}
            className="mt-8 max-w-xl mx-auto flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-black"
          >
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by name, location, or feature (e.g., 'pool')..."
              className="w-full p-3 md:p-4 border-none outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-black text-white p-3 md:p-4 hover:bg-gray-800 transition-colors"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
          </form>
        </header>

        {/* Results Grid */}
        <main>
          {loading ? (
            // Skeleton loading grid
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Array.from({ length: 9 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : error ? (
            // Error message
            <div className="text-center py-16">
              <p className="text-red-500 text-lg">Error: {error}</p>
              <p className="text-gray-600 mt-2">
                Could not load venues. Please try again later.
              </p>
            </div>
          ) : venues.length > 0 ? (
            // Venues grid
            <>
              <div className="text-sm text-gray-700 mb-4">
                Showing <span className="font-bold">{venues.length}</span> of{" "}
                <span className="font-bold">{totalVenues}</span> results.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {venues.map((venue) => (
                  <div
                    key={venue.id}
                    className="bg-white overflow-hidden shadow-md border border-gray-200 rounded-lg h-full flex flex-col cursor-pointer group"
                    onClick={() => handleVenueClick(venue)}
                  >
                    <div className="relative h-56 bg-gray-200 overflow-hidden">
                      <img
                        src={
                          venue.images && venue.images.length > 0
                            ? venue.image
                            : `https://placehold.co/600x400/EEE/31343C?text=No+Image`
                        }
                        alt={venue.product_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                        {venue.product_name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1.5 text-gray-500"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {venue.product_location}
                      </p>
                      <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-3">
                        <div className="flex items-center text-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-1 text-yellow-400"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          {venue.rating ? venue.rating : "N/A"}
                        </div>
                        <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                          {venue.category_name}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 flex-grow h-12 overflow-hidden">
                        {venue.product_detail.slice(0, 100) ||
                          "A versatile and stunning location for your special events."}
                      </p>
                      <Link
                        href={`/venues/${venue.id}`}
                        className="text-black font-bold text-sm hover:underline text-left mt-auto"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // No results message
            <div className="text-center py-16">
              <p className="text-xl font-semibold text-gray-800">
                No Venues Found
              </p>
              <p className="text-gray-600 mt-2">
                Try adjusting your search terms or clearing the filter.
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={16} />
                Previous
              </button>
              <span className="text-sm text-gray-700">
                Page <span className="font-bold">{currentPage}</span> of{" "}
                <span className="font-bold">{totalPages}</span>
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Use Suspense to handle client-side rendering of search params
const VenuesPage = () => (
  <Suspense fallback={<div className="text-center p-20">Loading Page...</div>}>
    <VenueSearchComponent />
  </Suspense>
);

export default VenuesPage;
