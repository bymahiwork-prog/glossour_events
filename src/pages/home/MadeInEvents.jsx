'use client';
import { useState, useEffect } from "react";

const MadeInEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const images = [
    { src: "/image 4.png", city: "Mumbai" },
    { src: "/image 5.png", city: "Delhi" },
    { src: "/image 6.png", city: "Bangalore" },
    { src: "/image1.png", city: "Chennai" },
    { src: "/image 8.png", city: "Kolkata" },
    { src: "/image 6.png", city: "Pune" },
  ];

  const updateSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // tablet
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(3); // desktop small
      } else {
        setSlidesToShow(4); // desktop large
      }
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    const handleResize = () => updateSlidesToShow();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - slidesToShow : prevIndex - 1
    );
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  return (
    <section className="bg-black py-16 lg:py-20 px-6 md:px-12 lg:px-20 text-center relative w-full overflow-hidden">
      {/* Background "Effortless" Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-white/5 text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold select-none whitespace-nowrap">
          Effortless
        </h1>
      </div>

      {/* Top Text */}
      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 relative z-10">
        Made in
      </h2>

      {/* Images Container */}
      <div className="relative w-full max-w-6xl mx-auto z-10">
        <div className="flex justify-center items-end gap-3 sm:gap-4 md:gap-6 w-full transition-all duration-500 ease-in-out">
          {getVisibleImages().map((image, index) => (
            <div key={`${currentIndex}-${index}`} className="flex flex-col items-center group flex-1 max-w-xs">
              {/* City Name Above Image */}
              <div className="mb-3 sm:mb-4 md:mb-6">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold group-hover:text-gray-300 transition-colors duration-300">
                  {image.city}
                </h3>
              </div>
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <img
                  src={image.src}
                  alt={`${image.city} events`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
                
                {/* Optional overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </div>
          ))}   
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 sm:-left-6 md:-left-8 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl font-bold bg-black/30 hover:bg-black/60 p-2 sm:p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-4 sm:-right-6 md:-right-8 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl font-bold bg-black/30 hover:bg-black/60 p-2 sm:p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 space-x-2">
          {Array.from({ length: Math.ceil(images.length / slidesToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * slidesToShow)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / slidesToShow) === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mt-8 sm:mt-12 md:mt-16 relative z-10">
        Events
      </h2>
    </section>
  );
};

export default MadeInEvents;