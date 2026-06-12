import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl font-bold text-[#111827] mb-8">Privacy Policy</h1>
        <div className="text-[#4b5563] space-y-6 leading-relaxed text-[15px] md:text-base">
          <p>
            Welcome to the Privacy Policy for JMD Solutions & Beyond. We are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly.
          </p>
          <p>
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
          <p>
            This policy outlines how we collect, use, and safeguard your data when you use the JMD | Nest application. We prioritize the security of your data using end-to-end encryption and secure cloud storage.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
