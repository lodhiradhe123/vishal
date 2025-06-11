import React from "react";
import { Link } from "react-router-dom";
import heroImage from "/src/assets/Images/front-background.jpg"; // Replace with your actual image

const HeroSection = () => {
  return (
    <section className="pt-28 md:pt-36 px-6 md:px-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto space-y-8 md:space-y-0">
        {/* Left: Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            शब्दों से संवेदना तक,
            <br />
            <span className="text-yellow-500">उवाच</span> के साथ एक सफर।
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            खोजिए कविताएं, कहानियाँ, और वो हर अभिव्यक्ति जो दिल को छू जाए।
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
            <Link
              to="/be-a-writer"
              className="px-6 py-3 bg-yellow-500 text-white rounded-xl text-lg font-semibold hover:bg-yellow-600 transition"
            >
              Be a Writer
            </Link>
            <Link
              to="/art-gallery"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl text-lg font-medium hover:bg-gray-300 transition"
            >
              Explore Gallery
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Hero art"
            className="w-72 md:w-96 h-auto rounded-3xl border-4 border-yellow-400 shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
