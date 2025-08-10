import { MapPin, Star, Users } from "lucide-react";
import React from "react";

const PopularVenues = () => {
  const venues = [
    {
      id: 1,
      name: "Effortless Farm45",
      location: "Dwai Paltan, Gurugram",
      rating: 5.0,
      reviews: 2,
      capacity: 20,
      type: "Backyard",
      image: "/venue1.jpg",
      description:
        "Farm features a spacious venue capable of accommodating approximately 20 to 500 guests, providing an excellent setting for your wedding...",
    },
    {
      id: 2,
      name: "Effortless Farm45",
      location: "New Delhi, Uttarakhand",
      rating: 5.0,
      reviews: 2,
      capacity: 20,
      type: "Backyard",
      image: "/venue2.jpg",
      description:
        "Farm features a spacious venue capable of accommodating approximately 20 to 500 guests, providing an excellent setting for your wedding...",
    },
    {
      id: 3,
      name: "Effortless Farm2",
      location: "New Delhi, Chattarpur",
      rating: 5.0,
      reviews: 2,
      capacity: 20,
      type: "Backyard",
      image: "/venue3.jpg",
      description:
        "Farm features a spacious venue capable of accommodating approximately 20 to 500 guests, providing an excellent setting for your wedding...",
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Popular wedding reception venues
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <div
                key={venue.id}
                className="bg-white overflow-hidden shadow-sm border border-gray-200"
              >
                {/* Venue Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Venue Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {venue.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {venue.location}
                  </p>

                  {/* Rating and Stats */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">
                        {venue.rating}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">
                        ({venue.reviews})
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">
                        {venue.capacity}
                      </span>
                    </div>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
                      {venue.type}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    {venue.description}
                  </p>

                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    Show More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularVenues;
