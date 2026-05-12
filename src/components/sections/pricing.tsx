"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function PricingSection() {
  const [billing, setBilling] = useState<"Annually" | "Monthly">("Annually")

  return (
    <section id="pricing" className="py-16 bg-[#eff3f8]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight leading-[1.1]">
            Simple plans<br/>for every PG size
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#e5e0d8] p-1 rounded-full inline-flex relative shadow-sm">
            <motion.div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm"
              animate={{ left: billing === "Annually" ? "4px" : "calc(50%)" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <button
              onClick={() => setBilling("Annually")}
              className={`relative z-10 px-6 py-2 rounded-full text-[14px] font-bold transition-colors ${billing === "Annually" ? "text-[#111827]" : "text-[#6b7280]"}`}
            >
              Annually (Save)
            </button>
            <button
              onClick={() => setBilling("Monthly")}
              className={`relative z-10 px-6 py-2 rounded-full text-[14px] font-bold transition-colors ${billing === "Monthly" ? "text-[#111827]" : "text-[#6b7280]"}`}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Starter Plan */}
          <div className="bg-[#f2f0ea] rounded-[2rem] p-8 flex flex-col h-full hover:shadow-xl transition-shadow border border-[#e5e0d8]">
            <h3 className="text-[17px] font-bold text-[#4b5563] mb-2">Starter</h3>
            <div className="text-3xl font-bold text-[#111827] mb-2">
              {billing === "Annually" ? "₹6,499" : "₹699"}<span className="text-[1.25rem] font-medium text-[#4b5563]">/{billing === "Annually" ? "yr" : "mo"}</span>
            </div>
            <p className="text-[#6b7280] mb-4 text-[13px] font-medium min-h-[40px]">Perfect for single PG owners</p>
            <div className="bg-[#eaddce] text-[#111827] text-xs font-bold px-3 py-1.5 rounded-md inline-block mb-6 text-center">Manage 1 Property</div>
            
            {billing === "Annually" && <p className="text-green-700 text-xs font-semibold mb-6 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Save ₹1,889 yearly</p>}
            {billing === "Monthly" && <div className="h-10 mb-6"></div>}
            
            <ul className="space-y-3 mb-10 text-[#4b5563] text-[14px]">
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>User-friendly dashboard for quick monthly overview</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Room & tenant management</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Payment tracking (Full / Partial / Pending)</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Easy tenant addition using link</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Automatic agreement generation</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Maintenance bill management</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Data export feature</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Automated reports</span></li>
            </ul>

            <Link href="/contact-us" className="mt-auto block text-center bg-white border border-[#d1cbbd] hover:bg-[#111827] hover:text-white text-[#111827] text-[15px] font-bold px-6 py-3 rounded-full transition-colors w-full">
              Get Starter
            </Link>
          </div>

          {/* Growth Plan - Highlighted */}
          <div className="bg-[#d2e5f9] rounded-[2rem] p-8 flex flex-col h-full border-2 border-[#82b8f4] shadow-lg relative lg:-mt-4 lg:mb-4 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111827] text-white text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
              MOST POPULAR
            </div>
            <h3 className="text-[17px] font-bold text-[#4b5563] mb-2">Growth</h3>
            <div className="flex flex-col mb-2">
              <div className="text-3xl font-bold text-[#111827]">
                {billing === "Annually" ? "₹11,998" : "₹1,298"}<span className="text-[1.25rem] font-medium text-[#4b5563]">/{billing === "Annually" ? "yr" : "mo"}</span>
              </div>
              <span className="text-xs text-[#6b7280] font-medium">{billing === "Annually" ? "(₹6,499 + ₹5,499)" : "(₹699 + ₹599)"}</span>
            </div>
            <p className="text-[#6b7280] mb-4 text-[13px] font-medium min-h-[40px]">For growing PG businesses</p>
            <div className="bg-[#bdf0ce] text-[#0d6a2f] text-xs font-bold px-3 py-1.5 rounded-md inline-block mb-6 border border-[#a2deb6] text-center">Manage 2 Properties</div>
            
            {billing === "Annually" && <p className="text-green-700 text-xs font-semibold mb-6 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Save ₹3,578 yearly</p>}
            {billing === "Monthly" && <div className="h-10 mb-6"></div>}
            
            <ul className="space-y-3 mb-10 text-[#4b5563] text-[14px]">
              <li className="flex items-start gap-3 font-semibold text-[#111827]"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Everything in Starter, plus:</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Multi-property management</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Multiple admin & staff support</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Centralized dashboard for all properties</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Advanced payment tracking</span></li>
            </ul>

            <Link href="/contact-us" className="mt-auto block text-center bg-white hover:bg-[#111827] hover:text-white text-[#111827] text-[15px] font-bold py-3.5 rounded-full transition-colors w-full shadow-sm">
              Get Growth
            </Link>
          </div>

          {/* Business Plan */}
          <div className="bg-[#f2f0ea] rounded-[2rem] p-8 flex flex-col h-full hover:shadow-xl transition-shadow border border-[#e5e0d8]">
            <h3 className="text-[17px] font-bold text-[#4b5563] mb-2">Business</h3>
            <div className="flex flex-col mb-2">
              <div className="text-3xl font-bold text-[#111827]">
                {billing === "Annually" ? "₹16,497" : "₹1,747"}<span className="text-[1.25rem] font-medium text-[#4b5563]">/{billing === "Annually" ? "yr" : "mo"}</span>
              </div>
              <span className="text-xs text-[#6b7280] font-medium">{billing === "Annually" ? "(₹6,499 + ₹5,499 + ₹4,499)" : "(₹699 + ₹599 + ₹449)"}</span>
            </div>
            <p className="text-[#6b7280] mb-4 text-[13px] font-medium min-h-[40px]">Ideal for expanding PG operators</p>
            <div className="bg-[#eaddce] text-[#111827] text-xs font-bold px-3 py-1.5 rounded-md inline-block mb-6 text-center">Manage 3 Properties</div>
            
            {billing === "Annually" && <p className="text-green-700 text-xs font-semibold mb-6 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Save ₹4,467 yearly</p>}
            {billing === "Monthly" && <div className="h-10 mb-6"></div>}
            
            <ul className="space-y-3 mb-10 text-[#4b5563] text-[14px]">
              <li className="flex items-start gap-3 font-semibold text-[#111827]"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Everything in Growth, plus:</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Complete staff collaboration</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Faster report generation</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Better operational control</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Smart tenant & room handling</span></li>
            </ul>

            <Link href="/contact-us" className="mt-auto block text-center bg-white border border-[#d1cbbd] hover:bg-[#111827] hover:text-white text-[#111827] text-[15px] font-bold px-6 py-3 rounded-full transition-colors w-full">
              Get Business
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#111827] text-white rounded-[2rem] p-8 flex flex-col h-full hover:shadow-xl transition-shadow border border-[#1f2937]">
            <h3 className="text-[17px] font-bold text-gray-300 mb-2">Enterprise</h3>
            <div className="flex flex-col mb-2">
              <span className="text-sm text-gray-400 mb-1">Starting from</span>
              <div className="text-3xl font-bold text-white">
                {billing === "Annually" ? "₹20,496" : "₹2,080"}<span className="text-[1.25rem] font-medium text-gray-400">/{billing === "Annually" ? "yr" : "mo"}</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-[13px] font-medium min-h-[40px]">Built for large PG networks</p>
            <div className="bg-[#374151] text-gray-200 text-xs font-bold px-3 py-1.5 rounded-md inline-block mb-6 border border-gray-600 text-center">Manage 4+ Properties</div>
            
            {billing === "Annually" && <div className="h-10 mb-6"></div> /* spacer to align cards */}
            {billing === "Monthly" && <div className="h-10 mb-6"></div>}
            
            <div className="bg-gray-800 rounded-xl p-4 mb-6">
              <h4 className="text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">Additional Pricing:</h4>
              <ul className="space-y-1 text-xs text-gray-400">
                <li className="flex justify-between"><span>1st Property:</span> <span>{billing === "Annually" ? "₹6,499" : "₹699"}</span></li>
                <li className="flex justify-between"><span>2nd Property:</span> <span>{billing === "Annually" ? "₹5,499" : "₹599"}</span></li>
                <li className="flex justify-between"><span>3rd Property:</span> <span>{billing === "Annually" ? "₹4,499" : "₹449"}</span></li>
                <li className="flex justify-between font-semibold text-gray-200 mt-1 pt-1 border-t border-gray-700"><span>Extra Property:</span> <span>{billing === "Annually" ? "₹3,999" : "₹333"}/{billing === "Annually" ? "yr" : "mo"}</span></li>
              </ul>
            </div>

            <ul className="space-y-3 mb-10 text-gray-300 text-[14px]">
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Unlimited scalability</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Multi-admin access</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Complete analytics & reports</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Centralized management system</span></li>
              <li className="flex items-start gap-3"><svg className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Priority support</span></li>
            </ul>

            <Link href="/contact-us" className="mt-auto block text-center bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold px-6 py-3 rounded-full transition-colors w-full">
              Contact Sales
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

