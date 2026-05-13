import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#0F0803] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] font-medium mb-4">
          Let’s Create Something Extraordinary
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight">
          Have Something in Mind?
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-lg md:text-xl leading-8 text-[#E5D9CA] max-w-3xl mx-auto">
          Whether you're planning a wedding, corporate event, birthday
          celebration, or private gathering, our team is ready to help you
          create an unforgettable experience.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          {/* Explore Venues */}
          <Link
            href="/search"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#C9A34A] text-black font-semibold hover:bg-[#D8B25B] transition-colors"
          >
            Explore Venues
          </Link>

          {/* Browse Services */}
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Browse Services
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/917838008069"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  );
}
