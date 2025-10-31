"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Products",
    "Services",
    "Testimonials",
    "Contact",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-[#fff8f3] to-[#fff1e6] text-gray-800">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          onClick={() => setMenuOpen(false)}
        >
          <motion.div
            className="absolute top-16 left-0 right-0 bg-[#fff5eb] shadow-md border-t border-orange-100 px-6 py-6 space-y-4 text-gray-700 font-medium"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="block hover:text-[#f97316] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* ✅ Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white relative"
      >
        {/* Left content */}
        <motion.div
          className="max-w-xl space-y-6 z-10"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            Your Trusted <br />
            Copier & Printer Partner
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-orange-100">
            Providing reliable printing solutions and services for every
            business need.
          </p>
          <motion.button
            className="bg-white text-[#f97316] px-8 py-3 rounded-xl mt-4 font-semibold shadow-lg hover:bg-orange-50 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* Copier Image */}
        <motion.div
          className="flex items-center justify-center md:justify-end w-full md:w-1/2 mt-12 md:mt-0 relative"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/imc6000.png"
            alt="Copier machine"
            width={560}
            height={560}
            className="object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-500"
            priority
          />
        </motion.div>
      </section>

      {/* ✅ About Section */}
      <section id="about" className="py-20 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#f97316] mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          At <strong>Copier Profile Sdn. Bhd.</strong>, we specialize in
          providing high-quality multifunction copiers and printing solutions.
          With over a decade of experience, our team is committed to delivering
          excellence in every product and service we offer — helping businesses
          operate more efficiently and sustainably.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <Image
            src="/team.png"
            alt="Our team"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="max-w-md text-left space-y-4">
            <h3 className="text-2xl font-semibold text-[#f97316]">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide reliable, affordable, and eco-friendly copier solutions
              that empower every business to print smarter and work better.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Products Section */}
      <section
        id="products"
        className="py-20 px-6 md:px-16 bg-[#fff5eb] text-center"
      >
        <h2 className="text-3xl font-bold text-[#f97316] mb-10">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "IM C Series",
              img: "/imc.png",
              desc: "Advanced smart multifunction color copiers designed for high-volume, professional office use. Exceptional clarity, wireless connectivity, and cloud integration.",
            },
            {
              name: "MP Series",
              img: "/mp.png",
              desc: "Reliable multifunction printers built for productivity and consistency. Ideal for medium to large offices needing fast, high-quality output.",
            },
            {
              name: "Toner & Supplies",
              img: "/toners.png",
              desc: "Original and compatible toners, drums, and consumables to ensure peak performance and longevity of your copier machines.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center"
              whileHover={{ scale: 1.03 }}
            >
              {/* ✅ 统一图片框架 */}
              <div className="w-full h-64 bg-[#fff5eb] rounded-xl flex items-center justify-center overflow-hidden mb-4 border border-orange-100">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={250}
                  height={250}
                  className="object-contain max-h-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-[#f97316]">{p.name}</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Services Section */}
      <section
        id="services"
        className="py-20 px-6 md:px-16 bg-white text-center"
      >
        <h2 className="text-3xl font-bold text-[#f97316] mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Maintenance & Support",
              desc: "Professional servicing and on-site technical assistance to keep your equipment running smoothly.",
            },
            {
              title: "Leasing Solutions",
              desc: "Flexible copier leasing plans for businesses of all sizes with full support and upgrades.",
            },
            {
              title: "Toner & Supplies",
              desc: "Fast and reliable supply of toner, paper, and accessories for uninterrupted productivity.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="p-6 bg-[#fff5eb] rounded-2xl shadow-md hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-[#f97316] mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-6 md:px-16 bg-[#fff5eb] text-center"
      >
        <h2 className="text-3xl font-bold text-[#f97316] mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Tan Wei Ming",
              text: "Excellent service and prompt support. Our office printing workflow has never been smoother!",
            },
            {
              name: "Lim Pei Ling",
              text: "High-quality copiers and professional after-sales service. Highly recommended!",
            },
            {
              name: "Jason Ong",
              text: "The leasing plan was perfect for our startup. Cost-effective and worry-free.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-[#f97316]">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-16 bg-white text-center"
      >
        <h2 className="text-3xl font-bold text-[#f97316] mb-8">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions or need a quote? We’d love to hear from you.
        </p>
        <motion.a
          href="/contact"
          className="inline-block bg-[#f97316] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#fb923c] transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-[#f97316] text-white text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Copier Profile Sdn. Bhd. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
