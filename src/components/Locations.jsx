"use client";
import Image from "next/image";

const cities = [
  { name: "Chandigarh", code: "CHN" },
  { name: "Bhopal", code: "BPL" },
  { name: "Indore", code: "IND" },
  { name: "Bangalore", code: "BENG" },
  { name: "Noida", code: "NCR" },
];

export default function Locations() {
  return (
    <section className="bg-black py-28 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Section - Text and City List */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12">
            Your something starts <br /> somewhere
          </h2>

          {/* City List */}
          <div className="space-y-8">
            {cities.map((city, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-center">
                  <span className="text-white text-2xl md:text-3xl font-bold">
                    {city.name}
                  </span>
                  <span className="text-gray-400 text-lg md:text-xl font-medium">
                    {city.code}
                  </span>
                </div>
                {/* Underline - only show if not the last item */}
                {index < cities.length - 1 && (
                  <div className="mt-6 w-full h-px bg-gray-600"></div>
                )}
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-12 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            View all cities
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative">
            <Image
              src="/image.png"
              alt="Wedding reception venue"
              width={600}
              height={800}
              className="w-full h-[600px] object-contain rounded-lg"
            />

            {/* Vertical Text Overlays */}
            <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 rotate-90 text-black font-semibold text-xl tracking-wide">
              Wedding reception
            </div>
            <div className="absolute bottom-8 -right-16 rotate-90 text-black font-semibold text-xl tracking-wide">
              Noida Delhi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
