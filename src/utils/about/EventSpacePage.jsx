import React from "react";

const EventSpacePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#121212]">
      {/* Static Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="about1.png"
          alt="Luxury event planning in Delhi NCR"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Top Left */}
        <div className="absolute top-20 left-10 lg:left-16">
          <div className="w-40 lg:w-72 h-32 lg:h-56 overflow-hidden shadow-2xl rounded-lg rotate-[-8deg]">
            <img src="about2.png" alt="Wedding decor" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Top Center */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2">
          <div className="w-40 lg:w-72 h-32 lg:h-56 overflow-hidden shadow-2xl rounded-lg rotate-[3deg]">
            <img
              src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Event setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Top Right */}
        <div className="absolute top-20 right-10 lg:right-16">
          <div className="w-40 lg:w-72 h-32 lg:h-56 overflow-hidden shadow-2xl rounded-lg rotate-[8deg]">
            <img src="about3.png" alt="Luxury venue" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-24 left-8 lg:left-12">
          <div className="w-40 lg:w-72 h-32 lg:h-56 overflow-hidden shadow-2xl rounded-lg rotate-[-6deg]">
            <img src="about4.png" alt="Wedding stage" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-24 right-8 lg:right-12">
          <div className="w-40 lg:w-72 h-32 lg:h-56 overflow-hidden shadow-2xl rounded-lg rotate-[6deg]">
            <img src="about5.png" alt="Outdoor celebration" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Delhi NCR's Trusted Event Planning & Venue Management Company
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
            Effortless Events Pvt. Ltd. specializes in weddings, corporate events,
            and private celebrations with end-to-end services, including venue
            selection, decor, catering, and event coordination across Delhi NCR.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=917838008069&text=Hi%20Effortless%20Events%2C%20I%20want%20to%20plan%20an%20event.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#C9A34A] hover:bg-[#b8923d] text-black font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg"
          >
            Plan Your Event on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventSpacePage;
