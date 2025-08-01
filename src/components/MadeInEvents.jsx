// components/Activity.jsx
"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/image 4.png",
  "/image 5.png",
  "/image 6.png",
  "/image1.png",
  "/image 8.png",
  "/image 6.png",
];

export default function MadeInEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  return (
    <section className="bg-black py-16 px-0 text-center relative w-full overflow-hidden">
      {/* Background "Effortless" Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-white/5 text-[20rem] font-bold select-none">
          Effortless
        </h1>
      </div>

      {/* Top Text */}
      <h2 className="text-white text-6xl md:text-7xl font-bold mb-8 relative z-10">
        Made in
      </h2>

      {/* Images Container */}
      <div className="relative w-full max-w-none z-10">
      <div className="flex justify-center items-center gap-0 w-full transition-transform duration-[2000ms] ease-in-out">
      {images.slice(currentIndex, currentIndex + 4).map((src, index) => (
            <div key={index} className="relative flex-1 h-[500px] mx-6">
              <Image
                src={src}
                alt={`event-${currentIndex + index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold bg-black/20 p-2 rounded-full hover:bg-black/40 transition-all duration-300 z-20"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold bg-black/20 p-2 rounded-full hover:bg-black/40 transition-all duration-300 z-20"
        >
          →
        </button>
      </div>

      {/* Bottom Text */}
      <h2 className="text-white text-6xl md:text-7xl font-bold mt-8 relative z-10">
        Events
      </h2>
    </section>
  );
}
