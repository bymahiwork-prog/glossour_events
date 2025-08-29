"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Calendar as CalendarIcon,
  Share2,
  Grid,
  ChevronDown,
  UtensilsCrossed,
  Wine,
  Armchair,
  ShowerHead,
  Mic,
  Car,
  ClipboardList,
  PartyPopper, // New Icon
  Gavel, // New Icon
  Check, // New Icon
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export function MarketGallery({ venue }) {
  const [showAllImages, setShowAllImages] = useState(false);

  // Use venue images, provide fallbacks if empty
  const images =
    venue.images?.length > 0
      ? venue.images.map((src, index) => ({
          id: index + 1,
          src: src,
          alt: `${venue.product_name} - Image ${index + 1}`,
        }))
      : [
          // Placeholder images if the API returns none
          {
            id: 1,
            src: "https://placehold.co/1200x800/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
          {
            id: 2,
            src: "https://placehold.co/600x400/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
          {
            id: 3,
            src: "https://placehold.co/600x400/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
          {
            id: 4,
            src: "https://placehold.co/600x400/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
          {
            id: 5,
            src: "https://placehold.co/600x400/e2e8f0/e2e8f0",
            alt: "Placeholder Image",
          },
        ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: venue.product_name,
          text: `Check out this amazing venue in ${venue.product_location}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        // A more modern approach for user feedback
        const alertBox = document.createElement("div");
        alertBox.textContent = "Link copied to clipboard!";
        alertBox.style.cssText =
          "position:fixed;top:20px;left:50%;transform:translateX(-50%);background-color:#333;color:white;padding:10px 20px;border-radius:5px;z-index:1000;";
        document.body.appendChild(alertBox);
        setTimeout(() => document.body.removeChild(alertBox), 3000);
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-black mb-1">
              {venue.product_name}
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              {venue.product_location}
            </p>
          </div>
          <button
            onClick={handleShare}
            className="text-black hover:text-gray-600 transition-colors flex items-center space-x-2 text-sm sm:text-sm self-start sm:self-auto"
          >
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="lg:col-span-2">
            <div className="relative h-72 sm:h-80 md:h-96 lg:h-[540px] overflow-hidden rounded-lg">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://placehold.co/1200x800/e2e8f0/e2e8f0?text=Image+Not+Found")
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.slice(1, 5).map((image, index) => (
              <div
                key={image.id}
                className={`relative h-36 sm:h-48 md:h-60 lg:h-64 overflow-hidden rounded-lg group cursor-pointer ${
                  index < 4 ? "" : "hidden"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/600x400/e2e8f0/e2e8f0?text=Image+Not+Found")
                  }
                />
                {index === 3 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button
                      onClick={() => setShowAllImages(true)}
                      className="text-white flex items-center space-x-2 hover:scale-105 transition-transform"
                    >
                      <Grid size={18} />
                      <span className="text-xs sm:text-sm font-medium">
                        View all
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showAllImages && (
        <ImageModal
          images={images}
          venue={venue}
          onClose={() => setShowAllImages(false)}
        />
      )}
    </div>
  );
}

function ImageModal({ images, venue, onClose }) {
  // This effect will run when the modal is shown and hide the body's scrollbar.
  // The cleanup function will restore it when the modal is hidden.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        // Stop click events inside the modal from closing it
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-7xl w-full max-h-[95vh] shadow-2xl flex flex-col"
      >
        <div className="flex-shrink-0 flex justify-between items-center p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {venue.product_name}
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                {images.length} Photos
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {venue.product_location}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-all duration-200 p-3 rounded-full hover:bg-white hover:shadow-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-grow p-6 sm:p-8 overflow-y-auto bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://placehold.co/600x400/e2e8f0/e2e8f0?text=Not+Found")
                    }
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                    {image.alt}
                  </h3>
                  <p className="text-xs text-gray-500">
                    High Resolution • Professional Quality
                  </p>
                </div>
                {index === 0 && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FarmBookingPage({ venue }) {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date("2025-12-01"));
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [checkInTime, setCheckInTime] = useState("2:00 pm");
  const [checkOutTime, setCheckOutTime] = useState("11:00 am");

  const calendarRef = useRef(null);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a booking date.");
      return;
    }
    const phoneNumber = "917838008069"; // Replace with your WhatsApp number
    const formattedDate = format(selectedDate, "MMMM do, yyyy");

    const message = `Hello, I would like to book a farm with the following details:
- Farm Name: ${venue.product_name}
- Date: ${formattedDate}
- Check-in Time: ${checkInTime}
- Check-out Time: ${checkOutTime}

Please let me know about the availability and the next steps. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [calendarRef]);

  // Updated amenities array: Preserves original points and adds more detail
  const amenities = [
    {
      id: "bestFor",
      title: "Best Suitable For",
      icon: PartyPopper,
      points: [
        { content: "Birthday Party" },
        { content: "Bachelor & Bachelorette Parties" },
        { content: "Anniversary Celebrations" },
        { content: "Corporate Outings & Team Building" },
        { content: "Pre-Wedding Functions (Sangeet, Mehendi)" },
        { content: "Private & House Parties" },
        { content: "Pool & Cocktail Parties" },
        { content: "Weddings & Receptions" },
        { content: "Festive Celebrations (Diwali, Lohri)" },
        { content: "Freshers & Farewell Parties" },
      ],
    },
    {
      id: "food",
      title: "Food and Beverage",
      icon: UtensilsCrossed,
      points: [
        {
          content: "Full catering services available with customisable menus.",
        },
        { content: "Option to bring your own caterer (with conditions)." },
        { content: "Barbecue facilities and live counters can be arranged." },
      ],
    },
    {
      id: "alcohol",
      title: "Alcoholic Beverages",
      icon: Wine,
      points: [
        { content: "Licensed bar service is available upon request." },
        {
          content:
            "Alcohol consumption is permitted under a BYOB (Bring Your Own Booze) policy.",
        },
        {
          content:
            "Proper licenses required for serving alcohol at large events.",
        },
      ],
    },
    {
      id: "furniture",
      title: "Furniture",
      icon: Armchair,
      points: [
        {
          content:
            "Complete furniture setup including tables, chairs, and basic decor.",
        },
        { content: "Lounge seating and outdoor furniture available." },
        {
          content: "Additional furniture can be rented for larger gatherings.",
        },
      ],
    },
    {
      id: "restrooms",
      title: "Restrooms",
      icon: ShowerHead,
      points: [
        { content: "Clean, modern restroom facilities for men and women." },
        { content: "Equipped with modern fittings and essential amenities." },
        { content: "Accessible restroom facilities are available." },
      ],
    },
    {
      id: "av",
      title: "AV and Music",
      icon: Mic,
      points: [
        {
          content: "Professional sound system with speakers and a microphone.",
        },
        { content: "DJ services can be arranged for your event." },
        { content: "Projector and screen available for presentations." },
      ],
    },
    {
      id: "parking",
      title: "Parking",
      icon: Car,
      points: [
        { content: "Ample on-site parking space for cars and two-wheelers." },
        { content: "Valet parking services available on request." },
        { content: "Designated drop-off and pick-up zones." },
      ],
    },
    {
      id: "rules",
      title: "House Rules",
      icon: Gavel,
      points: [
        { content: "Check-in: After 2:00 PM" },
        { content: "Checkout: Before 11:00 AM" },
        { content: "Smoking is allowed in designated outdoor areas only." },
        { content: "A refundable security deposit of ₹10000 is required." },
        {
          content:
            "Loud music is not permitted after 10 PM as per local guidelines.",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-black mb-4">
                About {venue.product_name}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {venue.product_detail || "No description available."}
              </p>
            </div>

            <div className="space-y-3 text-black">
              {amenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={amenity.id}
                    className="border border-gray-200 rounded-lg"
                  >
                    <button
                      onClick={() => toggleSection(amenity.id)}
                      className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[#E4D078]" />
                        <span className="font-medium text-gray-700 text-sm sm:text-base">
                          {amenity.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedSections[amenity.id] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedSections[amenity.id] && (
                      <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3 mt-2">
                        <ul className="space-y-2">
                          {amenity.points.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{point.content}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 sm:p-4 lg:p-6 sticky top-24">
              <div className="mb-4 sm:mb-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  ₹{venue.product_price.split(" ")[0]}
                </div>
                <div className="text-xs sm:text-sm text-[#E4D078]">onwards</div>
              </div>
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

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="relative" ref={calendarRef}>
                  <label className="block text-xs sm:text-sm text-black mb-2">
                    Date <span className="text-gray-400">(required)</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setCalendarOpen(!isCalendarOpen)}
                    className="w-full flex items-center justify-between text-black px-2 sm:px-3 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm lg:text-base bg-white cursor-pointer transition-all duration-200 hover:border-gray-400"
                  >
                    <span>
                      {selectedDate
                        ? format(selectedDate, "PPP")
                        : "Select a date"}
                    </span>
                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                  </button>
                  {isCalendarOpen && (
                    <div className="absolute top-full left-0 mt-2 z-20 bg-white border border-gray-300 rounded-md shadow-lg">
                      <DayPicker
                        className=" text-black p-4"
                        classNames={{
                          nav_button:
                            "h-7 w-7  p-0 opacity-50 hover:opacity-100",
                        }}
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          setSelectedDate(date);
                          setCalendarOpen(false);
                        }}
                        initialFocus
                        fromDate={new Date()}
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-black">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1 sm:hidden">
                      Check-in
                    </label>
                    <select
                      value={checkInTime}
                      onChange={(e) => setCheckInTime(e.target.value)}
                      className="w-full px-2 sm:px-3 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm lg:text-base appearance-none bg-white cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 0.5rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.25em 1.25em",
                        paddingRight: "2rem",
                      }}
                    >
                      <option>2:00 pm</option>
                      <option>3:00 pm</option>
                      <option>4:00 pm</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1 sm:hidden">
                      Check-out
                    </label>
                    <select
                      value={checkOutTime}
                      onChange={(e) => setCheckOutTime(e.target.value)}
                      className="w-full px-2 sm:px-3 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm lg:text-base appearance-none bg-white cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 0.5rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.25em 1.25em",
                        paddingRight: "2rem",
                      }}
                    >
                      <option>11:00 am</option>
                      <option>12:00 pm</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-[#E4D078] text-white py-2.5 sm:py-3 lg:py-3.5 px-4 rounded-md font-medium  transition-colors mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base shadow-sm hover:shadow-md transform active:scale-[0.98]"
              >
                Start Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
