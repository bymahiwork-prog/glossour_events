import Head from "next/head";

import ServicesHero from "../../components/services/ServicesHero";
import ServicesStats from "../../components/services/ServicesStats";
import ServicesGrid from "../../components/services/ServicesGrid";
import HowItWorks from "../../components/services/HowItWorks";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>
          Event Management Services in Delhi NCR | Effortless Events
        </title>

        <meta
          name="description"
          content="Explore Effortless Events for end-to-end event management services in Delhi NCR, including venue booking, event décor, catering, bartending, weddings, parties and corporate events."
        />

        <meta
          name="keywords"
          content="event management services Delhi NCR, event planner Delhi, event management company Delhi, wedding planner Delhi, party planner Delhi, corporate event management Delhi"
        />

        <meta
          property="og:title"
          content="Event Management Services in Delhi NCR | Effortless Events"
        />

        <meta
          property="og:description"
          content="From venue booking and décor to catering and event execution, Effortless Events handles every detail under one roof."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Head>

      <main className="bg-white text-black">

        {/* Hero */}
        <ServicesHero />

        {/* Trust / Statistics */}
        <ServicesStats />

        {/* Services */}
        <ServicesGrid />

        {/* How It Works */}
        <HowItWorks />

      </main>
    </>
  );
}
