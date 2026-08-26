# Aura Mentor Hub

Role & Context: You are an elite UI/UX Designer and Full-Stack Next.js Developer. Build a comprehensive, premium, multi-page web application for a competitive exam mentorship startup named "Aura" (JEE, IAT, CAT, GATE).

Core Aesthetic & Accessibility:

Visual Identity: Premium, serious, and elite. The primary color palette is Dark Navy and Gold.

Accessibility & Cognitive Load: The design must be extremely easy on the eyes to prevent migraines or brain drain during long sessions. Use soft contrasts, ample negative space, and smooth, glassy aesthetics.

Theme: Include a seamless Dark/Light mode toggle.

3D Elements: Integrate subtle, professional 3D visual elements (like floating abstract geometric shapes or a soft 3D background grid) that attract attention but do not distract or strain the user's focus.

Motion: Implement smooth, buttery scrolling and gentle hover effects (e.g., Framer Motion) for a "gliding" feel.

Navigation & Global Features:

A sticky, glassmorphism navigation bar.

A prominent, interactive Search Icon that opens a full-screen search modal to find mentors, exams, or resources.

A prominent Call-to-Action (CTA): "Book a Free Call".

Page Structure & Requirements:

1. Home Page:

Hero Section: High-impact tagline, subtle 3D background, and a "Who it's for" segment.

Credibility Strip: Scrolling banner highlighting mentors from IISc, IIT Bombay, IIT Madras, and top IIMs.

Tier Teaser: A quick overview of the 4 tiers (Basic, General, Gold, Premium).

2. Dynamic Mentor Hub (Crucial Feature):

A categorized, interactive directory for mentors (Filters: CAT, JEE, IAT, GATE).

Mentor Cards: Displaying name, exam rank, college, and subjects.

Dynamic Profiles: When clicked, it should open a detailed individual mentor profile page (or large modal) showing their exact strategy, testimonials, available slots, and an introductory video placeholder.

3. Tiers & Pricing Page:

A beautifully structured comparison table for Basic, General, Gold, and Premium.

Rows should compare: Mentor access level, Batch size, Weekly structure, and Price.

Include a placeholder for Razorpay checkout integration on the "Enroll" buttons.

4. Additional Features to Implement:

"How it Works" Flow: A sleek 4-step interactive timeline (Pick Exam → Pick Tier → Get Matched → Weekly Structure).

Success Stories: A carousel of student rank improvements.

Floating Help Widget: A sticky WhatsApp/Chat icon in the bottom right corner for instant student support.

Technical Output Instructions: Generate the fully functional React/Next.js code for these pages. Ensure the routing works (or simulate it if in a single-page preview). Use Tailwind CSS for styling and ensure it is fully responsive for mobile devices.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aura-elite-path.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f7a8b9dc-f97a-424c-8b42-a6f226ee24d0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
