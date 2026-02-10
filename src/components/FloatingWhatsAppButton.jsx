"use client";

import React from "react";

const FloatingWhatsAppButton = () => {
  // Correct the typo 'reagarding' to 'regarding' for professionalism
  const message =
    "Hi, I have a query regarding a venue for events. - Effortless Events";
  const phoneNumber = "917838008069"; // Your number with country code, without '+' or spaces

  // Encode the message for the URL
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-5 right-5 z-50  w-16 h-16  flex items-center justify-center   transition-transform transform hover:scale-110 duration-300 ease-in-out"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img src="/WhatsApp.svg" alt="whatsappicon" />
    </a>
  );
};

export default FloatingWhatsAppButton;
