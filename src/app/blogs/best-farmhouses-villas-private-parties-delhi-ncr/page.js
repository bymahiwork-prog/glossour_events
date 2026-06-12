import Link from "next/link";

export const metadata = {
  title:
    "Best Farmhouses & Villas for Private Parties in Delhi NCR | Effortless Events",
  description:
    "Planning a private party in Delhi NCR? Discover top farmhouses and villas in Chattarpur, Gurgaon, Noida & more. Book stress-free with Effortless Events — venue + decor + catering, all managed for you.",
  keywords: [
    "farmhouse for party in Delhi",
    "villa booking Delhi NCR",
    "private party venue Gurgaon",
    "farmhouse rental Chattarpur",
    "bachelorette party venue Delhi",
    "birthday party farmhouse Noida",
    "private event venue Delhi NCR",
    "Effortless Events",
  ],
  openGraph: {
    title:
      "Best Farmhouses & Villas for Private Parties in Delhi NCR | Effortless Events",
    description:
      "Everything you need to know about booking a farmhouse or villa for a private party in Delhi NCR — and how to make the whole experience genuinely effortless.",
    url: "https://www.effortlessevents.in/blogs/best-farmhouses-villas-private-parties-delhi-ncr",
    siteName: "Effortless Events",
    type: "article",
  },
};

const faqs = [
  {
    q: "How much does it cost to book a farmhouse for a private party in Delhi NCR?",
    a: "Delhi NCR farmhouse rental prices typically range from ₹25,000 to ₹3,00,000+ depending on the property and duration. In Chattarpur, a mid-range farmhouse for 50–80 guests commonly costs ₹40,000–₹80,000 for a half-day slot. Gurgaon villas with pools tend to be at the higher end. Remember: venue rental is just one component — decor, catering, and entertainment are separate. At Effortless Events, we help you plan the full budget with zero surprises.",
  },
  {
    q: "Can I bring my own caterer and decorator to a farmhouse party?",
    a: "Most farmhouses in Delhi NCR allow outside vendors, but policies vary. Some properties have preferred vendor lists or charge extra for outside caterers. Always confirm: (a) whether outside catering is allowed, (b) if there's an additional charge, and (c) restrictions on decor materials. At Effortless Events, we already know the vendor policies of properties in our network and handle all negotiations upfront.",
  },
  {
    q: "What is the minimum guest count suitable for a farmhouse party?",
    a: "Farmhouses work best for groups of 20 and above. The sweet spot is 40–150 guests — large enough to fill the space, small enough to keep it personal and curated. For very intimate gatherings under 20 people, a villa with a private indoor-outdoor setup tends to work better.",
  },
  {
    q: "How far in advance should I book a farmhouse for a party in Delhi NCR?",
    a: "For weekend dates (Friday–Sunday), especially during peak months (October–February) and major festivals, book 4–8 weeks in advance. Popular farmhouses in Chattarpur and Gurgaon get booked out quickly during wedding and party season. For weekday events, 2–3 weeks is usually sufficient. Reach out to us early and we'll help you lock in the right venue before your preferred dates go.",
  },
  {
    q: "Does Effortless Events handle everything, or just the venue booking?",
    a: "Everything. Venue sourcing is just where we start. Once the venue is confirmed, our team manages decor, catering, entertainment (DJ, live artists, emcees), sound and lighting, photography, bartending, guest logistics, and on-ground coordination. You get a single point of contact for the entire experience — no juggling multiple vendors, no last-minute chaos.",
  },
];

const areas = [
  {
    name: "Chattarpur & Mehrauli",
    subtitle: "South Delhi",
    desc: "The original farmhouse heartland of Delhi. Hundreds of properties ranging from intimate garden setups to sprawling venues with pools, open lawns, and Mughal-inspired architecture.",
    bestFor: "Birthday parties, cocktail evenings, family celebrations",
  },
  {
    name: "Gurgaon",
    subtitle: "Sohna Road · Golf Course Road · Dwarka Expressway",
    desc: "Modern interiors, rooftop areas, and luxury amenities make Gurgaon villas perfect for upscale private events. The inventory has grown massively in the last few years.",
    bestFor: "Bachelorette parties, corporate social events, premium birthdays",
  },
  {
    name: "Noida & Greater Noida",
    subtitle: "Yamuna Expressway Belt",
    desc: "Spacious venues with competitive pricing. Properties along the Yamuna Expressway are gaining attention for larger celebrations that want maximum capacity without maximum spend.",
    bestFor: "Large birthday parties, anniversary gatherings, group celebrations",
  },
  {
    name: "Faridabad & Surajkund",
    subtitle: "Often Overlooked, Always Stunning",
    desc: "The Surajkund belt has resort-style properties that work beautifully for private events. Quieter, scenic, and ideal for daytime celebrations or weekend getaways combined with a party.",
    bestFor: "Day parties, sundowners, intimate family gatherings",
  },
];

const steps = [
  {
    num: "01",
    title: "Understanding Your Vision",
    desc: "A quick call or WhatsApp conversation to understand your occasion, guest count, aesthetic preferences, and budget. No lengthy forms.",
  },
  {
    num: "02",
    title: "Curated Venue Shortlist",
    desc: "We shortlist 3–5 venues from our network across Delhi NCR that genuinely match your requirements — not just whatever's available.",
  },
  {
    num: "03",
    title: "Site Visits & Finalisation",
    desc: "We coordinate site visits and handle all back-and-forth negotiations with the venue. You show up, see the space, and make the call.",
  },
  {
    num: "04",
    title: "End-to-End Event Production",
    desc: "Decor, catering, entertainment, sound, lighting, photography, and logistics — all coordinated under one roof with a single point of contact.",
  },
  {
    num: "05",
    title: "Day-of Execution",
    desc: "Our team is on the ground from setup to wrap-up. You arrive as a guest, not a coordinator.",
  },
];

export default function BlogPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .blog-root {
          font-family: 'DM Sans', sans-serif;
          color: #1a1a1a;
          background: #faf9f7;
          min-height: 100vh;
        }

        /* ── HERO ── */
        .blog-hero {
          position: relative;
          background: linear-gradient(160deg, #1c1c1c 0%, #2d2416 60%, #3a2e1a 100%);
          color: #fff;
          padding: 100px 24px 80px;
          overflow: hidden;
        }
        .blog-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 40%, rgba(212,175,95,0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .blog-hero-inner {
          max-width: 820px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .blog-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d4af5f;
          border: 1px solid rgba(212,175,95,0.4);
          padding: 5px 14px;
          border-radius: 2px;
          margin-bottom: 28px;
        }
        .blog-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 400;
          line-height: 1.18;
          color: #fff;
          margin: 0 0 24px;
          letter-spacing: -0.01em;
        }
        .blog-hero h1 em {
          font-style: italic;
          color: #d4af5f;
        }
        .blog-hero-meta {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.04em;
        }
        .blog-hero-meta span {
          margin: 0 10px;
          opacity: 0.4;
        }

        /* ── BODY LAYOUT ── */
        .blog-body {
          max-width: 820px;
          margin: 0 auto;
          padding: 64px 24px 80px;
        }

        /* ── PROSE ── */
        .prose p {
          font-size: 17px;
          line-height: 1.82;
          color: #2c2c2c;
          margin: 0 0 24px;
          font-weight: 300;
        }
        .prose strong {
          font-weight: 500;
          color: #1a1a1a;
        }

        /* ── SECTION HEADINGS ── */
        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d4af5f;
          margin: 0 0 12px;
        }
        .section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.25;
          margin: 0 0 20px;
          letter-spacing: -0.01em;
        }
        .section-heading em {
          font-style: italic;
          color: #8b6914;
        }

        /* ── DIVIDER ── */
        .divider {
          border: none;
          border-top: 1px solid #e8e2d8;
          margin: 56px 0;
        }

        /* ── WHY FARMHOUSES — PILLS ── */
        .reason-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 28px;
        }
        .reason-card {
          background: #fff;
          border: 1px solid #ede8de;
          border-radius: 6px;
          padding: 22px 24px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }
        .reason-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .reason-card h4 {
          font-size: 15px;
          font-weight: 500;
          color: #1a1a1a;
          margin: 0 0 6px;
        }
        .reason-card p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #5a5a5a;
          margin: 0;
          font-weight: 300;
        }

        /* ── AREAS ── */
        .area-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 28px;
        }
        @media (max-width: 640px) {
          .area-grid { grid-template-columns: 1fr; }
        }
        .area-card {
          background: #fff;
          border: 1px solid #ede8de;
          border-radius: 6px;
          padding: 28px 24px;
          position: relative;
          overflow: hidden;
        }
        .area-card::before {
          content: attr(data-emoji);
          position: absolute;
          top: 16px;
          right: 20px;
          font-size: 28px;
          opacity: 0.25;
        }
        .area-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: #1a1a1a;
          margin: 0 0 4px;
        }
        .area-subtitle {
          font-size: 11.5px;
          color: #d4af5f;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0 0 14px;
        }
        .area-card p {
          font-size: 14px;
          line-height: 1.7;
          color: #5a5a5a;
          margin: 0 0 14px;
          font-weight: 300;
        }
        .area-best {
          font-size: 12px;
          background: #faf6ee;
          border: 1px solid #e8dfc8;
          border-radius: 4px;
          padding: 6px 12px;
          color: #7a6030;
          font-weight: 400;
        }
        .area-best strong {
          font-weight: 500;
          color: #5a4418;
        }

        /* ── CHECKLIST ── */
        .checklist {
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
          display: grid;
          gap: 14px;
        }
        .checklist li {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          font-size: 15.5px;
          line-height: 1.65;
          color: #2c2c2c;
          font-weight: 300;
        }
        .check-mark {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #1c1c1c;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .check-mark svg {
          width: 11px;
          height: 11px;
          stroke: #d4af5f;
          stroke-width: 2.5;
          fill: none;
        }
        .checklist li strong {
          font-weight: 500;
          color: #1a1a1a;
        }

        /* ── HIDDEN CHALLENGE CALLOUT ── */
        .callout {
          background: linear-gradient(135deg, #1c1c1c 0%, #2d2416 100%);
          border-radius: 8px;
          padding: 40px 36px;
          color: #fff;
          margin: 48px 0;
          position: relative;
          overflow: hidden;
        }
        .callout::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(212,175,95,0.08);
          pointer-events: none;
        }
        .callout h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-weight: 400;
          margin: 0 0 16px;
          color: #fff;
        }
        .callout h3 em {
          font-style: italic;
          color: #d4af5f;
        }
        .callout p {
          font-size: 15.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.75);
          margin: 0 0 12px;
          font-weight: 300;
        }
        .callout p:last-child { margin: 0; }

        /* ── HOW WE WORK — STEPS ── */
        .steps-list {
          margin-top: 32px;
          display: grid;
          gap: 0;
          position: relative;
        }
        .steps-list::before {
          content: '';
          position: absolute;
          left: 28px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: #ede8de;
        }
        .step-item {
          display: flex;
          gap: 24px;
          padding: 0 0 36px;
          position: relative;
        }
        .step-item:last-child { padding-bottom: 0; }
        .step-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 500;
          color: #d4af5f;
          background: #faf9f7;
          border: 1px solid #d4af5f;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          letter-spacing: 0.04em;
        }
        .step-content {
          padding-top: 14px;
        }
        .step-content h4 {
          font-size: 16px;
          font-weight: 500;
          color: #1a1a1a;
          margin: 0 0 8px;
        }
        .step-content p {
          font-size: 14.5px;
          line-height: 1.7;
          color: #5a5a5a;
          margin: 0;
          font-weight: 300;
        }

        /* ── WHO BOOKS ── */
        .clients-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 28px;
        }
        @media (max-width: 540px) {
          .clients-grid { grid-template-columns: 1fr; }
        }
        .client-pill {
          background: #fff;
          border: 1px solid #ede8de;
          border-radius: 6px;
          padding: 16px 18px;
          font-size: 14px;
          color: #2c2c2c;
          font-weight: 300;
          line-height: 1.55;
        }
        .client-pill::before {
          content: '→';
          color: #d4af5f;
          margin-right: 8px;
          font-weight: 500;
        }

        /* ── CTA BLOCK ── */
        .cta-block {
          background: linear-gradient(160deg, #1c1c1c 0%, #2a2010 100%);
          border-radius: 10px;
          padding: 52px 40px;
          text-align: center;
          color: #fff;
          margin-top: 64px;
        }
        .cta-block h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 400;
          color: #fff;
          margin: 0 0 16px;
        }
        .cta-block h2 em {
          font-style: italic;
          color: #d4af5f;
        }
        .cta-block p {
          font-size: 15.5px;
          line-height: 1.7;
          color: rgba(255,255,255,0.65);
          margin: 0 0 32px;
          font-weight: 300;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #d4af5f;
          color: #1a1a1a;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover {
          background: #c9a450;
          transform: translateY(-1px);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          padding: 14px 28px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.3);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: border-color 0.2s, transform 0.15s;
        }
        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.6);
          transform: translateY(-1px);
        }

        /* ── FAQ ── */
        .faq-section {
          margin-top: 72px;
        }
        .faq-list {
          margin-top: 32px;
          display: grid;
          gap: 14px;
        }
        .faq-item {
          background: #fff;
          border: 1px solid #ede8de;
          border-radius: 6px;
          overflow: hidden;
        }
        .faq-q {
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          padding: 22px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #1a1a1a;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          line-height: 1.5;
        }
        .faq-q:hover { color: #8b6914; }
        .faq-icon {
          font-size: 20px;
          color: #d4af5f;
          flex-shrink: 0;
          line-height: 1;
          margin-top: 1px;
          transition: transform 0.2s;
        }
        .faq-item[open] .faq-icon {
          transform: rotate(45deg);
        }
        .faq-a {
          padding: 0 24px 22px;
          font-size: 14.5px;
          line-height: 1.75;
          color: #5a5a5a;
          font-weight: 300;
          border-top: 1px solid #ede8de;
          padding-top: 18px;
        }

        /* ── AUTHOR BIO ── */
        .author-bio {
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid #e8e2d8;
          font-size: 13px;
          color: #888;
          line-height: 1.6;
        }
        .author-bio strong {
          color: #1a1a1a;
          font-weight: 500;
        }

        @media (max-width: 600px) {
          .blog-hero { padding: 72px 20px 56px; }
          .blog-body { padding: 40px 20px 60px; }
          .callout { padding: 28px 22px; }
          .cta-block { padding: 36px 22px; }
          .steps-list::before { left: 22px; }
          .step-num { width: 44px; height: 44px; font-size: 11px; }
        }
      `}</style>

      <div className="blog-root">
        {/* HERO */}
        <header className="blog-hero">
          <div className="blog-hero-inner">
            <div className="blog-tag">Venue Guide · Delhi NCR</div>
            <h1>
              Best Farmhouses & Villas for{" "}
              <em>Private Parties</em> in Delhi NCR
            </h1>
            <div className="blog-hero-meta">
              Effortless Events <span>·</span> Private Celebrations Guide{" "}
              <span>·</span> 8 min read
            </div>
          </div>
        </header>

        {/* BODY */}
        <main className="blog-body">
          {/* INTRO */}
          <div className="prose">
            <p>
              So you've decided to throw a party. Not a restaurant dinner, not a
              banquet hall booking. A <strong>real private celebration</strong> —
              your people, your music, your vibe, your rules. The sort of night
              everyone keeps talking about for months.
            </p>
            <p>
              In Delhi NCR, farmhouses and villas have become the default go-to
              for exactly this. They give you breathing space, genuine privacy,
              and the flexibility to build something that feels completely yours.
              A 30th birthday blowout in Chattarpur, a bachelorette weekend in
              Gurgaon, a quiet anniversary at a villa in Noida.
            </p>
            <p>
              But finding the right venue is trickier than it looks. You need it
              to match your headcount, your budget, your aesthetic — and actually
              deliver in the real world, not just in the listing photos. This
              guide cuts through the noise.
            </p>
          </div>

          <hr className="divider" />

          {/* WHY FARMHOUSES */}
          <div className="section-label">The Shift</div>
          <h2 className="section-heading">
            Why Farmhouses & Villas Have Become Delhi NCR&apos;s{" "}
            <em>Favourite</em> Private Party Venues
          </h2>
          <div className="prose">
            <p>
              More people — especially millennials and young professionals — are
              choosing private venue parties over conventional settings. Here&apos;s
              what&apos;s behind it:
            </p>
          </div>
          <div className="reason-grid">
            {[
              {
                icon: "🔒",
                title: "Complete Privacy",
                desc: "No random guests at the next table. No shared spaces. The entire property is yours for the duration of the event, uninterrupted.",
              },
              {
                icon: "🎨",
                title: "Freedom to Customise",
                desc: "Banquet halls have fixed packages and rigid layouts. Farmhouses let you bring your own decor team, decide the music volume, and shape the vibe entirely your way.",
              },
              {
                icon: "🌿",
                title: "Space to Breathe",
                desc: "Most farmhouses around Chattarpur, Gurgaon, and Noida have lawns, pools, outdoor seating, and indoor areas — guests aren't cramped into one room.",
              },
              {
                icon: "📸",
                title: "Instagram-Worthy Setups",
                desc: "Green lawns, fairy lights, and open skies photograph beautifully. Your celebration deserves a backdrop to match.",
              },
              {
                icon: "⭐",
                title: "It Feels Special",
                desc: "Having an entire property to yourself makes the event feel curated, exclusive, and genuinely personal — not a generic template.",
              },
            ].map((r) => (
              <div className="reason-card" key={r.title}>
                <div className="reason-icon">{r.icon}</div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="divider" />

          {/* AREAS */}
          <div className="section-label">Location Guide</div>
          <h2 className="section-heading">
            Top Areas for Farmhouse & Villa Parties{" "}
            <em>Across Delhi NCR</em>
          </h2>
          <div className="area-grid">
            {areas.map((a) => (
              <div className="area-card" key={a.name} data-emoji={a.emoji}>
                <h3>{a.name}</h3>
                <div className="area-subtitle">{a.subtitle}</div>
                <p>{a.desc}</p>
                <div className="area-best">
                  <strong>Best for:</strong> {a.bestFor}
                </div>
              </div>
            ))}
          </div>

          <hr className="divider" />

          {/* CHECKLIST */}
          <div className="section-label">Due Diligence</div>
          <h2 className="section-heading">
            What to Look for When Booking a Farmhouse for a{" "}
            <em>Private Party</em>
          </h2>
          <div className="prose">
            <p>Not all farmhouses are equal. This checklist saves you from booking regret:</p>
          </div>
          <ul className="checklist">
            {[
              [
                "Guest Capacity vs. Actual Comfort",
                'A venue that "fits 100 guests" in its listing might mean a cramped experience. Always ask for the comfortable capacity.',
              ],
              [
                "Catering Policy",
                "Some venues insist on in-house catering (often average quality at inflated prices). Others allow outside caterers. Clarify this before signing anything.",
              ],
              [
                "Sound Restrictions",
                "Many farmhouses in residential areas have a 10 PM or 11 PM hard stop on music. If you're planning a late-night party, check this early — it's a potential deal-breaker.",
              ],
              [
                "Included vs. Additional Costs",
                "Parking, generator backup, security, basic furniture, washrooms — check what's included in the quoted price and what gets added later.",
              ],
              [
                "Setup & Breakdown Time",
                "How many hours before the event can your decor team access the property? Are there overtime charges if you run late?",
              ],
              [
                "On-Ground Property Staff",
                "Is there a venue coordinator on site during your event, or are you on your own if something goes wrong?",
              ],
            ].map(([title, desc]) => (
              <li key={title}>
                <div className="check-mark">
                  <svg viewBox="0 0 12 12">
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                </div>
                <span>
                  <strong>{title}.</strong> {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* HIDDEN CHALLENGE CALLOUT */}
          <div className="callout">
            <h3>
              The <em>Hidden Challenge</em> Nobody Talks About
            </h3>
            <p>
              Here&apos;s what 99% of people learn only after they&apos;ve signed the
              venue contract: <strong style={{ color: "#fff" }}>the venue is really just the starting point.</strong>
            </p>
            <p>
              You still need to bring in a decor vendor, catering, a DJ or
              artists, bartender, photographer, and sound and lighting — and
              someone needs to be physically present managing all of it on the
              day itself. Each vendor has their own timeline and expectations.
              Getting them all to work together seamlessly takes real effort.
            </p>
            <p>
              Most party hosts end up doing this coordination themselves. And by
              the time the event rolls around, they&apos;re running between vendors,
              exhausted — instead of celebrating with their guests.
            </p>
          </div>

          {/* HOW WE SOLVE IT */}
          <div className="section-label">How We Work</div>
          <h2 className="section-heading">
            How Effortless Events <em>Solves This</em>
          </h2>
          <div className="prose">
            <p>
              At Effortless Events, we manage the entire experience — from venue
              identification to the last cleanup after the party. Here&apos;s how a
              typical private party engagement works:
            </p>
          </div>
          <div className="steps-list">
            {steps.map((s) => (
              <div className="step-item" key={s.num}>
                <div className="step-num">{s.num}</div>
                <div className="step-content">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="prose" style={{ marginTop: "28px" }}>
            <p>
              The result? You&apos;re present at your own party — relaxed,
              celebrating, creating memories — while we handle everything behind
              the scenes.
            </p>
          </div>

          <hr className="divider" />

          {/* WHO BOOKS */}
          <div className="section-label">Our Clients</div>
          <h2 className="section-heading">
            Who Books Private Farmhouse Parties <em>With Us</em>
          </h2>
          <div className="clients-grid">
            {[
              "Young professionals planning milestone birthdays (25th, 30th, 40th) in Gurgaon and South Delhi",
              "Groups of friends organising bachelorette weekends at villa properties",
              "Families celebrating anniversaries and pujas at farmhouses in Chattarpur",
              "Corporate teams booking private venues for team outings and after-parties",
              "NRI families visiting Delhi who want a premium, stress-free celebration experience",
            ].map((c) => (
              <div className="client-pill" key={c}>
                {c}
              </div>
            ))}
          </div>
          <div className="prose" style={{ marginTop: "24px" }}>
            <p>
              What they all have in common: they want the event to be special,
              and they don&apos;t want to spend three weeks managing vendors to make
              it happen.
            </p>
          </div>

          {/* CTA */}
          <div className="cta-block">
            <h2>
              Ready to Plan Your <em>Private Party?</em>
            </h2>
            <p>
              Whether you have a venue in mind or need us to find the perfect
              one, we&apos;d love to hear about your celebration.
            </p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917838008069?text=Hi%20Effortless%20Events!%20I%20want%20to%20plan%20a%20private%20party."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us Now
              </a>
              <a
                href="https://www.effortlessevents.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Explore Our Work →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="faq-section">
            <div className="section-label">Common Questions</div>
            <h2 className="section-heading">
              Frequently Asked <em>Questions</em>
            </h2>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <details className="faq-item" key={i}>
                  <summary className="faq-q">
                    <span>{faq.q}</span>
                    <span className="faq-icon">+</span>
                  </summary>
                  <div className="faq-a">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>

          {/* AUTHOR BIO */}
          <div className="author-bio">
            <strong>Effortless Events Pvt. Ltd.</strong> is a full-service event
            management company based in Delhi NCR, specialising in private
            celebrations, weddings, and corporate events across Delhi, Gurgaon,
            Noida, Faridabad, Ghaziabad, and Greater Noida.{" "}
            <Link href="https://www.effortlessevents.in" style={{ color: "#8b6914", textDecoration: "underline" }}>
              www.effortlessevents.in
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
