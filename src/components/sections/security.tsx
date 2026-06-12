"use client"
import { motion } from "framer-motion"

export function SecuritySection() {
  return (
    <section id="features" className="pt-10 md:pt-16 pb-6 bg-[#f9f8f6] scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center relative mb-4 lg:mb-6"
          >
            <div className="absolute -left-2 -bottom-1 w-2 h-2 border-l-2 border-b-2 border-[#5c4033]"></div>
            <div className="absolute -right-2 -top-1 w-2 h-2 border-r-2 border-t-2 border-[#5c4033]"></div>
            <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs px-2">FEATURES</h3>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[2rem] md:text-[3rem] font-bold text-[#111827] tracking-tight leading-[1.15]"
          >
            Never lose progress with<br />secure cloud storage
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#eeebe3] rounded-[2rem] p-8 min-h-[250px] flex flex-col w-full flex-1"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-4 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            
            <h6 className="text-[17px] font-bold text-[#111827] mb-2">
              End-to-end encryption for total privacy
            </h6>
            <p className="text-[#6b7280] leading-relaxed text-[14px]">
              Your data is encrypted in transit and at rest, ensuring only you can access your work.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#eeebe3] rounded-[2rem] p-8 min-h-[250px] flex flex-col w-full flex-1"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-4 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </div>
            
            <h6 className="text-[17px] font-bold text-[#111827] mb-2">
              Automatic cloud backups, always safe
            </h6>
            <p className="text-[#6b7280] leading-relaxed text-[14px]">
              Real-time sync to the cloud means your progress is instantly saved, so you can work without worry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
