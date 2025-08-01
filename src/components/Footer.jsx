import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="py-28 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-30">
          {/* Logo Section */}
          <div className="md:col-span-1 ">
            <h1 className="text-4xl font-bold " >
              Effortless<br />
              Events
            </h1>
          </div>

          {/* Company Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Activities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Cities Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Cities</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Chandigarh
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Bhopal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Noida
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          {/* Language Selector */}
          <div className="mb-4 md:mb-0">
            <button className="text-gray-400 hover:text-white transition-colors underline">
              English(Us)
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-8 mr-20">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={25} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={25} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={25} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={25} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;