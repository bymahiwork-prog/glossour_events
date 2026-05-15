export default function FeaturedSection() {
  const highlights = [
    {
      title: "Luxury Weddings",
      description:
        "Elegant wedding planning and décor tailored to your vision and traditions.",
    },
    {
      title: "Corporate Events",
      description:
        "Professional conferences, launches, award nights, and team celebrations.",
    },
    {
      title: "Private Celebrations",
      description:
        "Birthdays, anniversaries, cocktail parties, and intimate gatherings.",
    },
    {
      title: "50+ Premium Venues",
      description:
        "Curated farmhouses, banquet halls, rooftops, and outdoor spaces.",
    },
    {
      title: "Delhi NCR Coverage",
      description:
        "Serving Delhi, Gurugram, Noida, Faridabad, and Ghaziabad.",
    },
    {
      title: "End-to-End Management",
      description:
        "Venue, décor, catering, entertainment, and on-ground coordination.",
    },
  ];

  return (
    <section className="bg-[#F9F7F3] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#C9A34A] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            What We Do
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Where We Create Exceptional Events
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            From luxury weddings to corporate events and private celebrations,
            Effortless Events delivers seamless event planning and venue
            management across Delhi NCR.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
