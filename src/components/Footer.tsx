import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white/90 border-t border-sky-100 backdrop-blur-xl mt-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-3">
              RehabInfo Assistant
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AI-powered information assistant providing post-consultation support for physiotherapy patients.
              Evidence-based, MHRA-compliant guidance available 24/7.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/IntellTechSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-teal-600 transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-teal-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="text-slate-500 hover:text-teal-600 transition"
                aria-label="Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#demo" className="text-slate-600 hover:text-teal-600 text-sm transition">
                  Try Demo
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

          {/* Resources */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.nhs.uk/conditions/physiotherapy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-teal-600 text-sm transition flex items-center gap-1"
                >
                  NHS Physiotherapy
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.nice.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-teal-600 text-sm transition flex items-center gap-1"
                >
                  NICE Guidelines
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.csp.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-teal-600 text-sm transition flex items-center gap-1"
                >
                  Chartered Society
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sky-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} RehabInfo Assistant. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-teal-600 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-600 transition">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-600 transition">
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
