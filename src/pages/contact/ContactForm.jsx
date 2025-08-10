"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="bg-white">
      {/* Top Section - Contact Information and Form */}
      <div className=" max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Panel - Contact Information */}
          <div className="bg-black text-white p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
                <p className="text-gray-300 text-base">
                  Say something to start a live chat!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-gray-300" size={20} />
                  <span className="text-gray-300">+91 78380 08069</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-300" size={20} />
                  <span className="text-gray-300">
                    bookings@effortlessevents.in
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-gray-300 mt-1" size={20} />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    L57B, Captain Hitesh Mehta Marg, Block L, Malviya Nagar, New
                    Delhi, Delhi 110017
                  </span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="bg-white p-8 lg:p-12 border-l border-gray-200 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  />
                </div>
              </div>

              {/* Email and Phone Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  />
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Subject?
                </label>
                <div className="space-y-2">
                  {[
                    "General Inquiry",
                    "General Inquiry",
                    "General Inquiry",
                    "General Inquiry",
                  ].map((subject, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="subject"
                        value={subject}
                        checked={formData.subject === subject}
                        onChange={handleInputChange}
                        className="text-blue-600 focus:ring-blue-500 w-4 h-4"
                      />
                      <span className="text-gray-700 text-sm">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Write your message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700"
                />
              </div>

              {/* Submit Button - Centered */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section - Map */}
      <div className=" flex max-w-full justify-center py-8">
        <div className=" h-[500px] w-[82%] bg-gray-100 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.2!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Effortless Events Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
