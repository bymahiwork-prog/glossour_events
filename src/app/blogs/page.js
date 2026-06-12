export default function BlogsPage() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Blog & Resources
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Expert insights on weddings, corporate events,
          birthdays, venue selection and event planning.
        </p>

        <a
          href="/blogs/best-farmhouses-villas-private-parties-delhi-ncr"
          className="block overflow-hidden rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
        >
          {/* Blog Cover */}
          <img
            src="/blogs/farmhouse-guide-cover.png"
            alt="Best Farmhouses & Villas for Private Parties in Delhi NCR"
            className="w-full h-56 md:h-72 object-cover"
          />

          {/* Content */}
          <div className="p-8">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              Private Parties • Delhi NCR
            </p>

            <h2 className="text-3xl font-bold mb-4">
              Best Farmhouses & Villas for Private Parties in Delhi NCR (2026 Guide)
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              Discover the best farmhouses and villas for birthdays,
              anniversaries, bachelorette parties, cocktail evenings,
              and private celebrations across Delhi NCR.
            </p>

            <span className="font-semibold text-black">
              Read Article →
            </span>
          </div>
        </a>
      </div>
    </main>
  );
}
