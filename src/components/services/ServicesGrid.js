"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    slug: "decoration-services",
    title: "Event Planning & Management",
    description:
      "End-to-end planning, budgeting, vendor coordination and flawless execution for stress-free events.",
    image: "/images/services/event-planning.jpg",
  },
  {
    slug: "decoration-services",
    title: "Event Décor & Styling",
    description:
      "Creative concepts and stunning décor that transform your vision into an unforgettable experience.",
    image: "/images/services/decoration.jpg",
  },
  {
    slug: "food-catering",
    title: "Catering & Bar Services",
    description:
      "Delicious menus, professional service and customized bar setups for every occasion.",
    image: "/images/services/catering.jpg",
  },
  {
    slug: "party-venues",
    title: "Venue Booking",
    description:
      "50+ premium venues including farmhouses, villas, banquet halls, rooftops and more.",
    image: "/images/services/party-venues.jpg",
  },
  {
    slug: "corporate-events",
    title: "Entertainment & Experiences",
    description:
      "DJs, live bands, artists and unique experiences that keep your guests engaged and delighted.",
    image: "/images/services/entertainment.jpg",
  },
  {
    slug: "corporate-events",
    title: "On-Ground Event Management",
    description:
      "Our on-site team ensures everything runs smoothly so you can focus on your guests.",
    image: "/images/services/event-management.jpg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
      
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
            Our Services
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-black">
            Complete Event Solutions Under One Roof
          </h2>

          <p className="mt-4 text-xs sm:text-sm leading-5 text-neutral-600 max-w-2xl mx-auto">
            Every detail matters. Our services are designed to deliver
            seamless, memorable experiences for every type of event.
          </p>

        </motion.div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {services.map((service, index) => (

            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
            >

              <Link
                href={`/services/${service.slug}`}
                className="group block h-full bg-white border border-neutral-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image */}
                <div className="relative h-44 sm:h-48 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-300" />

                </div>


                {/* Content */}
                <div className="p-5 sm:p-6">

                  <h3 className="font-serif text-xl sm:text-[21px] leading-tight text-black">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-5 text-neutral-600">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div className="mt-5 flex items-center text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-[#b38b45]">

                    <span>
                      Learn More
                    </span>

                    <ArrowRight
                      className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
