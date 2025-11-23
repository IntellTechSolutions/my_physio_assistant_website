import { useEffect } from 'react';
import { ChevronDown, Rocket } from 'lucide-react';
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
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 mb-6">
              Your Personal Recovery Guide.
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Trusted, instant answers to your rehab questions between appointments.<br className="hidden sm:inline" />
              Keeping you safe, supported, and on track.
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
              className="flex items-center justify-center px-10 py-4 bg-teal-500 hover:bg-teal-400 text-white text-lg font-bold rounded-full transition duration-300 shadow-lg shadow-teal-500/40 hover:shadow-teal-500/60"
            >
              <Rocket className="w-5 h-5 mr-2" /> Try Demo
            </a>
            <a
              href="#for-physiotherapists"
              className="flex items-center justify-center px-8 py-4 bg-white/60 hover:bg-white/80 text-sky-700 text-base font-semibold rounded-full transition duration-300 shadow-sm border border-sky-200/60 hover:border-sky-300"
            >
              For Physiotherapists <ChevronDown className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* --- Reassurance Disclaimer --- */}
          <div className="text-sm text-slate-600 max-w-3xl mx-auto mb-20 mt-3 leading-relaxed">
            <p>
              RehabInfo Assistant helps you understand your condition, your rehab, and your day-to-day questions. It doesn't replace a physiotherapist, GP, or emergency care. If your symptoms are severe, suddenly worse, or worrying, we'll always guide you to contact the right healthcare service (such as your physio, GP, NHS 111, or emergency services).
            </p>
          </div>
        </div>

        {/* --- Am I Making It Worse Section --- */}
        <section className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div
            className="p-8 md:p-12 rounded-3xl border backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(240,246,255,0.55) 100%)',
              borderColor: 'rgba(180,200,230,0.25)',
              boxShadow: '0 8px 24px rgba(30,60,90,0.08)'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-6">
              Am I Making It Worse?
            </h2>

            <p className="text-slate-700 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Recovery isn't just about doing your exercises — it's about feeling safe to live your life. Many people worry that everyday activities, work, or family responsibilities might "damage" something or set them back. RehabInfo Assistant is here to help you navigate those decisions with confidence.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Daily Living */}
              <div className="text-left">
                <h3 className="text-lg font-bold text-teal-600 mb-4">Daily Living</h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>"Can I drive with this neck pain?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>"Is it okay to lift my child with a sore back?"</span>
                  </li>
                </ul>
              </div>

              {/* Work & Activity */}
              <div className="text-left">
                <h3 className="text-lg font-bold text-teal-600 mb-4">Work & Activity</h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>"Is it safe to sit at my desk for 8 hours?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>"Can I go back to my manual job without making it worse?"</span>
                  </li>
                </ul>
              </div>

              {/* Symptom Checking */}
              <div className="text-left">
                <h3 className="text-lg font-bold text-teal-600 mb-4">Symptom Checking</h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>"I feel a sharp twinge when I bend — is that normal or should I stop?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>"My pain is worse in the evening — is that expected or a warning sign?"</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed text-center max-w-3xl mx-auto pt-6 border-t border-sky-100">
              RehabInfo Assistant helps you understand what's usually safe, what might just be a normal part of healing, and when it's important to slow down or seek more help — so you don't have to be afraid to move.
            </p>
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

        {/* --- Footer --- */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
