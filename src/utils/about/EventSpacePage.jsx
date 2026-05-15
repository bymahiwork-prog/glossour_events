import React, { useEffect, useRef } from "react";

const EventSpacePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Background */}
      <img
        src="/about1.png"
        alt="Effortless Events"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Main Content */}
      <div
        ref={heroRef}
        className="relative z-20 max-w-7xl mx-auto min-h-screen px-6 lg:px-12 flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-[#C9A34A] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              About Effortless Events
            </p>

            {/* Heading */}
            <h1 className="font-bold leading-tight text-white mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                Delhi NCR&apos;s Trusted
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-[#C9A34A]">
                Event Planning
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                Company
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-300 text-base md:text-lg leading-8 max-w-lg mb-8">
              Effortless Events Pvt. Ltd. is a Delhi NCR-based event planning
              company founded in 2021. We specialise in weddings, corporate
              events, and celebrations across 50+ curated venues.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {[
                { value: "50+", label: "Venues" },
                { value: "5", label: "Cities" },
                { value: "2021", label: "Founded" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-bold text-[#C9A34A]">
                    {item.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-400 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=917838008069&text=Hi%20Effortless%20Events%2C%20I%20want%20to%20plan%20an%20event.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A34A] hover:bg-[#b8923d] text-black font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
              >
                Plan Your Event
                <span>→</span>
              </a>

              <a
                href="/services"
                className="inline-flex items-center border border-white/25 hover:border-[#C9A34A] hover:text-[#C9A34A] text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="hidden lg:grid grid-cols-2 gap-5 max-w-xl ml-auto">
            {[
              {
                src: "/about2.png",
                alt: "Luxury Event Setup",
                offset: "mt-0",
              },
              {
                src: "/about3.png",
                alt: "Outdoor Venue",
                offset: "mt-4",
              },
              {
                src: "/about4.png",
                alt: "Wedding Mandap",
                offset: "-mt-2",
              },
              {
                src: "/about5.png",
                alt: "Wedding Decor",
                offset: "mt-2",
              },
            ].map((image) => (
              <div
                key={image.src}
                className={`${image.offset} rounded-2xl overflow-hidden border border-[#C9A34A]/20 shadow-2xl aspect-[4/3]`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={() =>
            window.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
          aria-label="Scroll Down"
        >
          <span className="text-white text-xl">↓</span>
        </button>
      </div>
    </section>
  );
};

export default EventSpacePage;
