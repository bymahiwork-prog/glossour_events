"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// A skeleton loader component for a better loading experience
const SkeletonCard = () => (
  <div className="bg-white overflow-hidden shadow-sm border border-gray-200 rounded-lg h-full flex flex-col animate-pulse">
    <div className="relative h-56 bg-gray-300"></div>
    <div className="p-4 flex flex-col flex-grow">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-3">
        <div className="h-5 bg-gray-300 rounded w-20"></div>
        <div className="h-5 bg-gray-300 rounded w-24"></div>
        <div className="h-5 bg-gray-300 rounded-full w-20"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2 mt-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
      <div className="h-5 bg-gray-300 rounded w-1/4 mt-auto"></div>
    </div>
  </div>
);

const VenueShowcase = () => {
  // State for fetched data, loading, and potential errors
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  // State for carousel functionality
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Fetch venue data from the API on component mount
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const res = await fetch("/api/featured-venues");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        const products = data.products || [];

        // Small helper to dedupe by a computed key
        const uniqBy = (arr, keyFn) => {
          const seen = new Set();
          return arr.filter((item) => {
            const key = keyFn(item);
            if (seen.has(key)) {
              return false;
            }
            seen.add(key);
            return true;
          });
        };

        // Filter out duplicate venues by their 'product_name'
        // This is more reliable for your data structure than using IDs which may differ for the same venue.
        const uniqueProducts = uniqBy(products, (p) => p.product_name);

        setVenues(uniqueProducts);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch venues:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  // Update the number of slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const totalSlides = venues.length;
  const maxSlideIndex = Math.max(0, totalSlides - slidesToShow);

  // Carousel navigation logic
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlideIndex));
  };

  // Event handlers
  const handleViewAllVenues = () => {
    router.push("/search");
  };

  const handleVenueClick = (venue) => {
    router.push(`/venues/${venue.id}`);
  };

  // Helper function to render the carousel's main content
  const renderContent = () => {
    if (loading) {
      return Array.from({ length: slidesToShow }).map((_, index) => (
        <div
          key={index}
          className={`flex-shrink-0 ${
            slidesToShow === 1
              ? "w-full max-w-sm mx-auto"
              : slidesToShow === 2
              ? "w-1/2"
              : "w-1/3"
          }`}
        >
          <SkeletonCard />
        </div>
      ));
    }

    if (error) {
      return (
        <p className="text-center text-red-500 w-full">
          Error loading venues: {error}
        </p>
      );
    }

    if (venues.length === 0) {
      return (
        <p className="text-center text-gray-600 w-full">
          No venues are available at the moment.
        </p>
      );
    }

    return venues.map((venue) => (
      <div
        key={venue.id}
        className={`flex-shrink-0 ${
          slidesToShow === 1
            ? "w-full max-w-sm mx-auto"
            : slidesToShow === 2
            ? "w-1/2"
            : "w-1/3"
        }`}
      >
        <div
          className="bg-white overflow-hidden shadow-sm border border-gray-200 rounded-lg h-full flex flex-col cursor-pointer group"
          onClick={() => handleVenueClick(venue)}
        >
          {/* Venue Image */}
          <div className="relative h-56 bg-gray-200 overflow-hidden">
            <img
              src={
                venue.main_image
                  ? `https://effortlessevents.in/admin/${venue.main_image}`
                  : "https://via.placeholder.com/400x300?text=No+Image"
              }
              alt={venue.product_name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          {/* Venue Details */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
              {venue.product_name}
            </h3>
            <p className="text-sm text-gray-600 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-1.5 text-gray-500"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {venue.product_location}
            </p>

            {/* Rating and Stats */}
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-1 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-sm font-medium text-black">
                  {venue.rating ? venue.rating : "N/A"}
                </span>
              </div>

              <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                {venue.category_name}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3 flex-grow h-12 overflow-hidden text-ellipsis">
              {venue.product_detail.slice(0, 100)}
            </p>

            <button
              onClick={handleVenueClick}
              className="text-blue-600 text-sm font-medium hover:underline text-left mt-auto"
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-gray-50 px-2 sm:px-4 min-h-screen">
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 px-3 sm:px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="text-sm md:text-md text-black font-medium mb-2 tracking-wider uppercase">
            EFFORTLESS EVENTS VENUE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 md:mb-8 leading-tight">
            If walls could talk
          </h2>
          <button
            onClick={handleViewAllVenues}
            className="bg-black text-white cursor-pointer px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            View all Venues
          </button>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 mt-6 sm:mt-8 "
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesToShow)
                }%)`,
              }}
            >
              {renderContent()}
            </div>
          </div>

          {/* Navigation Arrows (only show if needed) */}
          {venues.length > slidesToShow && (
            <>
              <div className="absolute -top-12 sm:-top-14 md:-top-16 right-0 flex gap-2">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="text-black" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide >= maxSlideIndex}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Next slide"
                >
                  <ArrowRight className="text-black" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 sm:mt-8 gap-2">
                {Array.from({ length: maxSlideIndex + 1 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-black w-6 sm:w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueShowcase;
