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
  Send, // Added for the button icon
} from "lucide-react";
import { toast } from "react-hot-toast";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [`${name}`]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Submitting your inquiry...");

    try {
      // First, send the lead data to your API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // If API returns an error, show error toast and stop
        throw new Error("Failed to save lead.");
      }

      const result = await response.json();
      console.log("API Response:", result.message);

      // If successful, show success toast
      toast.success("Inquiry sent! Redirecting to WhatsApp...", {
        id: loadingToast,
      });

      // Then, redirect to WhatsApp
      const phoneNumber = "917838008069";
      const message = `
*New Inquiry*
*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Message:*
${formData.message}
      `.trim();
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Give user a moment to see the success message before redirecting
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);

      // Reset form state
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Could not send inquiry. Please try again.", {
        id: loadingToast,
      });
    }
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
  ];
  const mapSrc = (encodedAddress) =>
    `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="antialiased bg-gray-200">
      <div className="flex w-full min-h-screen justify-center items-center py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-black w-full max-w-7xl p-8 sm:p-12 rounded-xl shadow-lg text-gray-300 overflow-hidden">
          {/* Contact Information */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h1 className="font-bold text-4xl tracking-wide text-white">
                Contact Us
              </h1>
              <p className="pt-2 text-gray-400 text-sm">
                Have a question or want to work together? Fill out the form or
                contact us via the details below.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center space-x-2">
                <Phone size={20} className="text-gray-400" />
                <span>+91 78380 08069</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <Mail size={20} className="text-gray-400" />
                <span>bookings@effortlessevents.in</span>
              </div>
              <div className="inline-flex items-start space-x-2">
                <MapPin size={20} className="mt-1 text-gray-400" />
                <span className="text-sm text-gray-400">
                  L57B, Captain Hitesh Mehta Marg, Malviya Nagar, New Delhi,
                  Delhi 110017
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-gray-400 transition-colors"
                  aria-label={`Our ${link.icon.type.displayName} profile`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-gray-700 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-gray-700 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-700">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-sm text-gray-600"
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
                      placeholder="John"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Doe"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john.doe@example.com"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 text-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 resize-none text-gray-800"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 ease-in-out group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section - Grayscale theme */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Location
        </h2>
        <div className="h-[400px] md:h-[500px] w-full bg-gray-200 rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src={mapSrc(
              "L57B, Captain Hitesh Mehta Marg, Block L, Malviya Nagar, New Delhi, Delhi 110017"
            )}
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
