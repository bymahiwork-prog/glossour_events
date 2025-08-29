import React from "react";
// --- Dynamic MarketLocation Component ---
export default function MarketLocation({ venue }) {
  // Construct the Google Maps embed URL dynamically using the venue's address
  const encodedAddress = encodeURIComponent(venue?.product_address);
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl pt-10 md:text-4xl font-bold text-gray-900">
        Location
      </h1>
      <p className="text-gray-600 mt-2">{venue.product_address}</p>
      {/* Bottom Section - Map */}
      <div className="flex w-full justify-center py-8">
        <div className="h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${venue.product_name} Location`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
