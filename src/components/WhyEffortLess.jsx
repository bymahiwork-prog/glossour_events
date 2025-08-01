'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const WhyEffortLess = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide(prev => prev < totalSlides ? prev + 1 : 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev > 1 ? prev - 1 : totalSlides);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Blue top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
      
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
          
          {/* Left side - Large heading */}
          <div className="col-span-12 lg:col-span-5">
            <h1 className="text-8xl lg:text-9xl font-black text-black leading-[0.9] tracking-tight">
              Why
              <br />
              <span className="block mt-2 ">Effortless Events</span>
            </h1>
          </div>

          {/* Right side - Image and content */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            {/* Event space image */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 relative">
                {/* Simulated event space interior */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-40"></div>
                
                {/* Event space elements simulation */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-white bg-opacity-20 rounded-lg"></div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white bg-opacity-15 rounded-full"></div>
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white bg-opacity-25 rounded-lg"></div>
                
                {/* Lighting effects */}
                <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-300 bg-opacity-30 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-300 bg-opacity-20 rounded-full blur-lg"></div>
              </div>
            </div>

            {/* Content section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black leading-tight">
                New and never-ending<br />
                possibilities
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed max-w-md">
                Find everything from professionally equipped studios<br />
                to unconventional rooms and residencies
              </p>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center space-x-6 pt-4">
              {/* Previous button */}
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                aria-label="Previous slide"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  className="text-gray-600"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              
              {/* Next button */}
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                aria-label="Next slide"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  className="text-gray-600"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
              
              {/* Slide counter */}
              <div className="text-gray-600 text-base font-medium tracking-wider ml-4">
                0{currentSlide} / 0{totalSlides}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyEffortLess;