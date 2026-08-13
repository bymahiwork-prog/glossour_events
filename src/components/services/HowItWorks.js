"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    description:
      "Tell us about your event, preferences, guest count, budget and requirements.",
  },
  {
    number: "02",
    title: "Plan & Customize",
    description:
      "We shortlist venues, plan every detail and customize everything for you.",
  },
  {
    number: "03",
    title: "Execute Flawlessly",
    description:
      "Our expert team coordinates vendors and manages every aspect of your event.",
  },
  {
    number: "04",
    title: "Enjoy Your Event",
    description:
      "Sit back and enjoy while we create memories that last forever.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#b38b45]">
            How Effortless Events Works
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-black">
            Simple Process. Effortless Experience.
          </h2>
        </motion.div>


        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative px-5 sm:px-7 lg:px-6 py-5 lg:py-0"
            >

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[28px] left-[calc(50%+35px)] right-0 h-px bg-[#d8c29a]">
                  <span className="absolute right-0 -top-[2px] w-1 h-1 rounded-full bg-[#d6b36a]" />
                </div>
              )}


              {/* Step Number */}
              <div className="font-serif text-5xl sm:text-6xl lg:text-[54px] leading-none text-[#e9dfcc]">
                {step.number}
              </div>


              {/* Step Content */}
              <div className="mt-3 max-w-[230px]">

                <h3 className="font-serif text-lg sm:text-xl text-black">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-5 text-neutral-600">
                  {step.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
