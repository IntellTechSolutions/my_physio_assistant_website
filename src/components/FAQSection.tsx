import React from 'react';
import { Shield, Waypoints, Info, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

// Defines the core glassmorphism container style
const GlassPanel: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  // Translucent Panels: border-white/10, blurred backdrop (backdrop-blur-xl), Accent Glow rgba(100,150,200,0.15) shadows
  <div
    className={`p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl bg-blue-500/10 ${className}`}
  >
    {children}
  </div>
);

// Component for a single FAQ item
const FAQItem: React.FC<{ question: string, answer: string, icon: React.ReactNode }> = ({ question, answer, icon }) => (
  <div className="mb-6 p-4 border-l-4 border-teal-500 bg-white/5 rounded-lg">
    <h3 className="flex items-start text-xl font-semibold text-teal-300 mb-2">
      {icon}
      <span className="ml-3">{question}</span>
    </h3>
    <p className="text-slate-400 pl-8">{answer}</p>
  </div>
);


const FAQSection: React.FC = () => {
  const patientFAQs = [
    {
      q: "Is this a replacement for my physiotherapist?",
      a: "No. RehabInfo Assistant is an educational tool to support your recovery between appointments. Always follow your physiotherapist's specific advice and attend scheduled follow-ups.",
      icon: <Info className="w-5 h-5 mt-1" />
    },
    {
      q: "Is my data private and secure?",
      a: "Yes. We do not store personal health information. Queries are educational only and logged anonymously for safety monitoring. Phase 5 will add optional patient accounts with full GDPR compliance.",
      icon: <Lock className="w-5 h-5 mt-1" />
    },
    {
      q: "What if I have an emergency symptom?",
      a: "Our system detects red flag symptoms (e.g., severe pain, numbness, bladder issues) and immediately advises you to call 999 or visit A&E. Never delay emergency care.",
      icon: <AlertTriangle className="w-5 h-5 mt-1 text-red-400" />
    },
    {
      q: "How do I know the information is accurate?",
      a: "All responses cite verified sources (NHS, NICE, BNF, CSP, MHRA) and are clinically reviewed by qualified physiotherapists. Every answer includes source citations.",
      icon: <CheckCircle className="w-5 h-5 mt-1" />
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Ask Your Question",
      description: "Type your rehabilitation query in plain English—no medical jargon needed."
    },
    {
      step: 2,
      title: "AI Retrieves Verified Information",
      description: "Our system searches 500+ clinically verified documents to find the most relevant guidance."
    },
    {
      step: 3,
      title: "Receive Evidence-Based Answer",
      description: "Get a clear, helpful response with sources cited (NHS, NICE, BNF, etc.) and a safety disclaimer."
    },
  ];

  return (
    <section id="learn-more" className="py-20 md:py-32 container mx-auto max-w-7xl px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        About RehabInfo Assistant
      </h2>
      
      {/* --- Product Overview & Safety Disclaimer Panel --- */}
      <GlassPanel className="mb-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-teal-400 mb-4 flex items-center">
              <Shield className="w-8 h-8 mr-3" />
              What We Do (And Don't Do)
            </h3>
            <p className="text-slate-300 text-lg mb-4">
              RehabInfo Assistant is an intelligent chatbot that provides post-consultation
              rehabilitation information to physiotherapy patients. Built with Retrieval-Augmented
              Generation (RAG) technology, it delivers accurate, source-cited answers from verified
              clinical resources including NHS, NICE, BNF, CSP, and MHRA guidance.
            </p>
            <p className="text-slate-300 text-lg">
              Unlike generic health chatbots, RehabInfo is designed specifically for the UK physiotherapy
              sector with strict MHRA compliance, ensuring **educational support without crossing into medical advice or diagnosis**.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-xl font-bold text-red-300 mb-3 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
              Safety & Compliance Disclaimer
            </h4>
            <ul className="list-disc list-inside text-slate-400 space-y-2 text-md ml-4">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">X</span> Does NOT diagnose medical conditions.
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">X</span> Does NOT prescribe specific treatments.
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">X</span> Does NOT replace professional medical advice.
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">✓</span> Provides educational information only.
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">✓</span> Includes mandatory disclaimers on every response.
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">✓</span> Full Audit Logging for clinical governance.
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">✓</span> Automatic Red Flag Detection escalates urgent symptoms (999/111).
              </li>
            </ul>
          </div>
        </div>
      </GlassPanel>

      {/* --- How It Works Section --- */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
          <Waypoints className="w-8 h-8 mr-3 text-blue-400" />
          How It Works (Simple 3-Step Process)
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorksSteps.map((item) => (
            <GlassPanel key={item.step} className="text-left flex flex-col items-start hover:shadow-blue-500/30 transition duration-500">
              <div className="text-3xl font-extrabold text-teal-400 p-3 bg-white/10 rounded-full mb-4">
                {item.step}
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400">{item.description}</p>
            </GlassPanel>
          ))}
        </div>
      </div>

      {/* --- Patient FAQ Section --- */}
      <div className="max-w-4xl mx-auto">
        <h2 id="faq" className="text-4xl font-bold text-center mb-8 text-white">
          Frequently Asked Questions (FAQ)
        </h2>
        <GlassPanel className="!p-4">
          {patientFAQs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.q} 
              answer={faq.a} 
              icon={faq.icon} 
            />
          ))}
        </GlassPanel>
      </div>

    </section>
  );
};

export default FAQSection;
