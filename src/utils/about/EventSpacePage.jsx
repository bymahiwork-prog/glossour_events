"use client";

import React, { useEffect, useRef } from "react";

const EventSpacePage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/about1.png"
        alt="Effortless Events"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Main Content */}
      <div
        ref={heroRef}
        className="relative z-20 max-w-7xl mx-auto min-h-screen px-6 lg:px-12 flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-[#C9A34A] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              About Effortless Events
            </p>

            {/* Heading */}
            <h1 className="font-bold leading-tight text-white mb-5">
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                Delhi NCR&apos;s Trusted
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-[#C9A34A]">
                Event Planning &
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-[#C9A34A]">
                Venue Management
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                Company
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg leading-8 max-w-lg mb-8">
              Effortless Events Pvt. Ltd. is a Delhi NCR-based event planning
              company specializing in weddings, corporate events, and private
              celebrations with end-to-end services including venue selection,
              décor, catering, and event coordination.
            </p>

            {/* CTA Button */}
            <a
              href="https://api.whatsapp.com/send/?phone=917838008069&text=Hi%20Effortless%20Events%2C%20I%20want%20to%20plan%20an%20event.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#C9A34A] hover:bg-[#b8923d] text-black font-semibold px-8 py-4 rounded-xl transition-colors duration-300"
            >
              Plan Your Event on WhatsApp
            </a>
          </div>

          {/* Right Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 max-w-xl ml-auto">
            {[
              {
                src: "/about2.png",
                alt: "Luxury Event Setup",
                offset: "mt-0",
              },
              {
                src: "/about3.png",
                alt: "Outdoor Venue",
                offset: "mt-3",
              },
              {
                src: "/about4.png",
                alt: "Wedding Mandap",
                offset: "-mt-1",
              },
              {
                src: "/about5.png",
                alt: "Wedding Decor",
                offset: "mt-2",
              },
            ].map((image) => (
              <div
                key={image.src}
                className={`${image.offset} rounded-2xl overflow-hidden border border-[#C9A34A]/20 shadow-2xl aspect-[4/3]`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSpacePage;
