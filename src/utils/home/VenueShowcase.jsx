"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SkeletonCard = () => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8E0D6] animate-pulse">
    <div className="h-72 bg-gray-200" />
    <div className="p-6 space-y-3">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  </div>
);

const VenueShowcase = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const router = useRouter();

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const res = await fetch("/api/featured-venues");
        if (!res.ok) throw new Error("Failed to fetch venues");

        const data = await res.json();
        const products = data.products || [];

        const uniqueProducts = products.filter(
          (venue, index, self) =>
            index ===
            self.findIndex(
              (v) => v.product_name === venue.product_name
            )
        );

        setVenues(uniqueProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxSlideIndex = Math.max(0, venues.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= maxSlideIndex ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? maxSlideIndex : prev - 1
    );
  };

  const handleVenueClick = (venue) => {
    router.push(`/venues/${venue.id}`);
  };

  const handleViewAllVenues = () => {
    router.push("/search");
  };

  const getCardWidth = () => {
    if (slidesToShow === 1) return "w-full";
    if (slidesToShow === 2) return "w-1/2";
    return "w-1/3";
  };

  return (
    <section className="bg-[#F7F3EE] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#8A7A66] font-medium mb-4">
              Featured Venues
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold text-[#1F1F1F] leading-tight">
              Explore Delhi NCR&apos;s Most Sought-After Event Venues
            </h2>

            <p className="text-lg md:text-xl text-[#5C5C5C] leading-8 mt-6 max-w-3xl">
              Discover luxury farmhouses, banquet halls, rooftops,
              private villas, and unique celebration spaces curated for
              weddings, corporate events, birthdays, and social gatherings.
            </p>
          </div>

          <button
            onClick={handleViewAllVenues}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1F1F1F] text-white font-semibold hover:bg-black transition-colors"
          >
            Browse All Venues
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesToShow)
                }%)`,
              }}
            >
              {loading &&
                Array.from({ length: slidesToShow }).map((_, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 ${getCardWidth()}`}
                  >
                    <SkeletonCard />
                  </div>
                ))}

              {!loading &&
                !error &&
                venues.map((venue) => (
                  <div
                    key={venue.id}
                    className={`flex-shrink-0 ${getCardWidth()}`}
                  >
                    <div
                      onClick={() => handleVenueClick(venue)}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8E0D6] cursor-pointer group h-full"
                    >
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={
                            venue.main_image
                              ? `https://admin.effortlessevents.in/admin/${venue.main_image}`
                              : "https://via.placeholder.com/800x600?text=Venue"
                          }
                          alt={venue.product_name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-2">
                          {venue.product_name}
                        </h3>

                        <p className="text-[#8A7A66] text-sm uppercase tracking-wide mb-3">
                          {venue.product_location}
                        </p>

                        <p className="text-[#5C5C5C] leading-7 line-clamp-3">
                          {venue.product_detail?.slice(0, 140)}
                        </p>

                        <div className="mt-6 text-[#1F1F1F] font-semibold">
                          View Venue →
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Error State */}
          {!loading && error && (
            <p className="text-center text-red-500 mt-8">
              Error loading venues: {error}
            </p>
          )}

          {/* Navigation */}
          {venues.length > slidesToShow && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#D6C9B8] bg-white flex items-center justify-center hover:bg-[#F2ECE5] transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#D6C9B8] bg-white flex items-center justify-center hover:bg-[#F2ECE5] transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VenueShowcase;
