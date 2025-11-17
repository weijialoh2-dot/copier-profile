"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Wrench, FileText, Package, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState<null | Service>(null);

  interface Service {
    title: string;
    desc: string;
    popup: string;
    Icon: any;
  }

  const services: Service[] = [
    {
      title: "Maintenance & Support",
      desc: "Onsite servicing, troubleshooting & performance checks.",
      popup:
        "We provide onsite technical support, scheduled maintenance, and fast troubleshooting to minimise downtime and ensure reliable performance.",
      Icon: Wrench,
    },
    {
      title: "Leasing Solutions",
      desc: "Flexible monthly rental with full support & upgrades.",
      popup:
        "Our leasing program lets you rent high-quality machines at affordable monthly rates, including upgrades & full maintenance.",
      Icon: FileText,
    },
    {
      title: "Purchase Machines",
      desc: "Brand-new copier purchases with warranty & support.",
      popup:
        "Buy machines outright with full warranty, installation, and lifetime support — ideal for long-term operations.",
      Icon: FileText,
    },
    {
      title: "Toner & Supplies",
      desc: "Fast supply of toner, drums & consumables.",
      popup:
        "Never run out of supplies. We deliver toner, drums, and other consumables to keep your operations running smoothly.",
      Icon: Package,
    },
  ];

  const steps = [
    "Tell us your needs",
    "We recommend the best solution",
    "We deliver, install or service",
    "You get ongoing support",
  ];

  // 🔥 ESC closes popup
  useEffect(() => {
    const escClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", escClose);
    return () => window.removeEventListener("keydown", escClose);
  }, []);

  return (
    <>
      <Navbar />

      {/* ---------- HERO ---------- */}

      <section className="min-h-screen bg-gradient-to-br from-[#f97316] to-[#fb923c] px-6 py-28 text-center flex flex-col items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-xl"
        >
          Professional Copier Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl text-lg mt-6 text-white/95"
        >
          Leasing • Maintenance • Supplies • Purchase — everything your office
          needs, handled professionally.
        </motion.p>

        {/* 🔥 Animated CTA Button */}
        <motion.div
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="mt-10"
        >
          <Link href="/contact">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-orange-50 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <main className="py-24 px-6 md:px-20 bg-[#fff5eb]">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          We provide full copier lifecycle services — from purchase and leasing
          to full technical maintenance and supplies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = service.Icon;
            return (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.06,
                  y: -6,
                  boxShadow: "0 0 30px #ff9a3e",
                }}
                className="rounded-3xl bg-white p-8 shadow-md cursor-pointer transition-all text-center border border-orange-100"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-10 w-10 text-orange-600" />
                </div>

                <h3 className="text-xl font-semibold text-orange-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ---------- POPUP ---------- */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-xl"
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-orange-600 transition"
                  onClick={() => setSelectedService(null)}
                >
                  <X className="h-7 w-7" />
                </button>

                <h3 className="text-2xl font-bold text-orange-600">
                  {selectedService.title}
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {selectedService.popup}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------- HOW WE WORK ---------- */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-14">
            How We Work
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className="h-10 w-10 mb-3 text-orange-600" />
                </motion.div>

                <p className="font-semibold text-orange-600 text-center">
                  Step {i + 1}
                </p>
                <p className="text-sm text-gray-600 text-center mt-1 max-w-[150px]">
                  {step}
                </p>

                {/* → Arrow (desktop only) */}
                {i < steps.length - 1 && (
                  <span className="hidden md:block absolute top-5 right-[-30px] text-orange-500 text-3xl">
                    ➜
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
