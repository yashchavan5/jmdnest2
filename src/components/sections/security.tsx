"use client"
import { motion } from "framer-motion"

export function SecuritySection() {
  return (
    <section className="pt-10 md:pt-16 pb-6 bg-[#f9f8f6]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
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
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-auto shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            
            <h6 className="text-[17px] font-bold text-[#111827] mb-2 mt-6">
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
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-auto shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </div>
            
            <h6 className="text-[17px] font-bold text-[#111827] mb-2 mt-6">
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
