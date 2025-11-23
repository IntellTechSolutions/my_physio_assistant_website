import { useEffect } from 'react';
import { ChevronDown, MessageCircle, CheckCircle, FileText, Shield, MessageSquare, AlertCircle } from 'lucide-react';
import FAQSection from './components/FAQSection';
import ChatDemo from './components/ChatDemo';
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import MHRACompliance from './components/MHRACompliance';
import Footer from './components/Footer';

function App() {
  // Ensure page loads at the top
  useEffect(() => {
    // Only scroll to top on initial page load, not when navigating with hash links
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* --- Main Content Container (Hero Section) --- */}
        <div className="container mx-auto p-4 max-w-7xl flex flex-col justify-center items-center text-center">
          <header className="mb-12 mt-12 md:mt-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 mb-6">
              Still Confused After Your Physio or GP Visit?
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              You left with more questions than answers. RehabInfo Assistant is here to fill the gaps and calm the worries.
            </p>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed italic">
              If you walked out thinking "I'm not even sure what's really wrong or what to do next," you're not alone.
            </p>
          </header>

          {/* --- Chat Demo Interface --- */}
          <div id="demo" className="w-full max-w-5xl mb-8">
            <ChatDemo />
          </div>

          {/* --- Call-to-Action Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="#demo"
              aria-label="Start Your Chat"
              className="flex items-center justify-center px-10 py-4 bg-teal-500 hover:bg-teal-400 text-white text-lg font-bold rounded-full transition duration-300 shadow-lg shadow-teal-500/40 hover:shadow-teal-500/60"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> Start Your Chat
            </a>
            <a
              href="#how-it-works"
              aria-label="See How It Works"
              className="flex items-center justify-center px-8 py-4 bg-white/60 hover:bg-white/80 text-sky-700 text-base font-semibold rounded-full transition duration-300 shadow-sm border border-sky-200/60 hover:border-sky-300"
            >
              See How It Works <ChevronDown className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* --- Reassurance Disclaimer --- */}
          <div className="text-sm text-slate-600 max-w-3xl mx-auto mb-12 mt-3 leading-relaxed">
            <p>
              RehabInfo Assistant helps you understand your condition, your rehab, and your day-to-day questions. It doesn't replace a physiotherapist, GP, or emergency care. If your symptoms are severe, suddenly worse, or worrying, we'll always guide you to contact the right healthcare service (such as your physio, GP, NHS 111, or emergency services).
            </p>
          </div>
        </div>

        {/* --- Is This For Me? Mini-Section --- */}
        <section className="container mx-auto max-w-4xl px-4 py-12 mb-8">
          <div
            className="p-8 md:p-10 rounded-3xl border backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,250,255,0.6) 100%)',
              borderColor: 'rgba(180,200,230,0.3)',
              boxShadow: '0 8px 24px rgba(30,60,90,0.1)'
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-8">
              Is RehabInfo Assistant Right for You?
            </h2>

            <ul className="space-y-4 max-w-3xl mx-auto">
              <li className="flex items-start text-slate-700 text-base md:text-lg leading-relaxed">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-teal-500 flex-shrink-0" />
                <span>You left your appointment still unsure what your diagnosis actually means.</span>
              </li>
              <li className="flex items-start text-slate-700 text-base md:text-lg leading-relaxed">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-teal-500 flex-shrink-0" />
                <span>You're worried about making things worse at work or home.</span>
              </li>
              <li className="flex items-start text-slate-700 text-base md:text-lg leading-relaxed">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-teal-500 flex-shrink-0" />
                <span>You've had a scan or letter with scary words you don't fully understand.</span>
              </li>
              <li className="flex items-start text-slate-700 text-base md:text-lg leading-relaxed">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-teal-500 flex-shrink-0" />
                <span>You're not sure which symptoms are "normal" and which are red flags.</span>
              </li>
              <li className="flex items-start text-slate-700 text-base md:text-lg leading-relaxed">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-teal-500 flex-shrink-0" />
                <span>You want plain-English answers without feeling rushed.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* --- How It Helps Section --- */}
        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            How It Helps
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tile 1: Decode Letters & Scans */}
            <div
              className="p-6 md:p-8 rounded-2xl border backdrop-blur-xl text-left"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,250,255,0.6) 100%)',
                borderColor: 'rgba(180,200,230,0.3)',
                boxShadow: '0 4px 16px rgba(30,60,90,0.08)'
              }}
            >
              <FileText className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Decode Your Clinic Letters & Scan Reports
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                We translate medical jargon into everyday language so you finally understand what the words mean—without giving new diagnoses.
              </p>
            </div>

            {/* Tile 2: Know What's Safe */}
            <div
              className="p-6 md:p-8 rounded-2xl border backdrop-blur-xl text-left"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,250,255,0.6) 100%)',
                borderColor: 'rgba(180,200,230,0.3)',
                boxShadow: '0 4px 16px rgba(30,60,90,0.08)'
              }}
            >
              <Shield className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Know What's Usually Safe—and When It Isn't
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                From lifting at work to playing sport, learn what's commonly okay and when to get more help.
              </p>
            </div>

            {/* Tile 3: Ask Anything */}
            <div
              className="p-6 md:p-8 rounded-2xl border backdrop-blur-xl text-left"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,250,255,0.6) 100%)',
                borderColor: 'rgba(180,200,230,0.3)',
                boxShadow: '0 4px 16px rgba(30,60,90,0.08)'
              }}
            >
              <MessageSquare className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Ask Anything, Anytime
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                You don't need perfect notes or medical terms. Just tell us what hurts and what worries you. We'll walk through it step by step.
              </p>
            </div>
          </div>
        </section>

        {/* --- FAQ/About Section Component --- */}
        <FAQSection />

        {/* --- Contact Form --- */}
        <ContactForm />

        {/* --- Privacy Policy --- */}
        <PrivacyPolicy />

        {/* --- Terms of Service --- */}
        <TermsOfService />

        {/* --- MHRA Compliance --- */}
        <MHRACompliance />

        {/* --- Safety & Limits Block --- */}
        <section className="container mx-auto max-w-4xl px-4 py-12 mb-8">
          <div
            className="p-8 md:p-10 rounded-2xl border text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,250,245,0.9) 0%, rgba(254,243,235,0.8) 100%)',
              borderColor: 'rgba(251,146,60,0.3)',
              boxShadow: '0 4px 16px rgba(251,146,60,0.1)'
            }}
          >
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              RehabInfo Assistant can't see your full medical record and can't diagnose or prescribe. If your question sounds dangerous—like sudden chest pain or loss of bladder control—we'll immediately tell you to phone 111 or 999.
            </p>
          </div>
        </section>

        {/* --- Footer --- */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
