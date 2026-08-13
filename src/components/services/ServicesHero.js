"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/services/services-hero.jpg"
          alt="Elegant event setup by Effortless Events"
          className="h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Left Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] items-center">
        
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >

            {/* Eyebrow */}
            <p className="mb-5 text-[10px] sm:text-xs font-medium tracking-[0.28em] uppercase text-[#d6b36a]">
              Services
            </p>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[0.98] tracking-[-0.02em] text-white">
              Everything Your
              <br />
              Event Needs.
            </h1>

            {/* Highlighted Heading */}
            <h2 className="mt-1 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.05] italic text-[#d6b36a]">
              Handled by One Team.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-6 text-white/80">
              From venue booking and décor to catering, entertainment
              and on-day execution — we take care of it all, so you can
              enjoy every moment.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">

              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center bg-[#d6b36a] px-6 sm:px-7 py-3 text-[10px] sm:text-xs font-semibold tracking-[0.12em] uppercase text-black transition-all duration-300 hover:bg-white"
              >
                Plan My Event
              </Link>

              <Link
                href="/services/party-venues"
                className="inline-flex min-h-[44px] items-center justify-center border border-white/70 px-6 sm:px-7 py-3 text-[10px] sm:text-xs font-semibold tracking-[0.12em] uppercase text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Explore Venues
              </Link>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
