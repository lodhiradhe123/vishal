import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white bg-white/10 px-6 py-2 flex items-center justify-between shadow-lg fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="text-3xl font-bold tracking-wide">उवाच</div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Links */}
      <div
        className={`absolute md:static top-full left-0 w-full md:w-auto opacity-70  md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-8 items-center px-6 md:px-0 py-4 md:py-0 transition-all duration-500 ease-in-out ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <Link
          to="/"
          className="block text-lg hover:text-yellow-300 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block text-lg hover:text-yellow-300 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="block text-lg hover:text-yellow-300 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Our Services
        </Link>
        <Link
          to="/art-gallery"
          className="block text-lg hover:text-yellow-300 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Art Gallery
        </Link>
        <Link
          to="/be-a-writer"
          className="block text-lg hover:text-yellow-300 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Be a Writer
        </Link>
        <Link
          to="/contact"
          className="block text-lg hover:text-yellow-300 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
