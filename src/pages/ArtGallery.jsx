import React from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

// Sample art data
const artworks = [
  {
    id: 1,
    title: "सूरजमुखी का खेत",
    artist: "राधिका शर्मा",
    description: "एक उज्ज्वल और जीवंत सूरजमुखी के खेत का चित्रण।",
    imageUrl: "https://via.placeholder.com/400x250?text=Artwork+1",
  },
  {
    id: 2,
    title: "चाँदनी रात",
    artist: "विक्रम रॉय",
    description: "चाँदनी रात में शांत झील के किनारे की चित्रकला।",
    imageUrl: "https://via.placeholder.com/400x250?text=Artwork+2",
  },
  {
    id: 3,
    title: "गाँव की गलियाँ",
    artist: "सुजाता कुमारी",
    description: "भारतीय गाँव की रंगीन गलियों का दृश्य।",
    imageUrl: "https://via.placeholder.com/400x250?text=Artwork+3",
  },
  {
    id: 4,
    title: "आधुनिक कला",
    artist: "राहुल जैन",
    description: "आधुनिक अमूर्त कला का रचनात्मक प्रदर्शन।",
    imageUrl: "https://via.placeholder.com/400x250?text=Artwork+4",
  },
];

const ArtGallery = () => {
  return (
    <main className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {artworks.map((art, index) => (
        <motion.section
          key={art.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 + index * 0.2 }}
          className="rounded-2xl shadow-lg border bg-white flex flex-col"
        >
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <ImageIcon className="text-indigo-500" /> {art.title}
            </h2>
            <p className="text-sm text-gray-600 mb-2">कलाकार: {art.artist}</p>
            <img
              src={art.imageUrl}
              alt={art.title}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <p className="text-base text-gray-700">{art.description}</p>
          </div>
        </motion.section>
      ))}
    </main>
  );
};

export default ArtGallery;
