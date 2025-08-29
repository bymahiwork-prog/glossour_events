import React from "react";

const EventSpacePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#121212]">
      {/* Static Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="about1.png"
          alt="Event background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Card */}
        <div className="absolute top-8 left-8 lg:top-16 lg:left-16">
          <div className="w-32 h-40 md:w-40 md:h-30 lg:w-72 lg:h-56 overflow-hidden shadow-2xl transform rotate-[-10deg]">
            <img
              src="about2.png"
              alt="Wedding arch"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Top Right Card */}
        <div className="absolute top-20 right-8 lg:top-24 lg:right-16">
          <div className="w-32 h-40 md:w-40 md:h-30 lg:w-72 lg:h-56 overflow-hidden shadow-2xl transform rotate-[-10deg]">
            <img
              src="about3.png"
              alt="Event ceremony"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Left Card */}
        <div className="absolute bottom-16 left-4 lg:bottom-20 lg:left-12">
          <div className="w-32 h-40 md:w-40 md:h-30 lg:w-72 lg:h-56 overflow-hidden shadow-2xl transform rotate-[-10deg]">
            <img
              src="about4.png"
              alt="Event venue"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Right Card */}
        <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-20">
          <div className="w-32 h-40 md:w-40 md:h-30 lg:w-72 lg:h-56 overflow-hidden shadow-2xl transform rotate-[-10deg]">
            <img
              src="about5.png"
              alt="Outdoor event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Top Center Card (hidden on mobile, visible on larger screens) */}
        <div className="hidden lg:block absolute top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-72 h-56 overflow-hidden shadow-2xl transform rotate-[4deg]">
            <img
              src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Event setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Fixed Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-wide">
            <span className="block">Exceptional Events Start</span>
            <span className="block">With The Right Space</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EventSpacePage;
