"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface Product {
  name: string;
  desc: string;
  image: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null;

  /** ✅ 各产品详细信息 */
  const details: Record<string, Record<string, string>> = {
    "IM C3000": {
      functions: "Print / Copy / Scan / Fax",
      speed: "30 ppm (pages per minute)",
      resolution: "1200 × 1200 dpi",
      capacity: "1,200 sheets (max 4,700)",
      weight: "Approximately 60 kg",
    },
    "IM C4500": {
      functions: "Print / Copy / Scan / Fax",
      speed: "45 ppm",
      resolution: "1200 × 1200 dpi",
      capacity: "1,200 sheets (max 4,700)",
      weight: "Approx. 73 kg",
    },
    "IM C6000": {
      functions: "Print / Copy / Scan / Fax",
      speed: "60 ppm",
      resolution: "1200 × 1200 dpi",
      capacity: "1,200 sheets (max 4,700)",
      weight: "Approx. 90 kg",
    },
    "MP 2555": {
      functions: "Print / Copy / Scan / Fax",
      speed: "25 ppm",
      resolution: "600 × 600 dpi",
      capacity: "1,200 sheets",
      weight: "Approx. 60 kg",
    },
    "MP 3055": {
      functions: "Print / Copy / Scan / Fax",
      speed: "30 ppm",
      resolution: "600 × 600 dpi",
      capacity: "1,200 sheets",
      weight: "Approx. 62 kg",
    },
    "MP 4055": {
      functions: "Print / Copy / Scan / Fax",
      speed: "40 ppm",
      resolution: "1200 × 1200 dpi",
      capacity: "2,000 sheets",
      weight: "Approx. 70 kg",
    },
    "Toner CMYK": {
      functions: "Toner Cartridge (Cyan / Magenta / Yellow / Black)",
      speed: "Compatible with Ricoh IM & MP series printers",
      resolution: "High quality color accuracy",
      capacity: "Standard yield: 15,000 pages (Black) / 10,000 pages (Color)",
      weight: "Depends on cartridge type",
    },
    "Consumable Genuine Part Ricoh": {
      functions: "Fuser unit / Drum unit / Maintenance kit",
      speed: "Compatible with multiple Ricoh printer models",
      resolution: "Maintains print sharpness and reliability",
      capacity: "Varies by model",
      weight: "Varies by part",
    },
  };

  const info = details[product.name] ?? {};

  /** ✨ 过渡动画设置 */
  const backdropMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalMotion = {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.8, opacity: 0, y: 20 },
    transition: { duration: 0.25 },
  };

  /** ⌨️ 支持 ESC 键关闭 Modal */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        {...backdropMotion}
        onClick={onClose} // 👈 点击背景关闭
      >
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 w-[90%] md:w-[600px] text-gray-800 relative"
          {...modalMotion}
          onClick={(e) => e.stopPropagation()} // 防止点击内部关闭
        >
          {/* ❌ Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="absolute top-3 right-3 text-gray-500 hover:text-orange-500 text-2xl leading-none"
          >
            &times;
          </button>

          {/* 🖼️ Product Image */}
          <div className="w-full h-56 relative mb-5">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
              sizes="(max-width: 600px) 90vw, 600px"
              priority
            />
          </div>

          {/* 🧾 Product Info */}
          <h2 className="text-2xl font-bold text-orange-600 mb-3">
            {product.name}
          </h2>
          <p className="text-gray-700 mb-4">{product.desc}</p>

          {/* 📋 Product Details */}
          <div className="bg-orange-50 p-4 rounded-xl text-sm text-gray-700 space-y-2">
            {Object.entries(info).map(([key, value]) => (
              <p key={key}>
                <strong className="text-orange-600 capitalize">{key}: </strong>
                {value}
              </p>
            ))}
          </div>

          {/* 📞 CTA Button */}
          <div className="mt-6 text-center">
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
