import React from "react";

const ContactBannerPage = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/home-page.png"
        alt="Event Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Contact Us</h1>

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          We'd love to hear from you! Whether you have a question about our
          venues, need help with a booking, or just want to say hello, our team
          is ready to assist.
        </p>
      </div>
    </div>
  );
};

export default ContactBannerPage;
