"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const textVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.8 },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Hero Slider Data with direct venue URLs
const sliderData = [
  {
    imageSrc: "/image/venue 98.jpg",
    altText: "Luxury farmhouse venue in Gurugram",
    subText: "Effortless Farm 45",
    location: "Gawal Pahari, Gurugram",
    href: "https://www.effortlessevents.in/venues/98",
  },
  {
    imageSrc: "/image/venue 125.webp",
    altText: "Premium farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 16",
    location: "Delhi NCR",
    href: "https://www.effortlessevents.in/venues/125",
  },
  {
    imageSrc: "/image/venue 120.webp",
    altText: "Luxury pool farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 3",
    location: "Delhi NCR",
    href: "https://www.effortlessevents.in/venues/120",
  },
  {
    imageSrc: "/image/venue 39.webp",
    altText: "Elegant event farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 13",
    location: "Delhi NCR",
    href: "https://www.effortlessevents.in/venues/39",
  },
];
const EffortlessEvent = () => {
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
    const timer = setTimeout(goToNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-black">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
  src={sliderData[currentIndex].imageSrc}
  alt={sliderData[currentIndex].altText}
  className="absolute inset-0 w-full h-full object-cover"
/>
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-end">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 pb-16 md:pb-20">
          <motion.div
            key={currentIndex}
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            {/* Eyebrow Text */}
            <motion.p
              variants={textVariant}
              className="text-white/80 uppercase tracking-[0.18em] text-xs md:text-sm font-medium mb-6"
            >
              Luxury Event Planning in Delhi NCR
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={textVariant}
              className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05]"
            >
              Delhi NCR&apos;s Premier Event Planning & Venue Company
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={textVariant}
              className="text-white/90 text-lg md:text-2xl leading-relaxed max-w-3xl mt-6"
            >
              From intimate celebrations to grand corporate galas, we design
              experiences that stay with you long after the last guest leaves.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={textVariant}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link
                href="/search"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all"
              >
                Browse Our Venues
              </Link>

              <Link
                href="https://wa.me/917838008069"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition-all"
              >
                Talk to Us on WhatsApp
              </Link>
            </motion.div>
          </motion.div>

          {/* Slide Caption + Navigation */}
          <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Link
              href={sliderData[currentIndex].href}
              className="block hover:opacity-90 transition-opacity"
            >
              <p className="text-white text-xl md:text-2xl font-semibold">
                {sliderData[currentIndex].subText}
              </p>
              <p className="text-white/80 text-sm md:text-base mt-1">
                {sliderData[currentIndex].location}
              </p>
            </Link>

            <div className="flex gap-3">
              <button
                onClick={goToPrevious}
                aria-label="Previous slide"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={goToNext}
                aria-label="Next slide"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffortlessEvent;
