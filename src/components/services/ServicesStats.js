"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    title: "Premium Venues",
    description: "Curated across Delhi NCR",
  },
  {
    number: "100+",
    title: "Events Managed",
    description: "Weddings, parties & corporate",
  },
  {
    number: "5",
    title: "Cities Served",
    description: "Delhi, Gurugram, Noida, Faridabad & Ghaziabad",
  },
  {
    number: "End-to-End",
    title: "Event Management",
    description: "One partner for everything",
  },
];

export default function ServicesStats() {
  return (
    <section className="w-full bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`
                flex flex-col items-center justify-center
                text-center
                px-5 sm:px-6
                py-8 sm:py-10
                min-h-[145px] sm:min-h-[165px]
                border-neutral-200
                ${
                  index === 0
                    ? "border-r border-b lg:border-b-0"
                    : ""
                }
                ${
                  index === 1
                    ? "border-b lg:border-b-0 lg:border-r"
                    : ""
                }
                ${
                  index === 2
                    ? "border-r"
                    : ""
                }
              `}
            >

              {/* Number */}
              <div className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-none tracking-tight text-black">
                {stat.number}
              </div>

              {/* Title */}
              <div className="mt-2 text-xs sm:text-sm font-semibold text-black">
                {stat.title}
              </div>

              {/* Description */}
              <p className="mt-1 max-w-[180px] text-[10px] sm:text-xs leading-4 text-neutral-500">
                {stat.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
