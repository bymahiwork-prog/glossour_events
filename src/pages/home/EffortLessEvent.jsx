'use client';
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// EffortlessEvent Component - Hero Section
const EffortlessEvent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/home-page.png"
        alt="Event Background"
        className="absolute inset-0 w-full h-[70vh] sm:h-[75vh] md:h-[80vh] object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Search Box (Center) */}
      <div className="absolute top-[35%] sm:top-[40%] md:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4 sm:px-6 z-20">
        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col flex-1 w-full">
            <label className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mb-2">
              What are you planning?
            </label>
            <input
              type="text"
              placeholder="Enter Your Activity"
              className="border-none outline-none text-gray-800 placeholder-gray-400 text-base sm:text-lg md:text-xl py-2 sm:py-3"
            />
          </div>

          <div className="flex flex-col flex-1 w-full">
            <label className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mb-2">
              Where?
            </label>
            <input
              type="text"
              placeholder="Enter a city or address"
              className="border-none outline-none text-gray-800 placeholder-gray-400 text-base sm:text-lg md:text-xl py-2 sm:py-3"
            />
          </div>

          <div className="flex flex-col flex-1 w-full">
            <label className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mb-2">
              When?
            </label>
            <input
              type="text"
              placeholder="Anytime"
              className="border-none outline-none text-gray-800 placeholder-gray-400 text-base sm:text-lg md:text-xl py-2 sm:py-3"
            />
          </div>

          <button className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg hover:bg-gray-800 flex items-center gap-3 whitespace-nowrap font-semibold text-base sm:text-lg md:text-xl transition-colors w-full lg:w-auto justify-center">
            Search <img className="w-5 sm:w-6 md:w-7 h-4 sm:h-5 md:h-6" src="/arrow.png" alt="" />
          </button>
        </div>
      </div>

      {/* Bottom Text - Positioned on the image */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-4 sm:left-8 md:left-12 right-4 sm:right-8 md:right-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-8 z-20">
        {/* Left Text */}
        <div className="text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4">
            Find a space.
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            Fulfill your vision.
          </h2>
        </div>

        {/* Right Text */}
        <div className="text-white text-left lg:text-right">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1">Wedding Reception</p>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90">Noida Delhi</p>
        </div>
      </div>
    </div>
  );
};

export default EffortlessEvent;