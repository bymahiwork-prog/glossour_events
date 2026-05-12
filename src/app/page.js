import BookSpace from "@/utils/home/BookSpace";
import EffortLessEvent from "@/utils/home/EffortLessEvent";
import Locations from "@/utils/home/Locations";
import MadeInEvents from "@/utils/home/MadeInEvents";
import VenueShowcase from "@/utils/home/VenueShowcase";
import EventPlanningForm from "@/components/home/EventPlanningForm";

const fetchBanners = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE + "/api/banner");
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
  const data = await fetchBanners();

  return (
    <>
      {/* Hero Section */}
      <EffortLessEvent sliderData={data} />

      {/* Event Planning Form */}
      <EventPlanningForm />

      {/* Existing Sections */}
      <BookSpace />
      <MadeInEvents />
      <Locations />
      <VenueShowcase />
      <MapReviewEmbed />
    </>
  );
}

// Google Map Section
const MapReviewEmbed = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          Find Us on Google
        </h2>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.676728394931!2d77.2073501!3d28.532994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21dba0fa36f%3A0x4376aad0a94fc15d!2sL57B%2C%20Captain%20Hitesh%20Mehta%20Marg%2C%20Block%20L%2C%20Malviya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1736220000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
