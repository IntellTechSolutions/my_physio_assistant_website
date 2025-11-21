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
  const heroDescription = "MHRA-compliant • Evidence-based • Clinically verified • Available anytime";

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
          <header className="mb-8 mt-12 md:mt-16">
            {/* Promotional Banner */}
            <div className="mb-6 px-6 py-3 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-full inline-block">
              <p className="text-sm md:text-base text-teal-700 font-semibold">
                Promotional Website for RehabInfo Assistant
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
              RehabInfo Assistant
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
              AI-powered information assistant providing post-consultation support for physiotherapy patients.
              <br className="hidden sm:inline" />
              Trusted guidance from NHS, NICE, and clinical experts—available 24/7.
            </p>
          </header>

          {/* --- Chat Demo Interface --- */}
          <div id="demo" className="w-full max-w-5xl mb-12">
            <ChatDemo />
          </div>

          {/* --- Call-to-Action Buttons --- */}
          <div className="flex space-x-4 mb-6">
            <a
              href="#demo"
              className="flex items-center px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full transition duration-300 shadow-lg shadow-teal-500/30"
            >
              <Rocket className="w-5 h-5 mr-2" /> Try Demo
            </a>
            <a
              href="#learn-more"
              className="flex items-center px-8 py-3 bg-white/70 hover:bg-white/90 text-sky-700 font-semibold rounded-full transition duration-300 shadow-md border border-sky-200/50"
            >
              Learn More <ChevronDown className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* --- Trust/Description Bar --- */}
          <div className="text-sm text-slate-500 mb-20 max-w-xl mx-auto">
            {heroDescription.split(' • ').map((item, index) => (
              <span key={index} className="inline-block mx-2 my-1">
                <span className="text-teal-500">✓</span> {item}
              </span>
            ))}
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
