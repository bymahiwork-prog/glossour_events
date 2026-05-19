export default function OurTeamSection() {
  const directors = [
    {
      name: "Harsimran Singh",
      title: "Managing Director",
      image: "/image/managing director (Harsimar singh).jpeg",
      bio: "Founder of Effortless Events Pvt. Ltd., leading venue partnerships and end-to-end event execution across Delhi NCR.",
    },
    {
      name: "Karan Malhotra",
      title: "Managing Director",
      image: "/image/managing director (Karan malhotra).jpeg",
      bio: "Co-founder of Effortless Events Pvt. Ltd., overseeing client experience, event strategy, and on-ground coordination.",
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#C9A34A] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Leadership Team
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet the Founders
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            Effortless Events is led by experienced professionals who bring
            together venue expertise, creative planning, and flawless execution
            to deliver memorable weddings, corporate events, and private
            celebrations across Delhi NCR.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {directors.map((director) => (
            <article key={director.name} className="text-left">
              <img
                src={director.image}
                alt={`${director.name}, ${director.title} at Effortless Events Pvt. Ltd.`}
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
              />

              <h3 className="mt-6 text-2xl md:text-3xl font-bold text-white">
                {director.name}
              </h3>

              <p className="text-[#C9A34A] font-medium mt-1">
                {director.title}
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                {director.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
