'use client';

import { useState, useEffect } from "react";

const VenueShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

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

  // Update slidesToShow based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // mobile - single card
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // tablet - two cards
      } else {
        setSlidesToShow(3); // desktop - three cards
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

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

  const handleViewAllVenues = () => {
    alert("Navigating to all venues page...");
    console.log("View all venues clicked");
  };

  const handleVenueClick = (venue) => {
    alert(`Opening details for: ${venue.title}`);
    console.log("Venue clicked:", venue);
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
            className="bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
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
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {venues.map((venue, index) => (
                <div
                  key={venue.id}
                  className={`flex-shrink-0 ${
                    slidesToShow === 1 
                      ? 'w-full max-w-sm mx-auto' // Single card on mobile - centered and wider
                      : slidesToShow === 2 
                      ? 'w-1/2' // Two cards on tablet
                      : 'w-1/3' // Three cards on desktop
                  }`}
                >
                  <div
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group h-full"
                    onClick={() => handleVenueClick(venue)}
                  >
                    {/* Image Container */}
                    <div className={`${
                      slidesToShow === 1 
                        ? 'h-[280px] sm:h-[300px]' // Taller image on mobile for better proportion
                        : 'h-[200px] sm:h-[250px] md:h-[300px]'
                    } bg-gray-200 relative overflow-hidden`}>
                      <img
                        src={venue.image}
                        alt={venue.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className={`${
                      slidesToShow === 1 
                        ? 'p-5 sm:p-6' // More padding on mobile for single card
                        : 'p-3 sm:p-4 md:p-6'
                    }`}>
                      <p className="text-xs font-semibold text-gray-500 mb-2 sm:mb-3 tracking-wider uppercase">
                        {venue.type}
                      </p>
                      <h3 className={`${
                        slidesToShow === 1 
                          ? 'text-lg sm:text-xl' // Larger text on mobile for single card
                          : 'text-sm sm:text-base md:text-lg'
                      } font-semibold text-black leading-tight mb-2 group-hover:text-gray-700 transition-colors`}>
                        {venue.title}
                      </h3>
                      <p className={`${
                        slidesToShow === 1 
                          ? 'text-base sm:text-lg' // Larger subtitle on mobile
                          : 'text-sm sm:text-base'
                      } text-gray-600 leading-relaxed`}>
                        {venue.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute -top-12 sm:-top-14 md:-top-16 right-0 flex gap-2">
            {/* Left/Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-transparent rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Previous slide"
            >
              <svg
                width="30"
                height="20"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-[35px] sm:h-[25px] md:w-[45px] md:h-[30px]"
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
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-transparent rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Next slide"
            >
              <svg
                width="30"
                height="20"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-[35px] sm:h-[25px] md:w-[45px] md:h-[30px]"
              >
                <path
                  d="M0 21.8434V28.1566H37.8788L20.5177 45.5177L25 50L50 25L25 0L20.5177 4.48232L37.8788 21.8434H0Z"
                  fill="#6A6E7A"
                />
              </svg>
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
        </div>
      </div>
    </div>
  );
};

export default VenueShowcase;