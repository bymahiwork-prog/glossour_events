import React, { useEffect, useRef } from "react";

const AboutHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background image */}
      <img
        src="about1.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay — left dark for text, right fades out */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-20 max-w-7xl mx-auto min-h-screen flex items-center px-6 lg:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-28 lg:py-0">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col gap-5 max-w-lg">

            {/* Eyebrow */}
            <p
              className="text-[#C9A34A] font-semibold"
              style={{
                fontSize: "11px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
            >
              About Effortless Events
            </p>

            {/* Heading */}
            <h1
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Delhi NCR&apos;s Trusted{" "}
              <span className="text-[#C9A34A]">Event Planning</span>{" "}
              Company
            </h1>

            {/* Gold divider */}
            <div
              style={{
                width: "48px",
                height: "2px",
                background: "#C9A34A",
                borderRadius: "2px",
                opacity: 0.8,
              }}
            />

            {/* Body */}
            <p
              className="text-gray-300 leading-relaxed"
              style={{ fontSize: "14px", lineHeight: "1.8" }}
            >
              Effortless Events Pvt. Ltd. is a Delhi NCR-based event planning
              company founded in 2021. We specialise in weddings, corporate
              events, and celebrations across 50+ curated venues.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-1">
              {[
                { value: "50+", label: "Venues" },
                { value: "5", label: "Cities" },
                { value: "2021", label: "Founded" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="font-bold text-[#C9A34A]"
                    style={{ fontSize: "22px" }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-gray-400 font-medium"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=917838008069&text=Hi%20Effortless%20Events%2C%20I%20want%20to%20plan%20an%20event.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold transition-colors duration-300"
                style={{
                  background: "#C9A34A",
                  color: "#000",
                  fontSize: "13px",
                  padding: "11px 22px",
                  borderRadius: "10px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#b8923d")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A34A")}
              >
                Plan Your Event
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="/services"
                className="inline-flex items-center font-medium transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  fontSize: "13px",
                  padding: "11px 22px",
                  borderRadius: "10px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C9A34A";
                  e.currentTarget.style.color = "#C9A34A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                Our Services
              </a>
            </div>
          </div>

          {/* ── RIGHT: 2×2 Image Grid (desktop only) ── */}
          <div
            className="hidden lg:grid"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
            }}
          >
            {[
              { src: "about2.png", alt: "Luxury event setup", offset: false },
              { src: "about3.png", alt: "Outdoor venue",      offset: true  },
              { src: "about4.png", alt: "Wedding mandap",     offset: false },
              { src: "about5.png", alt: "Wedding decor",      offset: true  },
            ].map(({ src, alt, offset }) => (
              <div
                key={src}
                style={{
                  marginTop: offset ? "28px" : "0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(201, 163, 74, 0.25)",
                  aspectRatio: "4 / 3",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.7s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.06)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-30 flex items-center justify-center transition-opacity duration-300 hover:opacity-70"
        style={{
          transform: "translateX(-50%)",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.35)",
          background: "rgba(255,255,255,0.08)",
          cursor: "pointer",
          color: "#fff",
        }}
      >
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
};

export default AboutHero;
