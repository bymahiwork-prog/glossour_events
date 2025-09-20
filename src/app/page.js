import BookSpace from "@/utils/home/BookSpace";
import EffortLessEvent from "@/utils/home/EffortLessEvent";
import Locations from "@/utils/home/Locations";
import MadeInEvents from "@/utils/home/MadeInEvents";
import VenueShowcase from "@/utils/home/VenueShowcase";

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
        : "/placeholder.jpg", // Fallback image
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
  console.log(data);
  return (
    <>
      <EffortLessEvent sliderData={data} />

      <BookSpace />
      <MadeInEvents />
      <Locations />
      <VenueShowcase />
      <MapReviewEmbed />
    </>
  );
}

// components/MapReviewEmbed.js

const MapReviewEmbed = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          Find Us on Google
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52581674093!2d76.76358307691756!3d28.64368474706565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c17dafc533%3A0xfcfc899d0e7a065a!2sEffortless%20Events%20Pvt.ltd!5e0!3m2!1sen!2sin!4v1755550682021!5m2!1sen!2sin"
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
