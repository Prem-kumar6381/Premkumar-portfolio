# Prem Kumar R — Professional Software Engineer Portfolio

A modern, high-performance developer portfolio built with **React**, **Vite**, and **Tailwind CSS v4**, designed with a **clean, sophisticated Western tech aesthetic** (inspired by Vercel, Linear, and Stripe design systems).

![Prem Kumar R](public/prem-profile.jpg)

---

## 🌟 Highlights & Key Features

- **Western Design Aesthetic**: Luxury obsidian dark slate theme (`#0b0f19`), ambient glow accents, glassmorphic cards, crisp micro-interactions, and instant light/dark mode switcher.
- **Hero Section**:
  - High-resolution framed professional headshot with animated gradient beacon and floating tech badges (`React.js`, `ASP.NET C#`, `MS SQL Server`, `SignalR`).
  - Active status indicator: *"Software Engineer • Open to Opportunities (Remote / Full-Time)"*.
  - Direct call-to-actions: *"Explore Featured Work"*, *"View Qualifications"*, *"View Resume"*, and instant social icons.
  - Metrics ribbon: *2+ Years Experience*, *Enterprise Platform (OAT)*, *SQL Query Tuning*, *SignalR Real-Time Sync*.
- **Executive About Section**:
  - Narrative detailing engineering experience at **KaiDP Technologies LLP** on **One Awesome Team (OAT)**.
  - 4 Core Engineering Pillars: *Modular Frontend Architecture*, *Enterprise Backend & Services*, *Real-Time Collaboration*, and *SQL Query & Procedure Tuning*.
  - Forward-looking exposure into **Generative AI, LLMs, and RAG architectures**.
- **Professional Work Experience**:
  - Deep-dive into **KaiDP Technologies LLP** (Software Engineer | Bengaluru / Remote | Dec 2024 – Present).
  - Production breakdown of the **One Awesome Team (OAT)** enterprise collaboration platform.
  - Key achievements, SignalR real-time event workflows, and database tuning.
- **Academic Qualifications (Full Verified Record)**:
  - **MCA** — Currently Pursuing (Distance Education, To be confirmed)
  - **BCA** — Ananda College, Devakottai | 2021–2024 | **78.55%** (Graduated with Distinction)
  - **HSC (12th)** — Britto Higher Secondary School, Kallal | 2020–2021 | **76.00%**
  - **SSLC (10th)** — T.R.V.A. High School, Pattamangalam | 2018–2019 | **64.00%**
  - **Interactive Dual View**: Toggle between modern **Card Grid** (with percentage meters) and the formal **Official Qualification Table**.
- **Industry Training & Certifications**:
  - *Full-Stack Development Training* — LetSify Sigma4Solution Pvt Ltd, Karaikudi (2023–2024)
  - *HackerRank MySQL (Intermediate)*
  - *HackerRank MySQL (Basic)*
  - *HackerRank Python (Basic)*
  - Direct verification links to HackerRank.
- **Interactive Skills Matrix**:
  - Filterable tabs: *All Technologies*, *Frontend & UI*, *Backend & Real-Time*, *Database & SQL*, *AI, Tools & Cloud*.
  - Proficiency visual meters, experience duration tags, and technical specialty highlights.
- **Selected Project Showcase**:
  - **One Awesome Team (OAT)** — Enterprise Collaboration, Workforce Management & Real-Time Communication Platform
  - **Prem Kumar Portfolio 2.0** — Interactive Developer Portfolio & Technical Showcase
  - **Nexora AI — AI Study Assistant** — Intelligent Conversational Assistant with LLM Integration
  - **M2 InfoSolutions — Corporate Website** — Responsive Corporate Website for a Karaikudi-Based Startup
  - Interactive **Architecture & Deep Dive Inspection Modal** for every project.
- **Interactive Resume Modal**:
  - Full-fidelity curriculum vitae viewable directly in-app.
  - Built-in **Print / Save as PDF** trigger with clean print styling.
- **Interactive Contact Section**:
  - Direct message form with client-side validation and celebration confetti on submission.
  - Quick **One-Click Copy** buttons for Email (`premkumarramanathan72@gmail.com`) and Phone (`+91 63813 58624`).
  - Direct links to LinkedIn, GitHub, HackerRank.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### 1. Installation
In the project directory, run:
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

### 3. Production Build
To create an optimized, minified production bundle:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Architecture

```
premkumar-portfolio/
├── public/
│   └── prem-profile.jpg        # Prem Kumar's professional photo
├── src/
│   ├── assets/                 # Icons and image assets
│   ├── components/
│   │   ├── About.jsx           # Engineering philosophy & pillars
│   │   ├── Certifications.jsx  # Training & HackerRank credentials
│   │   ├── Contact.jsx         # Contact form & copyable details
│   │   ├── Education.jsx       # Academic qualifications (Cards & Table)
│   │   ├── Experience.jsx      # KaiDP Technologies & OAT platform
│   │   ├── Footer.jsx          # Footer & scroll-to-top
│   │   ├── Hero.jsx            # Headshot, badges, headline & stats
│   │   ├── Navbar.jsx          # Glass header, mobile drawer & theme toggle
│   │   ├── ProjectModal.jsx    # Project architecture deep dive modal
│   │   ├── Projects.jsx        # Project cards with filters
│   │   ├── ResumeModal.jsx     # Printable & viewable resume modal
│   │   ├── Skills.jsx          # Interactive skills matrix with filters
│   │   └── SocialIcons.jsx     # Inline SVG icons (LinkedIn, GitHub, HackerRank)
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for resume data
│   ├── App.css                 # Custom keyframe animations
│   ├── App.jsx                 # Root component orchestrator
│   ├── index.css               # Tailwind CSS v4 & custom glass utilities
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML template with Google Fonts
├── package.json                # Project dependencies and scripts
└── vite.config.js              # Vite & Tailwind CSS v4 configuration
```

---

## 🛠️ Personalization & Updates

All text, links, qualifications, experiences, and metrics are centralized in:
`src/data/portfolioData.js`

To update any details:
1. Open `src/data/portfolioData.js`.
2. Edit the corresponding fields (e.g. phone number, university name once MCA is confirmed, new projects, or skills).
3. The changes will immediately reflect everywhere in the portfolio and in the resume modal!

---

## 🌐 Free One-Click Deployment Options

### Vercel (Recommended)
1. Push your project to your GitHub account: `https://github.com/Prem-kumar6381/portfolio`.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository and click **Deploy**.

### Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist/` folder into [Netlify Drop](https://app.netlify.com/drop).

---

© 2026 Prem Kumar R • Software Engineer & Full-Stack Web Developer
