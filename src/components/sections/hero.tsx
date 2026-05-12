"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0f1c2e]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pg-hero-bg.png"
          alt="JmdNest PG Reception"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability over bright image */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-20 px-6 md:px-12 lg:px-24 py-32 flex justify-center">
        <div className="max-w-4xl flex flex-col items-center text-center">
          {/* JMD Nest Logo Text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 mb-8"
          >

          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.15] font-bold text-white tracking-tight mb-8 drop-shadow-lg"
          >
            Empowering PG<br />
            Owners & Managers
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base md:text-xl font-medium text-gray-200 mb-12 drop-shadow-md max-w-2xl leading-relaxed"
          >
            An all-in-one management solution to streamline your operations, manage tenants efficiently, and grow your PG business.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/contact-us"
              className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white text-base md:text-lg font-bold px-10 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-[#e67e22]/30 hover:-translate-y-1 active:translate-y-0"
            >
              Get a Free Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
