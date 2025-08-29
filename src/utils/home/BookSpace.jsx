"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

// --- DATA FOR THE INTERACTIVE LIST ---
const activitiesData = [
  {
    id: 1,
    activity: "Wedding Reception",
    description:
      "Create magical moments in our elegant venues, perfect for celebrating your special day with loved ones in luxurious surroundings.",
    imageSrc:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    location: "Noida, Delhi",
  },
  {
    id: 2,
    activity: "Photo Shoot",
    description:
      "Professional photography spaces with perfect lighting and versatile backdrops to capture your vision and bring your creative ideas to life.",
    imageSrc:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 3,
    activity: "Birthday Party",
    description:
      "Celebrate another year of joy in our vibrant party spaces, designed to make every birthday unforgettable with fun and festive atmospheres.",
    imageSrc:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    location: "Bhopal, Madhya Pradesh",
  },
  {
    id: 4,
    activity: "Corporate Event",
    description:
      "Professional meeting spaces equipped with modern technology and sophisticated ambiance, ideal for presentations, conferences, and team building.",
    imageSrc:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    location: "Bengaluru, Karnataka",
  },
  {
    id: 5,
    activity: "Workshop",
    description:
      "Inspiring creative spaces that foster learning and collaboration, perfect for art classes, skill development, and hands-on educational experiences.",
    imageSrc:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80",
    location: "Jaipur, Rajasthan",
  },
];

// --- SVG Arrow Icon Component ---
const ArrowIcon = () => (
  <motion.svg
    initial={{ opacity: 0, x: -8, scale: 0.8 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -8, scale: 0.8 }}
    transition={{
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
      opacity: { duration: 0.3 },
      x: { duration: 0.4 },
      scale: { duration: 0.3 },
    }}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 mt-1"
  >
    <path
      d="M4 12H20M20 12L14 6M20 12L14 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

// --- MAIN COMPONENT ---
const BookSpace = () => {
  const [hoveredId, setHoveredId] = useState(activitiesData[0].id);
  const activeItem = activitiesData.find((item) => item.id === hoveredId);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-center justify-between w-full bg-white px-6 md:px-12 lg:px-20 py-20 lg:py-28 overflow-hidden"
    >
      {/* Left Text Content */}
      <div className="w-full lg:w-1/2 lg:pr-12">
        <motion.h1
          custom={0}
          variants={animationVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6"
        >
          A space for <br /> every moment
        </motion.h1>

        <motion.p
          custom={1}
          variants={animationVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-xl md:text-2xl text-gray-700 mb-12"
        >
          Book a unique space for your activity.
        </motion.p>

        {/* Interactive Activity List */}
        <motion.div
          custom={2}
          variants={animationVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-1 mb-12"
        >
          {activitiesData.map((item, index) => (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              className="cursor-pointer group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                animate={{
                  backgroundColor:
                    hoveredId === item.id ? "rgba(0,0,0,0.02)" : "transparent",
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.div
                  className={`transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    hoveredId === item.id ? "text-black" : "text-gray-400"
                  }`}
                  animate={{
                    width: hoveredId === item.id ? "20px" : "0px",
                    opacity: hoveredId === item.id ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                    width: { duration: 0.4 },
                    opacity: {
                      duration: hoveredId === item.id ? 0.3 : 0.2,
                      delay: hoveredId === item.id ? 0.1 : 0,
                    },
                  }}
                >
                  <AnimatePresence mode="wait">
                    {hoveredId === item.id && <ArrowIcon />}
                  </AnimatePresence>
                </motion.div>

                <div className="flex-1 min-w-0">
                  <motion.h3
                    className={`text-lg font-semibold transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                      hoveredId === item.id
                        ? "text-black mb-3"
                        : "text-gray-600 group-hover:text-gray-800 mb-0"
                    }`}
                  >
                    {item.activity}
                  </motion.h3>

                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredId === item.id ? "auto" : 0,
                      opacity: hoveredId === item.id ? 1 : 0,
                      marginTop: hoveredId === item.id ? "0px" : "0px",
                    }}
                    transition={{
                      height: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                      opacity: {
                        duration: hoveredId === item.id ? 0.4 : 0.3,
                        delay: hoveredId === item.id ? 0.2 : 0,
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed pr-2">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          custom={3}
          variants={animationVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Browse all activities
        </motion.button>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 1, scale: 1, rotateY: 5 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],

                scale: { duration: 0.1 },
                rotateY: { duration: 0.1 },
              },
            }}
            exit={{
              scale: 0.95,
              rotateY: -5,
              transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={activeItem.imageSrc}
              alt={activeItem.activity}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              loading="lazy"
              initial={{ filter: "blur(4px)" }}
              animate={{
                filter: "blur(0px)",
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.4,
                },
              }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 rounded-b-2xl"
            >
              <motion.p
                className="text-white font-bold text-2xl mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.6,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }}
              >
                {activeItem.activity}
              </motion.p>

              <motion.p
                className="text-white/80 text-sm leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.8,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }}
              >
                {activeItem.description}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookSpace;
