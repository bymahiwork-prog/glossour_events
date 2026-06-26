export default function BlogsPage() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-12">
          Blog & Resources
        </h1>

        <div className="space-y-12">

          {/* BLOG 1 */}

          <a
            href="/blogs/best-farmhouses-villas-private-parties-delhi-ncr"
            className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
          >

            <div className="lg:w-2/5">
              <img
                src="/blogs/farmhouse-guide-cover.png"
                alt="Best Farmhouses & Villas for Private Parties in Delhi NCR"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:w-3/5 p-10 flex flex-col justify-center">

              <span className="text-sm uppercase tracking-widest text-[#B57A3C] font-semibold mb-3">
                Private Parties
              </span>

              <h2 className="text-4xl font-bold mb-5">
                Best Farmhouses & Villas for Private Parties in Delhi NCR
              </h2>

              <p className="text-gray-600 leading-8 mb-8">
                Discover the best farmhouses and villas for birthdays,
                anniversaries and private celebrations across Delhi NCR.
              </p>

              <span className="font-semibold text-[#B57A3C]">
                Read Article →
              </span>

            </div>

          </a>

          {/* BLOG 2 */}

          <a
            href="/blogs/best-airbnb-farmhouse-for-private-party-delhi-ncr"
            className="flex flex-col lg:flex-row-reverse bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
          >

            <div className="lg:w-2/5">
              <img
                src="/blogs/airbnb-farmhouse-cover.jpg"
                alt="Best Airbnb Farmhouses for Private Parties in Delhi NCR"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:w-3/5 p-10 flex flex-col justify-center">

              <span className="text-sm uppercase tracking-widest text-[#B57A3C] font-semibold mb-3">
                Airbnb Guide
              </span>

              <h2 className="text-4xl font-bold mb-5">
                Best Airbnb Farmhouses for Private Parties in Delhi NCR
              </h2>

              <p className="text-gray-600 leading-8 mb-8">
                Discover luxury Airbnb farmhouses with private pools,
                spacious lawns and premium venues for birthdays,
                bachelor parties, anniversaries and weekend celebrations.
              </p>

              <span className="font-semibold text-[#B57A3C]">
                Read Article →
              </span>

            </div>

          </a>

        </div>

      </div>
    </main>
  );
}
