import React from 'react';
import { FileText, AlertTriangle, Shield, Users, Scale, Lock } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <section id="terms-of-service" className="py-20 md:py-32 container mx-auto max-w-5xl px-4">
      <div
        className="p-8 md:p-12 rounded-3xl border backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(240,246,255,0.55) 100%)',
          borderColor: 'rgba(180,200,230,0.25)',
          boxShadow: '0 8px 24px rgba(30,60,90,0.08)'
        }}
      >
        <div className="flex items-center justify-center mb-8">
          <FileText className="w-10 h-10 text-teal-600 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
            Terms of Service
          </h2>
        </div>

        <div className="space-y-8 text-slate-700">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-teal-600 mb-2">RehabInfo Assistant</h3>
            <p className="text-sm text-slate-500">Last Updated: November 2025</p>
          </div>

          <p className="text-base leading-relaxed">
            Welcome to the RehabInfo Assistant, a service provided by <strong>Intelligent Technology Solutions Limited</strong> ("ITS Ltd," "we," "us"). By accessing or using our AI-Powered Patient Rehabilitation Information Chatbot service (the "Service"), you agree to be bound by these Terms of Service.
          </p>

          {/* Section 1 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <FileText className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">1. Acceptance of Terms</h3>
            </div>
            <p className="text-base">
              These Terms govern your use of the Service, your account, and all features provided through the RehabInfo Assistant. If you do not agree to these terms, you must not use the Service.
            </p>
          </div>

          {/* Section 2 - Critical Health Disclaimer */}
          <div className="border-l-4 border-red-500 pl-6 py-2 bg-red-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-red-700">2. Critical Health Disclaimer and Non-Medical Device Status</h3>
            </div>

            <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
              <p className="text-base font-bold text-red-900">
                THE REHABINFO ASSISTANT IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE MEDICAL ADVICE.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">A. Non-Medical Purpose</h4>
                <p className="text-base mb-3">
                  The Service is designed strictly for educational purposes and is intended only as an information retrieval assistant to support your rehabilitation journey after your in-person physiotherapy sessions.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                  <li><strong>Service Function:</strong> The chatbot provides educational information, pre-approved content retrieval, source citations, and resource links from official sources like the NHS and NICE.</li>
                  <li><strong>Excluded Functionality:</strong> The Service does not provide diagnosis, treatment recommendations, clinical decision support, symptom assessment, or symptom interpretation.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">B. Personalised Clinical Advice</h4>
                <p className="text-base mb-2">
                  The information provided by the Service is general and factual, except where it directly retrieves your own personalized session notes manually uploaded by your physiotherapist, PJ.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                  <li><strong>Always Contact Your Clinician:</strong> You must always consult directly with your physiotherapist or another qualified healthcare professional for any concerns about your symptoms, diagnosis, or treatment.</li>
                  <li><strong>Urgency:</strong> If you detect concerning symptoms (e.g., severe pain, numbness, chest pain), the chatbot is designed to immediately redirect you to emergency contact information (NHS 111, 999) and your physiotherapist. The chatbot cannot assess your symptoms.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Users className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">3. User Accounts and Access</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-base">
              <li><strong>Eligibility:</strong> The service is intended for patients of Przemyslaw Jaczun (PJ) or associated practices who have undergone a recent physiotherapy session.</li>
              <li><strong>Security:</strong> You are responsible for maintaining the confidentiality of your login credentials. You may only access data associated with your own profile due to Row-Level Security (RLS) protections.</li>
              <li><strong>Session Notes:</strong> You acknowledge that the personalized RAG context includes your session notes and profile data manually uploaded by your physiotherapist.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Lock className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">4. Content and Usage Restrictions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">A. Intellectual Property</h4>
                <p className="text-base">
                  The content generated by the Service is based on documents sourced from ITS Ltd (PJ's own content), NHS patient leaflets, and open-access research.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">B. Prohibited Queries</h4>
                <p className="text-base mb-2">
                  You agree not to use the Service to ask questions that seek to circumvent the safety controls, including, but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-base">
                  <li>Requests for symptom assessment or interpretation.</li>
                  <li>Requests for treatment recommendations or changes to medication.</li>
                  <li>Attempts to elicit a diagnosis or clinical judgement.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Shield className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">5. Liability and Warranties</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">A. Limitation of Liability</h4>
                <p className="text-base">
                  ITS Ltd and the Service shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your reliance on the general, educational information provided by the Service.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">B. No Warranty</h4>
                <p className="text-base">
                  The Service is provided "as is" and "as available." ITS Ltd expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Scale className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">6. Governing Law</h3>
            </div>
            <p className="text-base">
              These Terms are governed by the laws of England and Wales.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl">
            <h4 className="text-lg font-bold text-teal-700 mb-2">Questions or Concerns?</h4>
            <p className="text-base text-slate-700">
              If you have any questions about these Terms of Service, please contact us at{' '}
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

export default TermsOfService;
