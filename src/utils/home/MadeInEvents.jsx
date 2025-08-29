"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Data for the components ---
const heroActivities = [
  { name: "Photo shoot", image: "/pe_photo_shoot.jpg" },
  { name: "Meeting", image: "/pe_meeting.jpg" },
  { name: "Birthday party", image: "/pe_birthday.jpg" },
  { name: "Video shoot", image: "/pe_video_shoot.jpg" },
  { name: "Baby shower", image: "/pe_baby_shower.jpg" },
  { name: "Workshop", image: "/pe_workshop.jpg" },
  // Add other activities here
];

// --- 2. Main Animation Component ---
const PeerspaceFullAnimation = () => {
  const [galleryImages, setGalleryImages] = useState();

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setGalleryImages(data.data || []);
    } catch (error) {
      console.error("Failed to load gallery images:", error);
      setGalleryImages([]); // fallback to empty array
    }
  };

  useEffect(() => {
    if (!galleryImages) {
      fetchImages();
    }
  }, [galleryImages]);

  // A ref to the main container that will be scrolled through
  const targetRef = useRef(null);

  // useScroll tracks the scroll progress of the targetRef
  // offset defines the start and end points of the animation relative to the viewport
  // "start end" means animation starts when the top of the element hits the bottom of the viewport
  // "end start" means animation ends when the bottom of the element hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Transform the scroll progress (0 to 1) into different animation values
  // Text Split Animation
  const yText1 = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "-150%"]);
  const yText2 = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "10%"]);

  // Gallery Reveal Animation
  const galleryOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const galleryScale = useTransform(scrollYProgress, [0.45, 0.55], [0.6, 1]);

  // Carousel State (adapted from your original code)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // default desktop

  // ✅ Detect screen size
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // mobile
      } else {
        setSlidesToShow(4); // desktop
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages?.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages?.length) % galleryImages?.length
    );
  };

  const getVisibleImages = () => {
    if (!galleryImages || galleryImages.length === 0) return [];
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(galleryImages[(currentIndex + i) % galleryImages.length]);
    }
    return visible;
  };

  return (
    <>
      {/* This container needs significant height to provide scrollable space for the animation */}
      <div ref={targetRef} className="relative w-full bg-black h-[300vh]">
        {/* The sticky container keeps the animation pinned to the screen while scrolling */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Animated Text "Made in" */}

          {/* Gallery that appears in the middle - Now Full Screen */}
          <motion.div
            style={{ opacity: galleryOpacity, scale: galleryScale }}
            className="absolute inset-0  top-[30%] flex flex-col items-center justify-center px-4 md:px-8 z-50"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 z-30 text-white p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 border border-white/20"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Image List - Full Screen Layout */}
              <div className="flex gap-4 md:gap-6 lg:gap-8 w-full h-full   ">
                {getVisibleImages().map((image, i) => (
                  <div
                    key={i}
                    className=" lg:h-[60vh] h-full min-w-32 overflow-hidden "
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMG_URL}${image.image}`}
                      alt={`Gallery image ${i + 1}`}
                      className="w-full  h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 z-30 text-white p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 border border-white/20"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </motion.div>

          {/* Animated Text "Effortless Events" */}
          <motion.img
            src="/logo.png"
            style={{ y: yText2 }}
            className="absolute text-white text-6xl md:text-8xl lg:text-9xl font-bold z-20 text-center"
          />
        </div>
      </div>
    </>
  );
};

export default PeerspaceFullAnimation;
