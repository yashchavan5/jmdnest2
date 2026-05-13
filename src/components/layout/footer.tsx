import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#d5e4f2] pt-16 pb-12">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* CTA Section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-4">
            Ready to get started
          </h2>
          <p className="text-[#4b5563] text-[17px] mb-8">
            Download JMDNest for free. No credit card required.
          </p>
          <Link
            href="https://wa.me/919209552809"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a1818] hover:bg-black text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Book JmdNest PG
          </Link>
        </div>

        {/* Footer Box */}
        <div className="bg-[#e2eaf4] rounded-[2rem] p-10 md:p-16 border border-white/40 shadow-sm relative">
          <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">

            {/* Left Side */}
            <div>
              <a href="/" className="flex items-center gap-2 mb-4 text-[#111827] font-bold text-xl tracking-tight">
                <img src="/logo.png" alt="JmdNest" className="h-8 w-auto" />
                JmdNest
              </a>
              <p className="text-[#4b5563] mb-8 text-[15px]">
                Premium PG accommodation for modern living.
              </p>

              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/jmd-solutions-and-beyond" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a1818] text-white flex items-center justify-center hover:bg-[#0077b5] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/jmd_solutions_beyond" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a1818] text-white flex items-center justify-center hover:bg-[#E1306C] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* Maps */}
                <a href="https://maps.app.goo.gl/S3RrPBh1K9Yp6iwx6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a1818] text-white flex items-center justify-center hover:bg-[#34A853] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </a>
              </div>
            </div>

            {/* Right Side Links */}
            <div className="flex gap-16 md:gap-24">
              <div>
                <h4 className="text-[#111827] font-bold mb-6 text-xs uppercase tracking-wider">Pages</h4>
                <ul className="space-y-4">
                  <li><a href="/" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Home</a></li>
                  <li><a href="#features" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Features</a></li>
                  <li><a href="#pricing" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Pricing</a></li>
                  <li><a href="/blog" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Blog</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#111827] font-bold mb-6 text-xs uppercase tracking-wider">Information</h4>
                <ul className="space-y-4">
                  <li><a href="/contact-us" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Contact</a></li>
                  <li><a href="/privacy-policy" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Privacy</a></li>
                  <li><a href="/terms-of-use" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Terms of use</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#d1dce8]">
            <p className="text-[#6b7280] text-sm">
              © 2026 JmdNest. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
