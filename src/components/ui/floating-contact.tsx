"use client"

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col gap-3">
      {/* Calendly */}
      <a
        href="https://calendly.com/jmdsolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
        aria-label="Book a meeting on Calendly"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="black" />
          <rect x="7" y="10" width="18" height="15" rx="2" stroke="white" strokeWidth="2" />
          <path d="M7 15h18" stroke="white" strokeWidth="2" />
          <path d="M11 7v5M21 7v5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M11.5 15v10M16 15v10M20.5 15v10" stroke="white" strokeWidth="1.5" />
          <path d="M7 18.3h18M7 21.6h18" stroke="white" strokeWidth="1.5" />
          <circle cx="23" cy="23" r="7" fill="black" stroke="white" strokeWidth="2" />
          <path d="M23 19.5v3.5l2.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {/* Email / Gmail */}
      <a
        href="mailto:jmdsolutionsbeyond@gmail.com"
        className="w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
        aria-label="Send an email"
      >
        <img src="/gmail-logo.png" alt="Gmail" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send/?phone=919209552809&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}
