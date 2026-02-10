const EffortLessEvent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/home-page.png"
        alt="Event Background"
        className="absolute inset-0 w-full h-[80vh] object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-20">
        <h1 className="text-white text-3xl font-bold">
          "Event Planner in Delhi NCR for Corporate, Birthday & Private Events"
        </h1>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1 text-white hover:text-gray-200 cursor-pointer">
            <span>Browse Spaces</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <a href="services" className="text-white hover:text-gray-200">
            Services
          </a>
          <a href="about" className="text-white hover:text-gray-200">
            About
          </a>
          <button className="bg-white/90 text-gray-800 font-medium px-6 py-2 rounded border border-gray-300 hover:bg-white transition-colors">
            Contact
          </button>
        </div>
      </div>

      {/* Search Box (Center) */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-6 z-20">
        <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex flex-col flex-1 w-full">
            <label className="text-sm text-gray-600 font-semibold mb-1">
              What are you planning?
            </label>
            <input
              type="text"
              placeholder="Enter Your Activity"
              className="border-none outline-none text-gray-800 placeholder-gray-400 text-lg py-2"
            />
          </div>

          <div className="flex flex-col flex-1 w-full">
            <label className="text-sm text-gray-600 font-semibold mb-1">
              Where?
            </label>
            <input
              type="text"
              placeholder="Enter a city or address"
              className="border-none outline-none text-gray-800 placeholder-gray-400 text-lg py-2"
            />
          </div>

          <div className="flex flex-col flex-1 w-full">
            <label className="text-sm text-gray-600 font-semibold mb-1">
              When?
            </label>
            <input
              type="text"
              placeholder="Anytime"
              className="border-none outline-none text-gray-800 placeholder-gray-400 text-lg py-2"
            />
          </div>

          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 flex items-center gap-2 whitespace-nowrap font-semibold text-lg transition-colors">
            Search <img className="w-6 h-4" src="/arrow.png" alt="search" />
          </button>
        </div>
      </div>

      {/* Bottom Text - Positioned on the image */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-20">
        {/* Left Text */}
        <div className="text-white">
          <h2 className="text-7xl font-bold leading-tight mb-2">
            Find a space.
          </h2>
          <h2 className="text-7xl font-bold leading-tight">
            Fulfill your vision.
          </h2>
        </div>

        {/* Right Text */}
        <div className="text-white text-right">
          <p className="text-xl font-semibold">Wedding Reception</p>
          <p className="text-lg">Noida Delhi</p>
        </div>
      </div>
    </div>
  );
};

export default EffortLessEvent;
