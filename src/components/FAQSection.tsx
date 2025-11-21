import React from 'react';
import { Shield, Waypoints, Info, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

// Soft glassmorphism container style
const GlassPanel: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div
    className={`p-6 md:p-10 rounded-3xl border backdrop-blur-xl ${className}`}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(240,246,255,0.55) 100%)',
      borderColor: 'rgba(180,200,230,0.25)',
      boxShadow: '0 8px 24px rgba(30,60,90,0.08)'
    }}
  >
    {children}
  </div>
);

// Component for a single FAQ item
const FAQItem: React.FC<{ question: string, answer: string, icon: React.ReactNode }> = ({ question, answer, icon }) => (
  <div className="mb-6 p-4 border-l-4 border-teal-500 bg-sky-50/50 rounded-lg">
    <h3 className="flex items-start text-xl font-semibold text-sky-700 mb-2">
      {icon}
      <span className="ml-3">{question}</span>
    </h3>
    <p className="text-slate-600 pl-8">{answer}</p>
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
      icon: <AlertTriangle className="w-5 h-5 mt-1 text-red-500" />
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
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
        About RehabInfo Assistant
      </h2>

      {/* --- Product Overview & Safety Disclaimer Panel --- */}
      <GlassPanel className="mb-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-teal-600 mb-4 flex items-center">
              <Shield className="w-8 h-8 mr-3" />
              What We Do (And Don't Do)
            </h3>
            <p className="text-slate-700 text-lg mb-4">
              RehabInfo Assistant is an intelligent chatbot that provides post-consultation
              rehabilitation information to physiotherapy patients. Built with Retrieval-Augmented
              Generation (RAG) technology, it delivers accurate, source-cited answers from verified
              clinical resources including NHS, NICE, BNF, CSP, and MHRA guidance.
            </p>
            <p className="text-slate-700 text-lg">
              Unlike generic health chatbots, RehabInfo is designed specifically for the UK physiotherapy
              sector with strict MHRA compliance, ensuring <strong>educational support without crossing into medical advice or diagnosis</strong>.
            </p>
          </div>

          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            <h4 className="text-xl font-bold text-red-600 mb-3 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-red-500" />
              Safety & Compliance Disclaimer
            </h4>
            <ul className="list-disc list-inside text-slate-700 space-y-2 text-md ml-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span> Does NOT diagnose medical conditions.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span> Does NOT prescribe specific treatments.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span> Does NOT replace professional medical advice.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span> Monitors for Urgency Keywords and immediately redirects to emergency contacts.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span> Provides educational information only.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span> Includes mandatory disclaimers on every response.
              </li>
            </ul>
          </div>
        </div>
      </GlassPanel>

      {/* --- How It Works Section --- */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center justify-center">
          <Waypoints className="w-8 h-8 mr-3 text-blue-500" />
          How It Works (Simple 3-Step Process)
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorksSteps.map((item) => (
            <GlassPanel key={item.step} className="text-left flex flex-col items-start hover:shadow-sky-200/60 transition duration-500">
              <div className="text-3xl font-extrabold text-teal-600 p-3 bg-sky-100/60 rounded-full mb-4">
                {item.step}
              </div>
              <h4 className="text-2xl font-semibold text-slate-800 mb-2">{item.title}</h4>
              <p className="text-slate-600">{item.description}</p>
            </GlassPanel>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-8">
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
            RehabInfo Assistant - Your Rehabilitation Questions, Answered Instantly
          </p>
        </div>
      </div>

      {/* --- For Clinicians & Patients Section --- */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Clinicians Section */}
          <GlassPanel className="text-left">
            <h3 className="text-2xl font-bold text-teal-600 mb-4">
              Can it be used by clinicians?
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Yes. Built by a clinician for clinicians, a specialised login unlocks the full, unrestricted database for complex queries not only on management, pathophysiology or pharmacology but also pathways. Stop wasting time verifying unreliable internet sources; instead, get instant, evidence-based answers to support your clinical reasoning. By integrating this into your practice, you extend your care beyond the appointment with a system that strictly adheres to NHS and NICE standards. Plus, the automated red flag detection adds a critical safety net, ensuring your patients safety.
            </p>
          </GlassPanel>

          {/* Patient Benefits Section */}
          <GlassPanel className="text-left">
            <h3 className="text-2xl font-bold text-teal-600 mb-4">
              Why provide patients with RehabInfo Assistant access?
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Patients frequently have questions following their clinical sessions with Physiotherapists. Insufficient information can lead to poor adherence, while delayed answers may cause anxiety or stall recovery progress, not something that either patient or Physiotherapist hopes for. The RehabInfo Assistant bridges this gap by providing immediate answers verified against trusted guidelines. This ensures patients remain compliant and safe between visits, whilst significantly reducing the administrative burden of repetitive inquiries on your clinical staff.
            </p>
          </GlassPanel>
        </div>
      </div>

      {/* --- Patient FAQ Section --- */}
      <div className="max-w-4xl mx-auto">
        <h2 id="faq" className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
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
