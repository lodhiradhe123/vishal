import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1e293b] text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="text-3xl font-bold">उवाच</div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:flex space-x-6 items-center ${
          isOpen ? "block mt-4" : "hidden md:block"
        }`}
      >
        <Link to="/" className="hover:text-blue-400 block py-2">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400 block py-2">
          About Us
        </Link>
        <Link to="/services" className="hover:text-blue-400 block py-2">
          Our Services
        </Link>
        <Link to="/art-gallery" className="hover:text-blue-400 block py-2">
          Art Gallery
        </Link>
        <Link to="/be-a-writer" className="hover:text-blue-400 block py-2">
          Be a Writer
        </Link>
        <Link to="/contact" className="hover:text-blue-400 block py-2">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
