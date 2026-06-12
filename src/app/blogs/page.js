export default function BlogsPage() {
return ( <main className="min-h-screen bg-white pt-32 pb-20"> <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="mb-16">
      <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-3">
        Effortless Events Journal
      </p>

      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Blog & Resources
      </h1>

      <p className="text-xl text-gray-600 max-w-3xl">
        Expert insights on event planning, luxury venues,
        weddings, private parties, corporate celebrations,
        and unforgettable experiences across Delhi NCR.
      </p>
    </div>

    {/* Featured Blog */}
    <a
      href="/blogs/best-farmhouses-villas-private-parties-delhi-ncr"
      className="group block overflow-hidden rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src="/blogs/farmhouse-guide-cover.png"
          alt="Best Farmhouses & Villas for Private Parties in Delhi NCR"
          className="w-full h-[320px] md:h-[450px] object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3 text-sm uppercase tracking-wider text-gray-500 mb-4">
          <span>Private Parties</span>
          <span>•</span>
          <span>Delhi NCR</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-gray-700 transition-colors">
          Best Farmhouses & Villas for Private Parties in Delhi NCR (2026 Guide)
        </h2>

        <p className="text-lg text-gray-600 mb-6">
          Discover the best farmhouses and villas for birthdays,
          anniversaries, bachelorette parties, cocktail evenings,
          and private celebrations across Delhi NCR.
        </p>

        <span className="inline-flex items-center font-semibold text-black">
          Read Full Article →
        </span>
      </div>
    </a>

  </div>
</main>

);
}
