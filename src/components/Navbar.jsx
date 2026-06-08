import { useState } from "react";

const Navbar = ({ variant = "transparent" }) => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isBrowseDropdownOpen, setIsBrowseDropdownOpen] = useState(false);

const getNavbarClasses = () => {
const baseClasses =
"absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 md:py-6 z-50 transition-all duration-300";

return variant === "black" ? `${baseClasses} bg-black` : baseClasses;

};

const toggleMobileMenu = () => {
setIsMobileMenuOpen(!isMobileMenuOpen);
};

const toggleBrowseDropdown = () => {
setIsBrowseDropdownOpen(!isBrowseDropdownOpen);
};

const closeMobileMenu = () => {
setIsMobileMenuOpen(false);
};

const browseOptions = [
{ name: "Noida", href: "/search?search=Noida" },
{ name: "New Delhi", href: "/search?search=New Delhi" },
{ name: "Gurugram", href: "/search?search=Gurugram" },
{ name: "Chhatarpur", href: "/search?search=Chhatarpur" },
{ name: "Rajasthan", href: "/search?search=Rajasthan" },
{ name: "Faridabad", href: "/search?search=Faridabad" },
];

return (
<> <div className={getNavbarClasses()}>
{/* Logo */} <div className="flex-shrink-0"> <a href="/" className="block"> <img src="/logo.png" alt="Effortless Logo" className="h-16" /> </a> </div>

```
    {/* Desktop Navigation */}
    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
      {/* Browse Spaces Dropdown */}
      <div className="relative">
        <button
          onClick={toggleBrowseDropdown}
          className="flex items-center gap-1 text-white hover:text-gray-200 cursor-pointer transition-colors"
        >
          <span>Browse Spaces</span>
          <svg
            className={`w-4 h-4 transform transition-transform ${
              isBrowseDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isBrowseDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-30">
            {browseOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsBrowseDropdownOpen(false)}
              >
                {option.name}
              </a>
            ))}
          </div>
        )}
      </div>

      <a
        href="/services"
        className="text-white hover:text-gray-200 transition-colors"
      >
        Services
      </a>

      <a
        href="/blogs"
        className="text-white hover:text-gray-200 transition-colors"
      >
        Blogs
      </a>

      <a
        href="/about"
        className="text-white hover:text-gray-200 transition-colors"
      >
        About
      </a>

      <a href="/contact">
        <button className="bg-white/90 text-gray-800 font-medium px-4 xl:px-6 py-2 rounded border border-gray-300 hover:bg-white transition-colors">
          Contact
        </button>
      </a>
    </div>

    {/* Mobile Hamburger Button */}
    <button
      onClick={toggleMobileMenu}
      className="lg:hidden text-white focus:outline-none"
      aria-label="Toggle mobile menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isMobileMenuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  </div>

  {/* Mobile Menu Overlay */}
  {isMobileMenuOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
      onClick={closeMobileMenu}
    />
  )}

  {/* Mobile Menu */}
  <div
    className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
      isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
        <button
          onClick={closeMobileMenu}
          className="text-gray-600 hover:text-gray-800"
          aria-label="Close mobile menu"
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

      <div className="flex-1 py-6">
        <nav className="px-6 space-y-6">
          <div>
            <button
              onClick={toggleBrowseDropdown}
              className="flex items-center justify-between w-full text-left text-gray-800 hover:text-gray-600 transition-colors"
            >
              <span className="text-lg font-medium">Browse Spaces</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  isBrowseDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isBrowseDropdownOpen && (
              <div className="mt-3 ml-4 space-y-3">
                {browseOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.href}
                    className="block text-gray-600 hover:text-gray-800 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/services"
            className="block text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
            onClick={closeMobileMenu}
          >
            Services
          </a>

          <a
            href="/blogs"
            className="block text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
            onClick={closeMobileMenu}
          >
            Blogs
          </a>

          <a
            href="/about"
            className="block text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
            onClick={closeMobileMenu}
          >
            About
          </a>
        </nav>
      </div>

      <div className="p-6 border-t border-gray-200">
        <a
          href="/contact"
          className="block w-full"
          onClick={closeMobileMenu}
        >
          <button className="w-full bg-gray-800 text-white font-medium px-6 py-3 rounded hover:bg-gray-700 transition-colors">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  </div>

  {isBrowseDropdownOpen && (
    <div
      className="fixed inset-0 z-10"
      onClick={() => setIsBrowseDropdownOpen(false)}
    />
  )}
</>

);
};

export default Navbar;
