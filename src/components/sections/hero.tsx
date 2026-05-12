"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0f1c2e]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="JmdNest PG Reception"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient — stronger on left for text readability over bright image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c2e]/80 via-[#0f1c2e]/50 to-[#0f1c2e]/20" />
      </div>

      <div className="container relative z-20 px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-3xl">
          {/* JMD Nest Logo Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 mb-12"
          >
            <span className="text-3xl md:text-5xl font-black text-[#8faabe] tracking-tight">JMD</span>
            <span className="text-3xl md:text-5xl font-black text-[#e67e22] tracking-tight">Nest</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] font-black text-white uppercase tracking-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Empowering PG<br />
            Owners &<br />
            Managers
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base md:text-xl lg:text-2xl font-bold text-white/85 uppercase tracking-[0.12em] mb-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          >
            All-In-One Management Solution
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/contact-us"
              className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white text-base md:text-lg font-black px-10 py-4 md:py-5 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 hover:scale-105 active:scale-95 uppercase tracking-wider"
            >
              Get a Free Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
