export default function BlogsPage() {
  const blogs = [
    {
      href: "/blogs/best-farmhouses-villas-private-parties-delhi-ncr",
      image: "/blogs/farmhouse-guide-cover.png",
      alt: "Best Farmhouses and Villas for Private Parties in Delhi NCR",
      category: "Private Parties",
      title: "Best Farmhouses & Villas for Private Parties in Delhi NCR",
      description:
        "Discover the best farmhouses and villas for birthdays, anniversaries, and private celebrations across Delhi NCR.",
    },

    {
      href: "/blogs/best-airbnb-farmhouse-for-private-party-delhi-ncr",
      image: "/blogs/airbnb-farmhouse-cover.png",
      alt: "Best Airbnb Farmhouses for Private Parties in Delhi NCR",
      category: "Airbnb Guide",
      title: "Best Airbnb Farmhouses for Private Parties in Delhi NCR",
      description:
        "Discover luxury Airbnb farmhouses with private pools, spacious lawns, and premium venues for birthdays, bachelor parties, anniversaries, and weekend celebrations.",
    },

    {
      href: "/blogs/airbnb-booking-weekend-getaway-delhi-ncr",
      image: "/blogs/airbnb-booking-weekend-getaway-delhi-ncr-cover.png",
      alt: "Airbnb Booking for Weekend Getaways in Delhi NCR",
      category: "Weekend Getaways",
      title:
        "Airbnb Booking for Weekend Getaways with Friends & Family",
      description:
        "Discover luxury Airbnb villas and private farmhouses across Delhi NCR for family vacations, birthday celebrations, staycations, pool parties, and relaxing weekend escapes.",
    },

    {
      href: "/blogs/corporate-event-planning-mistakes",
      image: "/blogs/corporate-event-planning-mistakes-cover.png",
      alt: "10 Event Planning Mistakes That Can Ruin Your Corporate Event",
      category: "Corporate Events",
      title:
        "10 Event Planning Mistakes That Can Ruin Your Corporate Event",
      description:
        "Learn the most common corporate event planning mistakes and how to avoid them, from budgeting and venue selection to guest experience and technical preparation.",
    },

    {
      href: "/blogs/how-to-choose-the-right-event-management-company",
      image: "/blogs/how-to-choose-event-management-company-cover.png",
      alt: "How to Choose the Right Event Management Company for Your Business",
      category: "Event Management",
      title:
        "How to Choose the Right Event Management Company for Your Business",
      description:
        "Learn what to look for in an event management company, including experience, communication, creativity, planning, vendor networks, budget transparency, and client reviews.",
    },

    {
      href: "/blogs/why-booking-an-airbnb-is-the-smart-choice",
      image:
        "/blogs/airbnb-for-group-stays-and-corporate-travel-cover.png",
      alt:
        "Why Booking an Airbnb Is the Smart Choice for Group Stays and Corporate Travel",
      category: "Airbnb & Corporate Travel",
      title:
        "Why Booking an Airbnb Is the Smart Choice for Group Stays & Corporate Travel",
      description:
        "Discover why Airbnb is becoming a preferred choice for corporate travel, group stays, business trips, and weekend getaways, with more space, comfort, privacy, and flexibility.",
    },

    {
      href: "/blogs/how-to-choose-perfect-wedding-planner-delhi",
      image: "/blogs/wedding-planner-delhi-guide-cover.png",
      alt: "How to Choose the Perfect Wedding Planner in Delhi",
      category: "Wedding Planning",
      title:
        "How to Choose the Perfect Wedding Planner in Delhi: A Complete Guide",
      description:
        "Discover how to choose the right wedding planner in Delhi, evaluate experience, compare portfolios, understand planning processes, and create a seamless wedding celebration.",
    },
    {
  href: "/blogs/how-much-does-event-management-cost-delhi-ncr",
  image: "/blogs/how-much-does-event-management-cost-delhi-ncr.png",
  alt: "How Much Does Event Management Cost in Delhi NCR? A Complete Pricing Guide for Businesses",
  category: "Corporate Events",
  title:
    "How Much Does Event Management Cost in Delhi NCR? A Complete Pricing Guide for Businesses",
  description:
    "Understand event management costs in Delhi NCR, including venue pricing, catering, décor, production, entertainment, staffing, planning fees, and corporate event budgeting.",
},
    {
  href: "/blogs/corporate-event-ideas-delhi-ncr",
  image: "/blogs/corporate-event-ideas-delhi-ncr.png",
  alt: "15 Corporate Event Ideas in Delhi NCR That Will Impress Your Guests",
  category: "Corporate Events",
  title:
    "15 Corporate Event Ideas in Delhi NCR That Will Impress Your Guests",
  description:
    "Discover 15 creative corporate event ideas in Delhi NCR, from luxury gala dinners and team-building activities to networking evenings, corporate retreats, product launches, and adventure experiences.",
},
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">

      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-black text-white">

        {/* Decorative Gold Circle */}

        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full border border-[#B57A3C]/20" />

        <div className="absolute -bottom-48 -left-40 w-[500px] h-[500px] rounded-full border border-[#B57A3C]/10" />

        {/* Subtle Gold Line */}

        <div className="absolute top-0 right-[32%] w-px h-full bg-gradient-to-b from-transparent via-[#B57A3C]/20 to-transparent" />

        {/* Hero Content */}

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-28">

          <div className="max-w-4xl">

            {/* Eyebrow */}

            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#D9B56D] font-semibold mb-7">
              The Effortless Journal
            </p>

            {/* Main Heading */}

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight mb-8">
              Stories, Ideas
              <br />
              <span className="text-[#D9B56D]">
                &amp; Inspiration
              </span>
            </h1>

            {/* Description */}

            <p className="max-w-2xl text-white/70 text-lg md:text-xl leading-8 mb-10">
              Discover thoughtful guides, expert insights, and inspiration
              for weddings, celebrations, corporate events, luxury stays,
              and unforgettable experiences across Delhi NCR.
            </p>

            {/* CTA */}

            <a
              href="#latest-articles"
              className="inline-flex items-center gap-3 border border-[#D9B56D] text-[#D9B56D] px-7 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[#D9B56D] hover:text-black transition duration-300"
            >
              Explore Articles

              <span className="text-lg">
                ↓
              </span>
            </a>

          </div>

          {/* Hero Categories */}

          <div className="mt-20 pt-7 border-t border-white/10">

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/50">

              <span>
                Weddings
              </span>

              <span>
                Events
              </span>

              <span>
                Private Celebrations
              </span>

              <span>
                Airbnb Stays
              </span>

              <span>
                Corporate Travel
              </span>

              <span>
                Delhi NCR
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* BLOG SECTION */}
      {/* ===================================================== */}

      <section
        id="latest-articles"
        className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24"
      >

        {/* Section Heading */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#B57A3C] font-semibold mb-3">
              Latest Articles
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              Explore Our Journal
            </h2>

          </div>

          <p className="mt-5 md:mt-0 max-w-md text-gray-500 leading-7 text-sm md:text-right">
            Practical guides, planning advice, and inspiration curated by
            Effortless Events.
          </p>

        </div>


        {/* BLOG GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

          {blogs.map((blog, index) => (

            <a
              key={index}
              href={blog.href}
              className="group block"
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-[4/3] mb-6">

                <img
                  src={blog.image}
                  alt={blog.alt}
                  loading={index > 2 ? "lazy" : "eager"}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />

              </div>


              {/* CATEGORY */}

              <p className="text-xs uppercase tracking-[0.18em] text-[#B57A3C] font-semibold mb-3">
                {blog.category}
              </p>


              {/* TITLE */}

              <h2 className="text-2xl font-bold leading-tight text-black mb-3 group-hover:text-[#B57A3C] transition-colors duration-300">
                {blog.title}
              </h2>


              {/* DESCRIPTION */}

              <p className="text-gray-600 leading-7 text-[15px] mb-5">
                {blog.description}
              </p>


              {/* READ ARTICLE */}

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-black group-hover:text-[#B57A3C] transition-colors duration-300">

                Read Article

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </span>

            </a>

          ))}

        </div>

      </section>


      {/* ===================================================== */}
      {/* BOTTOM CTA */}
      {/* ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

        <div className="relative overflow-hidden rounded-3xl bg-black text-white px-8 py-16 md:px-16 md:py-20 text-center">

          {/* Decorative Circle */}

          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full border border-[#B57A3C]/20" />

          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full border border-[#B57A3C]/10" />

          <div className="relative">

            <p className="text-xs uppercase tracking-[0.3em] text-[#D9B56D] font-semibold mb-5">
              Effortless Events
            </p>

            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">
              Planning Something
              <br />
              <span className="text-[#D9B56D]">
                Unforgettable?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-white/70 leading-8 mb-9">
              From weddings and private celebrations to corporate events
              and luxury stays, let our team help you create an experience
              that feels truly effortless.
            </p>

            <a
              href="https://wa.me/917838008069"
              className="inline-flex items-center justify-center bg-[#D9B56D] text-black px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-white transition duration-300"
            >
              Get in Touch
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
