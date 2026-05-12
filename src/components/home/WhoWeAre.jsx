import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="bg-[#F7F3EE] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-[0.18em] text-[#8A7A66] font-medium mb-6">
          Who We Are
        </p>

        {/* SEO-Optimized Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold text-[#1F1F1F] leading-tight max-w-5xl">
          Luxury Event Planning & Venue Booking in Delhi NCR
        </h2>

        {/* Content */}
        <div className="mt-8 max-w-4xl space-y-6">
          <p className="text-lg md:text-xl leading-8 text-[#5C5C5C]">
            At Effortless Events, we believe every occasion deserves to be
            extraordinary. Based in New Delhi and serving clients across Delhi
            NCR, we are a full-service event planning and venue company built
            for people who refuse to compromise on quality.
          </p>

          <p className="text-lg md:text-xl leading-8 text-[#5C5C5C]">
            We pair an extensive portfolio of 50+ handpicked venues with
            in-house decoration, catering, and bartending services, giving you
            a single accountable partner from the first conversation to the
            final bow.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1F1F1F] text-white font-semibold hover:bg-black transition-colors"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
