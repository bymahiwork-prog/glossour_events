export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Share Your Vision",
      description:
        "Tell us about your occasion, guest count, budget, and preferred style. Our event specialists will understand exactly what you need.",
    },
    {
      number: "02",
      title: "Explore Curated Venues",
      description:
        "We shortlist the most suitable venues and service options across Delhi NCR based on your requirements and preferences.",
    },
    {
      number: "03",
      title: "Celebrate Stress-Free",
      description:
        "From planning and décor to catering and execution, we manage every detail so you can enjoy the experience.",
    },
  ];

  return (
    <section className="bg-[#F7F3EE] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-[0.18em] text-[#8A7A66] font-medium mb-4">
          How We Work
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold text-[#1F1F1F] leading-tight max-w-5xl">
          From First Conversation to Flawless Celebration
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-8 text-[#5C5C5C]">
          Our streamlined process makes planning weddings, corporate events,
          birthdays, and private celebrations across Delhi NCR simple and
          stress-free.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-8 border border-[#E8E0D6] shadow-sm"
            >
              <p className="text-[#C9A34A] text-sm font-semibold tracking-[0.18em] uppercase mb-4">
                {step.number}
              </p>

              <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-4">
                {step.title}
              </h3>

              <p className="text-[#5C5C5C] leading-8">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
