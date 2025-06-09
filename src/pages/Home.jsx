import React from "react";
import { BookOpenText, Mic, PenTool, Info } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative text-center py-16 px-4 text-white overflow-hidden h-[50vh] md:h-[70vh] flex items-center justify-center">
        {/* Background Image with slight zoom animation */}
        <motion.img
          src="/src/assets/Images/front-background.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }} // slow zoom-out
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>

        {/* Content with fade + slide up */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg"
            style={{
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
            }}
          >
            उवाच
          </h1>
          <p
            className="text-xl md:text-2xl max-w-xl mx-auto leading-relaxed drop-shadow"
            style={{
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            Bringing Literature to Life with Voice and Words 📚🎙️
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-6 grid gap-6 md:grid-cols-2">
        {/* प्रकाशन */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-lg border bg-white hover:shadow-xl transition-shadow p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
            <BookOpenText /> प्रकाशन
          </h2>
          <p className="text-base text-gray-700 mb-4">
            उवाच का उद्देश्य है नए और मौलिक साहित्य को आवाज़ देना। पढ़ें बेहतरीन
            रचनाएँ और लेख।
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Explore Publications
          </button>
        </motion.section>

        {/* वाणी */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-lg border bg-white hover:shadow-xl transition-shadow p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-red-500">
            <Mic /> वाणी
          </h2>
          <p className="text-base text-gray-700 mb-4">
            सुनिए दिल को छू जाने वाली शायरी, कविताएँ और कहानियाँ — आपके लिए
            आवाज़ में।
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
            Listen Now
          </button>
        </motion.section>

        {/* लेखक बनें */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="rounded-2xl shadow-lg border bg-white hover:shadow-xl transition-shadow p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-green-600">
            <PenTool /> लेखक बनें
          </h2>
          <p className="text-base text-gray-700 mb-4">
            क्या आप भी अपनी आवाज़ को काग़ज़ पर उतारना चाहते हैं? अपनी रचनाएँ
            भेजें और हम उन्हें प्रकाशित करेंगे।
          </p>
          <input
            type="text"
            placeholder="आपका नाम"
            className="mb-2 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300"
          />
          <textarea
            placeholder="अपनी रचना लिखें..."
            className="mb-2 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300"
            rows="4"
          ></textarea>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Submit Your Work
          </button>
        </motion.section>

        {/* हमारे बारे में */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="rounded-2xl shadow-lg border bg-white hover:shadow-xl transition-shadow p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-indigo-500">
            <Info /> हमारे बारे में
          </h2>
          <p className="text-base text-gray-700">
            उवाच एक स्वतंत्र साहित्यिक मंच है जहाँ हम साहित्य को नई ऊँचाइयों तक
            पहुँचाने का प्रयास कर रहे हैं। यहाँ हर स्वर, हर शब्द को विशेष स्थान
            मिलता है।
          </p>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t">
        © 2025 उवाच. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
