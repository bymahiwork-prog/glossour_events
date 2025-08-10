// Locations Component
const Locations = () => {
  const cities = [
    { name: "Chandigarh", code: "CHN" },
    { name: "Bhopal", code: "BPL" },
    { name: "Indore", code: "IND" },
    { name: "Bangalore", code: "BENG" },
    { name: "Noida", code: "NCR" },
  ];

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Section - Text and City List */}
        <div className="w-full lg:w-1/2 mb-8 sm:mb-10 md:mb-12 lg:mb-0 lg:pr-12">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 sm:mb-10 md:mb-12">
            Your something starts <br className="hidden sm:block" /> 
            <span className="sm:hidden">starts </span>somewhere
          </h2>

          {/* City List */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {cities.map((city, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-center">
                  <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    {city.name}
                  </span>
                  <span className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                    {city.code}
                  </span>
                </div>
                {/* Underline - only show if not the last item */}
                {index < cities.length - 1 && (
                  <div className="mt-3 sm:mt-4 md:mt-6 w-full h-px bg-gray-600"></div>
                )}
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base">
            View all cities
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/image.png"
              alt="Wedding reception venue"
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] object-contain rounded-lg"
            />

            {/* Vertical Text Overlays - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 -right-8 lg:-right-16 transform -translate-y-1/2 rotate-90 text-black font-semibold text-base lg:text-xl tracking-wide">
              Wedding reception
            </div>
            <div className="hidden md:block absolute bottom-8 -right-8 lg:-right-16 rotate-90 text-black font-semibold text-base lg:text-xl tracking-wide">
              Noida Delhi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Locations