export default function BlogsPage() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Blog & Resources
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Expert insights on weddings, corporate events,
          birthdays, venue selection and event planning.
        </p>

        <a
          href="/blogs/best-farmhouses-villas-private-parties-delhi-ncr"
          className="block overflow-hidden border rounded-2xl hover:shadow-xl transition-all duration-300"
        >
          <img
            src="/blogs/farmhouse-guide-cover.jpg"
            alt="Best Farmhouses & Villas for Private Parties in Delhi NCR"
            className="w-full h-[400px] object-cover"
          />

          <div className="p-8">
            <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              Private Parties • Delhi NCR
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Best Farmhouses & Villas for Private Parties in Delhi NCR (2026 Guide)
            </h2>

            <p className="text-gray-600 text-lg">
              Discover the best farmhouses and villas for birthdays,
              anniversaries, bachelorette parties, cocktail evenings,
              and private celebrations across Delhi NCR.
            </p>

            <div className="mt-6 font-medium">
              Read Article →
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
