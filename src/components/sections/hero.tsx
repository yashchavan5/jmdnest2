"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full flex items-center overflow-hidden bg-[#0f1c2e]">
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
      <div className="container mx-auto relative z-20 px-6 md:px-12 lg:px-24 pt-20 pb-28 md:pt-24 md:pb-36 flex justify-center w-full">
        <div className="max-w-4xl w-full flex flex-col items-center text-center mx-auto relative">

          {/* JMD Nest Logo Background Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] md:max-w-[450px] flex justify-center z-[-1] pointer-events-none"
          >
            <img src="/jmdnest-logo-final.png" alt="JmdNest Logo" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>

          {/* Brand Name Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 md:mb-6"
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
              href="https://calendly.com/jmdsolutions"
              className="inline-flex items-center justify-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white text-[15px] md:text-base font-bold px-8 py-3 md:px-10 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#e67e22]/30 hover:-translate-y-1 active:translate-y-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7.1a7.9 7.9 0 0 1 11.9-8.8V7a3 3 0 0 0-3-3zM5 6h14a1 1 0 0 1 1 1v1H4V7a1 1 0 0 1 1-1zm3 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6-6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" />
                <path d="M18 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm.5 2.5v2.3l1.8 1.8-.7.7-2.1-2.1V15.5h1z" />
              </svg>
              Get a Free Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
