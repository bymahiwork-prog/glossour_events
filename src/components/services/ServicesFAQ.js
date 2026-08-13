"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "Effortless Events provides end-to-end event solutions including venue booking, event planning, décor, catering, bartending and on-ground event management. Our services can be customized around your event requirements.",
  },
  {
    question: "Can I book only a venue without other services?",
    answer:
      "Yes. You can book a venue independently through Effortless Events. We can also help you combine the venue with additional services such as décor, catering, bartending and event coordination.",
  },
  {
    question: "Do you manage corporate events?",
    answer:
      "Yes. We manage a wide range of corporate events including conferences, business meetings, product launches, employee events, team-building activities, award ceremonies and corporate celebrations.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We currently serve Delhi, Gurugram, Noida, Faridabad and Ghaziabad, with a curated selection of venues and event services across Delhi NCR.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend reaching out as early as possible, especially for weddings, large celebrations and popular venues. The ideal booking timeline depends on your event date, guest count and requirements.",
  },
  {
    question: "Do you provide in-house catering?",
    answer:
      "We can arrange catering solutions based on your selected venue and event requirements. Our team can help you explore suitable catering options and create a menu that fits your occasion.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#b38b45]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-black">
            FAQs
          </h2>
        </motion.div>


        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="border border-neutral-200 bg-white"
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 px-5 py-4 text-left transition-colors duration-200 hover:bg-neutral-50"
                >

                  <span className="text-xs sm:text-sm font-medium text-black">
                    {faq.question}
                  </span>

                  <span className="flex-shrink-0 text-neutral-500">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>

                </button>


                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pr-12">
                        <p className="text-xs sm:text-sm leading-6 text-neutral-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
