export default function BlogsPage() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Blog & Resources
        </h1>

        <div className="grid gap-10">

          {/* Blog 1 */}

          <a
            href="/blogs/best-farmhouses-villas-private-parties-delhi-ncr"
            className="block border rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src="/blogs/farmhouse-guide-cover.png"
              alt="Best Farmhouses & Villas for Private Parties in Delhi NCR"
              className="w-full h-72 object-cover"
            />

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-3">
                Best Farmhouses & Villas for Private Parties in Delhi NCR
              </h2>

              <p className="text-gray-600">
                Discover the best farmhouses and villas for birthdays,
                anniversaries and private celebrations across Delhi NCR.
              </p>
            </div>
          </a>

          {/* Blog 2 */}

          <a
            href="/blogs/best-airbnb-farmhouse-for-private-party-delhi-ncr"
            className="block border rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src="/blogs/airbnb-farmhouse-cover.png"
              alt="Best Airbnb Farmhouses for Private Parties in Delhi NCR"
              className="w-full h-72 object-cover"
            />

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-3">
                Best Airbnb Farmhouses for Private Parties in Delhi NCR
              </h2>

              <p className="text-gray-600">
                Discover luxury Airbnb farmhouses with private pools,
                spacious lawns and premium venues for birthdays,
                bachelor parties, anniversaries and weekend celebrations
                across Delhi NCR.
              </p>
            </div>
          </a>

        </div>

      </div>
    </main>
  );
}
