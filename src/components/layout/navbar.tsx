"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20) // trigger a bit earlier
  })

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <motion.div 
          layout
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between transition-colors duration-500 w-full ${
            isScrolled 
              ? "max-w-4xl bg-white/50 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[2rem] px-6 py-2.5" 
              : "max-w-7xl bg-transparent border border-transparent rounded-[3.345rem] px-2 py-4"
          }`}
        >
          <motion.div layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex items-center gap-2 z-50">
            <img src="/jmdnest-logo-final.png" alt="JMDNest" className="h-9 md:h-11 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]" />
            <span className={`font-bold text-lg md:text-xl tracking-tight ${isScrolled || isOpen ? "text-[#111827]" : "text-white"}`}>JMD | Nest</span>
          </motion.div>
          
          <motion.nav layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="hidden md:flex items-center gap-8">
            <a href="#features" className={`text-[15px] font-medium hover:opacity-70 transition-opacity ${isScrolled ? "text-[#111827]" : "text-white"}`}>Features</a>
            <a href="#benefits" className={`text-[15px] font-medium hover:opacity-70 transition-opacity ${isScrolled ? "text-[#111827]" : "text-white"}`}>Benefits</a>
            <a href="#pricing" className={`text-[15px] font-medium hover:opacity-70 transition-opacity ${isScrolled ? "text-[#111827]" : "text-white"}`}>Pricing</a>
            {/* <a href="/blog" className={`text-[15px] font-medium hover:opacity-70 transition-opacity ${isScrolled ? "text-[#111827]" : "text-white"}`}>Blog</a> */}
            <a href="https://api.whatsapp.com/send/?phone=919209552809&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={`text-[15px] font-medium hover:opacity-70 transition-opacity ${isScrolled ? "text-[#111827]" : "text-white"}`}>Contact Us</a>
          </motion.nav>

          <motion.div layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="hidden md:flex items-center">
            <Link href="https://calendly.com/jmdsolutions" target="_blank" rel="noopener noreferrer" className="bg-[#1a1818] hover:bg-black text-white text-[15px] font-bold px-6 py-2.5 rounded-full transition-colors whitespace-nowrap">
              Get a Free Demo
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.button 
            layout 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex items-center justify-center p-2 z-50 ${isScrolled || isOpen ? "text-[#111827]" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-4 bottom-4 z-40 md:hidden flex flex-col items-center justify-center bg-white/70 backdrop-blur-3xl rounded-[2.5rem] border border-white/60 shadow-2xl p-8"
          >
            <nav className="flex flex-col items-center gap-6 mb-12 w-full">
              <a href="#features" onClick={() => setIsOpen(false)} className="text-[17px] font-medium text-[#111827]">Features</a>
              <a href="#benefits" onClick={() => setIsOpen(false)} className="text-[17px] font-medium text-[#111827]">Benefits</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="text-[17px] font-medium text-[#111827]">Pricing</a>
              {/* <a href="/blog" onClick={() => setIsOpen(false)} className="text-[17px] font-medium text-[#111827]">Blog</a> */}
              <a href="https://api.whatsapp.com/send/?phone=919209552809&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-[17px] font-medium text-[#111827]">Contact Us</a>
            </nav>

            <div className="flex flex-col gap-4 w-full max-w-[280px]">
              <Link 
                href="https://calendly.com/jmdsolutions" 
                target="_blank" rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-[#1a1818] text-white text-[17px] font-bold px-8 py-4 rounded-full text-center w-full shadow-lg"
              >
                Get a Free Demo
              </Link>
              <a 
                href="#features" 
                onClick={() => setIsOpen(false)}
                className="bg-white/40 text-[#111827] text-[17px] font-bold px-8 py-4 rounded-full text-center w-full border border-white/50 backdrop-blur-md"
              >
                See features
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
