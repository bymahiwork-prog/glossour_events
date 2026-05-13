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

/**
 * Fetch hero banner images from your existing API
 */
const fetchBanners = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE}/api/banner`,
      {
        cache: "no-store",
      }
    );

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
        item?.product_location || "beautiful location"
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
      {/* 1. Hero Section */}
      <EffortLessEvent sliderData={sliderData} />

      {/* 2. Event Planning Form */}
      <EventPlanningForm />

      {/* 3. Trust Bar */}
      <TrustBar />

      {/* 4. Who We Are */}
      <WhoWeAre />

      {/* 5. Venue Showcase */}
      <VenueShowcase />

      {/* 6. Moments We've Brought to Life */}
      <EventGallery />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Service Areas */}
      <ServiceAreas />

      {/* 10. FAQ Section */}
      <FAQSection />

      {/* 11. Google Map */}
      <MapReviewEmbed />

      {/* 12. Final CTA */}
      <FinalCTA />
    </>
  );
}

/**
 * Google Map Section
 */
function MapReviewEmbed() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1F1F1F] text-center mb-8">
          Find Us on Google
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-lg">
          <iframe
            title="Effortless Events Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.676728394931!2d77.2073501!3d28.532994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21dba0fa36f%3A0x4376aad0a94fc15d!2sL57B%2C%20Captain%20Hitesh%20Mehta%20Marg%2C%20Block%20L%2C%20Malviya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1736220000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
