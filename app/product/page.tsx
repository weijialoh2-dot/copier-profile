"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function ProductPage() {
  const categories = [
    {
      title: "Multifunction Printer (Colour)",
      description:
        "Professional colour multifunction printers delivering vibrant output and reliable performance for business environments.",
      products: [
        {
          name: "IM C3000",
          image: "imc.png",
          desc: "Compact yet powerful, ideal for small to mid-sized offices requiring quality colour prints.",
        },
        {
          name: "IM C4500",
          image: "imc.png",
          desc: "High-speed colour printing for demanding offices with exceptional image quality and durability.",
        },
        {
          name: "IM C6000",
          image: "imc.png",
          desc: "Enterprise-level performance with outstanding efficiency and vibrant colour reproduction.",
        },
      ],
    },
    {
      title: "Multifunction Printer (Black & White)",
      description:
        "Reliable monochrome printers built for productivity, efficiency, and cost-saving performance.",
      products: [
        {
          name: "MP 2555",
          image: "mp.png",
          desc: "Fast and durable, perfect for small teams requiring consistent document output.",
        },
        {
          name: "MP 3055",
          image: "mp.png",
          desc: "Balanced speed and reliability — ideal for medium-sized workgroups.",
        },
        {
          name: "MP 4055",
          image: "mp.png",
          desc: "Designed for heavy workloads with robust features and exceptional clarity.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 text-white px-6 md:px-20 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-orange-50 max-w-3xl mx-auto">
            Copier Profile provides sales and rental services for multifunction printers and consumable parts.
            Explore our range of reliable colour and black & white models tailored to your business needs.
          </p>
        </motion.div>

        {/* Product Categories */}
        <div className="space-y-20 max-w-7xl mx-auto">
          {categories.map((cat, index) => (
            <motion.section
              key={index}
              className="space-y-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Category Title */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {cat.title}
                </h2>
                <p className="text-orange-50 max-w-2xl mx-auto">
                  {cat.description}
                </p>
              </div>

              {/* Product Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {cat.products.map((p, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden text-gray-800 flex flex-col hover:shadow-orange-300 transition-shadow"
                    whileHover={{ scale: 1.03 }}
                  >
                    {/* ✅ Product Image (fixed sizing) */}
                    <div className="relative h-60 w-full bg-white flex items-center justify-center">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain p-6"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-orange-600 mb-2">
                          {p.name}
                        </h3>
                        <p className="text-gray-700 mb-4">{p.desc}</p>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg transition-all"
                        >
                          View Details
                        </motion.button>

                        <Link href="/contact" className="flex-1">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-white text-orange-600 py-2 rounded-lg font-semibold border border-orange-300 hover:bg-orange-100 hover:shadow-lg transition-all"
                          >
                            Get Quote
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>
    </>
  );
}
