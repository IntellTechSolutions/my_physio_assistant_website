# RehabInfo Assistant - Marketing Website

## Overview
Marketing website for RehabInfo Assistant - an AI-powered physiotherapy information chatbot. Built with React 19 + TypeScript, featuring a modern glassmorphism design.

**Live Site:** https://my-physio-assistant.com
**Repository:** https://github.com/IntellTechSolutions/my_physio_assistant_website

## Tech Stack
- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 7.2.2
- **Styling:** Tailwind CSS v4 (@tailwindcss/vite plugin)
- **Icons:** lucide-react
- **Deployment:** Netlify (auto-deploy from main branch)

## Project Structure
```
src/
├── components/
│   ├── ChatDemo.tsx          # Interactive chat demonstration
│   ├── ChatMessage.tsx        # Chat message display component
│   ├── ChatInput.tsx          # Chat input component
│   ├── ContactForm.tsx        # Contact form (Netlify Forms)
│   ├── FAQSection.tsx         # FAQ and About section
│   ├── Footer.tsx             # Footer with modal links
│   └── Modal.tsx              # Reusable modal component
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
└── index.css                  # Tailwind CSS configuration

Key standalone components (no longer in App.tsx, used in modals):
- PrivacyPolicy.tsx            # Privacy Policy content
- TermsOfService.tsx           # Terms of Service content
- MHRACompliance.tsx           # MHRA Compliance Statement content
```

## Key Components

### App.tsx
Main page structure:
- Hero section with title and chat demo
- "How It Helps" section (3 feature tiles)
- FAQSection component
- ContactForm component
- Safety & Limits block
- Footer component

### Footer.tsx
- Company information
- Quick links
- **Modal triggers** for Privacy Policy, Terms of Service, MHRA Compliance
- Medical disclaimer
- Contains all legal document content inline for modals

### Modal.tsx
Reusable modal component:
- Backdrop overlay with blur
- Close on ESC key or click outside
- Scrollable content area
- Used for legal documents

### FAQSection.tsx
Large component containing:
- Validation cards ("Walked Out", "Medical Terms")
- "Make Sense of Your Diagnosis" section
- "The Appointment Ended" value proposition
- How It Works (3-step process)
- Safe, Secure, & Supportive section
- "Is RehabInfo Assistant Right for You?" section
- FAQ section
- For Clinics & Physiotherapists section

## Design System
- **Colors:** Sky/Blue/Cyan gradients for headings, Teal for CTAs, Slate for text
- **Style:** Soft glassmorphism with backdrop blur, light backgrounds
- **Typography:** Text sizes standardized (text-3xl md:text-4xl for section headings)
- **Heading Colors:**
  - Main headings: text-gray-900
  - Sub-headings: text-teal-600
  - Section titles: Blue gradient (from-sky-600 via-blue-600 to-cyan-600)

## Recent Major Changes (November 2025)

### Latest Session:
1. **Fixed typography on cards** - Standardized font sizes to match "How It Works" cards
2. **Moved section** - "Is RehabInfo Assistant Right for You?" moved above FAQ
3. **Fixed spacing** - Added mt-20 to clinician section heading
4. **Implemented modal system** - Privacy Policy, Terms, MHRA now in modals instead of full page sections
   - Created Modal.tsx component
   - Updated Footer.tsx with modal state management
   - Removed policy sections from App.tsx
   - Significantly reduced page length

### Previous Updates:
- Hero subtitle: "Your Musculoskeletal Care Companion"
- Removed duplicate validation text
- Standardized heading colors and sizes
- Added glassmorphism styling throughout
- Converted from HTML to React + TypeScript + Vite

## Development Commands
```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Netlify (automatic on git push)
netlify deploy --prod
```

## Deployment
- **Platform:** Netlify
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Auto-deploy:** Enabled on main branch pushes
- **Dashboard:** https://app.netlify.com/projects/rehabinfo-assistant

## Legal & Compliance
All legal documents are accessible via footer modal links:
- **Privacy Policy** - GDPR/UK data protection compliant
- **Terms of Service** - Legal terms, disclaimers, usage restrictions
- **MHRA Compliance** - Non-medical device status, safety controls

## Company Information
**Intelligent Technology Solutions Limited (UK)**
Reg. No. 16455045 (England and Wales)
Address: Bartle House, 9 Oxford Court, Manchester, M2 3WQ
Operating: RehabInfo Assistant
