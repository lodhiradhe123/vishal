import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Coins } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="px-4 md:px-8 py-2 flex items-center justify-between">
        {/* Left: Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center: Logo + Title (with centered flex on desktop) */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/Images/logo-bgremoved.png"
            alt="उवाच Logo"
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide">
            उवाच
          </span>
        </div>

        {/* Right: Coins Display */}
        <div className="text-yellow-500 flex items-center space-x-1 md:ml-auto">
          <Coins className="w-6 h-6" />
          <span className="text-sm font-semibold">0</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex md:items-center md:justify-center md:space-x-8 px-6 md:px-0 py-2 md:py-0 bg-white md:bg-transparent transition-all duration-300 ease-in-out shadow-md md:shadow-none ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/services", label: "Our Services" },
          { to: "/art-gallery", label: "Art Gallery" },
          { to: "/be-a-writer", label: "Be a Writer" },
          { to: "/contact", label: "Contact Us" },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className="block text-base text-gray-700 hover:text-yellow-500 transition-colors duration-200 py-1"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
