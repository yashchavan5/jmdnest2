"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    id: "01",
    title: "Property Management",
    description: "Manage tenants, rooms, and payments - all in one place. With smart occupancy tracking, rent reminders, and real-time reports, you stay organized and tenants stay happy.",
  },
  {
    id: "02",
    title: "Tenant Onboarding",
    description: "Digitize your tenant onboarding process. Collect KYC documents, digital signatures, and move-in checklists without printing a single sheet of paper.",
  },
  {
    id: "03",
    title: "Automated Billing",
    description: "Generate rent invoices automatically, track partial payments, and send WhatsApp/SMS reminders to tenants seamlessly.",
  },
  {
    id: "04",
    title: "Maintenance Requests",
    description: "Allow tenants to raise maintenance tickets directly from the app. Assign tasks to staff, track progress, and notify tenants upon resolution.",
  },
  {
    id: "05",
    title: "Expense Tracking",
    description: "Record daily expenses, track utility bills, and monitor staff salaries. Generate comprehensive P&L statements with a single click.",
  },
  {
    id: "06",
    title: "Real-time Analytics",
    description: "Access a bird's-eye view of your entire PG business. Monitor occupancy rates, revenue trends, and tenant churn to maximize profitability.",
  }
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="features" className="bg-[#f9f9f9] relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative">
          
          {/* Left Sticky Part - Pinned during scroll */}
          <div className="lg:w-[45%] sticky top-0 lg:top-0 h-auto lg:h-screen flex flex-col justify-center pt-6 pb-6 lg:pt-0 lg:pb-0 z-30 bg-[#f9f9f9]/90 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none border-b border-gray-200/50 lg:border-none -mx-6 px-6 lg:mx-0 lg:px-0 transition-all shadow-sm lg:shadow-none">
            <div className="inline-flex items-center relative mb-4 lg:mb-8">
              <div className="absolute -left-2 -bottom-1 w-2 h-2 border-l-2 border-b-2 border-[#10b981]"></div>
              <div className="absolute -right-2 -top-1 w-2 h-2 border-r-2 border-t-2 border-[#10b981]"></div>
              <span className="text-[#111827] text-[13px] lg:text-[15px] font-medium px-2">Our process</span>
            </div>
            
            <h2 className="text-3xl md:text-[4rem] font-bold tracking-tight mb-0 lg:mb-2 leading-[1.1] text-[#111827]">
              Your Flow
            </h2>
            <h2 className="text-3xl md:text-[4rem] font-bold tracking-tight mb-4 lg:mb-8 leading-[1.1] text-[#6b7280]">
              Your Integrations
            </h2>
            
            <p className="text-[15px] md:text-lg text-[#6b7280] leading-relaxed font-light max-w-sm hidden sm:block">
              Design Flow for your needs and JMDNest does the rest for you automatically.
            </p>
          </div>

          {/* Right Scrolling Part - Scrolls naturally while left is pinned */}
          <div className="lg:w-[55%] relative py-16 lg:py-[25vh]">
            {/* The vertical timeline line */}
            <div className="absolute left-6 md:left-[2.5rem] top-16 lg:top-[25vh] bottom-16 lg:bottom-[25vh] w-[1px] bg-gray-200 z-0">
               <motion.div 
                 className="w-full bg-[#10b981] origin-top"
                 style={{ scaleY: lineHeight, height: "100%" }}
               />
            </div>

            <div className="flex flex-col gap-32 relative z-10">
              {features.map((feature, index) => (
                <TimelineFeature key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

function TimelineFeature({ feature, index }: { feature: any, index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={ref} className="relative pl-24 md:pl-32 w-full group">
      {/* Node indicator */}
      <div className="absolute left-6 md:left-[2.5rem] top-0 w-11 h-11 rounded-full bg-[#f9f9f9] border border-gray-200 z-10 flex items-center justify-center -translate-x-1/2 transition-colors duration-300">
        <span className="text-[13px] font-medium text-[#6b7280] group-hover:text-[#111827] transition-colors">{feature.id}</span>
      </div>
      
      {/* Red dot indicator */}
      <div className="absolute left-1 md:left-[0.5rem] top-[20px] w-[3px] h-[3px] rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content wrapper */}
      <motion.div 
        style={{ opacity, y }}
        className="w-full pt-1"
      >
        <div className="relative">
          <h2 className="text-2xl md:text-[1.75rem] font-bold text-[#111827] tracking-tight mb-4 flex items-start justify-between">
            {feature.title}
            <div className="w-2 h-2 border-r-2 border-t-2 border-[#10b981] mt-2 opacity-100"></div>
          </h2>
          <p className="text-[16px] md:text-[1.125rem] text-[#6b7280] leading-[1.6] font-light max-w-xl">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
