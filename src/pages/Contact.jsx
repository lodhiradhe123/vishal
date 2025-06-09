import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the formData to your backend API
    toast.success("आपका संदेश सफलतापूर्वक भेजा गया!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="p-6 flex justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl shadow-xl border bg-white w-full max-w-2xl p-8"
      >
        <Toaster position="top-center" />

        <h2 className="text-4xl font-bold mb-6 flex items-center gap-2 text-indigo-600">
          <Mail size={32} /> संपर्क करें
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          अगर आपके पास कोई प्रश्न है या आप हमसे संपर्क करना चाहते हैं, तो नीचे
          दिए गए फॉर्म को भरें। हम जल्द से जल्द उत्तर देंगे।
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              आपका नाम
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="आपका नाम"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ईमेल
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="आपका ईमेल"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              विषय
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="विषय लिखें"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              संदेश
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="अपना संदेश लिखें..."
              rows="6"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-6 py-3 rounded-xl transition"
          >
            भेजें
          </button>
        </form>
      </motion.section>
    </main>
  );
};

export default Contact;
