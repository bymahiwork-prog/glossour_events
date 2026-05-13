export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Effortless Events turned our wedding into something truly magical. Every detail was thoughtfully executed, and the entire experience felt completely stress-free.",
      name: "Riya & Arjun",
      event: "Wedding Celebration",
    },
    {
      quote:
        "From venue selection to final execution, the team handled everything flawlessly. Our annual corporate gala was elegant, seamless, and incredibly well received.",
      name: "Ananya Sharma",
      event: "Corporate Event",
    },
    {
      quote:
        "The décor, catering, and coordination were exceptional. Our daughter’s birthday celebration exceeded every expectation.",
      name: "Mehta Family",
      event: "Birthday Celebration",
    },
  ];

  return (
    <section className="bg-[#F7F3EE] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-[0.18em] text-[#8A7A66] font-medium mb-4 text-center">
          Testimonials
        </p>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-6xl font-serif font-medium text-[#1F1F1F] leading-tight max-w-5xl mx-auto">
          What Our Clients Say
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-lg md:text-xl leading-8 text-[#5C5C5C]">
          Thoughtfully planned celebrations and memorable experiences that our
          clients love.
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-3xl border border-[#E8E0D6] shadow-sm p-8"
            >
              <p className="text-[#1F1F1F] leading-8 italic">
                “{testimonial.quote}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-[#1F1F1F]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#8A7A66] mt-1">
                  {testimonial.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
