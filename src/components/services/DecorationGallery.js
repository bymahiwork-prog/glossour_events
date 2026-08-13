"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const decorationImages = [
  {
    image: "/images/services/decoration-1.jpg",
    title: "Wedding Décor",
  },
  {
    image: "/images/services/decoration-2.jpg",
    title: "Floral Styling",
  },
  {
    image: "/images/services/decoration-3.jpg",
    title: "Elegant Celebrations",
  },
  {
    image: "/images/services/decoration-4.jpg",
    title: "Table Styling",
  },
  {
    image: "/images/services/decoration-5.jpg",
    title: "Luxury Event Décor",
  },
  {
    image: "/images/services/decoration-6.jpg",
    title: "Private Celebrations",
  },
  {
    image: "/images/services/decoration-7.jpg",
    title: "Reception Décor",
  },
  {
    image: "/images/services/decoration-8.jpg",
    title: "Custom Event Styling",
  },
];

export default function DecorationGallery() {
  return (
    <section className="w-full bg-[#f7f4ee] py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#b38b45]">
            Our Work
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-black">
            Décor That Sets the Mood
          </h2>

          <p className="mt-4 text-xs sm:text-sm leading-6 text-neutral-600 max-w-2xl mx-auto">
            From intimate celebrations to elaborate weddings, explore some of
            the event décor and styling experiences created by Effortless Events.
          </p>
        </motion.div>


        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">

          {decorationImages.map((item, index) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group relative aspect-[4/5] overflow-hidden bg-neutral-200"
            >

              <img
                src={item.image}
                alt={item.title}
                loading={index < 4 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Image Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">

                <p className="text-[10px] sm:text-xs font-medium tracking-[0.12em] uppercase text-white">
                  {item.title}
                </p>

              </div>

            </motion.div>
          ))}

        </div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mt-10"
        >

          <Link
            href="/services/decoration-services"
            className="inline-flex items-center gap-2 border border-black px-6 py-3 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Explore Decoration Services

            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
