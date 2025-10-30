"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-white">Copier Profile</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Delivering innovative and reliable copier & printer solutions to help
          businesses achieve smooth and efficient workflows.
        </motion.p>
      </section>

      {/* ✅ Company Info */}
      <main className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 py-16 gap-10 bg-[#fff8f3]">
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#f97316]">Who We Are</h2>
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
          className="md:w-1/2 bg-white p-8 rounded-2xl shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#f97316] mb-4">
            Our Core Values
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>💡 <strong>Innovation:</strong> Bringing the latest printing technologies to clients.</li>
            <li>🤝 <strong>Reliability:</strong> We ensure consistent service quality and long-term partnerships.</li>
            <li>🌿 <strong>Sustainability:</strong> Promoting eco-friendly products and efficient printing practices.</li>
            <li>💼 <strong>Professionalism:</strong> Dedicated to excellence in every interaction and support.</li>
          </ul>
        </motion.div>
      </main>

      {/* ✅ Team Section (optional) */}
      <section className="py-16 bg-gradient-to-r from-[#fff1e6] to-[#ffe1c9] text-center">
        <motion.h2
          className="text-3xl font-bold text-[#f97316] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Member 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 w-64">
            <img
              src="/team1.png"
              alt="Team member"
              className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">jiajia</h3>
            <p className="text-sm text-gray-500">Intern</p>
          </div>

          {/* Member 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 w-64">
            <img
              src="/team2.png"
              alt="Team member"
              className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">Kenny Loh</h3>
            <p className="text-sm text-gray-500">Sales Executive</p>
          </div>
        </div>
      </section>
    </div>
  );
}
