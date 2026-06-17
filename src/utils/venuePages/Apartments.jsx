export default function Apartments() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Breadcrumb */}
      <div className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center text-white text-lg font-normal">
            <span className="hover:text-gray-300 cursor-pointer">
              Home
            </span>

            <span className="mx-3">→</span>

            <span>Apartments</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

            {/* Left */}

            <div>

              <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
                Find Premium Apartments on Effortless Events
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Discover premium apartments perfect for parties, birthdays,
                staycations, family gatherings and private celebrations.
                Browse verified properties across Delhi NCR with transparent
                pricing and seamless booking.
              </p>

            </div>

            {/* Right */}

            <div className="space-y-12">

              <div>

                <h2 className="text-xl font-medium mb-4">
                  Premium Apartments
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  Browse carefully selected luxury apartments ideal for
                  intimate celebrations, weekend stays and private events.
                </p>

              </div>

              <div>

                <h2 className="text-xl font-medium mb-4">
                  Transparent Pricing
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  Compare verified apartment rentals with clear pricing and
                  no hidden charges.
                </p>

              </div>

              <div>

                <h2 className="text-xl font-medium mb-4">
                  Easy Booking
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  Book your preferred apartment quickly with the help of
                  Effortless Events and enjoy a smooth experience from enquiry
                  to confirmation.
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
