"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Share2, Grid, MapPin } from "lucide-react";

export default function MarketGallery({ venue }) {
  const [showAllImages, setShowAllImages] = useState(false);

  // Create gallery using API data
  const images = [
    {
      id: 1,
      src: venue.image,
      alt: venue.product_name,
    },

    ...(venue.images || []).map((img, index) => ({
      id: index + 2,
      src: img,
      alt: `${venue.product_name} - Image ${index + 1}`,
    })),
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: venue.product_name,
          text: venue.product_detail,
          url: window.location.href,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 py-8">

        {/* Header */}

        <div className="flex flex-col sm:flex-row justify-between items-start mb-8">

          <div>

            <h1 className="text-4xl font-bold text-black">
              {venue.product_name}
            </h1>

            <p className="flex items-center text-gray-600 mt-2">
              <MapPin className="w-4 h-4 mr-2" />
              {venue.product_location}
            </p>

          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 mt-4 sm:mt-0"
          >
            <Share2 size={18} />
            Share
          </button>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Main Image */}

          <div className="lg:col-span-2">

            <div className="relative h-[550px] rounded-xl overflow-hidden">

              <Image
                src={images[0]?.src || "/placeholder.jpg"}
                alt={images[0]?.alt}
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>
                    {/* Thumbnail Gallery */}

          <div className="grid grid-cols-2 gap-4">

            {images.slice(1, 5).map((image, index) => (

              <div
                key={image.id}
                className="relative h-[265px] rounded-xl overflow-hidden cursor-pointer"
              >

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />

                {index === 3 && images.length > 5 && (
                  <button
                    onClick={() => setShowAllImages(true)}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold"
                  >
                    <Grid className="mr-2" size={20} />
                    View all
                  </button>
                )}

              </div>

            ))}

          </div>

        </div>

        {/* Image Modal */}

        {showAllImages && (

          <div className="fixed inset-0 z-50 bg-black/90 overflow-y-auto">

            <div className="max-w-7xl mx-auto p-6">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-white text-2xl font-bold">
                  {venue.product_name}
                </h2>

                <button
                  onClick={() => setShowAllImages(false)}
                  className="text-white text-3xl"
                >
                  ✕
                </button>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {images
                  .filter(
                    (image) =>
                      image.src &&
                      image.src.startsWith("http") &&
                      !image.src.endsWith("/_2026") &&
                      !image.src.includes("Image_Jun_14")
                  )
                  .map((image) => (
                    <div
                      key={image.id}
                      className="relative h-80 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                  ))}

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}
