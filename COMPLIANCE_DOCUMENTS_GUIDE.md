# Compliance Documents Quick Reference Guide

## Overview
This guide provides a quick reference to all compliance documents implemented on the RehabInfo Assistant promotional website.

## Live URLs
- **Website**: https://my-physio-assistant.com
- **Privacy Policy**: https://my-physio-assistant.com#privacy-policy
- **Terms of Service**: https://my-physio-assistant.com#terms-of-service
- **MHRA Compliance**: https://my-physio-assistant.com#mhra-compliance

---

## 1. Privacy Policy (GDPR Compliant)

### Purpose
Outlines how Intelligent Technology Solutions Limited collects, uses, and protects personal data.

### Key Sections

#### 1. Who We Are
- **Controller**: Intelligent Technology Solutions Limited (UK)
- **Registration**: Companies House Reg. No. 16455045
- **Address**: Bartle House, 9 Oxford Court, Manchester, M2 3WQ
- **Service Scope**: Educational information only, not clinical decision support

#### 2. Personal Data We Collect
**Authentication Data**:
- User ID (UUID), Hashed Password, Username, Last Login

**Clinical Profile Data**:
- Condition Category (e.g., shoulder/knee)
- Most Recent Session Date
- Session Notes (manually uploaded by physiotherapist)

**Usage and Safety Data**:
- Conversation History (Query, Response, Documents)
- Safety Data (Urgency Flag, Keyword detection)
- Audit Logging (all interactions)

**Special Category Data**:
- Musculoskeletal conditions
- Session notes
- Enhanced protection: encryption + RLS

#### 3. Lawful Basis for Processing
- **Explicit Consent**: Health data and session notes processing
- **Legitimate Interests**: Safe rehabilitation information, security monitoring
- **Legal Obligation**: Audit logs for UK MHRA compliance

#### 4. Data Sharing and Transfer
- **Service Providers**: Supabase (Database/Auth), Railway (Hosting)
- **Data Residency**: EU (Supabase Frankfurt region)
- **Analytics**: Aggregated, anonymized only

#### 5. Data Retention
- **Conversation History**: 12 months automatic deletion
- **User Accounts**: 36 months inactivity or account closure
- **Audit Logs**: Longer retention for MHRA compliance

#### 6. UK GDPR Rights
- Right to Access
- Right to Rectification
- Right to Erasure
- Right to Restrict Processing
- Right to Object
- Right to Data Portability

#### 7. Security Measures
- HTTPS/TLS encryption
- Encryption at rest (Supabase)
- Row-Level Security (RLS)
- Bcrypt password hashing
- Session timeouts
- API keys in environment variables

---

## 2. Terms of Service (Legal Framework)

### Purpose
Establishes legal terms, conditions, and user responsibilities for using the service.

### Key Sections

#### 1. Acceptance of Terms
- Governs use of service and account
- Must agree to use RehabInfo Assistant

#### 2. Critical Health Disclaimer
**NON-MEDICAL DEVICE STATUS**:
- Educational purposes only
- Information retrieval assistant
- NOT for diagnosis, treatment, or symptom assessment

**What it DOES**:
- Educational information
- Pre-approved content retrieval
- Source citations (NHS, NICE)
- Contact details (physiotherapist, NHS 111, 999)

**What it DOES NOT**:
- Diagnose medical conditions
- Prescribe treatments
- Replace professional medical advice
- Assess symptoms

**Emergency Protocol**:
- Immediate redirection to NHS 111/999
- Cannot assess symptoms
- Must consult physiotherapist for concerns

#### 3. User Accounts and Access
- **Eligibility**: Patients of Przemyslaw Jaczun (PJ)
- **Security**: User responsible for credentials
- **RLS**: Access only own profile data
- **Session Notes**: Includes personalized RAG context

#### 4. Content and Usage Restrictions
**Intellectual Property**:
- Based on ITS Ltd content, NHS leaflets, open research

**Prohibited Queries**:
- Symptom assessment requests
- Treatment recommendation requests
- Diagnosis attempts

#### 5. Liability and Warranties
**Limitation of Liability**:
- No liability for damages from educational information

**No Warranty**:
- Service "as is" and "as available"
- No implied warranties

#### 6. Governing Law
- England and Wales

---

## 3. MHRA Compliance Statement (Regulatory)

### Purpose
Documents regulatory status and compliance with UK Medical Devices Regulations 2002.

### Key Sections

#### 1. Regulatory Status Declaration
**Status**: Non-Medical Device under UK MDR 2002
**Basis**: Strictly defined Intended Purpose avoiding medical device criteria

#### 2. Intended Purpose and Exclusions

**A. What the Chatbot DOES**:
1. **Information Retrieval**: Pre-approved content from RAG system
2. **Patient Context**: Retrieves own session notes
3. **Citation**: Clear source documentation (NHS, NICE, BNF)
4. **Administrative**: Contact details provision

**B. What the Chatbot DOES NOT**:
1. **Diagnosis**: No diagnostic algorithms (LLM prohibited)
2. **Symptom Assessment**: No symptom checker (blocked/redirected)
3. **Treatment**: No treatment recommendations (educational facts only)
4. **Physiological Modification**: No monitoring, dose calculation, or clinical data interpretation

**Summary**: Provides general information only, not personalized clinical advice → unlikely to be classed as medical device

#### 3. Safety and Risk Mitigation Controls

**A. Compliance Features**:
1. **Mandatory Disclaimers**: Every response includes "educational information only" disclaimer
2. **Safety Prompts**: Gemini LLM hard-coded System Note enforcing educational-only responses
3. **Tiered Blocked Topics**: Keyword detection prevents clinical judgement queries (Tier 1 & 2)

**B. Auditing and Vigilance**:
1. **Audit Logging**: All interactions logged (chatbot_audit.log + Supabase Audit_Log)
2. **Urgency Detection**: High-risk keywords trigger Tier 2 response → emergency contacts
3. **Clinical Verification**: All RAG documents from Tier 1/2 sources, PJ sign-off required

#### 4. Development and Future Vigilance
- **Continuous Review**: Regular regulatory status reassessment
- **Transparency**: Non-medical device status in ToS and disclaimers
- **Re-classification Trigger**: Any diagnostic/predictive features added

#### 5. Contact for Safety Concerns
Report via service contact channels immediately

---

## Component Files

### Source Code Locations
```
src/components/
├── PrivacyPolicy.tsx      # Privacy Policy component
├── TermsOfService.tsx     # Terms of Service component
└── MHRACompliance.tsx     # MHRA Compliance component
```

### Footer Integration
All three documents linked in footer:
```typescript
<a href="#privacy-policy">Privacy Policy</a>
<a href="#terms-of-service">Terms of Service</a>
<a href="#mhra-compliance">MHRA Compliance</a>
```

---

## Design Consistency

### Visual Elements
- **Icons**: Lock (Privacy), FileText (Terms), Shield (MHRA)
- **Colors**: Teal-600 headers, Sky-700 section titles
- **Borders**: Left 4px teal borders on sections
- **Backgrounds**: Sky-50/50 rounded panels
- **Layout**: Glassmorphism cards with backdrop blur

### Typography
- **Main Headers**: 4xl/5xl bold gradient text
- **Section Headers**: 2xl bold sky-700
- **Subsection Headers**: lg semibold slate-800
- **Body Text**: base slate-700
- **Small Text**: sm slate-500/600

---

## Maintenance Schedule

### Regular Reviews
- **Privacy Policy**: Annual GDPR compliance review
- **Terms of Service**: Annual legal review
- **MHRA Compliance**: Quarterly regulatory review

### Update Triggers
- New feature additions
- Regulatory changes
- Data processing changes
- Service provider changes
- User right modifications

---

## Contact Information

### For Compliance Inquiries
**Company**: Intelligent Technology Solutions Limited (UK)
**Registration**: 16455045
**Address**: Bartle House, 9 Oxford Court, Manchester, M2 3WQ

### For Safety Concerns
Use contact form at: https://my-physio-assistant.com#contact

---

## Quick Checklist

### Privacy Policy
- ✅ GDPR compliant
- ✅ UK registration details
- ✅ Data minimization
- ✅ User rights documented
- ✅ Security measures detailed
- ✅ EU data residency

### Terms of Service
- ✅ Non-medical device declaration
- ✅ Critical health disclaimer
- ✅ Prohibited queries listed
- ✅ Liability limitations
- ✅ England/Wales governing law

### MHRA Compliance
- ✅ Non-medical device status
- ✅ Intended purpose defined
- ✅ Exclusions documented
- ✅ Safety controls detailed
- ✅ Audit procedures outlined
- ✅ Continuous review commitment

---

**Document Version**: 1.0
**Last Updated**: November 2025
**Status**: Current and Active ✅
