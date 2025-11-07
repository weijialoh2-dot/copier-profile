"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PurchaseOptionsProps {
  shopee?: string;
  lazada?: string;
}

export default function PurchaseOptions({ shopee, lazada }: PurchaseOptionsProps) {
  if (!shopee && !lazada) return null;

  return (
    <motion.section
      className="relative mt-20 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-extrabold text-white drop-shadow-lg mb-8">
        Find Our Products On
      </h3>

      <div className="flex flex-wrap justify-center gap-10">
        {shopee && (
          <motion.a
            href={shopee}
            target="_blank"
            rel="noopener noreferrer"
            className="w-36 h-36 flex flex-col items-center justify-center 
                       bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl 
                       shadow-lg hover:shadow-orange-300/30 hover:scale-105 
                       transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <Image
              src="/shopee.webp"
              alt="Shopee"
              width={250}
              height={250}
              className="object-contain mb-2"
            />
            <span className="font-semibold text-white text-lg">Shopee</span>
          </motion.a>
        )}

        {lazada && (
          <motion.a
            href={lazada}
            target="_blank"
            rel="noopener noreferrer"
            className="w-36 h-36 flex flex-col items-center justify-center 
                       bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl 
                       shadow-lg hover:shadow-blue-300/30 hover:scale-105 
                       transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <Image
              src="/lazada.png"
              alt="Lazada"
              width={100}
              height={100}
              className="object-contain mb-2"
            />
            <span className="font-semibold text-white text-lg">Lazada</span>
          </motion.a>
        )}
      </div>

      <p className="text-orange-50/90 mt-8 text-sm">
        Or contact us directly for bulk and corporate orders.
      </p>
    </motion.section>
  );
}
