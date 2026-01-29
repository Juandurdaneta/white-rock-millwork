# Whiterock Millwork — Premium Custom Cabinet Website

A high-converting lead generation website for Whiterock Millwork, a premium custom cabinet company in Texas. Built with Next.js 14+, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

- **Business**: Whiterock Millwork — Custom cabinet design, manufacturing, and installation
- **Location**: 1717 US-281, Blanco, TX 78606
- **Target Audience**: Affluent Texas homeowners (primary) and industry professionals (secondary)
- **Primary Goal**: Generate qualified leads through a "Cabinet Style Quiz" funnel
- **Design**: Luxury real estate aesthetic inspired by Sotheby's and high-end architectural firms

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (display) + Outfit (body)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
white-rock-millwork/
├── app/
│   ├── layout.tsx           # Root layout with fonts, metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles + design system
│   ├── quiz/
│   │   ├── page.tsx         # Quiz intro + questions
│   │   └── results/[style]/ # Dynamic quiz results
│   ├── gallery/             # Portfolio gallery
│   ├── about/               # Company story
│   └── contact/             # Two-track contact forms
├── components/
│   ├── ui/                  # Button, Card, Input, Badge, Select
│   ├── layout/              # Header, Footer, SectionWrapper
│   ├── home/                # All homepage sections
│   ├── quiz/                # Quiz components
│   ├── gallery/             # Gallery grid + filter
│   └── contact/             # Contact forms
├── lib/
│   ├── utils.ts             # cn() helper, formatPhoneNumber
│   ├── validations.ts       # Zod form schemas
│   ├── ghl.ts               # GoHighLevel webhook integration
│   └── quiz-logic.ts        # Quiz scoring algorithm
├── data/
│   ├── quiz-questions.ts    # Quiz Q&A data
│   ├── quiz-results.ts      # Style profile data
│   └── testimonials.ts      # Testimonial placeholders
└── public/
    └── images/              # Image placeholders needed
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or download the project
cd white-rock-millwork

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your GoHighLevel webhook URL

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GHL_WEBHOOK_URL=https://hooks.gohighlevel.com/webhook/your-webhook-id
NEXT_PUBLIC_SITE_URL=https://wrmtx.com
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | 10 conversion-optimized sections |
| Quiz | `/quiz` | 5-question style quiz with lead capture |
| Quiz Results | `/quiz/results/[style]` | 5 personalized style profiles |
| Gallery | `/gallery` | Portfolio with filter tabs + lightbox |
| About | `/about` | Company story, values, process |
| Contact | `/contact` | Two-track forms (homeowner/professional) |

## 🎨 Design System

### Colors

```css
/* Primary - Warm Charcoal */
--color-primary-950: #1a1a1a;
--color-accent-500: #b8965c;   /* Warm Gold */
--color-neutral-50: #fdfcfa;   /* Off-white */
```

### Typography

- **Display**: Cormorant Garamond (serif)
- **Body**: Outfit (sans-serif)

### Animation Principles

- 0.6s fade-up reveals on scroll
- Staggered animations (0.1s delay)
- Cubic-bezier easing: `(0.4, 0, 0.2, 1)`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1280px
- Large: > 1280px

## 🔌 Integrations

### GoHighLevel

Forms submit to GHL webhooks with:
- Contact info (name, email, phone, zip)
- Quiz answers and calculated style
- Source tracking
- Timestamp

## ✅ Production Checklist

- [ ] Replace all image placeholders in `/public/images/`
- [ ] Update GHL webhook URL in `.env.local`
- [ ] Enable Google Fonts (see DEPLOYMENT.md)
- [ ] Test quiz flow end-to-end
- [ ] Verify GHL webhook receives data
- [ ] Run Lighthouse audit (target 90+)
- [ ] Update meta images for social sharing
- [ ] Add Google Analytics/Tag Manager

## 📸 Image Placeholders Needed

```
/public/images/
├── hero/
│   └── hero-kitchen.jpg        # Hero section background
├── gallery/
│   ├── standard-overlay-*.jpg  # 4 standard overlay images
│   ├── frameless-*.jpg         # 4 frameless European images
│   └── inset-*.jpg             # 4 inset cabinet images
├── quiz/
│   └── [option images]         # Quiz option visuals
├── about/
│   └── team-photo.jpg          # Team/workshop photo
└── og-image.jpg                # 1200x630 social share image
```

## 🚀 Deployment

Deploy to Vercel:

```bash
# Using Vercel CLI
vercel

# Or connect via GitHub for automatic deployments
```

See `DEPLOYMENT.md` for detailed production deployment instructions.

## 📝 License

Proprietary - Whiterock Millwork
