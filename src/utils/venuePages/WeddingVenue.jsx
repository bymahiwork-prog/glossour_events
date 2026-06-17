"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";

const WeddingVenue = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeddingVenues();
  }, []);

  const fetchWeddingVenues = async () => {
    try {
      const response = await fetch("/api/venues?categoryId=3&limit=100");

      if (!response.ok) {
        throw new Error("Failed to fetch wedding venues");
      }

      const data = await response.json();

      setVenues(data.products || []);
    } catch (error) {
      console.error("Error fetching wedding venues:", error);
    } finally {
      setLoading(false);
    }
  };

  const reviews = [
    {
      id: 1,
      author: "J.B.",
      venue:
        "Beautiful wedding venue with amazing ambience and exceptional service.",
      text: "Everything was managed perfectly. The venue looked stunning and our guests had an unforgettable experience.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      author: "A.K.",
      venue:
        "Luxury wedding venue in Delhi NCR",
      text: "Highly recommend this venue. The staff was cooperative and the decorations exceeded our expectations.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      author: "S.M.",
      venue:
        "Perfect destination wedding venue",
      text: "From booking to the final event, everything was seamless. Amazing experience!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading Wedding Venues...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Wedding Venues */}

        <div className="mb-16">

          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Popular Wedding Venues
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {venues.map((venue) => (
              <div
                key={venue.id}
                className="bg-white overflow-hidden shadow-sm border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
              >

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.product_name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

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

                  <Link
                    href={`/venues/${venue.id}`}
                    className="block w-full text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>

  );
};

export default WeddingVenue;
