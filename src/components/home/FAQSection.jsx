"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of events does Effortless Events manage?",
    answer:
      "We manage the full spectrum of events, including weddings, wedding receptions, pre-wedding functions, corporate conferences, product launches, award ceremonies, team-building retreats, birthday parties, anniversaries, and private social gatherings across Delhi NCR.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We provide event planning and venue services across Delhi, Gurugram, Noida, Faridabad, and Ghaziabad.",
  },
  {
    question:
      "Do you offer end-to-end event management or just venues?",
    answer:
      "Both. You can book a venue through us, or engage us for complete end-to-end event management, including decoration, catering, bartending, vendor coordination, and on-day management.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For weddings, we recommend booking at least 4–6 months in advance. For corporate events and birthday parties, 4–8 weeks is generally sufficient, though peak season dates (October to February) fill up quickly.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us via the planning form above, call us at +91 78380 08069, or send us a WhatsApp message, and a dedicated event consultant will respond within 24 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // FAQPage JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#F7F3EE] py-20 md:py-28">
      {/* FAQ Schema for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-[0.18em] text-[#8A7A66] font-medium mb-4 text-center">
          FAQ Section
        </p>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-6xl font-serif font-medium text-[#1F1F1F] leading-tight">
          Frequently Asked Questions
        </h2>

        {/* Intro */}
        <p className="mt-6 text-center text-lg md:text-xl leading-8 text-[#5C5C5C]">
          Answers to common questions about our event planning and venue booking
          services across Delhi NCR.
        </p>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white rounded-2xl border border-[#E8E0D6] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5"
              >
                <span className="text-lg font-medium text-[#1F1F1F] pr-6">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-[#8A7A66] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-[#5C5C5C] leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
