"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VenueShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Venue data with your specific image
  const venues = [
    {
      id: 1,
      type: "RECEPTION",
      title: "Lorem Ipsum Dolor Sit Amet,",
      subtitle: "Consectetur Adipiscing Elit.",
      image: "/image 9.png",
    },
    {
      id: 2,
      type: "RECEPTION",
      title: "Lorem Ipsum Dolor Sit Amet,",
      subtitle: "Consectetur Adipiscing Elit.",
      image: "/image 9.png",
    },
    {
      id: 3,
      type: "RECEPTION",
      title: "Lorem Ipsum Dolor Sit Amet,",
      subtitle: "Consectetur Adipiscing Elit.",
      image: "/image 9.png",
    },
    {
      id: 4,
      type: "RECEPTION",
      title: "Lorem Ipsum Dolor Sit Amet,",
      subtitle: "Consectetur Adipiscing Elit.",
      image: "/image 9.png",
    },
    {
      id: 5,
      type: "RECEPTION",
      title: "Lorem Ipsum Dolor Sit Amet,",
      subtitle: "Consectetur Adipiscing Elit.",
      image: "/image 9.png",
    },
    {
      id: 6,
      type: "RECEPTION",
      title: "Lorem Ipsum Dolor Sit Amet,",
      subtitle: "Consectetur Adipiscing Elit.",
      image: "/image 9.png",
    },
  ];

  const totalSlides = venues.length;
  const slidesToShow = 3;
  const maxSlideIndex = Math.max(0, totalSlides - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= maxSlideIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev <= 0) {
        return maxSlideIndex;
      }
      return prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlideIndex));
  };

  const getVisibleVenues = () => {
    return venues.slice(currentSlide, currentSlide + slidesToShow);
  };

  const handleViewAllVenues = () => {
    alert("Navigating to all venues page...");
    // In a real app, this would navigate to another page
    console.log("View all venues clicked");
  };

  const handleVenueClick = (venue) => {
    alert(`Opening details for: ${venue.title}`);
    console.log("Venue clicked:", venue);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-md text-black font-medium mb-2 tracking-wider uppercase">
            EFFORTLESS EVENTS VENUE
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            If walls could talk
          </h2>
          <button
            onClick={handleViewAllVenues}
            className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            View all Venues
          </button>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6 mt-10"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesToShow)
                }%)`,
                width: `${(totalSlides / slidesToShow) * 100}%`,
              }}
            >
              {venues.map((venue, index) => (
                <div
                  key={venue.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                    onClick={() => handleVenueClick(venue)}
                  >
                    {/* Image Container */}
                    <div className="h-[300px] bg-gray-200 relative overflow-hidden">
                      <img
                        src={venue.image}
                        alt={venue.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-xs font-semibold text-gray-500 mb-3 tracking-wider uppercase">
                        {venue.type}
                      </p>
                      <h3 className="text-lg font-semibold text-black leading-tight mb-1 group-hover:text-gray-700 transition-colors">
                        {venue.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {venue.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* <div className="absolute -top-16 right-0 flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlideIndex}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div> */}
          <div className="absolute -top-16 right-0 flex gap-2">
            {/* Left/Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Previous slide"
            >
              <svg
                 width="45"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 28.1566V21.8434L12.1212 21.8434L29.4823 4.48232L25 0L0 25L25 50L29.4823 45.5177L12.1212 28.1566L50 28.1566Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* Right/Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlideIndex}
              className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Next slide"
            >
              <svg
                width="45"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 21.8434V28.1566H37.8788L20.5177 45.5177L25 50L50 25L25 0L20.5177 4.48232L37.8788 21.8434H0Z"
                  fill="#6A6E7A"
                />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxSlideIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-black w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueShowcase;
