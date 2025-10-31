"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-[#fff8f3] to-[#fff1e6] text-gray-800">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white shadow-lg">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold drop-shadow-xl tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-white">Copier Profile</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Delivering innovative and reliable copier & printer solutions to help
          businesses achieve smooth and efficient workflows.
        </motion.p>
      </section>

      {/* ✅ Company Info */}
      <main className="flex flex-col md:flex-row items-start justify-between px-8 md:px-16 py-20 gap-10">
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#f97316] mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Copier Profile Sdn. Bhd.</strong> is a trusted supplier and
            service provider specializing in multifunctional copiers and printing
            systems. Since our establishment, we have been committed to providing
            businesses of all sizes with advanced, energy-efficient, and
            cost-effective printing solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our goal is to simplify your workflow — from document management to
            maintenance — ensuring your office productivity never stops.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-orange-100"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#f97316] mb-6">
            Our Core Values
          </h2>
          <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
            <li>💡 <strong>Innovation:</strong> Bringing the latest printing technologies to clients.</li>
            <li>🤝 <strong>Reliability:</strong> We ensure consistent service quality and long-term partnerships.</li>
            <li>🌿 <strong>Sustainability:</strong> Promoting eco-friendly products and efficient printing practices.</li>
            <li>💼 <strong>Professionalism:</strong> Dedicated to excellence in every interaction and support.</li>
          </ul>
        </motion.div>
      </main>

      {/* ✅ Mission & Vision */}
      <section className="py-20 px-6 md:px-16 bg-white text-center shadow-inner">
        <motion.h2
          className="text-3xl font-bold text-[#f97316] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-gray-700">
          {[
            {
              title: "🎯 Mission",
              desc: "To provide businesses with reliable, energy-efficient, and innovative copier and printing solutions that streamline operations and enhance productivity.",
            },
            {
              title: "🌟 Vision",
              desc: "To become Malaysia’s most trusted name in printing solutions, empowering businesses with sustainable and cutting-edge technologies.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-[#fff8f3] p-10 rounded-3xl shadow-md hover:shadow-lg transition duration-300 border border-orange-100"
            >
              <h3 className="text-2xl font-semibold text-[#f97316] mb-4">
                {item.title}
              </h3>
              <p className="leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-24 bg-[#fff5eb] text-center">
        <motion.h2
          className="text-3xl font-bold text-[#f97316] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 text-gray-700">
          {[
            {
              title: "Expert Support",
              desc: "Our dedicated team provides prompt and professional assistance at every step.",
              icon: "🤝",
            },
            {
              title: "Affordable Solutions",
              desc: "We offer cost-effective plans designed to suit businesses of all sizes.",
              icon: "💰",
            },
            {
              title: "Eco-Friendly Approach",
              desc: "We emphasize energy efficiency and sustainability in all our products.",
              icon: "🌿",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-orange-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#f97316] mb-3">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
