"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Share2, Grid } from "lucide-react";

export default function MarketGallery() {
  const [showAllImages, setShowAllImages] = useState(false);

  const images = [
    {
      id: 1,
      src: "/image.png",
      alt: "Main property view with building and lawn",
      isMain: true,
    },
    {
      id: 2,
      src: "/image1.png",
      alt: "Closer view of building facade",
      isMain: false,
    },
    {
      id: 3,
      src: "/image 2.png",
      alt: "Night-time swimming pool",
      isMain: false,
    },
    {
      id: 4,
      src: "/image 4.png",
      alt: "Daytime lawn with seating area",
      isMain: false,
    },
    {
      id: 5,
      src: "/image 5.png",
      alt: "Another daytime view of lawn and trees",
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
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-8 bg-white">
      {/* Top Section - Title, Location, and Share */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-black mb-1">
            Effortless Farm45
          </h1>
          <p className="text-base text-gray-600">Gawal Pahari, Gurugram</p>
        </div>
        <button
          onClick={handleShare}
          className="text-black hover:text-gray-600 transition-colors flex items-center space-x-2 text-sm"
        >
          <Share2 size={16} />
          <span>Share</span>
        </button>
      </div>

      {/* Main Image Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Large Image - Left Side */}
        <div className="lg:col-span-2">
          <div className="relative h-96 lg:h-[540px] overflow-hidden rounded-lg">
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
        <div className="grid grid-cols-2 gap-4">
          {/* Top Left Thumbnail */}
          <div className="relative h-64 overflow-hidden rounded-lg">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          </div>

          {/* Top Right Thumbnail */}
          <div className="relative h-64 overflow-hidden rounded-lg">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          </div>

          {/* Bottom Left Thumbnail */}
          <div className="relative h-64 overflow-hidden rounded-lg">
            <Image
              src={images[3].src}
              alt={images[3].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          </div>

          {/* Bottom Right Thumbnail with Overlay */}
          <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
            <Image
              src={images[4].src}
              alt={images[4].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <button
                onClick={() => setShowAllImages(true)}
                className="text-white flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Grid size={20} />
                <span className="text-sm font-medium">View all</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal for View All */}
      {showAllImages && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">All Images</h2>
                <button
                  onClick={() => setShowAllImages(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative h-48 overflow-hidden rounded-lg"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
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