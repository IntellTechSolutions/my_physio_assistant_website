import React from 'react';
import { Shield, Lock, Database, UserCheck, FileText, Clock, AlertCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy-policy" className="py-20 md:py-32 container mx-auto max-w-5xl px-4">
      <div
        className="p-8 md:p-12 rounded-3xl border backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(240,246,255,0.55) 100%)',
          borderColor: 'rgba(180,200,230,0.25)',
          boxShadow: '0 8px 24px rgba(30,60,90,0.08)'
        }}
      >
        <div className="flex items-center justify-center mb-8">
          <Lock className="w-10 h-10 text-teal-600 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
            Privacy Policy
          </h2>
        </div>

        <div className="space-y-8 text-slate-700">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-teal-600 mb-2">RehabInfo Assistant</h3>
            <p className="text-sm text-slate-500">Last Updated: November 2025</p>
          </div>

          <p className="text-base leading-relaxed">
            Intelligent Technology Solutions Limited ("we," "us," or "our") operates the AI-Powered Patient Rehabilitation Information Chatbot, known as the <strong>RehabInfo Assistant</strong>. This Privacy Policy outlines how we collect, use, and protect your personal data when you use our service.
          </p>

          {/* Section 1 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Shield className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">1. Who We Are</h3>
            </div>
            <div className="space-y-2 text-base">
              <p><strong>Controller:</strong> Intelligent Technology Solutions Limited (UK)</p>
              <p><strong>Registration:</strong> England and Wales, Companies House, Reg. No. 16455045</p>
              <p><strong>Address:</strong> Bartle House, 9 Oxford Court, Manchester, M2 3WQ</p>
              <p><strong>Service Scope:</strong> The RehabInfo Assistant is designed to provide educational rehabilitation information, symptom context, and post-consultation support. It is not a clinical decision support tool and does not provide medical advice.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Database className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">2. Personal Data We Collect (GDPR Minimisation)</h3>
            </div>
            <p className="text-base mb-4">
              We adhere strictly to the principle of data minimisation, collecting only the data essential to provide and secure the RehabInfo Assistant service.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Authentication and Profile Data</h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-base">
                  <li><strong>Authentication Data:</strong> User ID (UUID), Hashed Password, Username, Last Login. This secures your account and manages session access.</li>
                  <li><strong>Clinical Profile Data:</strong> Condition Category (e.g., shoulder/knee), Most Recent Session Date, and Clinical Session Data (uploaded by the treating clinician or Clinical Director). This data is used solely for personalized RAG retrieval and is protected by Supabase Row-Level Security (RLS).</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Usage and Safety Data</h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-base">
                  <li><strong>Conversation History:</strong> Patient Query (including questions regarding diagnosis, daily activities, and symptom concerns), Bot Response, Documents Retrieved.</li>
                  <li><strong>Safety Data:</strong> Urgency Flag (Boolean) and Urgency Keyword detection.</li>
                  <li><strong>Audit Logging:</strong> All interactions are logged for safety and MHRA compliance.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm">
                  <strong>Special Category Data:</strong> Musculoskeletal condition categories and manually uploaded session notes are treated as special category data under UK GDPR. We apply enhanced protection measures, including encryption and RLS.
                </p>
                <p className="text-sm mt-2">
                  Crucially, we do not output or cache personally identifying information (PII) outside of the secure Supabase connection.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <FileText className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">3. Lawful Basis for Processing</h3>
            </div>
            <p className="text-base mb-3">We process your data under the following lawful bases:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-base">
              <li><strong>Explicit Consent:</strong> For processing health-related special category data and the manual processing of clinical data by Przemyslaw Jaczun (Director & Principal Clinician) or authorised clinical staff.</li>
              <li><strong>Legitimate Interests:</strong> For providing safe, factual rehabilitation information (public health interest) and monitoring system security.</li>
              <li><strong>Legal Obligation:</strong> For maintaining audit logs to meet UK MHRA safety and compliance requirements.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <UserCheck className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">4. Data Sharing and Transfer</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-base">
              <li><strong>Service Providers:</strong> We utilise third-party services for essential functions, including Supabase (Database/Auth) and Railway (Hosting). These providers are bound by strict data protection agreements.</li>
              <li><strong>Data Residency:</strong> All patient-specific data is hosted within the EU (Supabase Frankfurt region) to ensure GDPR compliance.</li>
              <li><strong>Anonymous Analytics:</strong> Aggregated, anonymised conversation and usage data may be used to improve service quality and retrieval accuracy.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Clock className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">5. Data Retention</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-base">
              <li><strong>Conversation History:</strong> Personal conversation history is automatically deleted after 12 months of storage.</li>
              <li><strong>User Accounts:</strong> Personal data is deleted upon account closure or 36 months of inactivity.</li>
              <li><strong>Audit Logs:</strong> Non-identifying audit logs related to safety (e.g., blocked query types) may be retained longer for historical MHRA compliance and safety analysis.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <AlertCircle className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">6. Your Rights Under UK GDPR</h3>
            </div>
            <p className="text-base mb-3">
              You have the right to exercise the following UK GDPR rights. To do so, please contact us via the designated channels:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-base">
              <li>Right to Access (Request copies of your data).</li>
              <li>Right to Rectification (Correct inaccurate data).</li>
              <li>Right to Erasure (Request deletion of your data and account).</li>
              <li>Right to Restrict Processing.</li>
              <li>Right to Object to processing based on legitimate interests.</li>
              <li>Right to Data Portability.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Lock className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">7. Security Measures</h3>
            </div>
            <p className="text-base mb-3">We employ stringent security measures:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-base">
              <li><strong>Secure Infrastructure:</strong> All data connections use HTTPS/TLS encryption. Data is encrypted at rest (Supabase default).</li>
              <li><strong>Access Control:</strong> We use username/password authentication, Row-Level Security (RLS) to ensure patients only see their data, and session timeouts.</li>
              <li><strong>Sensitive Data Protection:</strong> Passwords are secured using bcrypt hashing, and API keys are strictly kept in environment variables.</li>
              <li><strong>Compliance:</strong> We maintain logs of system outputs for safety audits.</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl">
            <h4 className="text-lg font-bold text-teal-700 mb-2">Questions or Concerns?</h4>
            <p className="text-base text-slate-700">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at{' '}
              <a href="#contact" className="text-teal-600 hover:text-teal-700 font-semibold underline">
                our contact form
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
