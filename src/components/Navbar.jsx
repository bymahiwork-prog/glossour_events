"use client";

import { useState } from "react";

const Navbar = ({ variant = "transparent" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrowseDropdownOpen, setIsBrowseDropdownOpen] = useState(false);

  const isBlack = variant === "black";

  const getNavbarClasses = () => {
    const baseClasses =
      "absolute top-0 left-0 w-full flex justify-between items-center px-5 sm:px-8 lg:px-10 xl:px-12 py-4 lg:py-5 z-50 transition-all duration-300";

    return isBlack
      ? `${baseClasses} bg-black border-b border-white/10`
      : `${baseClasses} bg-transparent`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBrowseDropdown = () => {
    setIsBrowseDropdownOpen(!isBrowseDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsBrowseDropdownOpen(false);
  };

  const closeBrowseDropdown = () => {
    setIsBrowseDropdownOpen(false);
  };

  const browseOptions = [
    {
      name: "Farmhouses",
      href: "/farmhouses",
    },
    {
      name: "Apartments",
      href: "/apartments",
    },
    {
      name: "Wedding Venues",
      href: "/wedding-venues",
    },
  ];

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ===================================================== */}

      <div className={getNavbarClasses()}>

        {/* Logo */}
        <div className="flex-shrink-0">
          <a
            href="/"
            className="block"
            onClick={closeMobileMenu}
          >
            <img
              src="/logo.png"
              alt="Effortless Events"
              className="h-14 sm:h-16 lg:h-[68px] w-auto object-contain"
            />
          </a>
        </div>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">

          {/* Home */}
          <a
            href="/"
            className="relative text-sm text-white transition-colors duration-300 hover:text-[#d6b36a] group"
          >
            Home

            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#d6b36a] transition-all duration-300 group-hover:w-full" />
          </a>


          {/* Browse Spaces */}
          <div className="relative">

            <button
              type="button"
              onClick={toggleBrowseDropdown}
              className="group flex items-center gap-1.5 text-sm text-white transition-colors duration-300 hover:text-[#d6b36a]"
            >
              <span>Browse Spaces</span>

              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isBrowseDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>


            {/* Desktop Dropdown */}
            {isBrowseDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 overflow-hidden bg-white border border-neutral-200 shadow-2xl">

                <div className="py-2">

                  {browseOptions.map((option) => (
                    <a
                      key={option.href}
                      href={option.href}
                      className="block px-5 py-3 text-sm text-neutral-700 transition-colors duration-200 hover:bg-[#f7f4ee] hover:text-black"
                      onClick={closeBrowseDropdown}
                    >
                      {option.name}
                    </a>
                  ))}

                </div>

              </div>
            )}

          </div>


          {/* Services */}
          <a
            href="/services"
            className="relative text-sm text-white transition-colors duration-300 hover:text-[#d6b36a] group"
          >
            Services

            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#d6b36a] transition-all duration-300 group-hover:w-full" />
          </a>


          {/* Blogs */}
          <a
            href="/blogs"
            className="relative text-sm text-white transition-colors duration-300 hover:text-[#d6b36a] group"
          >
            Blogs

            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#d6b36a] transition-all duration-300 group-hover:w-full" />
          </a>


          {/* About */}
          <a
            href="/about"
            className="relative text-sm text-white transition-colors duration-300 hover:text-[#d6b36a] group"
          >
            About Us

            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#d6b36a] transition-all duration-300 group-hover:w-full" />
          </a>


          {/* Contact CTA - WhatsApp */}
          <a
            href="https://wa.me/917838008069"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center justify-center bg-[#d6b36a] px-6 xl:px-7 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase text-black transition-all duration-300 hover:bg-white"
          >
            Get In Touch
          </a>

        </nav>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
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
                strokeWidth={1.8}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>

      </div>


      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] lg:hidden"
          onClick={closeMobileMenu}
        />
      )}


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`fixed top-0 right-0 h-full w-[330px] max-w-[88vw] bg-white z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex flex-col h-full">

          {/* Mobile Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-neutral-200">

            <a
              href="/"
              onClick={closeMobileMenu}
              className="block"
            >
              <img
                src="/logo.png"
                alt="Effortless Events"
                className="h-12 w-auto object-contain"
              />
            </a>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-9 h-9 text-neutral-600 hover:text-black transition-colors"
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
                  strokeWidth={1.8}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

          </div>


          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto px-6 py-8">

            <nav className="space-y-7">

              {/* Home */}
              <a
                href="/"
                className="block text-lg font-medium text-neutral-900 hover:text-[#b38b45] transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </a>


              {/* Browse Spaces */}
              <div>

                <button
                  type="button"
                  onClick={toggleBrowseDropdown}
                  className="flex items-center justify-between w-full text-left text-lg font-medium text-neutral-900 hover:text-[#b38b45] transition-colors"
                >
                  <span>Browse Spaces</span>

                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isBrowseDropdownOpen
                        ? "rotate-180"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>


                {isBrowseDropdownOpen && (
                  <div className="mt-4 ml-4 pl-4 border-l border-[#d6b36a] space-y-4">

                    {browseOptions.map((option) => (
                      <a
                        key={option.href}
                        href={option.href}
                        className="block text-sm text-neutral-600 hover:text-black transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {option.name}
                      </a>
                    ))}

                  </div>
                )}

              </div>


              {/* Services */}
              <a
                href="/services"
                className="block text-lg font-medium text-neutral-900 hover:text-[#b38b45] transition-colors"
                onClick={closeMobileMenu}
              >
                Services
              </a>


              {/* Blogs */}
              <a
                href="/blogs"
                className="block text-lg font-medium text-neutral-900 hover:text-[#b38b45] transition-colors"
                onClick={closeMobileMenu}
              >
                Blogs
              </a>


              {/* About */}
              <a
                href="/about"
                className="block text-lg font-medium text-neutral-900 hover:text-[#b38b45] transition-colors"
                onClick={closeMobileMenu}
              >
                About Us
              </a>

            </nav>

          </div>


          {/* Mobile Contact */}
          <div className="p-6 border-t border-neutral-200">

            <a
              href="https://wa.me/917838008069"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center bg-[#d6b36a] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase text-black transition-all duration-300 hover:bg-black hover:text-white"
              onClick={closeMobileMenu}
            >
              Get In Touch
            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
          DESKTOP DROPDOWN BACKDROP
      ===================================================== */}

      {isBrowseDropdownOpen && (
        <div
          className="fixed inset-0 z-40 hidden lg:block"
          onClick={closeBrowseDropdown}
        />
      )}

    </>
  );
};

export default Navbar;
