"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function PricingSection() {
  const [billing, setBilling] = useState<"Annually" | "Monthly">("Annually")

  return (
    <section id="pricing" className="py-16 bg-[#eff3f8]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight leading-[1.1]">
            Simple plans<br/>for every PG size
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          
          {/* Basic Plan */}
          <div className="bg-[#f2f0ea] rounded-[2rem] p-10 flex flex-col h-full hover:shadow-xl transition-shadow border border-[#e5e0d8]">
            <h3 className="text-[17px] font-bold text-[#4b5563] mb-2">JMDNest Starter</h3>
            <div className="text-4xl font-bold text-[#111827] mb-6">Free</div>
            <p className="text-[#6b7280] mb-8 text-[15px]">For single PG with up to 20 beds.</p>
            
            <ul className="space-y-4 mb-10 text-[#4b5563] text-[15px]">
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Up to 20 tenants</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Rent collection</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Occupancy tracking</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Tenant profiles</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> iOS & Android app</li>
            </ul>

            <Link href="/contact-us" className="block text-center bg-[#f4efe9] hover:bg-[#eaddce] text-[#111827] text-[15px] font-bold px-6 py-3.5 rounded-full transition-colors w-full">
              Get Basic
            </Link>
          </div>

          {/* Premium - WITH TOGGLE */}
          <div className="bg-[#d2e5f9] rounded-[2rem] p-2 border-2 border-[#82b8f4] shadow-xl relative scale-105 z-10">
            
            {/* Toggle inside the top padding */}
            <div className="flex justify-center mb-6 mt-4">
              <div className="bg-white/50 backdrop-blur-md p-1 rounded-full inline-flex relative border border-white/60 shadow-sm">
                <motion.div 
                  className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm"
                  animate={{ left: billing === "Annually" ? "4px" : "calc(50%)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
                <button
                  onClick={() => setBilling("Annually")}
                  className={`relative z-10 px-6 py-1.5 rounded-full text-[13px] font-bold transition-colors ${billing === "Annually" ? "text-[#111827]" : "text-[#4b5563]"}`}
                >
                  Annually
                </button>
                <button
                  onClick={() => setBilling("Monthly")}
                  className={`relative z-10 px-6 py-1.5 rounded-full text-[13px] font-bold transition-colors ${billing === "Monthly" ? "text-[#111827]" : "text-[#4b5563]"}`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="px-8 pb-8 pt-2">
              <div className="flex items-center gap-3">
                <h3 className="text-[17px] font-bold text-[#4b5563]">JMDNest Premium</h3>
                <span className="bg-[#bdf0ce] text-[#0d6a2f] text-[10px] font-bold px-3 py-1 rounded-full border border-[#a2deb6]">
                  Save 20%
                </span>
              </div>
              <div className="text-[2.75rem] font-bold text-[#111827] mb-6">{billing === "Annually" ? "₹1,499" : "₹1,899"}<span className="text-[1.5rem] font-medium text-[#4b5563]">/mo</span></div>
              <p className="text-[#6b7280] mb-8 text-[15px]">For growing PGs with 50+ beds.</p>
              
              <ul className="space-y-4 mb-10 text-[#4b5563] text-[15px]">
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Everything in Starter</li>
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Automated rent invoicing</li>
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Expense & revenue reports</li>
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Maintenance request system</li>
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Multi-property dashboard</li>
              </ul>

              <Link href="/contact-us" className="mt-8 block text-center bg-white hover:bg-gray-100 text-[#1a1818] text-[15px] font-bold py-3.5 rounded-full transition-colors w-full">
                Get Premium
              </Link>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#f2f0ea] rounded-[2rem] p-10 flex flex-col h-full hover:shadow-xl transition-shadow border border-[#e5e0d8]">
            <h3 className="text-[17px] font-bold text-[#4b5563] mb-2">JMDNest Enterprise</h3>
            <div className="text-4xl font-bold text-[#111827] mb-6">Custom</div>
            <p className="text-[#6b7280] mb-8 text-[15px]">For PG chains & large portfolios.</p>
            
            <ul className="space-y-4 mb-10 text-[#4b5563] text-[15px]">
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Everything in Premium</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Bulk tenant data import</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Dedicated account manager</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> API & third-party integrations</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Staff management & shifts</li>
            </ul>

            <Link href="/contact-us" className="mt-auto block text-center border-2 border-[#1a1818] hover:bg-[#1a1818] hover:text-white text-[#111827] text-[15px] font-bold py-3.5 rounded-full transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
