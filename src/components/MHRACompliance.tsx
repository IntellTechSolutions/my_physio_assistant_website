import React from 'react';
import { Shield, FileCheck, AlertCircle, CheckCircle, Eye, XCircle } from 'lucide-react';

const MHRACompliance: React.FC = () => {
  return (
    <section id="mhra-compliance" className="py-20 md:py-32 container mx-auto max-w-5xl px-4">
      <div
        className="p-8 md:p-12 rounded-3xl border backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(240,246,255,0.55) 100%)',
          borderColor: 'rgba(180,200,230,0.25)',
          boxShadow: '0 8px 24px rgba(30,60,90,0.08)'
        }}
      >
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-10 h-10 text-teal-600 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
            MHRA Compliance Statement
          </h2>
        </div>

        <div className="space-y-8 text-slate-700">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-teal-600 mb-2">RehabInfo Assistant</h3>
            <p className="text-lg text-slate-600">Intelligent Technology Solutions Limited (ITS Ltd)</p>
            <p className="text-sm text-slate-500 mt-2">Document Version: 1.0 (November 2025)</p>
          </div>

          {/* Section 1 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <FileCheck className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">1. Regulatory Status Declaration</h3>
            </div>
            <p className="text-base mb-3">
              ITS Ltd declares that the AI-Powered Patient Rehabilitation Information Chatbot (the "RehabInfo Assistant") is a <strong>non-medical device</strong> under the UK Medical Devices Regulations 2002.
            </p>
            <p className="text-base">
              This determination is based on the Service's strictly defined Intended Purpose and functionality, which avoids the criteria for a medical device (e.g., diagnosis, treatment, or monitoring of a disease or injury).
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Shield className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">2. Intended Purpose and Exclusion from Medical Device Definition</h3>
            </div>

            <div className="space-y-4">
              {/* A. What it DOES */}
              <div>
                <div className="flex items-start mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-slate-800">A. Intended Purpose (What the Chatbot DOES)</h4>
                </div>
                <p className="text-base mb-3">
                  The RehabInfo Assistant is designed with the sole, explicit intent of providing factual, educational information to patients after they have received an in-person physiotherapy consultation.
                </p>
                <p className="text-base mb-2">Its function is strictly limited to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                  <li><strong>Information Retrieval:</strong> Retrieving pre-approved content from a knowledge base (RAG System).</li>
                  <li><strong>Patient-Specific Context:</strong> Retrieving and presenting the patient's own session notes (manually uploaded by their physiotherapist) to contextualize general information.</li>
                  <li><strong>Citation:</strong> Clearly citing the source documents (NHS, NICE, BNF, etc.) for all retrieved information.</li>
                  <li><strong>Administrative Function:</strong> Providing contact details for the physiotherapist, NHS 111, or 999.</li>
                </ul>
              </div>

              {/* B. What it DOES NOT Do */}
              <div>
                <div className="flex items-start mb-3">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-slate-800">B. Exclusionary Criteria (What the Chatbot DOES NOT Do)</h4>
                </div>
                <p className="text-base mb-2">
                  The Service deliberately excludes any functionality that would move it into the medical device classification:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                  <li><strong>Diagnosis of a disease or injury:</strong> The system uses no diagnostic algorithms, and this functionality is explicitly prohibited by the LLM system prompt.</li>
                  <li><strong>Assessment of symptoms:</strong> There is no symptom-checker functionality; queries asking for symptom interpretation are immediately blocked and redirected.</li>
                  <li><strong>Treatment or alleviation of disease:</strong> The system provides no recommendations for treatment, as the LLM is constrained to educational facts and is prohibited from suggesting alternatives.</li>
                  <li><strong>Modification of a physiological process:</strong> There is no function for remote monitoring, calculation of drug doses, or calculation/interpretation of clinical data.</li>
                </ul>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900">
                    In Summary: The software only provides general information and does not provide personalized clinical advice, which means it is unlikely to be classed as a medical device.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <AlertCircle className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">3. Safety and Risk Mitigation Controls</h3>
            </div>
            <p className="text-base mb-4">
              Despite its non-medical device status, the Service incorporates stringent clinical safety controls in line with best practices for health IT systems.
            </p>

            <div className="space-y-4">
              {/* A. Compliance Features */}
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">A. Compliance Features</h4>
                <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                  <li><strong>Mandatory Disclaimers:</strong> Every single bot response is systematically appended with the disclaimer: "This is educational information only. Contact your physiotherapist for personalized advice".</li>
                  <li><strong>Safety Prompts:</strong> The Gemini LLM is hard-coded with a System Note at the start of every RAG query to enforce educational-only responses and prohibit diagnosis or treatment suggestions.</li>
                  <li><strong>Tiered Blocked Topics:</strong> Keyword detection prevents responses to queries seeking clinical judgement or symptom assessment (Tier 1 & 2).</li>
                </ul>
              </div>

              {/* B. Auditing and Vigilance */}
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">B. Auditing and Vigilance</h4>
                <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                  <li><strong>Audit Logging:</strong> All user interactions, bot responses, documents retrieved, and any triggered urgency flags are recorded in the logs/chatbot_audit.log and stored in the secure Supabase Audit_Log table.</li>
                  <li><strong>Urgency Detection:</strong> The system specifically monitors for high-risk keywords (e.g., severe pain, numbness, chest pain) and triggers a Tier 2 response, redirecting the user to emergency contacts (NHS 111, 999) before the LLM processes the query.</li>
                  <li><strong>Clinical Verification:</strong> All documents in the RAG knowledge base (Phase 4.5) are sourced from Tier 1/2 sources (NHS, NICE, etc.) and require PJ's clinical verification and sign-off before ingestion.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <Eye className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">4. Development and Future Vigilance</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-base">
              <li><strong>Continuous Review:</strong> The regulatory status will be reviewed and reassessed regularly for any changes in technology, intended use, or functionality. Future changes (e.g., adding a predictive or diagnostic feature) would immediately trigger a re-classification process.</li>
              <li><strong>Transparency:</strong> The non-medical device status is clearly communicated in the Terms of Service and user-facing disclaimers.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
            <div className="flex items-start mb-3">
              <AlertCircle className="w-6 h-6 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-sky-700">5. Contact for Safety Concerns</h3>
            </div>
            <p className="text-base">
              Any safety concerns or adverse events involving the RehabInfo Assistant should be reported immediately via the Service's contact channels.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl">
            <h4 className="text-lg font-bold text-teal-700 mb-2">Report Safety Concerns</h4>
            <p className="text-base text-slate-700">
              If you have any safety concerns or wish to report an adverse event, please contact us immediately at{' '}
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

export default MHRACompliance;
