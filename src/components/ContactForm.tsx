import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Netlify Forms submission
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-4 py-20">
      <div
        className="p-8 md:p-12 rounded-3xl border border-white/60 shadow-lg backdrop-blur-xl bg-white/80"
        style={{
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.8) inset'
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
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Netlify form detection */}
          <input type="hidden" name="form-name" value="contact" />

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
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-teal-500 hover:bg-teal-400 disabled:bg-slate-300 text-white font-bold rounded-full transition duration-300 shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="flex items-center gap-2 p-4 bg-teal-50 border border-teal-300 rounded-lg text-teal-700">
              <CheckCircle className="w-5 h-5" />
              <span>Thank you! We'll get back to you soon.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-300 rounded-lg text-red-700">
              <AlertCircle className="w-5 h-5" />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
