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

      {/* --- Safe, Secure, & Supportive Section --- */}
      <GlassPanel className="mb-16">
        <h3 className="text-3xl font-bold text-teal-600 mb-6 text-center flex items-center justify-center">
          <Shield className="w-8 h-8 mr-3" />
          Safe, Secure, & Supportive
        </h3>

        <p className="text-slate-700 text-lg mb-8 text-center max-w-3xl mx-auto leading-relaxed">
          RehabInfo Assistant is here to support you between appointments, never to replace your physiotherapist. Your safety is our top priority, which is why every answer is grounded in trusted physiotherapy principles and NHS-backed guidance.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Safety First */}
          <div className="text-left">
            <h4 className="text-xl font-bold text-sky-700 mb-3 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-teal-600" />
              Safety First
            </h4>
            <p className="text-slate-700 text-base leading-relaxed">
              RehabInfo Assistant is designed to give safe, sensible information based on physiotherapy and NHS-backed guidance. It can't diagnose new problems or emergencies, and it will always encourage you to seek urgent care, NHS 111, your GP, or your physiotherapist if your symptoms are worrying or severe.
            </p>
          </div>

          {/* Strictly Private */}
          <div className="text-left">
            <h4 className="text-xl font-bold text-sky-700 mb-3 flex items-center">
              <Lock className="w-6 h-6 mr-2 text-teal-600" />
              Strictly Private
            </h4>
            <p className="text-slate-700 text-base leading-relaxed">
              Your health information is treated with care. We use secure, GDPR-compliant systems, and your data is never sold or shared with advertisers.
            </p>
          </div>
        </div>

        {/* What it does / doesn't do */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-sky-100">
          {/* What it DOES */}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-teal-600 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              What RehabInfo Assistant Does
            </h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2 mt-1">✓</span>
                <span>Explains rehab principles and common MSK conditions in simple language.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2 mt-1">✓</span>
                <span>Helps you remember key advice about activity and exercises.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2 mt-1">✓</span>
                <span>Encourages safe self-management and realistic expectations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2 mt-1">✓</span>
                <span>Provides information based on trusted NHS and NICE guidance.</span>
              </li>
            </ul>
          </div>

          {/* What it DOESN'T do */}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-slate-600 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              What RehabInfo Assistant Doesn't Do
            </h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-slate-400 mr-2 mt-1">•</span>
                <span>Doesn't diagnose or replace your physiotherapist or doctor.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-400 mr-2 mt-1">•</span>
                <span>Doesn't make decisions about your treatment plan.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-400 mr-2 mt-1">•</span>
                <span>Doesn't provide emergency care — in an emergency, call 999 or use urgent care services.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 pt-6 border-t border-sky-100 flex flex-wrap justify-center gap-4 items-center">
          <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold border border-teal-200">
            NHS-Backed Guidance
          </span>
          <span className="px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-semibold border border-sky-200">
            NICE Standards
          </span>
          <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
            GDPR Compliant
          </span>
          <span className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-semibold border border-cyan-200">
            MHRA Aligned
          </span>
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

      {/* --- For Clinics & Physiotherapists Section --- */}
      <section id="for-physiotherapists" className="mt-32 -mx-4 py-20 md:py-32 bg-gradient-to-br from-slate-50 to-sky-50 border-y border-sky-200">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-800">
            For Clinics & Physiotherapists
          </h2>

          <p className="text-center text-lg text-slate-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            RehabInfo Assistant extends your care beyond the treatment room. It answers common patient questions, reinforces your advice, and supports self-management — without adding to your admin load.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Extend Your Care */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-sky-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-teal-600 mb-3">Extend Your Care</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Support patients 24/7 with consistent explanations of rehab principles and common MSK conditions, so they feel supported between sessions.
              </p>
            </div>

            {/* Clinical Control */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-sky-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-teal-600 mb-3">Clinical Control</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                RehabInfo Assistant is built around physiotherapy best practice and trusted guidance (NHS and NICE-aligned MSK information). It's designed to reinforce your messages, not replace your clinical judgement.
              </p>
            </div>

            {/* Technical Security */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-sky-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-teal-600 mb-3">Technical Security</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>GDPR-compliant data handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Supabase Row-Level Security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Comprehensive audit logging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>MHRA-aligned safety protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Encrypted data storage & transmission</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Professional Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Reduce Admin Burden */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-sky-200 shadow-sm">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Reduce Administrative Burden
              </h3>
              <p className="text-slate-700 text-base leading-relaxed mb-4">
                Patients frequently have questions following their clinical sessions. Insufficient information can lead to poor adherence, while delayed answers may cause anxiety or stall recovery progress.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                RehabInfo Assistant bridges this gap by providing immediate answers verified against trusted guidelines. This ensures patients remain compliant and safe between visits, whilst significantly reducing repetitive inquiries on your clinical staff.
              </p>
            </div>

            {/* Clinical Integration */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-sky-200 shadow-sm">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Built by Clinicians, for Clinicians
              </h3>
              <p className="text-slate-700 text-base leading-relaxed mb-4">
                A specialised clinician login unlocks the full database for complex queries on management, pathophysiology, pharmacology, and clinical pathways.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                Stop wasting time verifying unreliable internet sources. Get instant, evidence-based answers to support your clinical reasoning, all while extending your care beyond the appointment with automated red flag detection as a critical safety net.
              </p>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
};

export default FAQSection;
