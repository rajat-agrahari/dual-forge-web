
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 py-4 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <a href="#" className="text-2xl font-bold text-navy-950">
          Anuj<span className="text-teal-500">&</span>Rajat
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          {["Home", "About", "Projects", "Services", "Skills", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="animated-underline text-gray-700 hover:text-navy-950"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 text-navy-800 hover:bg-gray-100 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-gray-200 bg-white py-4 px-4 shadow-md md:hidden">
          <nav className="flex flex-col space-y-4">
            {["Home", "About", "Projects", "Services", "Skills", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-navy-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
