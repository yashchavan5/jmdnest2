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
    <section id="features" className="bg-[#f9f9f9] relative pt-8 lg:pt-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 relative">
          
          {/* Left Sticky Part - Pinned during scroll only on desktop */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-6 pb-12 lg:pt-0 lg:pb-0 z-30 bg-transparent transition-all">
            <div className="inline-flex items-center justify-center relative mb-4 lg:mb-8">
              <div className="absolute -left-2 -bottom-1 w-2 h-2 border-l-2 border-b-2 border-[#10b981]"></div>
              <div className="absolute -right-2 -top-1 w-2 h-2 border-r-2 border-t-2 border-[#10b981]"></div>
              <span className="text-[#111827] text-[13px] lg:text-[15px] font-medium px-2">Our process</span>
            </div>
            
            <h2 className="text-3xl lg:text-[4rem] font-bold tracking-tight mb-0 lg:mb-2 leading-[1.1] text-[#111827]">
              Your Workflow
            </h2>
            <h2 className="text-3xl lg:text-[4rem] font-bold tracking-tight mb-4 lg:mb-8 leading-[1.1] text-[#6b7280]">
              Your Integrations
            </h2>
            
            <p className="text-[15px] lg:text-lg text-[#6b7280] leading-relaxed font-light max-w-sm hidden sm:block mx-auto lg:mx-0">
              Design Flow for your needs and JMDNest does the rest for you automatically.
            </p>
          </div>

          {/* Right Scrolling Part - Scrolls naturally while left is pinned */}
          <div className="lg:w-[55%] relative pt-12 pb-8 lg:pt-[25vh] lg:pb-[10vh]">
            <div className="flex flex-col gap-12 md:gap-16 relative z-10">
              {/* The vertical timeline line */}
              <div className="absolute left-6 md:left-[2.5rem] top-5 w-[4px] bg-gray-200 z-[-1] ml-[-2px]" style={{ height: 'calc(100% - 150px)' }}>
                 <motion.div 
                   className="w-full bg-[#111827] origin-top rounded-full"
                   style={{ scaleY: lineHeight, height: "100%" }}
                 />
              </div>
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
    offset: ["start 85%", "start 35%"]
  })

  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const rawY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 25, restDelta: 0.001 });
  const y = useSpring(rawY, { stiffness: 100, damping: 25, restDelta: 0.001 });
  
  // Fill circle black on progress
  const backgroundColor = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["#ffffff", "#ffffff", "#111827", "#111827"]);
  const borderColor = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["#e5e7eb", "#e5e7eb", "#111827", "#111827"]);
  const color = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["#111827", "#111827", "#ffffff", "#ffffff"]);

  return (
    <div ref={ref} className="relative pl-16 md:pl-28 w-full group">
      {/* Node indicator */}
      <motion.div 
        style={{ borderColor, backgroundColor }}
        className="absolute left-6 md:left-[2.5rem] top-4 w-10 h-10 rounded-full border-[3px] z-10 flex items-center justify-center -translate-x-1/2 transition-colors duration-300"
      >
        <motion.span style={{ color }} className="text-[12px] font-bold">{feature.id}</motion.span>
      </motion.div>
      
      {/* Content wrapper */}
      <motion.div 
        style={{ opacity, y }}
        className="w-full"
      >
        <div className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
          <h2 className="text-xl lg:text-[1.5rem] font-bold text-[#111827] tracking-tight mb-3 flex items-start justify-between">
            {feature.title}
          </h2>
          <p className="text-[15px] lg:text-[1.05rem] text-[#6b7280] leading-[1.6] max-w-xl">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
