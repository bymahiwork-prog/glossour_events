import Locations from "@/components/Locations";
import EffortLessEvent from "@/components/EffortLessEvent";
import BookSpace from "@/components/BookSpace";
import MadeInEvents from "@/components/MadeInEvents";
import WhyEffortLess from "@/components/WhyEffortless";
import VenueShowcase from "@/components/VenueShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <EffortLessEvent />
      <BookSpace />
      <MadeInEvents />
      <Locations />
      {/* <WhyEffortLess /> */}
      <VenueShowcase />
      <Footer />
    </>
  );
}
