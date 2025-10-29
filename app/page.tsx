"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
            {/* ✅ Navbar Component */}
      <Navbar />


      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#fff5eb] shadow-md border-t border-orange-100 px-6 py-4 space-y-3 text-gray-700 font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "About", "Products", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-[#f97316] transition-colors"
              onClick={() => setMenuOpen(false)} // 自动关闭菜单
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white relative overflow-hidden">
        {/* Left content */}
        <motion.div
          className="max-w-xl space-y-5 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            Your Trusted <br />
            Copier & Printer Partner
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-orange-100">
            Providing reliable printing solutions and services for every
            business need.
          </p>
          <motion.button
            className="bg-white text-[#f97316] px-6 py-3 rounded-lg mt-4 font-semibold shadow-md hover:bg-orange-50 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* Copier Image */}
        <motion.div
          className="flex items-center justify-center md:justify-end w-full md:w-1/2 mt-10 md:mt-0 relative md:-ml-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/imc6000.png"
            alt="Copier machine"
            width={580}
            height={580}
            className="object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-500"
            priority
          />
        </motion.div>
      </main>
    </div>
  );
}
