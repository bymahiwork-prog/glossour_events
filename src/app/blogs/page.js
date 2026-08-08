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
                src="/blogs/airbnb-farmhouse-cover.png
                  "
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
                  {/* BLOG 3 */}

<a
  href="/blogs/airbnb-booking-weekend-getaway-delhi-ncr"
  className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
>

  <div className="lg:w-2/5">
    <img
      src="/blogs/airbnb-booking-weekend-getaway-delhi-ncr-cover.png"
      alt="Airbnb Booking for Weekend Getaways in Delhi NCR"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="lg:w-3/5 p-10 flex flex-col justify-center">

    <span className="text-sm uppercase tracking-widest text-[#B57A3C] font-semibold mb-3">
      Weekend Getaways
    </span>

    <h2 className="text-4xl font-bold mb-5">
      Airbnb Booking for Weekend Getaways with Friends &amp; Family
    </h2>

    <p className="text-gray-600 leading-8 mb-8">
      Discover luxury Airbnb villas and private farmhouses across Delhi NCR
      for family vacations, birthday celebrations, staycations, pool parties,
      and relaxing weekend escapes.
    </p>

    <span className="font-semibold text-[#B57A3C]">
      Read Article →
    </span>

  </div>

</a>

                  {/* BLOG 4 */}

          <a
            href="/blogs/corporate-event-planning-mistakes"
            className="flex flex-col lg:flex-row-reverse bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
          >

            <div className="lg:w-2/5">
              <img
                src="/blogs/corporate-event-planning-mistakes-cover.png"
                alt="10 Event Planning Mistakes That Can Ruin Your Corporate Event"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:w-3/5 p-10 flex flex-col justify-center">

              <span className="text-sm uppercase tracking-widest text-[#B57A3C] font-semibold mb-3">
                Corporate Events
              </span>

              <h2 className="text-4xl font-bold mb-5">
                10 Event Planning Mistakes That Can Ruin Your Corporate Event (And How to Avoid Them)
              </h2>

              <p className="text-gray-600 leading-8 mb-8">
                Learn the most common corporate event planning mistakes and how
                to avoid them. From budgeting and venue selection to guest
                experience and technical preparation, discover expert tips for
                planning successful business events.
              </p>

              <span className="font-semibold text-[#B57A3C]">
                Read Article →
              </span>

            </div>

          </a>

                  {/* BLOG 5 */}

      <a
        href="/blogs/how-to-choose-the-right-event-management-company"
        className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
      >

        <div className="lg:w-2/5">
          <img
            src="/blogs/how-to-choose-event-management-company-cover.png"
            alt="How to Choose the Right Event Management Company for Your Business"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-3/5 p-10 flex flex-col justify-center">

          <span className="text-sm uppercase tracking-widest text-[#B57A3C] font-semibold mb-3">
            Event Management
          </span>

          <h2 className="text-4xl font-bold mb-5">
            How to Choose the Right Event Management Company for Your Business
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            Learn how to choose the right event management company for your
            business. Discover what to look for in experience, communication,
            creativity, planning, budget transparency, vendor networks and
            client reviews.
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
