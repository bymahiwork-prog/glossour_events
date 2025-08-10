"use client";
import React from "react";

const BookSpace = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full bg-white px-6 md:px-12 lg:px-20 py-16 lg:py-20">
      {/* Left Text Content */}
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-black leading-[0.9] mb-6 sm:mb-8">
          A space for <br /> every moment
        </h1>
        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-normal mb-12 sm:mb-16">
          Book a unique space for your activity
        </p>

        {/* Activity Tags */}
        <div className="flex flex-wrap gap-2 mb-12 sm:mb-16">
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Photo shoot
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Meeting
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Birthday party
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Video shoot
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Baby shower
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Workshop
          </span>

          <span className="text-black font-semibold text-base sm:text-lg px-0 py-1 mr-4 mb-2 flex items-center gap-2">
            Wedding reception
            <svg
              width="16"
              height="10"
              viewBox="0 0 35 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-5 sm:h-3"
            >
              <path
                d="M0 11.3586V14.6414H26.5152L14.3624 23.6692L17.5 26L35 13L17.5 0L14.3624 2.33081L26.5152 11.3586H0Z"
                fill="black"
              />
            </svg>
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Live music
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Party
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Music video
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Bridal shower
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Event
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Engagement party
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Corporate event
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Graduation party
          </span>
          <span className="text-gray-400 text-base sm:text-lg font-normal px-0 py-1 mr-4 mb-2">
            Pop-up
          </span>
        </div>

        {/* Button */}
        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-medium text-base sm:text-lg rounded-lg hover:bg-gray-800 transition-colors">
          Browse all activities
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative">
          <img
            src="/image 2.png"
            alt="Wedding reception venue"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-lg"
          />

          {/* Image Caption - Simple and Responsive */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6 rounded-b-lg">
            <p className="text-white font-semibold text-lg sm:text-xl mb-1">Wedding Reception</p>
            <p className="text-white/90 text-sm sm:text-base">Noida Delhi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSpace;