import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ArtGallery from "./pages/ArtGallery";
import BeAWriter from "./pages/BeAWriter";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/art-gallery" element={<ArtGallery />} />
        <Route path="/be-a-writer" element={<BeAWriter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
