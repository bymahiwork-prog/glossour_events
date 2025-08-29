'use client'
import React, { useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';

const Services = () => {
  const [location, setLocation] = useState('');
  const [venueType, setVenueType] = useState('All Types');
  const [budget, setBudget] = useState(50);
  const [amenities, setAmenities] = useState({
    swimmingPool: false,
    inHouseCatering: false
  });

  const venues = [
    {
      id: 1,
      name: "The Palace Greens",
      location: "Chhatarpur, New Delhi",
      price: "₹25,000",
      image: "/api/placeholder/300/200",
      deal: false
    },
    {
      id: 2,
      name: "Green Meadows",
      location: "Sohna Road, Gurgaon",
      price: "₹30,000",
      image: "/api/placeholder/300/200",
      deal: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-serif text-gray-900">Effortless Events</h1>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-medium transition-colors">
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-80 bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Filter Venues</h2>
            
            {/* Location Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g., Gurgaon"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>

            {/* Venue Type Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Venue Type
              </label>
              <div className="relative">
                <select
                  value={venueType}
                  onChange={(e) => setVenueType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none bg-white"
                >
                  <option>All Types</option>
                  <option>Banquet Hall</option>
                  <option>Outdoor Venue</option>
                  <option>Hotel</option>
                  <option>Resort</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Budget Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <style jsx>{`
                  .slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #3B82F6;
                    cursor: pointer;
                  }
                  .slider::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #3B82F6;
                    cursor: pointer;
                    border: none;
                  }
                `}</style>
              </div>
            </div>

            {/* Amenities Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Amenities
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={amenities.swimmingPool}
                    onChange={(e) => setAmenities({...amenities, swimmingPool: e.target.checked})}
                    className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                  />
                  <span className="ml-2 text-sm text-gray-700">Swimming Pool</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={amenities.inHouseCatering}
                    onChange={(e) => setAmenities({...amenities, inHouseCatering: e.target.checked})}
                    className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                  />
                  <span className="ml-2 text-sm text-gray-700">In-house Catering</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h2>
              <p className="text-gray-600">Showing 24 results. Click on any venue to see details.</p>
            </div>

            {/* Venue Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {venues.map((venue) => (
                <div key={venue.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <div className="relative">
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      {venue.id === 1 ? (
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                          <span className="text-green-700 font-medium">The Palace Greens</span>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-100">
                          <div className="w-full h-full bg-gradient-to-br from-orange-50 to-white p-4">
                            <div className="w-full h-full bg-white rounded-lg shadow-sm flex flex-col">
                              <div className="flex-1 bg-gray-50 rounded-t-lg flex items-center justify-center">
                                <div className="w-full h-20 bg-orange-200 rounded flex items-center justify-center">
                                  <div className="flex space-x-2">
                                    <div className="w-8 h-8 bg-gray-600 rounded"></div>
                                    <div className="w-8 h-8 bg-gray-600 rounded"></div>
                                    <div className="w-8 h-8 bg-gray-600 rounded"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="p-4 bg-white rounded-b-lg">
                                <div className="flex justify-center space-x-2">
                                  <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
                                  <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
                                  <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
                                  <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-red-400" />
                    </button>
                    {venue.deal && (
                      <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        DEAL
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{venue.name}</h3>
                    <p className="text-gray-600 mb-3">{venue.location}</p>
                    <p className="text-lg">
                      <span className="text-gray-600">Starts at </span>
                      <span className="font-semibold text-yellow-600">{venue.price}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;