import React from "react";
import { Star, MapPin, Users } from "lucide-react";

const Farms = () => {
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

  const reviews = [
    {
      id: 1,
      author: "J.B.",
      venue:
        "Fatima/Union Square Classic NY Loft with High Ceilings, Filled with Light",
      text: "Andrew handled everything with care and urgency. The venue itself was beautiful and impressed my family and friends for my...",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      author: "J.B.",
      venue:
        "Fatima/Union Square Classic NY Loft with High Ceilings, Filled with Light",
      text: "Andrew handled everything with care and urgency. The venue itself was beautiful and impressed my family and friends for my...",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      author: "J.B.",
      venue:
        "Fatima/Union Square Classic NY Loft with High Ceilings, Filled with Light",
      text: "Andrew handled everything with care and urgency. The venue itself was beautiful and impressed my family and friends for my...",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Popular Wedding Reception Venues Section */}
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

        {/* Reviews Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Reviews for wedding reception venues
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-4">
                <div className="flex items-start mb-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-8 h-8  mr-3 flex-shrink-0 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      {review.author}
                    </h4>
                    <p className="text-sm text-gray-600 leading-tight mb-2">
                      {review.venue}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-2">{review.text}</p>

                <button className="text-blue-600 text-sm font-medium hover:underline">
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
