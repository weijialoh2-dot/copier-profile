"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 菜单列表 — 只改了 Contact 为真正链接
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/product" },
    { name: "Contact", href: "/contact" }, // ✅ 指向 /contact
  ];

  return (
    <nav className="bg-[#fff5eb] sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo + Title */}
        <motion.div
          className="flex items-center space-x-2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
            C
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide text-gray-800">
            COPIER PROFILE SDN. BHD.
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item, idx) => (
            <li key={idx} className="hover:text-[#f97316] transition-colors">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-gray-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#fff5eb] border-t border-orange-100 shadow-inner"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#f97316] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
