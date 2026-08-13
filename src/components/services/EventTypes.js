"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const eventTypes = [
  {
    title: "Weddings",
    description:
      "Make your big day truly magical with our complete planning and execution.",
    image: "/images/services/weddings.jpg",
    href: "/services/wedding-venues",
  },
  {
    title: "Birthdays & Parties",
    description:
      "From intimate gatherings to lavish celebrations, we create unforgettable memories.",
    image: "/images/services/birthdays.jpg",
    href: "/services/party-venues",
  },
  {
    title: "Corporate Events",
    description:
      "Conferences, launches, annual days and corporate parties executed with professionalism.",
    image: "/images/services/corporate.jpg",
    href: "/services/corporate-events",
  },
  {
    title: "Private Celebrations",
    description:
      "Anniversaries, kitty parties and special gatherings tailored to your needs.",
    image: "/images/services/private-events.jpg",
    href: "/services/party-venues",
  },
];

export default function EventTypes() {
  return (
    <section className="w-full bg-[#f7f4ee] py-20 sm:py-24 lg:py-28">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >

          <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#b38b45]">
            Events We Specialize In
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-black">
            Every Occasion. Perfectly Planned.
          </h2>

        </motion.div>


        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

          {eventTypes.map((event, index) => (

            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <Link
                href={event.href}
                className="group relative block h-[300px] sm:h-[320px] lg:h-[285px] overflow-hidden"
              >

                {/* Background Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/25 transition-all duration-300 group-hover:bg-black/40" />

                {/* Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">

                  <h3 className="font-serif text-xl sm:text-2xl">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/85 max-w-[240px] mx-auto">
                    {event.description}
                  </p>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>


        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-9"
        >

          <Link
            href="/services"
            className="inline-flex items-center justify-center border border-[#b38b45] px-7 py-3 text-[10px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#8d6a31] transition-all duration-300 hover:bg-[#b38b45] hover:text-white"
          >
            Explore All Services
          </Link>

        </motion.div>

      </div>

    </section>
  );
}
