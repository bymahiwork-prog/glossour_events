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

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <div className="space-y-3 text-black">
              {/* Food and Beverage */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("food")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 37 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.6918 33H31.4836C32.8964 33 34.0568 32.025 34.225 30.795L37 6.075H28.5909V0H25.2777V6.075H16.9191L17.4236 9.585C20.2995 10.29 22.9905 11.565 24.605 12.975C27.0268 15.105 28.6918 17.31 28.6918 20.91V33ZM0 31.5V30H25.2777V31.5C25.2777 32.31 24.5209 33 23.5455 33H1.68182C0.756818 33 0 32.31 0 31.5ZM25.2777 21C25.2777 9 0 9 0 21H25.2777ZM0 24H25.2273V27H0V24Z"
                        fill="black"
                      />
                    </svg>

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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 6.88889L4.44444 3.44444H27.5556L24 6.88889M14.2222 17.2222V27.5556H5.33333V31H26.6667V27.5556H17.7778V17.2222L32 3.44444V0H0V3.44444L14.2222 17.2222Z"
                        fill="black"
                      />
                    </svg>

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
                  className="w-full flex items-center justify-between p-2 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 28 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H28V5H25.2L26.6 20H23.1L22.316 11.6667H5.684L4.9 20H1.4L2.8 5H0V0ZM21.7 5H6.3L6.006 8.33333H21.994L21.7 5Z"
                        fill="black"
                      />
                    </svg>

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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 28 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.8421 0C3.96421 0 0.206316 3.88556 0 8.66667V26H13.2632V15.1089C14.8842 16.5389 16.9474 17.3333 19.1579 17.3333C24.0358 17.3333 28 13.4478 28 8.66667C28 3.88556 24.0358 0 19.1579 0H8.8421ZM8.8421 2.88889H12.5853C11.1263 4.47778 10.3158 6.5 10.3158 8.66667V13H8.8421V14.4444H10.3158V23.1111H2.94737V14.4444H4.42105V13H2.94737V8.66667C2.94737 5.47444 5.58526 2.88889 8.8421 2.88889ZM19.1579 2.88889C22.4147 2.88889 25.0526 5.47444 25.0526 8.66667C25.0526 11.8589 22.4147 14.4444 19.1579 14.4444C15.9011 14.4444 13.2632 11.8589 13.2632 8.66667C13.2632 5.47444 15.9011 2.88889 19.1579 2.88889ZM19.1579 6.13889C17.7284 6.13889 16.5789 7.26556 16.5789 8.66667C16.5789 10.0678 17.7284 11.1944 19.1579 11.1944C20.5874 11.1944 21.7368 10.0678 21.7368 8.66667C21.7368 7.26556 20.5874 6.13889 19.1579 6.13889ZM5.89474 13V14.4444H7.36842V13H5.89474Z"
                        fill="black"
                      />
                    </svg>

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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 21 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 37.8C0 40.11 2.3625 42 5.25 42H15.75C18.6637 42 21 40.11 21 37.8L21 4.2C21 1.869 18.6637 0 15.75 0H5.25C2.3625 0 0 1.869 0 4.2M5.25 27.3C5.25 24.969 7.6125 23.1 10.5 23.1C13.4137 23.1 15.75 24.969 15.75 27.3C15.75 29.61 13.4137 31.5 10.5 31.5C7.6125 31.5 5.25 29.61 5.25 27.3ZM5.25 14.7C5.25 12.369 7.6125 10.5 10.5 10.5C13.4137 10.5 15.75 12.369 15.75 14.7C15.75 17.01 13.4137 18.9 10.5 18.9C7.6125 18.9 5.25 17.01 5.25 14.7ZM7.875 35.7C7.875 34.545 9.05625 33.6 10.5 33.6C11.9438 33.6 13.125 34.545 13.125 35.7C13.125 36.855 11.9438 37.8 10.5 37.8C9.05625 37.8 7.875 36.855 7.875 35.7ZM7.875 27.3C7.875 28.455 9.05625 29.4 10.5 29.4C11.9438 29.4 13.125 28.455 13.125 27.3C13.125 26.145 11.9438 25.2 10.5 25.2C9.05625 25.2 7.875 26.145 7.875 27.3ZM7.875 14.7C7.875 15.855 9.05625 16.8 10.5 16.8C11.9438 16.8 13.125 15.855 13.125 14.7C13.125 13.545 11.9438 12.6 10.5 12.6C9.05625 12.6 7.875 13.545 7.875 14.7ZM7.875 6.3C7.875 5.145 9.05625 4.2 10.5 4.2C11.9438 4.2 13.125 5.145 13.125 6.3C13.125 7.455 11.9438 8.4 10.5 8.4C9.05625 8.4 7.875 7.455 7.875 6.3Z"
                        fill="black"
                      />
                    </svg>

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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33333 10.125L5.83333 2.53125H24.1667L26.6667 10.125M24.1667 18.5625C23.5036 18.5625 22.8677 18.2958 22.3989 17.8211C21.9301 17.3464 21.6667 16.7026 21.6667 16.0312C21.6667 15.3599 21.9301 14.7161 22.3989 14.2414C22.8677 13.7667 23.5036 13.5 24.1667 13.5C24.8297 13.5 25.4656 13.7667 25.9344 14.2414C26.4033 14.7161 26.6667 15.3599 26.6667 16.0312C26.6667 16.7026 26.4033 17.3464 25.9344 17.8211C25.4656 18.2958 24.8297 18.5625 24.1667 18.5625ZM5.83333 18.5625C5.17029 18.5625 4.53441 18.2958 4.06557 17.8211C3.59672 17.3464 3.33333 16.7026 3.33333 16.0312C3.33333 15.3599 3.59672 14.7161 4.06557 14.2414C4.53441 13.7667 5.17029 13.5 5.83333 13.5C6.49637 13.5 7.13226 13.7667 7.6011 14.2414C8.06994 14.7161 8.33333 15.3599 8.33333 16.0312C8.33333 16.7026 8.06994 17.3464 7.6011 17.8211C7.13226 18.2958 6.49637 18.5625 5.83333 18.5625ZM26.5333 1.6875C26.2 0.70875 25.2667 0 24.1667 0H5.83333C4.73333 0 3.8 0.70875 3.46667 1.6875L0 11.8125V25.3125C0 25.7601 0.175595 26.1893 0.488155 26.5057C0.800716 26.8222 1.22464 27 1.66667 27H3.33333C3.77536 27 4.19928 26.8222 4.51184 26.5057C4.8244 26.1893 5 25.7601 5 25.3125V23.625H25V25.3125C25 25.7601 25.1756 26.1893 25.4882 26.5057C25.8007 26.8222 26.2246 27 26.6667 27H28.3333C28.7754 27 29.1993 26.8222 29.5118 26.5057C29.8244 26.1893 30 25.7601 30 25.3125V11.8125L26.5333 1.6875Z"
                        fill="black"
                      />
                    </svg>

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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.6 0C12.8417 0 10.1965 1.21746 8.24609 3.38454C6.29571 5.55163 5.2 8.49083 5.2 11.5556C5.2 14.6203 6.29571 17.5595 8.24609 19.7266C10.1965 21.8937 12.8417 23.1111 15.6 23.1111C18.3583 23.1111 21.0035 21.8937 22.9539 19.7266C24.9043 17.5595 26 14.6203 26 11.5556C26 8.49083 24.9043 5.55163 22.9539 3.38454C21.0035 1.21746 18.3583 0 15.6 0ZM3.809 5.51778C1.404 7.71333 0 10.9922 0 14.4444C0 17.5092 1.09571 20.4484 3.04609 22.6155C4.99647 24.7825 7.64175 26 10.4 26C11.232 26 12.051 25.8844 12.844 25.6678C10.556 25.1044 8.45 23.8333 6.721 22.0856C4.186 20.5833 2.6 17.6367 2.6 14.4444C2.6 14.0111 2.639 13.5922 2.691 13.1589C2.639 12.6244 2.6 12.09 2.6 11.5556C2.6 9.47556 3.016 7.41 3.809 5.51778ZM20.917 5.89333L22.75 7.94444L14.3 17.3333L9.373 11.8589L11.219 9.80778L14.3 13.2456"
                        fill="black"
                      />
                    </svg>

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
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 sm:p-4 lg:p-6 sticky top-4">
              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  ₹85000
                </div>
                <div className="text-xs sm:text-sm text-[#E4D078]">onwards</div>
              </div>

              {/* Discount Information */}
              <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-4 sm:mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-600">
                    2+ days discount
                  </span>
                  <span className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    10% off
                  </span>
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div>
                  <label className="block text-xs sm:text-sm text-black mb-2">
                    Date and time{" "}
                    <span className="text-gray-400">(required)</span>
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full text-black px-2 sm:px-3 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm lg:text-base appearance-none bg-white cursor-pointer transition-all duration-200 hover:border-gray-400"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option>August 11th, 2025</option>
                    <option>August 12th, 2025</option>
                    <option>August 13th, 2025</option>
                    <option>August 14th, 2025</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-black">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1 sm:hidden">
                      Check-in
                    </label>
                    <select
                      value={checkInTime}
                      onChange={(e) => setCheckInTime(e.target.value)}
                      className="w-full px-2 sm:px-3 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm lg:text-base appearance-none bg-white cursor-pointer transition-all duration-200 hover:border-gray-400"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 0.25rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.25em 1.25em",
                        paddingRight: "1.75rem",
                      }}
                    >
                      <option>9:30 am</option>
                      <option>10:00 am</option>
                      <option>10:30 am</option>
                      <option>11:00 am</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1 sm:hidden">
                      Check-out
                    </label>
                    <select
                      value={checkOutTime}
                      onChange={(e) => setCheckOutTime(e.target.value)}
                      className="w-full px-2 sm:px-3 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm lg:text-base appearance-none bg-white cursor-pointer transition-all duration-200 hover:border-gray-400"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 0.25rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.25em 1.25em",
                        paddingRight: "1.75rem",
                      }}
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
                className="w-full bg-[#E4D078] text-white py-2.5 sm:py-3 lg:py-3.5 px-4 rounded-md font-medium hover:bg-purple-700 active:bg-purple-800 transition-colors mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base shadow-sm hover:shadow-md transform active:scale-[0.98] transition-all duration-200"
              >
                Start Booking
              </button>

              {/* Agent Response Time */}
              <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-1 sm:w-[18px] sm:h-[18px]"
                >
                  <path
                    d="M25 12.494L22.2273 9.17344L22.6136 4.77783L18.5114 3.79838L16.3636 0L12.5 1.74391L8.63636 0L6.48864 3.79838L2.38636 4.76589L2.77273 9.16149L0 12.494L2.77273 15.8146L2.38636 20.2222L6.48864 21.2016L8.63636 25L12.5 23.2441L16.3636 24.9881L18.5114 21.1897L22.6136 20.2102L22.2273 15.8146L25 12.494ZM10.2273 18.4663L5.68182 13.6885L7.28409 12.0043L10.2273 15.086L17.7159 7.21453L19.3182 8.91066L10.2273 18.4663Z"
                    fill="#29DB4F"
                  />
                </svg>
                <span className="hidden sm:inline">
                  Our Agent typically responded in 12 hr
                </span>
                <span className="sm:hidden">Agent responds in 12 hr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
