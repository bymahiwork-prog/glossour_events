import React from "react";

const WeddingVenue = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen  lg:h-screen bg-white mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 py-8">
      {/* Left Section */}
      <div className="lg:w-[60%] flex items-center justify-center px-6 py-12 lg:py-0 lg:ml-15">
        <div className="">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Find wedding reception venues <br />
            near me
          </h1>
          <p className="text-lg text-gray-700 mb-1">
            Discover unique wedding reception venues for rent
          </p>
          <p className="text-lg text-gray-700 mb-6">
            perfect for your event.
          </p>
          <button className="bg-[#8559EC] text-white w-full h-12 text-xl sm:text-2xl">
            Explore now
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[40%] h-[32rem] sm:h-96 md:h-[600px] lg:h-full">
        <img
          src="/venue-banner.jpg"
          alt="Wedding Venue"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WeddingVenue;