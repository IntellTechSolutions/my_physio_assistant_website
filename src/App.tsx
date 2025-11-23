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
          <div className="text-sm text-slate-500 max-w-2xl mx-auto mb-20 mt-3">
            <p>
              RehabInfo Assistant supports your physiotherapy care. It does not replace a physiotherapist or emergency services.
            </p>
          </div>
        </div>

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
