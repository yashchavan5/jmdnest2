import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Shield, Database, Lock } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            Welcome to the Privacy Policy for JMD Solutions & Beyond. We are committed to protecting your privacy and ensuring your PG management data is handled safely.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-12">
          <p className="text-[#4b5563] leading-relaxed text-[15px] md:text-[17px] mb-6">
            This policy outlines how we collect, use, and safeguard your data when you use the JMD | Nest application. We prioritize the security of your PG data, including tenant information, payment records, and property details, using enterprise-grade security.
          </p>
          <p className="text-[#4b5563] leading-relaxed text-[15px] md:text-[17px]">
            To learn more about our complete range of services, please visit our main website at:{" "}
            <a 
              href="https://www.jmdsolutionbeyond.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#5c4033] font-bold hover:underline"
            >
              https://www.jmdsolutionbeyond.com/
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-[#f9f8f6] rounded-[2rem] p-8 flex flex-col border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#5c4033] mb-6 shadow-sm">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#111827] mb-3">Tenant Data Security</h3>
            <p className="text-[#6b7280] text-[15px] leading-relaxed">
              All KYC documents, rent agreements, and personal tenant details are stored in secure cloud databases with strict access controls to prevent unauthorized access.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f9f8f6] rounded-[2rem] p-8 flex flex-col border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#5c4033] mb-6 shadow-sm">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#111827] mb-3">End-to-End Encryption</h3>
            <p className="text-[#6b7280] text-[15px] leading-relaxed">
              Financial data, including rent payments, maintenance bills, and expense tracking, is encrypted in transit and at rest to ensure complete financial confidentiality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f9f8f6] rounded-[2rem] p-8 flex flex-col border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#5c4033] mb-6 shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#111827] mb-3">Role-Based Access</h3>
            <p className="text-[#6b7280] text-[15px] leading-relaxed">
              PG owners have full control over what staff and managers can see. Multi-admin support ensures staff only access the properties they are assigned to.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
