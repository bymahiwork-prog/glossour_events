import EffortLessEvent from "@/utils/home/EffortLessEvent";
import VenueShowcase from "@/utils/home/VenueShowcase";

import EventPlanningForm from "@/components/home/EventPlanningForm";
import TrustBar from "@/components/home/TrustBar";
import WhoWeAre from "@/components/home/WhoWeAre";
import EventGallery from "@/components/home/EventGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import ServiceAreas from "@/components/home/ServiceAreas";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

const fetchBanners = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE}/api/banner`, {
      cache: "no-store",
    });

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Invalid banner data:", data);
      return [];
    }

    return data.map((item) => ({
      imageSrc: item?.main_image
        ? `${process.env.NEXT_PUBLIC_IMG_URL || ""}${item.main_image}`
        : "/placeholder.jpg",
      subText: item?.product_name || "",
      location: item?.product_location || "",
      altText: `View of ${item?.product_name || "event venue"} in ${
        item?.product_location || "Delhi NCR"
      }`,
    }));
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
};

export default async function Home() {
  const sliderData = await fetchBanners();

  return (
    <>
      {/* Hero Section */}
      <EffortLessEvent sliderData={sliderData} />

      {/* Event Planning Form */}
      <EventPlanningForm />

      {/* Trust Bar */}
      <TrustBar />

      {/* Who We Are */}
      <WhoWeAre />

      {/* Venue Showcase */}
      <VenueShowcase />

      {/* Moments We've Brought to Life */}
      <EventGallery />

      {/* Why Delhi NCR Chooses Effortless Events */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Service Areas */}
      <ServiceAreas />

      {/* FAQ Section */}
      <FAQSection />

      {/* Google Map */}
      <MapReviewEmbed />

      {/* Final Call To Action */}
      <FinalCTA />
    </>
  );
}

function MapReviewEmbed() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1F1F1F] text-center mb-8">
          Find Us on Google
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=L57B%20Malviya%20Nagar%20New%20Delhi%20110017&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Effortless Events Location Map"
          />
        </div>
      </div>
    </section>
  );
}
