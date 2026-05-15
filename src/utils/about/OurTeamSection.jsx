export default function OurTeamSection() {
  const directors = [
    {
      name: "Harsimran Singh",
      title: "Managing Director",
      image: "/image/managing director (Harsimar singh).jpeg",
    },
    {
      name: "Karan Malhotra",
      title: "Managing Director",
      image: "/image/managing director (Karan malhotra).jpeg",
    },
  ];

  return (
    <section className="bg-[#121212] text-white">
      <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Team
          </h2>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            At Effortless Events Pvt. Ltd., our people are the driving force
            behind every experience we create.
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            We combine creativity, planning, and execution to deliver memorable
            events across weddings, corporate gatherings, and celebrations.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {directors.map((director) => (
            <div key={director.name}>
              <img
                src={director.image}
                alt={director.name}
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg"
              />

              <h3 className="mt-4 text-2xl font-bold text-white">
                {director.name}
              </h3>

              <p className="text-gray-400 text-lg">
                {director.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
