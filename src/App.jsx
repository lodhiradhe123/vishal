import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { BookOpenText, Mic, PenTool, Info } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#1e293b] text-white py-8 px-6 shadow-md">
        <h1 className="text-4xl font-bold tracking-wide">उवाच</h1>
        <p className="text-lg text-gray-300 mt-2">आवाज़ जो लिखी गई</p>
      </header>

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
              उवाच का उद्देश्य है नए और मौलिक साहित्य को आवाज़ देना। यहाँ आप
              शायरी, ग़ज़ल, कहानियाँ और विचार पढ़ सकते हैं जो दिल और ज़मीर से
              जुड़े हैं।
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
              सुनिए रचनाएँ: शायरी, कविताएँ और कहानियाँ आमंत्रित रचनाकारों द्वारा
              प्रस्तुत।
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
              उवाच एक स्वतंत्र साहित्यिक मंच है, जहाँ लेखनी और वाणी दोनों को
              बराबरी से मंच मिलता है।
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
