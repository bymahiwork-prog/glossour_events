"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SkeletonCard = () => (
  <div className="bg-[#17110B] rounded-[28px] overflow-hidden border border-[#2A2118] animate-pulse">
    <div className="h-72 bg-gradient-to-br from-[#6B4A12] via-[#2B1C08] to-[#0F0803]" />
    <div className="p-6 space-y-3">
      <div className="h-8 bg-[#2A2118] rounded w-2/3" />
      <div className="h-4 bg-[#2A2118] rounded w-full" />
      <div className="h-4 bg-[#2A2118] rounded w-5/6" />
      <div className="h-4 bg-[#2A2118] rounded w-3/4" />
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
    <section className="bg-[#0F0803] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] font-medium mb-4">
              Venue Showcase
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight">
              50+ Venues Across Delhi NCR
            </h2>
          </div>

          <button
            onClick={handleViewAllVenues}
            className="inline-flex items-center gap-2 text-[#C9A34A] font-medium hover:text-[#D8B25B] transition-colors"
          >
            Browse All Venues <span>→</span>
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
              {/* Loading Skeletons */}
              {loading &&
                Array.from({ length: slidesToShow }).map((_, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 ${getCardWidth()}`}
                  >
                    <SkeletonCard />
                  </div>
                ))}

              {/* Venue Cards */}
              {!loading &&
                !error &&
                venues.map((venue) => (
                  <div
                    key={venue.id}
                    className={`flex-shrink-0 ${getCardWidth()}`}
                  >
                    <div
                      onClick={() => handleVenueClick(venue)}
                      className="bg-[#17110B] rounded-[28px] overflow-hidden border border-[#2A2118] cursor-pointer group h-full"
                    >
                      {/* Image */}
                      <div className="relative h-72 overflow-hidden">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-[#17110B] via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-3xl font-serif text-white mb-3">
                          {venue.product_location || venue.product_name}
                        </h3>

                        <p className="text-[#D4C7B8] leading-8 line-clamp-4">
                          {venue.product_detail?.slice(0, 120)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Error State */}
          {!loading && error && (
            <p className="text-center text-red-400 mt-8">
              Error loading venues: {error}
            </p>
          )}

          {/* Navigation Arrows */}
          {venues.length > slidesToShow && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#3A2E22] bg-[#17110B] text-white flex items-center justify-center hover:bg-[#21180F] transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#3A2E22] bg-[#17110B] text-white flex items-center justify-center hover:bg-[#21180F] transition-colors"
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
