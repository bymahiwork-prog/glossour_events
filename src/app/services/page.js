import Head from "next/head";

import ServicesHero from "../../components/services/ServicesHero";
import ServicesStats from "../../components/services/ServicesStats";
import ServicesGrid from "../../components/services/ServicesGrid";
import EventTypes from "../../components/services/EventTypes";
import HowItWorks from "../../components/services/HowItWorks";
import DecorationGallery from "../../components/services/DecorationGallery";
import ServicesFAQ from "../../components/services/ServicesFAQ";
import ServicesCTA from "../../components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>
          Event Management Services in Delhi NCR | Effortless Events
        </title>

        <meta
          name="description"
          content="Effortless Events provides end-to-end event management services in Delhi NCR, including venue booking, event planning, décor, catering, bartending, weddings, parties and corporate events."
        />

        <meta
          name="keywords"
          content="event management services Delhi NCR, event planner Delhi, event management company Delhi, wedding planner Delhi, party planner Delhi, corporate event management Delhi, event decoration Delhi, party venues Delhi NCR"
        />

        <meta
          property="og:title"
          content="Event Management Services in Delhi NCR | Effortless Events"
        />

        <meta
          property="og:description"
          content="From venue booking and event décor to catering and on-ground execution, Effortless Events handles every detail under one roof."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.effortlessevents.in/services"
        />

        <link
          rel="canonical"
          href="https://www.effortlessevents.in/services"
        />
      </Head>

      <main className="bg-white text-black">

        {/* =====================================================
            01 — HERO
        ===================================================== */}

        <ServicesHero />


        {/* =====================================================
            02 — TRUST / STATISTICS
        ===================================================== */}

        <ServicesStats />


        {/* =====================================================
            03 — OUR SERVICES
        ===================================================== */}

        <ServicesGrid />


        {/* =====================================================
            04 — EVENT TYPES
        ===================================================== */}

        <EventTypes />


        {/* =====================================================
            05 — HOW IT WORKS
        ===================================================== */}

        <HowItWorks />


        {/* =====================================================
            06 — DECORATION GALLERY
        ===================================================== */}

        <DecorationGallery />


        {/* =====================================================
            07 — FREQUENTLY ASKED QUESTIONS
        ===================================================== */}

        <ServicesFAQ />


        {/* =====================================================
            08 — FINAL CTA
        ===================================================== */}

        <ServicesCTA />

      </main>
    </>
  );
}
