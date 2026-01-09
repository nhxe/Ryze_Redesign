# Ryze AI Website Redesign

(https://ryzeredesignmanasvi.netlify.app/screenshot-desktop.png)  


## Live Demo
**[View Live Site](https://ryzeredesignmanasvi.netlify.app/)**

## Overview
This project is a complete redesign of the original [get-ryze.ai](https://www.get-ryze.ai/) website, created as part of a website redesign assignment.

The goal was to improve visual appeal, user experience, and clarity of communication while maintaining a modern, clean, professional, and classy aesthetic. Ryze AI is a premium autonomous AI copilot that manages and optimizes paid advertising campaigns across Google, Meta, ChatGPT Ads, Perplexity, and other platforms — delivering higher ROAS with minimal manual effort.

This redesign covers:
- **Homepage**
- At least two inner pages (Features and Pricing)

## Design Decisions
- **Overall Aesthetic**: Sophisticated dark-mode minimalist B2B SaaS style, inspired by premium platforms like Vercel, Linear, and Stripe. Generous white space, subtle depth with soft shadows, and understated micro-interactions for a luxurious, trustworthy feel.
- **Color Palette**:
  - Background: Deep slate/navy (#0f172a)
  - Text: Crisp white/off-white
  - Primary CTA: Vibrant teal (#0ea5e9)
  - Highlights: Subtle warm orange gradients (#fb923c)
- **Typography**: Modern sans-serif fonts (bold headings similar to Satoshi/PP Mori, clean body text like Inter) for excellent readability and premium feel.
- **Visual Enhancements**: 
  - Custom abstract geometric illustrations representing AI intelligence (flowing neural networks, data streams, interconnected nodes).
  - Subtle modern animations (floating particles, flowing data lines, hover lifts, pulsing elements, rolling counters) to add dynamic appeal without overwhelming the user.
  - No generic stock photos, blobs, or cartoon elements.
- **Improvements Over Original Site**:
  - Removed clutter and data-heavy tables.
  - Clear visual hierarchy with strong headline, concise value proposition, and prominent CTAs.
  - Enhanced premium branding to better communicate Ryze's value.

## User Experience
- **Navigation**: Slim fixed header with clear links (Features, Pricing, etc.) and prominent "Book a Demo" CTA.
- **Call-to-Actions**: Multiple high-visibility buttons ("Book a Demo", "Start Free Trial") with hover effects and glows.
- **Mobile-Friendly**: Fully responsive design with elegant mobile collapse (hamburger menu, stacked sections, touch-friendly elements).
- **Accessibility**: High contrast ratios, semantic HTML, and readable typography.

## Modular Structure
The site is built with reusability and maintainability in mind:
- `src/components/` → Reusable UI sections (Header, Hero, FeatureCard, TestimonialCarousel, StatsCounter, Footer, etc.)
- `src/pages/` → Separate page components (Home, Features, Pricing)
- All major sections (Hero, Features grid, Stats, Testimonials, CTA, Footer) are modular components that can be easily updated or reused.

## Tech Stack
- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Deployment**: Netlify (auto-deploy from GitHub)


## How to Run Locally
```bash
git clone https://github.com/nhxe/Ryze_Redesign.git
cd Ryze_Redesign
npm install
Install Type Definitions (if needed)
   npm install -D @types/react@18 @types/react-dom@18
   These are only needed if your editor shows type errors for React.
npm run dev
