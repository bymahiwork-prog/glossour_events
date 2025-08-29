"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
// --- MAIN COMPONENT ---
const Locations = () => {
  const router = useRouter();
  const [citiesData, setCitiesData] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch("/api/locations");
        const rawData = await res.json();

        // --- ADVANCED FILTERING LOGIC ---
        const uniqueLocationsMap = new Map();

        rawData.forEach((location) => {
          const key = location.product_location
            .split(",")
            .pop()
            .trim()
            .toLowerCase();

          // If we haven't seen this normalized key before, add the original location object to our map.
          if (!uniqueLocationsMap.has(key)) {
            uniqueLocationsMap.set(key, location);
          }
        });

        // Convert the Map's values back into a de-duplicated array.
        const uniqueData = Array.from(uniqueLocationsMap.values());
        // --- LOGIC END ---

        setCitiesData(uniqueData);

        if (uniqueData && uniqueData.length > 0) {
          setActiveCity(uniqueData[0]);
        }
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };

    fetchLocations();
  }, []);
  const handleCityHover = (city) => {
    // 3. Update hover logic to use a unique property
    if (activeCity && city.product_image !== activeCity.product_image) {
      setImageLoaded(false);
      setActiveCity(city);
    }
  };

  const handleImageLoad = () => setImageLoaded(true);

  // --- (Animation variants remain the same) ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  // In your Locations component

  // Improved loading and empty state check
  if (!citiesData) {
    return (
      <div className="bg-black text-white text-center p-20">Loading...</div>
    );
  }

  if (citiesData.length === 0) {
    return (
      <div className="bg-black text-white text-center p-20">
        No locations found.
      </div>
    );
  }

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={"visible"}
      variants={containerVariants}
      className="bg-black py-20 lg:py-36 px-6 md:px-12 "
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 lg:pr-16">
          <motion.h2
            variants={itemVariants}
            className="text-white text-4xl md:text-5xl font-bold mb-12 text-transparent"
          >
            Your something starts somewhere
          </motion.h2>

          <motion.div variants={containerVariants} className="space-y-4 mb-8">
            {citiesData.map((city, index) => (
              <motion.div
                onClick={() =>
                  router.push(`/search?search=${city.product_location}`)
                }
                key={city.product_image} // Use unique key
                variants={itemVariants}
                className="relative cursor-pointer group"
                onMouseEnter={() => handleCityHover(city)}
              >
                <div className="flex justify-between items-center py-3">
                  <motion.span
                    className={`text-2xl md:text-4xl font-bold transition-colors duration-300 capitalize ${
                      // 1. Update property for comparison
                      activeCity.product_image === city.product_image
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {/* 1. Update property for display */}
                    {city.product_location}
                  </motion.span>
                  <motion.span
                    className={`text-base font-medium transition-colors duration-300 uppercase ${
                      activeCity.product_image === city.product_image
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {/* 1. Update property for display */}
                    {city.product_location.slice(0, 3)}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <Link
            href={"/search"}
            className=" bg-white rounded p-3 text-black font-bold mt-8 cursor-pointer hover:scale-105 transition-all"
          >
            View Locations
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex items-center justify-center">
          <motion.div
            variants={itemVariants}
            className="relative w-[400px] h-[550px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                // 2. Use unique key for animation
                key={activeCity.product_image}
                className="absolute inset-0"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_IMG_URL}${activeCity.product_image}`}
                  alt={`View of ${activeCity.product_location}`}
                  onLoad={handleImageLoad}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-semibold bg-black/40 p-2 rounded-lg">
                    {activeCity.product_location}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Locations;
