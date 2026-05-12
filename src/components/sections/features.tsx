"use client"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    id: "01",
    title: "Property Management",
    heading: "Keep every property running smoothly",
    description: "Manage tenants, rooms, and payments - all in one place. With smart occupancy tracking, rent reminders, and real-time reports, you stay organized and tenants stay happy.",
    image: "/project-management-v2.jpg",
    gradient: "from-[#A6C4E5] to-[#EBE3D5]"
  },
  {
    id: "02",
    title: "Tenant Management",
    heading: "Organize your daily operations",
    description: "Keep track of every tenant with our intuitive management dashboard. Filter by room, monitor payment status, and ensure your staff is always aligned on what matters most.",
    image: "/feature-2.jpeg",
    gradient: "from-[#e3dcd1] to-[#f4efe9]"
  },
  {
    id: "03",
    title: "Automated Billing",
    heading: "Never miss a payment again",
    description: "Generate rent invoices automatically, track partial payments, and send WhatsApp/SMS reminders to tenants seamlessly.",
    image: "/project-management-v2.jpg",
    gradient: "from-[#d5e4f2] to-[#f0eadd]"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#f9f8f6] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Mobile View: Standard stacked layout */}
        <div className="lg:hidden space-y-24">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-8">
              <div className={`bg-gradient-to-b ${feature.gradient} rounded-[2.5rem] p-8 sm:p-12 flex items-center justify-center relative overflow-hidden`}>
                 <img src={feature.image} alt={feature.title} className="w-full h-auto object-contain rounded-xl shadow-2xl" />
              </div>
              <div>
                <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-4">{feature.id} • {feature.title}</h3>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight mb-6 leading-[1.1]">
                  {feature.heading}
                </h2>
                <p className="text-[17px] text-[#4b5563] mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <Link href="/contact-us" className="inline-block bg-[#1a1818] hover:bg-black text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-colors">
                  Explore feature
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Sticky Scrolling */}
        <div className="hidden lg:flex items-start gap-16 relative">
          
          {/* Left Side: Sticky Content */}
          <div className="w-[45%] sticky top-32 h-[calc(100vh-8rem)] flex flex-col justify-center pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#111827] tracking-tight mb-6 leading-[1.1]">
                Your Workflow,<br />Simplified
              </h2>
              <p className="text-xl text-[#4b5563] mb-10 leading-relaxed max-w-md">
                Design the flow for your needs and let JmdNest do the rest for you automatically. Experience seamless management.
              </p>
              <Link 
                href="/contact-us" 
                className="inline-block self-start bg-[#1a1818] hover:bg-black text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-colors"
              >
                Get Started Now
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Scrolling Cards */}
          <div className="w-[55%] flex flex-col gap-[30vh] pb-[20vh] pt-[10vh]">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Smooth scale and opacity effect as the card scrolls into view
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2])

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className="flex flex-col gap-6"
    >
      <div className={`bg-gradient-to-b ${feature.gradient} rounded-[2.5rem] p-12 flex items-center justify-center relative overflow-hidden transition-all duration-500 hover:shadow-xl`}>
        <img 
          src={feature.image} 
          alt={feature.title} 
          className="w-full h-auto object-contain rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20"
        />
      </div>
      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
           <span className="text-xl font-black text-[#111827]">{feature.id}</span>
           <div className="h-4 w-px bg-gray-300"></div>
           <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs">{feature.title}</h3>
        </div>
        <h2 className="text-2xl font-bold text-[#111827] tracking-tight mb-4 leading-[1.2]">
          {feature.heading}
        </h2>
        <p className="text-[16px] text-[#4b5563] leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}
