"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Managing multiple PG properties was a nightmare before JMDNest. Now tenant onboarding, rent collection, and maintenance requests all happen in one place. Absolutely seamless.",
    author: "Rajesh Kumar",
    role: "PG Owner, Bangalore",
  },
  {
    quote: "We used to track tenants in spreadsheets and collect rent via cash. JMDNest digitized everything — occupancy tracking, automated reminders, and online payments. A game changer.",
    author: "Priya Sharma",
    role: "PG Manager, Mumbai",
  },
  {
    quote: "With 200+ beds across 5 locations, JMDNest gives me a single dashboard to monitor everything. Vacancy alerts, expense reports, and tenant feedback — all in real-time.",
    author: "Amit Patel",
    role: "Multi-Property PG Owner",
  },
  {
    quote: "JMDNest helped us reduce vacancy rates by 40%. The automated listing sync and tenant management tools are incredibly powerful for any PG business.",
    author: "Sneha Reddy",
    role: "Operations Head, NestStay PGs",
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#f4f6f8] relative overflow-hidden">
      <div className="container mx-auto px-6 mb-14">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-6">
             JMDNest
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-12 leading-[1.1] text-center max-w-2xl mx-auto">
            "JMDNest is by far the best<br/>PG management tool I have ever used"
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://i.pravatar.cc/150?img=47" alt="Vikram Mehta" className="w-12 h-12 rounded-full mb-4 shadow-sm" />
            <h4 className="font-bold text-[#111827] text-sm">Vikram Mehta</h4>
            <p className="text-xs text-[#6b7280]">PG Chain Owner, Delhi NCR</p>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel with Edge Masks */}
      <div className="relative max-w-6xl mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)] flex items-center h-[350px]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex gap-6 absolute left-0"
        >
          {/* Duplicate list for infinite loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2rem] w-[400px] h-full flex flex-col justify-between shrink-0 shadow-sm border border-[#e5e7eb]"
            >
              <p className="text-[#374151] text-[15px] leading-relaxed mb-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={`https://i.pravatar.cc/150?img=${i % 10 + 10}`} alt={t.author} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-bold text-[#111827] text-sm">{t.author}</h4>
                  <p className="text-xs text-[#6b7280]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
