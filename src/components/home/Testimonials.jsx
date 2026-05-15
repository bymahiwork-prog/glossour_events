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

        {/* Load Elfsight Script */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />

        {/* Reviews Widget */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          <div
            className="elfsight-app-cf2a2808-87bc-4a9d-8105-d801d0a7be8b"
            data-elfsight-app-lazy
          />
        </div>
      </div>

      {/* Hide Elfsight branding and duplicate widget title */}
      <style jsx global>{`
        /* Removes the "Free Google Reviews Widget" badge */
        .elfsight-app-cf2a2808-87bc-4a9d-8105-d801d0a7be8b a[href*="elfsight.com"] {
          display: none !important;
        }

        /* Hides the widget's internal title ("What Our Customers Say") */
        .elfsight-app-cf2a2808-87bc-4a9d-8105-d801d0a7be8b .eapps-google-reviews-header,
        .elfsight-app-cf2a2808-87bc-4a9d-8105-d801d0a7be8b .eapps-google-reviews-widget-header {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
