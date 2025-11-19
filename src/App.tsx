import React from 'react';
import { ChevronDown, Rocket } from 'lucide-react';
import FAQSection from './components/FAQSection';
import ChatDemo from './components/ChatDemo';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Light glassmorphism container style
const GlassPanel: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div
    className={`p-6 md:p-10 rounded-3xl border border-white/60 shadow-lg backdrop-blur-xl bg-white/80 ${className}`}
    style={{
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.8) inset'
    }}
  >
    {children}
  </div>
);

function App() {
  const heroDescription = "MHRA-compliant • Evidence-based • Clinically verified • Available anytime";

  return (
    <div className="min-h-screen flex flex-col items-center text-center">

      {/* --- Main Content Container (Hero Section) --- */}
      <div className="container mx-auto p-4 max-w-7xl flex flex-col justify-center items-center text-center">
        <header className="mb-8 mt-12 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
            Your Rehabilitation Questions, Answered Instantly
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
            className="flex items-center px-8 py-3 border-2 border-sky-300 bg-white/60 hover:bg-sky-50 text-sky-700 font-semibold rounded-full transition duration-300 shadow-md"
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

      {/* --- Footer --- */}
      <Footer />

    </div>
  );
}

export default App;
