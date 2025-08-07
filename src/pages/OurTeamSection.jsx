export default function OurTeamSection() {
  return (
    <section className="bg-[#121212] text-white">
      <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
              Our team
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              At Effortless Events Pvt. Ltd., our people are the driving force
              behind every experience we create. More than just planners, our
              team is a collective of passionate professionals dedicated to
              turning your vision into unforgettable reality.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              We believe that every great event starts with understanding. From
              the first meeting to the final execution, we collaborate closely
              with clients to bring their ideas to life—whether it's a grand
              corporate affair, a wedding celebration, or an intimate gathering.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Guided by our 360-degree approach, our team handles every
              detail—venue, décor, logistics, catering, entertainment, and theme
              execution—with precision and creativity. Every event is crafted to
              reflect your unique style and leave a lasting impression.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              At Effortless Events, we don't just organize occasions—we create
              experiences that resonate. Let's bring your dream event to life,
              together.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="bg-[#D9D9D9] h-48 sm:h-64 md:h-80 lg:h-96 order-1 lg:order-2 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
