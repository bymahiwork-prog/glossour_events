"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Share2, Grid } from "lucide-react";

export default function MarketGallery() {
  const [showAllImages, setShowAllImages] = useState(false);

  const images = [
    {
      id: 1,
      src: "/venue1.jpg",
      alt: "Main venue view - Effortless Farm45",
      isMain: true,
    },
    {
      id: 2,
      src: "/venue2.jpg",
      alt: "Beautiful venue setting",
      isMain: false,
    },
    {
      id: 3,
      src: "/venue3.jpg",
      alt: "Elegant venue space",
      isMain: false,
    },
    {
      id: 4,
      src: "/venue1.jpg",
      alt: "Venue exterior view",
      isMain: false,
    },
    {
      id: 5,
      src: "/venue2.jpg",
      alt: "Venue interior space",
      isMain: false,
    },
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Effortless Farm45",
          text: "Check out this amazing venue in Gawal Pahari, Gurugram",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 py-8">
        {/* Top Section - Title, Location, and Share */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-black mb-1">
              Effortless Farm45
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Gawal Pahari, Gurugram
            </p>
          </div>
          <button
            onClick={handleShare}
            className="text-black hover:text-gray-600 transition-colors flex items-center space-x-2 text-sm sm:text-sm self-start sm:self-auto"
          >
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>

        {/* Main Image Gallery - Responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Main Large Image - Left Side */}
          <div className="lg:col-span-2">
            <div className="relative h-72 sm:h-80 md:h-96 lg:h-[540px] overflow-hidden rounded-lg">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />
            </div>
          </div>

          {/* Image Grid - Right Side */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Top Left Thumbnail */}
            <div className="relative h-36 sm:h-48 md:h-60 lg:h-64 overflow-hidden rounded-lg">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
            </div>

            {/* Top Right Thumbnail */}
            <div className="relative h-36 sm:h-48 md:h-60 lg:h-64 overflow-hidden rounded-lg">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
            </div>

            {/* Bottom Left Thumbnail */}
            <div className="relative h-36 sm:h-48 md:h-60 lg:h-64 overflow-hidden rounded-lg">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
            </div>

            {/* Bottom Right Thumbnail with Overlay */}
            <div className="relative h-36 sm:h-48 md:h-60 lg:h-64 overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={images[4].src}
                alt={images[4].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <button
                  onClick={() => setShowAllImages(true)}
                  className="text-white flex items-center space-x-2 hover:scale-105 transition-transform"
                >
                  <Grid size={18} />
                  <span className="text-xs sm:text-sm font-medium">
                    View all
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Image Gallery Modal */}
      {showAllImages && (
        <div className="fixed inset-0 bg-black/ flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Effortless Farm45
                </h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {images.length} Photos
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Gawal Pahari, Gurugram
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowAllImages(false)}
                className="text-gray-400 hover:text-gray-600 transition-all duration-200 p-3 rounded-full hover:bg-white hover:shadow-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body - Professional Grid */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(95vh-140px)] bg-gray-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  >
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm font-medium">
                              Photo {index + 1}
                            </span>
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image Info */}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                        {image.alt}
                      </h3>
                      <p className="text-xs text-gray-500">
                        High Resolution • Professional Quality
                      </p>
                    </div>

                    {/* Featured Badge for Main Image */}
                    {index === 0 && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="mt-12 pt-8 border-t border-gray-200 bg-white rounded-xl p-6 sm:p-8 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Ready to Book Effortless Farm45?
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    Experience the perfect blend of elegance and nature at our
                    premium venue. From intimate gatherings to grand
                    celebrations, we provide the ideal setting for your special
                    moments.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setShowAllImages(false)}
                      className="bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      Start Your Booking
                    </button>
                    <button
                      onClick={() => setShowAllImages(false)}
                      className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors duration-200 text-sm sm:text-base"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close modal when clicking outside */}
      {showAllImages && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowAllImages(false)}
        />
      )}
    </div>
  );
}
