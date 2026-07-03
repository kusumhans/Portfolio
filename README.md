# Kusum — Frontend React Developer Portfolio

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Customize

- Edit content (skills, projects, testimonials, etc.) in `src/data/content.js`
- Replace the hero photo URL in `src/components/Hero.jsx`
- Add your real resume PDF as `public/resume.pdf` (referenced by the "Download Resume" button)
- Add real EmailJS credentials in `src/components/Contact.jsx` (see the commented `emailjs.send(...)` line) — install with `npm install @emailjs/browser`
- Update social links (GitHub, LinkedIn, email, WhatsApp) in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`

## Deploy

Deploy directly to Vercel:

```bash
npm i -g vercel
vercel
```

Or drag-and-drop the `dist/` folder (after `npm run build`) into Netlify/Vercel.
