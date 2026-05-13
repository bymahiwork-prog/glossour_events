export default function ServiceAreas() {
  const cities = [
    "New Delhi",
    "Gurugram",
    "Noida",
    "Faridabad",
    "Ghaziabad",
  ];

  return (
    <section className="bg-[#0F0803] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] font-medium mb-4">
          Serving All of Delhi NCR
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight max-w-5xl mx-auto">
          Planning Celebrations Across Delhi NCR
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl leading-8 text-[#E5D9CA]">
          From intimate gatherings to grand weddings and corporate events, we
          bring exceptional event planning and venue booking services to every
          corner of Delhi NCR.
        </p>

        {/* City Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {cities.map((city) => (
            <span
              key={city}
              className="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white text-sm md:text-base font-medium backdrop-blur-sm"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
