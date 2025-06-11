import React from "react";
import { BookOpenText, Mic, PenTool, Info, Menu, Coins } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "../components/Hero";

const Home = () => {
  return (
    <div className="bg-[#fdf6ec] min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <HeroSection />
      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10 grid gap-8 md:grid-cols-2 bg-[#fdf6ec]">
        {/* प्रकाशन */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl shadow-md border bg-white hover:shadow-xl transition-shadow p-6"
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-yellow-700">
            <BookOpenText /> प्रकाशन
          </h2>
          <p className="text-gray-800 mb-4">
            उवाच का उद्देश्य है नए और मौलिक साहित्य को आवाज़ देना। पढ़ें बेहतरीन
            रचनाएँ और लेख।
          </p>
          <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-5 py-2 rounded-lg transition-all">
            Explore Publications
          </button>
        </motion.section>

        {/* वाणी */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl shadow-md border bg-white hover:shadow-xl transition-shadow p-6"
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-rose-700">
            <Mic /> वाणी
          </h2>
          <p className="text-gray-800 mb-4">
            सुनिए दिल को छू जाने वाली शायरी, कविताएँ और कहानियाँ — आपके लिए
            आवाज़ में।
          </p>
          <button className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-2 rounded-lg transition-all">
            Listen Now
          </button>
        </motion.section>

        {/* लेखक बनें */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="rounded-xl shadow-md border bg-white hover:shadow-xl transition-shadow p-6"
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-emerald-700">
            <PenTool /> लेखक बनें
          </h2>
          <p className="text-gray-800 mb-4">
            क्या आप भी अपनी आवाज़ को काग़ज़ पर उतारना चाहते हैं? अपनी रचनाएँ
            भेजें और हम उन्हें प्रकाशित करेंगे।
          </p>
          <input
            type="text"
            placeholder="आपका नाम"
            className="mb-2 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-300"
          />
          <textarea
            placeholder="अपनी रचना लिखें..."
            className="mb-2 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-300"
            rows="4"
          ></textarea>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-lg transition-all">
            Submit Your Work
          </button>
        </motion.section>

        {/* हमारे बारे में */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="rounded-xl shadow-md border bg-white hover:shadow-xl transition-shadow p-6"
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-indigo-700">
            <Info /> हमारे बारे में
          </h2>
          <p className="text-gray-800">
            उवाच एक स्वतंत्र साहित्यिक मंच है जहाँ हम साहित्य को नई ऊँचाइयों तक
            पहुँचाने का प्रयास कर रहे हैं। यहाँ हर स्वर, हर शब्द को विशेष स्थान
            मिलता है।
          </p>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-5 border-t bg-[#fdf4e3]">
        © 2025 <span className="font-semibold text-yellow-800">उवाच</span>. All
        rights reserved.
      </footer>
    </div>
  );
};

export default Home;
