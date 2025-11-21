import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with pre-filled information
    const subject = encodeURIComponent(`RehabInfo Assistant Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:info@intelltechsolutions.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-4 py-20">
      <div
        className="p-8 md:p-12 rounded-3xl border backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(240,246,255,0.55) 100%)',
          borderColor: 'rgba(180,200,230,0.25)',
          boxShadow: '0 8px 24px rgba(30,60,90,0.08)'
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
          Interested in implementing RehabInfo Assistant at your clinic? Have questions about the product?
          We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-sky-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-sky-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
              Organization (Optional)
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white border border-sky-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              placeholder="Your clinic or organization"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white border border-sky-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none shadow-sm"
              placeholder="Tell us about your interest in RehabInfo Assistant..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full transition duration-300 shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>

          {/* Email Direct Link Alternative */}
          <div className="text-center pt-4 border-t border-sky-100">
            <p className="text-sm text-slate-500 mb-2">Or email us directly:</p>
            <a
              href="mailto:info@intelltechsolutions.co.uk"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition"
            >
              <Mail className="w-4 h-4" />
              info@intelltechsolutions.co.uk
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
