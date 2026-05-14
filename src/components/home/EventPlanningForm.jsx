"use client";

import React, { useState } from "react";

const tabs = ["Event", "Venue", "Place"];

// Reusable input styling
const inputClass =
  "w-full rounded-xl border border-gray-200 px-5 py-4 text-black placeholder:text-black outline-none focus:ring-2 focus:ring-[#C9A34A]";

export default function EventPlanningForm() {
  const [activeTab, setActiveTab] = useState("Event");

  return (
    <section className="relative bg-[#0F0803] px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[28px] shadow-2xl border border-gray-100 p-5 md:p-8">
          {/* Tabs */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative text-sm md:text-base font-medium pb-2 transition-colors ${
                  activeTab === tab
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#C9A34A]" />
                )}
              </button>
            ))}
          </div>

          {/* Form */}
          <form action="/contact" className="space-y-4">
            <input
              type="text"
              name="occasion"
              placeholder="What's the occasion?"
              className={inputClass}
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              className={inputClass}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="guests"
                placeholder="Guests"
                className={inputClass}
              />

              <input
                type="text"
                name="budget"
                placeholder="Budget"
                className={inputClass}
              />

              <input
                type="text"
                name="date"
                placeholder="Date"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9A34A] hover:bg-[#b8923d] text-black font-semibold py-4 rounded-xl transition-colors"
            >
              Start Planning
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
