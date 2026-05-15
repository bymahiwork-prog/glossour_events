import React from "react";

const EventSpacePage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src="about1.png"
        alt="Effortless Events background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Decorative Images */}
      <div className="absolute inset-0 hidden lg:block z-10 pointer-events-none">
        <img
          src="about2.png"
          alt="Luxury event setup"
          className="absolute top-32 right-[28%] w-72 h-52 object-cover rounded-3xl shadow-2xl border border-[#C9A34A]/40 rotate-[-4deg]"
        />

        <img
          src="about3.png"
          alt="Wedding decor"
          className="absolute top-32 right-12 w-72 h-52 object-cover rounded-3xl shadow-2xl border border-[#C9A34A]/40 rotate-[2deg]"
        />

        <img
          src="about4.png"
          alt="Wedding mandap"
          className="absolute bottom-40 right-[30%] w-80 h-60 object-cover rounded-3xl shadow-2xl border border-[#C9A34A]/40 rotate-[-3deg]"
        />

        <img
          src="about5.png"
          alt="Outdoor venue"
          className="absolute bottom-48 right-8 w-80 h-60 object-cover rounded-3xl shadow-2xl border border-[#C9A34A]/40 rotate-[4deg]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto min-h-screen flex items-center px-6 lg:px-12 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-[#C9A34A] uppercase tracking-[0.25em] text-sm font-semibold mb-6">
              About Effortless Events
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-7xl font-semibold leading-tight mb-8">
              <span className="block">Delhi NCR's Trusted</span>
              <span className="block text-[#C9A34A]">
                Event Planning &
              </span>
              <span className="block text-[#C9A34A]">
                Venue Management
              </span>
              <span className="block">Company</span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-8 max-w-xl mb-10">
              Effortless Events Pvt. Ltd. is a Delhi NCR-based event planning
              and a venue management company specializing in weddings,
              corporate events, and private celebrations. We offer end-to-end
              services including venue selection, décor, catering, and event
              coordination across Delhi, Gurugram, Noida, Faridabad, and
              Ghaziabad.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=917838008069&text=Hi%20Effortless%20Events%2C%20I%20want%20to%20plan%20an%20event.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C9A34A] hover:bg-[#b8923d] text-black font-semibold px-8 py-4 rounded-2xl shadow-xl transition-colors duration-300"
            >
              <span className="text-2xl">💬</span>
              Plan Your Event on WhatsApp
            </a>
          </div>

          {/* Right Spacer */}
          <div className="hidden lg:block" />
        </div>
      </div>

    </section>
  );
};

export default EventSpacePage;
