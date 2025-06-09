import React from "react";
import { motion } from "framer-motion";
import { BookOpenText, Mic, PenTool, Info } from "lucide-react";

const Home = () => {
  return (
    <main className="p-6 grid gap-6 md:grid-cols-2">
      {/* प्रकाशन */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl shadow-lg border bg-white"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <BookOpenText className="text-blue-600" /> प्रकाशन
          </h2>
          <p className="text-base text-gray-700">
            उवाच का उद्देश्य है नए और मौलिक साहित्य को आवाज़ देना।
          </p>
        </div>
      </motion.section>

      {/* वाणी */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl shadow-lg border bg-white"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Mic className="text-red-500" /> वाणी
          </h2>
          <p className="text-base text-gray-700">
            सुनिए रचनाएँ: शायरी, कविताएँ और कहानियाँ।
          </p>
        </div>
      </motion.section>

      {/* लेखक बनें */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="rounded-2xl shadow-lg border bg-white"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <PenTool className="text-green-600" /> लेखक बनें
          </h2>
          <p className="text-base text-gray-700 mb-2">
            अगर आप भी अपनी आवाज़ को काग़ज़ पर उतारना चाहते हैं, तो हमें भेजिए
            अपनी रचनाएँ।
          </p>
          <input
            type="text"
            placeholder="आपका नाम"
            className="mb-2 w-full px-4 py-2 border rounded-md"
          />
          <textarea
            placeholder="रचना यहाँ लिखें..."
            className="mb-2 w-full px-4 py-2 border rounded-md"
            rows="4"
          ></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            प्रस्तुत करें
          </button>
        </div>
      </motion.section>

      {/* हमारे बारे में */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="rounded-2xl shadow-lg border bg-white"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Info className="text-indigo-500" /> हमारे बारे में
          </h2>
          <p className="text-base text-gray-700">
            उवाच एक स्वतंत्र साहित्यिक मंच है।
          </p>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
