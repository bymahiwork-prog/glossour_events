// src/components/ProfessionalSearchBar.js

"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

// A simple SVG icon for the search button
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export default function ProfessionalSearchBar() {
  const [activity, setActivity] = useState("");
  const [location, setLocation] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const searchBarRef = useRef(null);
  const router = useRouter();

  const activityOptions = [
    "Weding Reception",
    "Party",
    "Corporate Events",
    "Workshops",
    "Photo Shoot",
    "Birthday Party",
  ];
  const locationOptions = [
    "New Delhi",
    "Gurugram",
    "Faridabad",
    "Rajasthan",
    "Noida",
    "Chattarpur",
    "Haryana",
  ];

  const handleFocus = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleSelect = (type, value) => {
    if (type === "activity") {
      setActivity(value);
      setActiveDropdown("location");
    } else {
      setLocation(value);
      setActiveDropdown(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!activity && !location) return;
    const queryParams = new URLSearchParams({
      ...(location && { location }),
    });
    router.push(`/search?search=${location}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderDropdown = (type) => {
    const isActivity = type === "activity";
    const options = isActivity ? activityOptions : locationOptions;
    const inputValue = isActivity ? activity : location;

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
      // The dropdown position is automatically handled by its parent's relative positioning
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded shadow-lg border z-30 p-2">
        <ul>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(type, option)}
                className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-800 font-medium"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-500">No results found.</li>
          )}
        </ul>
      </div>
    );
  };

  return (
    // This parent container handles the positioning on the page
    <div className="w-full max-w-2xl mx-auto px-4 absolute top-[35%] left-1/2 transform -translate-x-1/2 z-50 -translate-y-1/2">
      <form
        ref={searchBarRef}
        onSubmit={handleSearch}
        // --- RESPONSIVE CLASSES ---
        // On mobile (default): column layout, rounded rectangle
        // On large screens (lg): row layout, pill shape
        className="relative bg-white shadow-2xl flex flex-col lg:flex-row lg:items-center rounded lg:rounded"
      >
        {/* --- Activity Section --- */}
        <div className="relative w-full lg:flex-1">
          <div
            className={`p-4 cursor-text w-full ${
              activeDropdown === "activity"
                ? "bg-gray-100"
                : "hover:bg-gray-100"
            } `}
            onClick={() => handleFocus("activity")}
          >
            <label
              htmlFor="activity-input"
              className="text-xs font-bold text-gray-900"
            >
              What
            </label>
            <input
              id="activity-input"
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              onFocus={() => handleFocus("activity")}
              placeholder="What are you planning?"
              className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 text-sm p-0"
              autoComplete="off"
            />
          </div>
          {activeDropdown === "activity" && renderDropdown("activity")}
        </div>

        {/* --- Responsive Divider --- */}
        <div className="h-px w-full lg:h-10 lg:w-px bg-gray-200"></div>

        {/* --- Location Section --- */}
        <div className="relative w-full lg:flex-1">
          <div
            className={`p-4 cursor-text w-full ${
              activeDropdown === "location"
                ? "bg-gray-100"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleFocus("location")}
          >
            <label
              htmlFor="location-input"
              className="text-xs font-bold text-gray-900"
            >
              Where
            </label>
            <input
              id="location-input"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onFocus={() => handleFocus("location")}
              placeholder="Enter a city"
              className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 text-sm p-0"
              autoComplete="off"
            />
          </div>
          {activeDropdown === "location" && renderDropdown("location")}
        </div>

        {/* --- Search Button Section --- */}
        <div className="w-full lg:w-auto p-2">
          <button
            type="submit"
            // --- RESPONSIVE CLASSES ---
            // On mobile (default): full width, rounded rectangle
            // On large screens (lg): circular icon button
            className="bg-black text-white h-12 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors w-full lg:w-12 rounded-lg lg:rounded-full"
            aria-label="Search"
          >
            {/* Show text on mobile, hide on large screens */}
            <span className="lg:hidden font-semibold">Search</span>
            {/* Icon is always visible */}
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
