import React from 'react';
import { Shield, Info, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

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
      a: "Not at all. RehabInfo Assistant is an educational support tool to help you between appointments. It works alongside your physiotherapy care, but it's important to always follow your physiotherapist's specific advice and attend your scheduled follow-ups.",
      icon: <Info className="w-5 h-5 mt-1" />
    },
    {
      q: "Is my data private and secure?",
      a: "Yes. We do not store personal health information outside of secure, compliant systems. Queries are educational only and logged anonymously for safety monitoring. Full GDPR compliance measures are strictly enforced.",
      icon: <Lock className="w-5 h-5 mt-1" />
    },
    {
      q: "What if I have an emergency symptom?",
      a: "RehabInfo Assistant is designed to spot red flag symptoms (such as severe pain, numbness, bladder changes, or sudden deterioration) and will immediately guide you to call 999 or visit A&E. Your safety comes first — if you're ever worried about severe or sudden symptoms, please don't wait and seek emergency care straight away.",
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
      title: "Just Ask RehabInfo Assistant",
      description: "Describe what you're feeling in your own words, medical terms needed. Whether you're unsure about an exercise technique, want to discuss the diagnosis given by your healthcare provider, or are wondering about a new ache, just type it exactly as you'd say it, RehabInfo Assistant will listen."
    },
    {
      step: 2,
      title: "It Checks In With You",
      description: "RehabInfo Assistant listens to get it right. Instead of just guessing, the Assistant may ask a few gentle follow-up questions to fully understand your history and goals first. This ensures the guidance isn't just generic—it's safe, personalised, and tailored to exactly how you are feeling right now."
    },
    {
      step: 3,
      title: "Recover with Peace of Mind",
      description: "Get the clarity you need to stop worrying and focus on getting better. We help you stay on track with your rehab and feel completely supported until you recover fully. RehabInfo Assistant is by your side whenever you need it, it is avaiable for you 24/7."
    },
  ];

  return (
    <section id="learn-more" className="py-20 md:py-32 container mx-auto max-w-7xl px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
        RehabInfo Assistant by your side
      </h2>

      {/* --- Card 1: Validation Text --- */}
      <div className="mb-12">
        <GlassPanel className="max-w-4xl mx-auto text-center">
          <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4 italic">
            If you walked out thinking "I'm not even sure what's really wrong or what to do next," you're not alone.
          </p>
          <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-3">
            It's normal to feel worried, confused, or even dismissed after a short appointment.
          </p>
          <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-medium">
            Your questions are valid, and it's okay to want more explanation.
          </p>
        </GlassPanel>
      </div>

      {/* --- Main Section Heading: Make Sense of Your Diagnosis --- */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
        Make Sense of Your Diagnosis
      </h2>

      {/* --- Card 2: Medical Terms Content --- */}
      <div className="mb-16">
        <GlassPanel className="max-w-5xl mx-auto">
          <p className="text-slate-700 text-base leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Medical terms, clinic letters, and imaging reports can be confusing and sometimes scary to read. RehabInfo Assistant helps translate your diagnosis into plain English:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-sky-50/50 p-5 rounded-xl border border-sky-100">
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong className="text-teal-600">Understand imaging:</strong> Learn what your MRI or X-ray results usually mean in the context of musculoskeletal problems.
              </p>
            </div>

            <div className="bg-sky-50/50 p-5 rounded-xl border border-sky-100">
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong className="text-teal-600">Learn the "why":</strong> Understand what structures might be involved and what that means for your recovery.
              </p>
            </div>

            <div className="bg-sky-50/50 p-5 rounded-xl border border-sky-100">
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong className="text-teal-600">Know what to watch for:</strong> Learn which symptoms are common during healing, and which changes should be reported to your physiotherapist, GP, or NHS 111.
              </p>
            </div>
          </div>

          <p className="text-slate-600 text-sm text-center italic">
            We help you decode the language of healthcare so you can feel informed, not overwhelmed.
          </p>
        </GlassPanel>
      </div>

      {/* --- The Appointment Ended Value Proposition --- */}
      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-semibold text-center text-slate-600 mb-4">
          RehabInfo Assistant is here to fill those gaps
        </h3>
        <GlassPanel className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
            The Appointment Ended, But Your Questions Didn't.
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* We Have Time for You */}
            <div className="text-left">
              <h4 className="text-2xl font-bold text-teal-600 mb-4">
                We Have Time for You
              </h4>
              <p className="text-slate-700 text-base leading-relaxed mb-4">
                Your physio wants to help, but appointments are short. RehabInfo Assistant is here 24/7 to go deeper — to explain your diagnosis in detail, break down medical terms, and help you understand what's actually going on inside your body at your own pace.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                Ask about the words in your letter or scan report, what your physio found on examination, or what your condition might mean for work, family life and hobbies.
              </p>
            </div>

            {/* Peace of Mind */}
            <div className="text-left">
              <h4 className="text-2xl font-bold text-teal-600 mb-4">
                Peace of Mind
              </h4>
              <p className="text-slate-700 text-base leading-relaxed mb-4">
                Stop scrolling through confusing search results. Instead, talk things through in a calm, supportive space.
              </p>
              <p className="text-slate-700 text-base leading-relaxed mb-4">
                Get clear, safe explanations grounded in trusted clinical guidance, so you know what is likely part of normal healing and what might need checking by a clinician.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                We take the uncertainty out of recovery—helping you understand what's happening in your body, validating your questions, and giving you the confidence to know when to seek help.
              </p>
            </div>
          </div>
        </GlassPanel>
      </div>

      {/* --- How It Works Section --- */}
      <div id="how-it-works" className="mb-16">
        <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 mb-8">
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
      </div>

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
              RehabInfo Assistant is designed to give safe, sensible information based on physiotherapy and NHS-backed guidance. While it's here to support your understanding and confidence, it's not able to diagnose new problems or handle emergencies. If your symptoms are worrying, severe, or suddenly worse, we'll guide you to the right healthcare service — whether that's your physiotherapist, GP, NHS 111, or emergency care.
            </p>
          </div>

          {/* Strictly Private */}
          <div className="text-left">
            <h4 className="text-xl font-bold text-sky-700 mb-3 flex items-center">
              <Lock className="w-6 h-6 mr-2 text-teal-600" />
              Strictly Private
            </h4>
            <p className="text-slate-700 text-base leading-relaxed">
              Your health information is treated with care. We use secure, GDPR‑compliant systems, and your data is never sold or shared with advertisers. Every message you send is encrypted and stored safely, so only authorised professionals and systems can access it. You stay in control — you can delete your conversations or account data at any time.
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

      {/* --- Patient FAQ Section --- */}
      <div className="max-w-4xl mx-auto">
        <h2 id="faq" className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
          Frequently Asked Questions (FAQ)
        </h2>
        <GlassPanel className="!p-4 text-left">
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

      {/* --- Standalone Section Header --- */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
        RehabInfo Assistant — Your Partner in Patient Support
      </h2>

      {/* --- For Clinics & Physiotherapists Section --- */}
      <section id="for-physiotherapists" className="-mx-4 py-20 md:py-32 bg-gradient-to-br from-slate-50 to-sky-50 border-y border-sky-200">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6" style={{ color: '#909090' }}>
            For Clinics & Physiotherapists
          </h2>

          <p className="text-center text-lg text-slate-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            RehabInfo Assistant extends your care beyond the treatment room. It answers common patient questions, reinforces your advice, and supports self-management — without adding to your admin load.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Extend Your Care */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-sky-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-teal-600 mb-3">Extend Your Care</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Support patients 24/7 with consistent explanations of rehab principles and common MSK conditions, so they feel supported between sessions.
              </p>
            </div>

            {/* You Set the Guardrails */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-sky-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-teal-600 mb-3">You Set the Guardrails</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                You remain in control. Simply set up a patient profile with their specific diagnosis, management plan, rehab phase, and precautions. The Assistant uses this profile as its rulebook, ensuring every answer it gives the patient is grounded in your clinical reasoning and consistent with your specific instructions.
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

          {/* Professional CTA */}
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-10 py-4 bg-teal-600 hover:bg-teal-500 text-white text-lg font-bold rounded-full transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <p className="mt-4 text-sm text-slate-600">
              Interested in bringing RehabInfo Assistant to your clinic? Contact us to learn more.
            </p>
          </div>
        </div>
      </section>

    </section>
  );
};

export default FAQSection;
