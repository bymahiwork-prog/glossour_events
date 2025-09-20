"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProfessionalSearchBar from "@/components/SearchBar";
import Image from "next/image"; 

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.8 },
  },
};

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const EffortlessEvent = ({ sliderData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (sliderData.length > 0) {
      const timer = setTimeout(goToNext, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, sliderData]);

  if (sliderData.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image using Next/Image */}
      <AnimatePresence>
    
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <Image
            src={sliderData[currentIndex].imageSrc}
            alt={sliderData[currentIndex].altText} // This is crucial for SEO
            fill
            style={{ objectFit: "cover" }}
            priority={currentIndex === 0} // Load the first image faster
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content and Search Bar */}
      <div className="relative z-20 flex flex-col justify-center h-full text-white p-8">
        <ProfessionalSearchBar />
        <div className="flex-grow flex flex-col justify-end pb-12">
          <motion.div
            key={currentIndex} // Re-trigger animation on change
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-end gap-8"
          >
            <div>
              <motion.h2
                variants={textVariant}
                className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
              >
                Find a space.
              </motion.h2>
              <motion.h2
                variants={textVariant}
                className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
              >
                Fulfill your vision.
              </motion.h2>
            </div>
            <div className="text-left lg:text-right">
              <motion.p
                variants={textVariant}
                className="text-xl font-semibold"
              >
                {sliderData[currentIndex].subText}
              </motion.p>
              <motion.p variants={textVariant} className="text-md opacity-90">
                {sliderData[currentIndex].location}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
        <button
          onClick={goToPrevious}
          className="bg-black/50 text-white p-2 rounded-md hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="bg-black/50 text-white p-2 rounded-md hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default EffortlessEvent;