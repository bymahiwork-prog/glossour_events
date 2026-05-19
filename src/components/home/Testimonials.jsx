"use client";

import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://commoninja.site/b8a71643-f83c-403e-8ad0-fcc583b8ec3e"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://commoninja.site/b8a71643-f83c-403e-8ad0-fcc583b8ec3e";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] font-semibold mb-3">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 min-h-[300px]">
          <div className="elfsight-app-cf2a2808-87bc-4a9d-8105-d801d0a7be8b"></div>
        </div>
      </div>
    </section>
  );
}
