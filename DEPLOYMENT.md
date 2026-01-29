# Deployment Guide — Whiterock Millwork

## Production Deployment Checklist

### 1. Enable Google Fonts

In `app/globals.css`, uncomment the Google Fonts import at the top of the file:

```css
/* Uncomment this line for production: */
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap");
```

This enables the Cormorant Garamond (display/headlines) and Outfit (body) fonts.

### 2. Configure Environment Variables

Set the following in your Vercel dashboard or `.env.local`:

```env
NEXT_PUBLIC_GHL_WEBHOOK_URL=https://hooks.gohighlevel.com/webhook/YOUR_WEBHOOK_ID
NEXT_PUBLIC_SITE_URL=https://wrmtx.com
```

### 3. Add Production Images

Replace all placeholder images in `/public/images/`:

| Directory | Files Needed | Specs |
|-----------|-------------|-------|
| `/hero/` | hero-kitchen.jpg | 2400x1600, luxury kitchen |
| `/gallery/` | 12 project photos | 1200x800 each |
| `/about/` | team-photo.jpg | 1200x800, workshop/team |
| `/quiz/` | Option images (optional) | 600x400 each |
| `/` | og-image.jpg | 1200x630, social sharing |

**Image Optimization Tips:**
- Use WebP format for better compression
- Compress with TinyPNG or similar
- Next.js will auto-optimize via `next/image`

### 4. Update GoHighLevel Webhooks

Configure your GHL account to receive webhook data:

**Quiz Form Data Structure:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "zipCode": "string",
  "projectTimeline": "string",
  "quizAnswers": {
    "q1_movie": "string",
    "q2_vacation": "string",
    "q3_hosting": "string",
    "q4_decisions": "string",
    "q5_details": "string"
  },
  "resultStyle": "classic-elegance|modern-minimalist|transitional-blend|rustic-warmth|refined-traditional",
  "source": "cabinet-style-quiz",
  "submittedAt": "ISO date string"
}
```

**Contact Form Data Structure:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "zipCode": "string",
  "projectTimeline": "string",
  "projectType": "kitchen|bathroom|closet|other",
  "message": "string (optional)",
  "howHeard": "string (optional)",
  "formType": "homeowner|professional",
  "source": "contact-form",
  "submittedAt": "ISO date string"
}
```

### 5. Deploy to Vercel

**Option A: Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Option B: GitHub Integration**
1. Push code to GitHub
2. Import project at vercel.com/new
3. Configure environment variables
4. Deploy

### 6. Post-Deployment Verification

Run through this checklist:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Quiz flow completes successfully
- [ ] Quiz results display correctly
- [ ] Lead data arrives in GoHighLevel
- [ ] Contact forms submit properly
- [ ] Gallery images load and lightbox works
- [ ] Mobile navigation works
- [ ] Fonts display correctly (Cormorant + Outfit)

### 7. Performance Optimization

**Run Lighthouse Audit:**
- Target: 90+ on all metrics
- Focus areas: Images, JavaScript bundle size

**Recommended Optimizations:**
1. Implement image lazy loading (already using next/image)
2. Add proper caching headers
3. Enable Vercel Edge caching

### 8. Analytics Setup

Add Google Analytics or Tag Manager:

```tsx
// In app/layout.tsx, add to <head>:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `}
</Script>
```

### 9. SEO Final Check

- [ ] Update `robots.txt` if needed
- [ ] Create `sitemap.xml` (Next.js can auto-generate)
- [ ] Verify meta tags on all pages
- [ ] Test Open Graph images on social platforms
- [ ] Submit sitemap to Google Search Console

### 10. Domain Configuration

1. Add custom domain in Vercel dashboard
2. Configure DNS records as directed
3. Enable SSL (automatic with Vercel)
4. Set up www redirect if needed

---

## Troubleshooting

### Fonts Not Loading
- Ensure Google Fonts import is uncommented in `globals.css`
- Check for CSP (Content Security Policy) blocking fonts

### Forms Not Submitting
- Verify webhook URL in environment variables
- Check GHL webhook is active
- Review browser console for errors

### Images Not Displaying
- Verify images exist in `/public/images/`
- Check file paths match code references
- Ensure images are not too large (compress if needed)

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

## Support

For questions about this codebase, refer to the README.md or contact the development team.
