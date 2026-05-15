"use client";

export default function EffortlessHosting() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Section Label */}
          <p className="text-[#C9A34A] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Our Story
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Creating Memorable Events Across Delhi NCR
          </h2>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              Founded in 2021, Effortless Events Pvt. Ltd. is a Delhi NCR-based
              event planning company specializing in weddings, corporate events,
              and private celebrations.
            </p>

            <p>
              With access to 50+ curated venues and a trusted network of décor,
              catering, and entertainment partners, we deliver end-to-end event
              management tailored to each client’s vision and budget.
            </p>

            <p>
              From venue selection to flawless on-ground execution, our team
              ensures every detail is thoughtfully planned so you can enjoy your
              event without the stress.
            </p>
          </div>

          {/* Credibility Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
            {[
              { value: "2021", label: "Founded" },
              { value: "50+", label: "Premium Venues" },
              { value: "100+", label: "Events Managed" },
              { value: "5", label: "Cities Served" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl md:text-4xl font-bold text-[#C9A34A]">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-gray-500 mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
