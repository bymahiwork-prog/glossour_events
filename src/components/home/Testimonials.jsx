"use client";

import Script from "next/script";

export default function GoogleReviews() {
  return (
    <section className="py-16 md:py-24 bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] font-semibold mb-3">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        {/* Elfsight Script */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />

        {/* Widget Container */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 min-h-[250px]">
          <div
            className="elfsight-app-cf2a2808-87bc-4a9d-8105-d801d0a7be8b"
            data-elfsight-app-lazy={false}
          />
        </div>
      </div>

      {/* Hide only the widget title, keep reviews visible */}
      <style jsx global>{`
        .elfsight-app-cf2a2808-87bc-4a9d-8105-d801d0a7be8b .eapps-google-reviews-header {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
