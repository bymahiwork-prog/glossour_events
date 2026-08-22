"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Share2,
  Grid,
  ChevronDown,
  UtensilsCrossed,
  Wine,
  Armchair,
  ShowerHead,
  Mic,
  Car,
  PartyPopper,
  Gavel,
  Check,
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export function MarketGallery({ venue }) {
  const [showAllImages, setShowAllImages] = useState(false);

  const images =
    venue.images?.length > 0
      ? venue.images.map((src, index) => ({
          id: index + 1,
          src: src,
          alt: `${venue.product_name} - Image ${index + 1}`,
        }))
      : [
          {
            id: 1,
            src: "https://placehold.co/1200x800/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
          {
            id: 2,
            src: "https://placehold.co/600x400/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
          {
            id: 3,
            src: "https://placehold.co/600x400/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
          {
            id: 4,
            src: "https://placehold.co/600x400/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
          {
            id: 5,
            src: "https://placehold.co/600x400/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
        ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: venue.product_name,
          text: `Check out this amazing venue in ${venue.product_location}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);

        const alertBox = document.createElement("div");
        alertBox.textContent = "Link copied to clipboard!";
        alertBox.style.cssText =
          "position:fixed;top:20px;left:50%;transform:translateX(-50%);background-color:#333;color:white;padding:10px 20px;border-radius:5px;z-index:1000;";

        document.body.appendChild(alertBox);

        setTimeout(() => {
          if (document.body.contains(alertBox)) {
            document.body.removeChild(alertBox);
          }
        }, 3000);
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 py-8">

        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-black mb-1">
              {venue.product_name}
            </h1>

            <p className="text-sm sm:text-base text-gray-600">
              {venue.product_location}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">

          {/* MAIN IMAGE */}
          <div className="lg:col-span-2">
            <div className="relative h-72 sm:h-80 md:h-96 lg:h-[540px] overflow-hidden rounded-lg">

              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/1200x800/e2e8f0/e2e8f0?text=Image+Not+Found";
                }}
              />

            </div>
          </div>

          {/* GALLERY IMAGES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.slice(1, 5).map((image, index) => (
              <div
                key={image.id}
                className={`relative h-36 sm:h-48 md:h-60 lg:h-64 overflow-hidden rounded-lg group cursor-pointer ${
                  index < 4 ? "" : "hidden"
                }`}
              >

                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/600x400/e2e8f0/e2e8f0?text=Image+Not+Found";
                  }}
                />

                {index === 3 && images.length > 5 && (
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
                )}

              </div>
            ))}
          </div>
        </div>
      </div>

      {showAllImages && (
        <ImageModal
          images={images}
          venue={venue}
          onClose={() => setShowAllImages(false)}
        />
      )}
    </div>
  );
}

function ImageModal({ images, venue, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-7xl w-full max-h-[95vh] shadow-2xl flex flex-col"
      >

        <div className="flex-shrink-0 flex justify-between items-center p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {venue.product_name}
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

                {venue.product_location}
              </span>

            </div>
          </div>

          <button
            onClick={onClose}
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

        <div className="flex-grow p-6 sm:p-8 overflow-y-auto bg-gray-50">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">

            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >

                <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">

                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/600x400/e2e8f0/e2e8f0?text=Not+Found";
                    }}
                  />

                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                    {image.alt}
                  </h3>

                  <p className="text-xs text-gray-500">
                    High Resolution • Professional Quality
                  </p>
                </div>

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

        </div>
      </div>
    </div>
  );
}
