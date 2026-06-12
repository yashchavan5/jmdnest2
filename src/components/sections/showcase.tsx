"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ShowcaseSection() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop")

  return (
    <section className="py-10 md:py-16 bg-[#f9f8f6] overflow-hidden">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center justify-center relative mb-4">
            <div className="absolute -left-2 -bottom-1 w-2 h-2 border-l-2 border-b-2 border-[#5c4033]"></div>
            <div className="absolute -right-2 -top-1 w-2 h-2 border-r-2 border-t-2 border-[#5c4033]"></div>
            <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs px-2">SEAMLESS ACROSS DEVICES</h3>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] tracking-tight">
            Work from anywhere, stay in sync
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl h-[350px] sm:h-[450px] md:h-[700px] rounded-3xl md:rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-[#f9f8f6] border border-black/5"
        >
          <AnimatePresence mode="wait">
            {device === "desktop" ? (
              <motion.div
                key="desktop"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
              >
                <video
                  key="desktop-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-top"
                  poster="/jmdnest-web-mockup.png"
                >
                  <source src="/demo-web.mp4" type="video/mp4" />
                  {/* Fallback image if video is not available */}
                  <img src="/jmdnest-web-mockup.png" alt="JMDNest Web App" className="w-full h-full object-cover object-top" />
                </video>
              </motion.div>
            ) : (
              <motion.div
                key="mobile"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
              >
                <video
                  key="mobile-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-top"
                  poster="/jmdnest-mobile-mockup.png"
                >
                  <source src="/demo-mobile.mp4" type="video/mp4" />
                  {/* Fallback image if video is not available */}
                  <img src="/jmdnest-mobile-mockup.png" alt="JMDNest Mobile App" className="w-full h-full object-cover object-top" />
                </video>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating blur toggle over the image */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto w-[90%] max-w-[320px] sm:max-w-max">
            <div className="bg-black/40 backdrop-blur-xl p-1.5 rounded-full flex relative shadow-lg border border-white/20 w-full">
              <motion.div 
                className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-black rounded-full shadow-sm"
                animate={{ left: device === "mobile" ? "6px" : "calc(50%)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <button
                onClick={() => setDevice("mobile")}
                className={`relative z-10 flex-1 px-4 sm:px-8 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-bold transition-colors whitespace-nowrap ${device === "mobile" ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Mobile App
              </button>
              <button
                onClick={() => setDevice("desktop")}
                className={`relative z-10 flex-1 px-4 sm:px-8 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-bold transition-colors whitespace-nowrap ${device === "desktop" ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Web App
              </button>
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  )
}
