# Adangi Sai Ramya — Professional Developer Portfolio

A modern, responsive developer portfolio engineered with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**, grounded 100% in verified academic, internship, and project credentials.

---

## 🌟 Overview & Key Highlights

- **Specialization**: Data Science, Machine Learning, Statistical Analysis, REST APIs, and Business Intelligence.
- **Academic Foundation**: B.Tech in CSE (Data Science) at Vignan's Institute of Engineering for Women (CGPA: **8.67 / 10**).
- **Practical Experience**: 3 internships across Power BI enterprise analytics, full-stack Python development at Infosys, and open-source backend applications.
- **Interactive Demos**:
  - **Live Telco Churn Simulator**: Adjust tenure, monthly charges, contract type, and tech support to see real-time churn probability modeled on logistic regression coefficients.
  - **Smart Agriculture Advisory Engine**: Simulate real-time agronomic guidance and multilingual advisory (English, Telugu, Hindi).
  - **In-Browser Resume Viewer**: Direct ATS PDF download & embedded viewer for `Adangi_Sai_Ramya_Resume.pdf`.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher recommended, tested on v24)
- npm (v9 or higher)

### Installation & Run

1. Navigate to the project directory:
   ```bash
   cd "C:\Users\SAI RAMYA\.gemini\antigravity\scratch\sai-ramya-portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📂 Project Architecture

```
sai-ramya-portfolio/
├── public/
│   ├── Adangi_Sai_Ramya_Resume.pdf   # Verified ATS resume PDF
│   ├── resume.pdf                    # Alias for universal linking
│   └── favicon.svg                   # Custom monogram branding
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Responsive top navigation & resume CTA
│   │   ├── Hero.tsx                  # Interactive pipeline inspector & intro
│   │   ├── About.tsx                 # Core pillars, stats, and narrative
│   │   ├── Skills.tsx                # Filterable verified technical capabilities
│   │   ├── Projects.tsx              # Featured cards with live interactive simulators
│   │   ├── ProjectModal.tsx          # Architecture & methodology deep-dive modal
│   │   ├── Experience.tsx            # Internship timeline (K-Square, Infosys, Open-Source)
│   │   ├── Education.tsx             # Academic credentials (B.Tech, Inter, Class X)
│   │   ├── Certifications.tsx        # 7 verified certs & 4 leadership honors
│   │   ├── Contact.tsx               # Direct contact cards & pre-filled mail composer
│   │   ├── ResumeModal.tsx           # In-browser PDF reader & download trigger
│   │   ├── Footer.tsx                # Clean footer with quick navigation
│   │   └── Icons.tsx                 # Clean SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.ts          # Central source of truth derived from resume
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces
│   ├── App.tsx                       # Main application shell
│   ├── index.css                     # Tailwind CSS styling & custom effects
│   └── main.tsx                      # React root entry
├── index.html                        # SEO meta tags, OpenGraph, Google Fonts
├── vite.config.ts                    # Vite + React + Tailwind v4 config
└── package.json
```

---

## 🌐 Deployment Instructions

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub (`github.com/ramya-adangi/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will auto-detect **Vite**.
5. Click **"Deploy"**. Your portfolio will be live in under 60 seconds with SSL.

### Option 2: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add base path in `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/portfolio/', // Replace with your repository name
     plugins: [react(), tailwindcss()],
   });
   ```
3. Add deploy scripts in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

### Option 3: Netlify
1. Drag and drop the `dist/` directory directly into [Netlify Drop](https://app.netlify.com/drop).
2. Or connect your GitHub repo with build command `npm run build` and publish directory `dist`.

---

## 🏷️ Custom Domain Setup

1. In your registrar (GoDaddy, Namecheap, Google Domains / Squarespace, Cloudflare):
   - Add a **CNAME** record:
     - Name: `www`
     - Value: `cname.vercel-dns.com` (or your Netlify CNAME)
   - Add an **A** record:
     - Name: `@`
     - Value: `76.76.21.21` (for Vercel)
2. In your hosting platform settings (Vercel / Netlify):
   - Navigate to **Domains** -> enter your domain (e.g., `sairamya.dev` or `adangisairamya.me`).
   - The platform will issue free automated SSL certificates via Let's Encrypt.

---

## 📄 Updating Your Resume

To replace or update your resume in the future:
1. Export your latest resume as a PDF.
2. Replace `public/Adangi_Sai_Ramya_Resume.pdf` and `public/resume.pdf` with your new file using the same filename.
3. Re-run `npm run build` or push to GitHub — your portfolio will immediately serve the updated document across all download and preview triggers!
