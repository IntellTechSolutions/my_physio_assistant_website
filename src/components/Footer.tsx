import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t backdrop-blur-xl mt-20"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(245,250,255,0.6) 100%)',
        borderColor: 'rgba(180,200,230,0.25)',
        boxShadow: '0 -4px 24px rgba(30,60,90,0.08)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-3">
              RehabInfo Assistant
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AI-powered information assistant providing post-consultation support for physiotherapy patients.
              Evidence-based, MHRA-compliant guidance available 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#demo" className="text-slate-600 hover:text-teal-600 text-sm transition">
                  Start Your Chat
                </a>
              </li>
              <li>
                <a href="#learn-more" className="text-slate-600 hover:text-teal-600 text-sm transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-teal-600 text-sm transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sky-100">
          <div className="flex flex-col items-center gap-4 mb-6">
            <p className="text-slate-600 text-sm text-center">
              Built by clinicians for patients and clinicians
            </p>
            <p className="text-slate-500 text-sm text-center">
              © {currentYear} Intelligent Technology Solutions Limited (UK) | Operating RehabInfo Assistant
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy-policy" className="text-slate-500 hover:text-teal-600 transition">
                Privacy Policy
              </a>
              <a href="#terms-of-service" className="text-slate-500 hover:text-teal-600 transition">
                Terms of Service
              </a>
              <a href="#mhra-compliance" className="text-slate-500 hover:text-teal-600 transition">
                MHRA Compliance
              </a>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong className="text-amber-900">Medical Disclaimer:</strong> This tool provides educational information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physiotherapist or other qualified health provider with any questions you may have regarding your condition. Never disregard professional medical advice or delay seeking it because of information provided by this tool.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
