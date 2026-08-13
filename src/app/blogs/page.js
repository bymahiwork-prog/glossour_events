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
        "Discover why Airbnb is becoming a preferred choice for corporate travel, group stays, business trips, and weekend getaways.",
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
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADER */}

        <div className="mb-14">

          <p className="text-sm uppercase tracking-[0.25em] text-[#B57A3C] font-semibold mb-4">
            Effortless Events
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Blog &amp; Resources
          </h1>

          <p className="mt-5 max-w-2xl text-gray-600 text-lg leading-8">
            Insights, guides, and ideas to help you plan unforgettable
            events, celebrations, stays, and experiences across Delhi NCR.
          </p>

        </div>

        {/* BLOG GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">

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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

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

      </div>

    </main>
  );
}
