import React from "react";
import { motion } from "framer-motion";
import { PenTool } from "lucide-react";

const BeAWriter = () => {
  return (
    <main className="p-6 grid gap-6 md:grid-cols-1 lg:grid-cols-1 w-1/2">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl shadow-lg border bg-white"
      >
        <div className="p-6 ">
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2 text-green-600">
            <PenTool /> लेखक बनें
          </h2>
          <p className="text-base text-gray-700 mb-4">
            अगर आप भी अपनी आवाज़ को काग़ज़ पर उतारना चाहते हैं, तो हमें भेजिए
            अपनी रचनाएँ।
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">आपका नाम</label>
              <input
                type="text"
                placeholder="आपका नाम"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">ईमेल</label>
              <input
                type="email"
                placeholder="आपका ईमेल"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">रचना का शीर्षक</label>
              <input
                type="text"
                placeholder="रचना का शीर्षक"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                अपनी रचना लिखें
              </label>
              <textarea
                placeholder="अपनी रचना यहाँ लिखें..."
                className="w-full px-4 py-2 border rounded-md"
                rows="6"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
            >
              प्रस्तुत करें
            </button>
          </form>
        </div>
      </motion.section>
    </main>
  );
};

export default BeAWriter;
