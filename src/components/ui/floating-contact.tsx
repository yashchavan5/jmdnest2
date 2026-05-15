"use client"

import { Calendar, Mail, MessageCircle } from "lucide-react"

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50 flex flex-col gap-3">
      {/* Calendly */}
      <a
        href="https://calendly.com/jmdsolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#1a1a1a] hover:bg-black rounded-[1rem] md:rounded-[1.25rem] border-2 border-white flex items-center justify-center text-white shadow-lg transition-transform hover:-translate-x-1"
        aria-label="Book a meeting on Calendly"
      >
        <Calendar className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </a>

      {/* Email */}
      <a
        href="mailto:jmdsolutionsbeyond@gmail.com"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#1a1a1a] hover:bg-black rounded-[1rem] md:rounded-[1.25rem] border-2 border-white flex items-center justify-center text-white shadow-lg transition-transform hover:-translate-x-1"
        aria-label="Send an email"
      >
        <Mail className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send/?phone=919209552809&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#1a1a1a] hover:bg-black rounded-[1rem] md:rounded-[1.25rem] border-2 border-white flex items-center justify-center text-white shadow-lg transition-transform hover:-translate-x-1"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </a>
    </div>
  )
}
