"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Calendar,
  Clock,
  CheckCircle,
  Utensils,
  Wine,
  Users,
  Bath,
  Tv,
  Music,
  Car,
  CheckCircle2,
} from "lucide-react";

export default function FarmBookingPage() {
  const [selectedDate, setSelectedDate] = useState("August 11th, 2025");
  const [checkInTime, setCheckInTime] = useState("9:30 am");
  const [checkOutTime, setCheckOutTime] = useState("9:30 pm");
  const [expandedSections, setExpandedSections] = useState({
    food: false,
    alcohol: false,
    furniture: false,
    restrooms: false,
    av: false,
    parking: false,
    events: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleBooking = () => {
    alert(
      `Booking initiated for ${selectedDate} from ${checkInTime} to ${checkOutTime}`
    );
  };

  const amenityIcons = {
    food: <Utensils className="w-4 h-4" />,
    alcohol: <Wine className="w-4 h-4" />,
    furniture: <Users className="w-4 h-4" />,
    restrooms: <Bath className="w-4 h-4" />,
    av: <Tv className="w-4 h-4" />,
    parking: <Car className="w-4 h-4" />,
    events: <CheckCircle2 className="w-4 h-4" />,
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Content Area (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-black mb-4">
                About Effortless Farm45
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The Farm offers a versatile and spacious venue, perfect for
                hosting gatherings from 30 to 500 guests, making it an ideal
                choice for weddings and related celebrations. With a dedicated
                team focused on catering to every detail, your expectations are
                met with efficiency and care. The property features 40 to 60
                well-appointed rooms for comfortable guest accommodation, ample
                parking for wedding attendees, and a reliable 24/7 power backup
                to ensure uninterrupted festivities. At The Farm, every effort
                is made seamless and...
              </p>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                Read more
              </button>
            </div>

            {/* Amenities Sections */}
            <div className="space-y-3">
              {/* Food and Beverage */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("food")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {amenityIcons.food}
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Food and Beverage
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.food ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSections.food && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600">
                    <p>
                      Full catering services available with local and
                      international cuisine options.
                    </p>
                  </div>
                )}
              </div>

              {/* Alcoholic and Beverage */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("alcohol")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {amenityIcons.alcohol}
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Alcoholic and Beverage
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.alcohol ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSections.alcohol && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600">
                    <p>
                      Licensed bar service with premium spirits, wines, and
                      craft beers available.
                    </p>
                  </div>
                )}
              </div>

              {/* Furniture */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("furniture")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {amenityIcons.furniture}
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Furniture
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.furniture ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSections.furniture && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600">
                    <p>
                      Complete furniture setup including tables, chairs, and
                      decorative elements.
                    </p>
                  </div>
                )}
              </div>

              {/* Restrooms */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("restrooms")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {amenityIcons.restrooms}
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Restrooms
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.restrooms ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSections.restrooms && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600">
                    <p>
                      Clean, modern restroom facilities with accessibility
                      features.
                    </p>
                  </div>
                )}
              </div>

              {/* AV and Music */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("av")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {amenityIcons.av}
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      AV and Music
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.av ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSections.av && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600">
                    <p>
                      Professional sound system, microphones, and lighting
                      equipment available.
                    </p>
                  </div>
                )}
              </div>

              {/* Parking */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("parking")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {amenityIcons.parking}
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Parking
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.parking ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSections.parking && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600">
                    <p>
                      Ample parking space for up to 500 vehicles with valet
                      service available.
                    </p>
                  </div>
                )}
              </div>

              {/* Events Rules */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("events")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {amenityIcons.events}
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Events Rules
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.events ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSections.events && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600">
                    <p>
                      Event guidelines and policies to ensure a smooth and
                      enjoyable experience for all guests.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Area (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 sticky top-4">
              {/* Price */}
              <div className="mb-6">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ₹85000
                </div>
                <div className="text-sm text-purple-600">onwards</div>
              </div>

              {/* Discount Information */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    2+ days discount
                  </span>
                  <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    10% off
                  </span>
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    Date and time (required)
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                  >
                    <option>August 11th, 2025</option>
                    <option>August 12th, 2025</option>
                    <option>August 13th, 2025</option>
                    <option>August 14th, 2025</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <select
                      value={checkInTime}
                      onChange={(e) => setCheckInTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    >
                      <option>9:30 am</option>
                      <option>10:00 am</option>
                      <option>10:30 am</option>
                      <option>11:00 am</option>
                    </select>
                  </div>
                  <div>
                    <select
                      value={checkOutTime}
                      onChange={(e) => setCheckOutTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    >
                      <option>9:30 pm</option>
                      <option>10:00 pm</option>
                      <option>10:30 pm</option>
                      <option>11:00 pm</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Start Booking Button */}
              <button
                onClick={handleBooking}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors mb-4 text-sm sm:text-base"
              >
                Start Booking
              </button>

              {/* Agent Response Time */}
              <div className="flex items-center justify-center text-xs text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                Our Agent typically responded in 12 hr
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
