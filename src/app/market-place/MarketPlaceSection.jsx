import FarmBookingPage from "@/pages/marketPlace/FarmBooking";
import MarketGallery from "@/pages/marketPlace/MarketGallery";
import MarketLocation from "@/pages/marketPlace/MarketLocation";
import PopularVenues from "@/pages/marketPlace/PopularVenues";
import React from "react";

export default function MarketPlaceSection() {
  return (
    <div>
      <MarketGallery />

      <FarmBookingPage />
      <PopularVenues />
      <MarketLocation />
    </div>
  );
}
