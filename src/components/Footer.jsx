import React from "react";
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  PhoneCallIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 sm:px-6">
      <div className="py-2 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Logo Section */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <img src="/logo.png" alt="" className="h-16" />
          </div>

          {/* Company Section */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-300">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Cities Section */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-300">
              Cities
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/search"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Noida
                </a>
              </li>
              <li>
                <a
                  href="/search"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Gurugram
                </a>
              </li>
              <li>
                <a
                  href="/search"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  New Delhi
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-300">
              Support
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/contact"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/rules-regulations"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/t&c"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          {/* Language Selector */}
          <div className="mb-4 sm:mb-0">
            <button className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors underline">
              English(Us)
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:mr-20">
            <a
              href="https://www.linkedin.com/company/effortless-events-pvt-ltd/?originalSubdomain=in"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://www.instagram.com/effortlesseventspvt.ltd/?hl=en"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fwhatsapp.com%2Fchannel%2F0029VbAk5phDDmFSyVKnaw2Y&e=AT0FoUPCbOYuV8ZS2y4kRcl-d8-6GLpz70ugSkYK6AS46yp1vYLNZwU4HN7u_rys7EEalICpBdBvwL8zjSIFzjYmyDCoJBsfsY42Q0ePFQtsOy-c"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <PhoneCallIcon
                size={20}
                className="sm:w-6 sm:h-6 md:w-7 md:h-7"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
