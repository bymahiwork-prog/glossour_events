"use client";

import React, { useEffect, useState } from "react";
import { Star, MapPin } from "lucide-react";

const Farms = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFarmhouses();
  }, []);

  const fetchFarmhouses = async () => {
    try {
      const response = await fetch("/api/venues?categoryId=1&limit=100");

      if (!response.ok) {
        throw new Error("Failed to fetch venues");
      }

      const data = await response.json();

      setVenues(data.products || []);
    } catch (error) {
      console.error("Error fetching farmhouses:", error);
    } finally {
      setLoading(false);
    }
  };

  const reviews = [
    {
      id: 1,
      author: "J.B.",
      venue:
        "Fatima/Union Square Classic NY Loft with High Ceilings, Filled with Light",
      text: "Andrew handled everything with care and urgency. The venue itself was beautiful and impressed my family and friends for my...",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      author: "J.B.",
      venue:
        "Fatima/Union Square Classic NY Loft with High Ceilings, Filled with Light",
      text: "Andrew handled everything with care and urgency. The venue itself was beautiful and impressed my family and friends for my...",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      author: "J.B.",
      venue:
        "Fatima/Union Square Classic NY Loft with High Ceilings, Filled with Light",
      text: "Andrew handled everything with care and urgency. The venue itself was beautiful and impressed my family and friends for my...",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Loading Farmhouses...</h2>
      </div>
    );
  }
    return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Farmhouses */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Popular Farm Houses
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue) => (
              <div
                key={venue.id}
                className="bg-white overflow-hidden shadow-sm border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.product_name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="p-4">

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {venue.product_name}
                  </h3>

                  <p className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {venue.product_location}
                  </p>

                  <div className="flex items-center justify-between mb-3">

                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">
                        {venue.rating || "5.0"}
                      </span>
                    </div>

                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                      {venue.category_name}
                    </span>

                  </div>

                  <p className="text-lg font-semibold text-black mb-3">
                    {venue.product_price}
                  </p>

                  <p className="text-sm text-gray-600 line-clamp-4 mb-4">
                    {venue.product_detail}
                  </p>

                  <button
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                  >
                    View Details
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}

        <div>

          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Reviews for Farm Houses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {reviews.map((review) => (

              <div
                key={review.id}
                className="bg-white p-4 border rounded-lg"
              >

                <div className="flex items-start mb-3">

                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />

                  <div>

                    <h4 className="font-semibold">
                      {review.author}
                    </h4>

                    <p className="text-sm text-gray-600">
                      {review.venue}
                    </p>

                  </div>

                </div>

                <p className="text-sm text-gray-700">
                  {review.text}
                </p>

                <button className="mt-3 text-blue-600 font-medium hover:underline">
                  Read more
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Farms;
