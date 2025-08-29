export default function Reception() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation Section */}
      <div className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center text-[#FFFFFF] text-xl font-normal">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span className="mx-3"> ➡️ </span>
            <span className="">Wedding reception venues</span>
          </div>
        </div>
      </div>

      {/* Main Content Section - Centered */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
                  How wedding party venues work on Effortless Events
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Effortless Events is the easiest way to book unique venues for
                  wedding receptions. We also have spaces for productions and
                  meetings.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Unique venues */}
              <div>
                <h2 className="text-xl font-medium mb-4">Unique venues</h2>
                <p className="text-gray-300 leading-relaxed">
                  Every day we uncover new, creative spaces perfect for your
                  wedding party - from neighborhood galleries to hidden
                  rooftops, and beyond.
                </p>
              </div>

              {/* Honest pricing */}
              <div>
                <h2 className="text-xl font-medium mb-4">Honest pricing</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our spaces are priced to fit your budget. Hire by the hour for
                  your wedding reception without worrying about hidden fees.
                </p>
              </div>

              {/* Smooth bookings */}
              <div>
                <h2 className="text-xl font-medium mb-4">Smooth bookings</h2>
                <p className="text-gray-300 leading-relaxed">
                  No more messy contracts. We build the tools to make hiring out
                  a space for your wedding party as easy as the click of a
                  button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
