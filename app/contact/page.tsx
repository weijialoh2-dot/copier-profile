"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copiedText, setCopiedText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCopy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
      description: text,
    });
  } catch (err) {
    console.error("Copy failed:", err);
    toast.error("Failed to copy!");
  }
};

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 text-white px-6 md:px-20 py-20 flex flex-col relative overflow-hidden">
        {/* ✅ 高级 Toast 提示 */}
        <AnimatePresence>
          {copiedText && (
            <motion.div
              key="toast"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-6 right-6 z-50 flex items-center gap-3 
                         bg-white/20 backdrop-blur-md border border-white/40 
                         rounded-xl px-5 py-3 shadow-lg text-white font-medium"
            >
              <div className="text-lg">✅</div>
              <p className="text-sm tracking-wide">Copied to clipboard!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 标题区 */}
        <motion.div
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-orange-50 max-w-3xl mx-auto leading-relaxed">
            Have a question or need our printing services? We’d love to hear
            from you.
          </p>
        </motion.div>

        {/* 内容区 */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto w-full items-stretch">
          {/* 左边：联系表单 */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex-1 bg-white text-gray-800 rounded-2xl shadow-2xl p-10 space-y-6 flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-orange-600 mb-4">
                ✉️ Send Us a Message
              </h2>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                ></textarea>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* 右边：公司信息 */}
          <motion.div
            className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl space-y-8 border border-white/20 flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b border-orange-200 pb-2">
                📍 Our Offices & Contacts
              </h2>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  HQ (Correspondence Address)
                </h3>
                <a
                  href="https://www.google.com/maps?q=52,+Laluan+Perusahaan+Kledang+1,+Kawasan+Perindustrian+Chandan+Raya,+31450+Menglembu,+Perak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-orange-50 leading-relaxed hover:underline hover:text-white transition text-justify max-w-sm"
                >
                  52, Laluan Perusahaan Kledang 1, Kawasan Perindustrian Chandan
                  Raya, 31450 Menglembu, Perak.
                </a>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Selangor Office</h3>
                <a
                  href="https://www.google.com/maps?q=No.+2,+Jalan+Pandan+Cahaya+1/2,+Pandan+Cahaya,+68000+Ampang,+Selangor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-orange-50 leading-relaxed hover:underline hover:text-white transition text-justify max-w-sm"
                >
                  No. 2, Jalan Pandan Cahaya 1/2, Pandan Cahaya, 68000 Ampang,
                  Selangor.
                </a>
              </div>

              {/* 📞 电话 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
                <button
                  onClick={() => handleCopy("+60 12-556 9905")}
                  className="text-orange-50 hover:text-white hover:underline transition-all cursor-pointer"
                >
                  +60 12-556 9905
                </button>
              </div>

              {/* 📧 邮箱 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
                <button
                  onClick={() => handleCopy("copierprofile@gmail.com")}
                  className="text-orange-50 hover:text-white hover:underline transition-all cursor-pointer"
                >
                  copierprofile@gmail.com
                </button>
              </div>
            </div>

            {/* 🕒 工作时间 */}
            <div className="pt-6 border-t border-white/20">
              <h3 className="text-xl font-semibold mb-2">🕒 Working Hours</h3>
              <p className="text-orange-50 leading-relaxed">
                Monday – Friday: 9:00 AM – 6:00 PM
                <br />
                Saturday: 9:00 AM – 1:00 PM
                <br />
                Sunday & Public Holidays: Closed
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
