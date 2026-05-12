export default function WhyChooseUs() {
  const reasons = [
    {
      title: "One Partner for Everything",
      description:
        "Venue booking, décor, catering, bartending, entertainment, and on-site execution handled by one experienced team.",
    },
    {
      title: "50+ Exclusive Venues",
      description:
        "Access to handpicked farmhouses, banquet halls, rooftops, villas, and unique celebration spaces across Delhi NCR.",
    },
    {
      title: "Obsession with Details",
      description:
        "Every design element, guest touchpoint, and logistical detail is thoughtfully planned and flawlessly executed.",
    },
    {
      title: "Transparent Process",
      description:
        "Clear recommendations, honest pricing, and proactive communication at every stage of planning.",
    },
    {
      title: "Delhi NCR Expertise",
      description:
        "Deep local knowledge of venues, vendors, and logistics across New Delhi, Gurugram, Noida, Faridabad, and Ghaziabad.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Slideshow Images */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/why-choose-1.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] font-medium mb-4 text-center">
          Why Delhi NCR Chooses Effortless Events
        </p>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-6xl font-serif font-medium text-white leading-tight max-w-5xl mx-auto">
          Luxury Event Planning Backed by Experience, Creativity & Care
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-lg md:text-xl leading-8 text-[#E5D9CA]">
          From weddings and birthdays to corporate events and private
          celebrations, we deliver thoughtfully curated experiences designed to
          feel effortless from start to finish.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>

              <p className="text-sm leading-7 text-[#E5D9CA]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
