import BookSpace from "@/pages/home/BookSpace";
import EffortLessEvent from "@/pages/home/EffortLessEvent";
import Locations from "@/pages/home/Locations";
import MadeInEvents from "@/pages/home/MadeInEvents";
import VenueShowcase from "@/pages/home/VenueShowcase";


export default function Home() {
  return (
    <>
      <EffortLessEvent />
      <BookSpace />
      <MadeInEvents />
      <Locations />
      <VenueShowcase />
    </>
  );
}
