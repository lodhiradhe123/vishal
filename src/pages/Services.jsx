import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  BookOpenText,
  PenTool,
  GalleryVerticalEnd,
  Star,
} from "lucide-react";

const Services = () => {
  return (
    <main className="p-6 grid gap-6 md:grid-cols-2">
      {/* प्रकाशन सेवा */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl shadow-lg border bg-white"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <BookOpenText className="text-blue-600" /> प्रकाशन सेवा
          </h2>
          <p className="text-base text-gray-700">
            नए लेखकों के लिए प्रकाशन सुविधा - अपनी रचनाओं को मंच पर प्रकाशित
            करें और एक व्यापक पाठक वर्ग तक पहुँचें।
          </p>
        </div>
      </motion.section>

      {/* वाणी सेवा */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl shadow-lg border bg-white"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Mic className="text-red-500" /> वाणी सेवा
          </h2>
          <p className="text-base text-gray-700">
            लेखकों और कवियों की आवाज़ को रिकॉर्ड कर ऑडियो स्वरूप में प्रस्तुत
            करने की सेवा।
          </p>
        </div>
      </motion.section>

      {/* लेखक सहायता */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="rounded-2xl shadow-lg border bg-white"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <PenTool className="text-green-600" /> लेखक सहायता
          </h2>
          <p className="text-base text-gray-700">
            लेखकों को सम्पादन, सुझाव और रचना सुधार में मदद प्रदान करना ताकि उनकी
            कला और भी निखरे।
          </p>
        </div>
      </motion.section>

      {/* आर्ट गैलरी सेवा */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="rounded-2xl shadow-lg border bg-white"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <GalleryVerticalEnd className="text-indigo-500" /> आर्ट गैलरी सेवा
          </h2>
          <p className="text-base text-gray-700">
            चित्रकारों और डिजिटल कलाकारों को अपनी कला प्रदर्शित करने और बेचने का
            मंच प्रदान करना।
          </p>
        </div>
      </motion.section>

      {/* प्रीमियम सदस्यता */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="rounded-2xl shadow-lg border bg-white md:col-span-2"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Star className="text-yellow-500" /> प्रीमियम सदस्यता
          </h2>
          <p className="text-base text-gray-700">
            विशेष सुविधाओं, व्यक्तिगत गाइडेंस, और प्रमुख स्थानों पर रचनाओं के
            प्रदर्शन के लिए प्रीमियम सदस्यता सेवा।
          </p>
        </div>
      </motion.section>
    </main>
  );
};

export default Services;
