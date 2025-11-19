import React from 'react';
import { ChevronDown, Rocket } from 'lucide-react';
import FAQSection from './components/FAQSection';
import ChatDemo from './components/ChatDemo';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Defines the core glassmorphism container style
const GlassPanel: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  // Translucent Panels: border-white/10, blurred backdrop (backdrop-blur-xl), Accent Glow rgba(100,150,200,0.15) shadows
  <div
    className={`p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl bg-blue-500/10 ${className}`}
  >
    {children}
  </div>
);

function App() {
  const heroDescription = "MHRA-compliant • Evidence-based • Clinically verified • Available anytime";

  return (
    // Set max-width for overall page content
    <div className="min-h-screen flex flex-col items-center text-center">
      
      {/* --- Main Content Container (Hero Section) --- */}
      <div className="container mx-auto p-4 max-w-7xl flex flex-col justify-center items-center text-center">
        <header className="mb-8 mt-12 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-300">
            Your Rehabilitation Questions, Answered Instantly
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
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
            className="flex items-center px-8 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-full transition duration-300 shadow-teal-500/50 shadow-lg"
          >
            <Rocket className="w-5 h-5 mr-2" /> Try Demo
          </a>
          {/* CTA links to the new FAQ section */}
          <a 
            href="#learn-more" 
            className="flex items-center px-8 py-3 border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition duration-300"
          >
            Learn More <ChevronDown className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* --- Trust/Description Bar --- */}
        <div className="text-sm text-slate-400 mb-20 max-w-xl mx-auto">
          {heroDescription.split(' • ').map((item, index) => (
            <span key={index} className="inline-block mx-2 my-1">
              <span className="text-teal-400">✓</span> {item}
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
