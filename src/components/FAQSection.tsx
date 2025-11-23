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
      a: "Yes. We do not store personal health information outside of secure, compliant systems. Queries are educational only and logged anonymously for safety monitoring. Full GDPR compliance measures are strictly enforced.",
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
    },
    {
      q: "How will this benefit my practice workflow?",
      a: "It significantly reduces the administrative burden of answering repetitive patient queries between sessions. By offering this 24/7 educational support, you enhance patient adherence and satisfaction, effectively extending your duty of care without extending your working hours.",
      icon: <CheckCircle className="w-5 h-5 mt-1" />
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Ask Anytime",
      description: "Type your question in plain English — no medical terms needed. Ask about your exercises, pain levels, or recovery plan."
    },
    {
      step: 2,
      title: "Get Trusted Answers",
      description: "RehabInfo Assistant uses physiotherapy principles and trusted sources like NHS and NICE guidance to give you clear, evidence-informed information."
    },
    {
      step: 3,
      title: "Recover with Confidence",
      description: "Clear up confusion instantly so you can worry less, stay on track with your rehab, and feel more confident between appointments."
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
          <div className="text-left">
            <h3 className="text-3xl font-bold text-teal-600 mb-4 flex items-center">
              <Shield className="w-8 h-8 mr-3" />
              What We Do (And Don't Do)
            </h3>
            <p className="text-slate-700 text-lg mb-4 text-left">
              RehabInfo Assistant is an intelligent chatbot that provides post-consultation
              rehabilitation information to physiotherapy patients. Built with Retrieval-Augmented
              Generation (RAG) technology, it delivers accurate, source-cited answers from verified
              clinical resources including NHS, NICE, BNF, CSP, and MHRA guidance.
            </p>
            <p className="text-slate-700 text-lg text-left">
              Unlike generic health chatbots, RehabInfo is designed specifically for the UK physiotherapy
              sector with strict MHRA compliance, ensuring <strong>educational support without crossing into medical advice or diagnosis</strong>.
            </p>
          </div>

          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-left">
            <h4 className="text-xl font-bold text-red-600 mb-3 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-red-500" />
              Safety & Compliance Disclaimer
            </h4>
            <ul className="list-disc list-inside text-slate-700 space-y-2 text-md ml-4 text-left">
              <li className="flex items-start text-left">
                <span className="text-red-500 mr-2">✗</span> Does NOT diagnose medical conditions.
              </li>
              <li className="flex items-start text-left">
                <span className="text-red-500 mr-2">✗</span> Does NOT prescribe specific treatments.
              </li>
              <li className="flex items-start text-left">
                <span className="text-red-500 mr-2">✗</span> Does NOT replace professional medical advice.
              </li>
              <li className="flex items-start text-left">
                <span className="text-teal-500 mr-2">✓</span> Monitors for Urgency Keywords and immediately redirects to emergency contacts.
              </li>
              <li className="flex items-start text-left">
                <span className="text-teal-500 mr-2">✓</span> Provides educational information only.
              </li>
              <li className="flex items-start text-left">
                <span className="text-teal-500 mr-2">✓</span> Includes mandatory disclaimers on every response.
              </li>
              <li className="flex items-start text-left">
                <span className="text-teal-500 mr-2">✓</span> Full Audit Logging for clinical governance and MHRA compliance.
              </li>
            </ul>
          </div>
        </div>
      </GlassPanel>

      {/* --- How It Works Section --- */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
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
        <div className="mt-8">
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

      {/* --- Additional Feature Cards --- */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tailored Access Card */}
          <GlassPanel className="text-left">
            <h3 className="text-2xl font-bold text-teal-600 mb-4">
              Tailored Access for Maximum Benefit
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              The system intelligently adapts to the user's role. Patients access a curated, safety-first version of the database specifically designed to improve rehabilitation adherence. Crucially, it acts as a triage tool: detecting symptoms that require your professional attention (prompting the patient to book an appointment) versus "red flags" that demand immediate emergency care. In contrast, clinicians (or independent subscribers) unlock the complete, unrestricted database, granting the freedom to query the full breadth of musculoskeletal medicine—from pathophysiology to complex case management—without limitations.
            </p>
          </GlassPanel>

          {/* Condition-Centred Card */}
          <GlassPanel className="text-left">
            <h3 className="text-2xl font-bold text-teal-600 mb-4">
              Condition-Centred & Goal-Oriented
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              This is not a generic chatbot; it is precision-engineered around the patient's specific condition. By integrating your clinical inputs—such as the diagnosis and specific session notes—the Assistant "grounds" every answer in the reality of your treatment plan. This ensures the patient receives information strictly related to their problem without going off-topic, preventing confusion and maximising their recovery through focused, relevant guidance. Effectively, it acts as a seamless extension of your clinical voice, reinforcing your specific instructions even when you are not there. Adopting this technology positions your practice at the forefront of modern healthcare, offering a premium, 24/7 support service that truly sets you apart.
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
