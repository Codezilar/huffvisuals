# 🚀 Quick Start Guide

Get your HUFF Visuals portfolio live in 5 minutes!

## ⚡ Start Immediately (2 minutes)

### Step 1: Open in Browser
```bash
# Navigate to the folder and open
open index.html
# Or double-click index.html in Finder
```

### Step 2: Local Testing (Optional, 2 minutes)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Go to http://localhost:8000
```

---

## 🎨 Customize Your Site (2 minutes)

### 1. Update Your Brand
Open `index.html` and search for:
```html
<!-- Line 46 - Update logo -->
<span class="logo-text">HUFF</span>  <!-- Change to YOUR_BRAND -->

<!-- Line 52 - Update title -->
<h1 class="hero-title">visual poetry</h1>  <!-- Change to your title -->

<!-- Line 53 - Update description -->
<p class="hero-subtitle">Welcome to a visual journey...</p>  <!-- Your description -->
```

### 2. Update Social Links
```html
<!-- Lines 69-87 - Update social media URLs -->
<a href="https://instagram.com/huffvisuals/">  <!-- Change to your Instagram -->
```

### 3. Change Colors
Open `styles.css` and update these:
```css
:root {
    --color-accent: #FFB84D;        /* Change this to your color */
    --color-primary: #000000;
    --color-secondary: #FFFFFF;
}
```

---

## 📁 Project Files Explained

```
huff/
├── index.html              Main website file - EDIT THIS for content
├── styles.css              All styling - EDIT THIS for colors/layout
├── script.js               Interactive features - No edits needed
├── manifest.json           PWA config - For app installation
├── sw.js                   Service Worker - Offline support
├── sitemap.xml             SEO sitemap
├── robots.txt              Search engine rules
│
├── README.md               Full project documentation
├── BEST_PRACTICES.md       Technical details
├── DEPLOYMENT.md           How to deploy & analytics
├── QUICK_START.md          This file
└── .gitignore              Git ignore rules
```

---

## 🎯 Next Steps

### Step 1: Customize Content (10 min)
- [ ] Update brand name and tagline
- [ ] Update social media links
- [ ] Add portfolio images
- [ ] Update about section
- [ ] Add exhibition details

### Step 2: Setup Email (5 min)
Choose one:
- **Formspree**: [formspree.io](https://formspree.io) - Easiest
- **Netlify Forms**: Add `netlify` attribute to form
- **EmailJS**: [emailjs.com](https://emailjs.com)

### Step 3: Deploy (5 min)
Pick your hosting:
- **Netlify** (Recommended) - Push to GitHub, auto-deploy
- **Vercel** - Similar to Netlify
- **GitHub Pages** - Free, easy setup
- **Your hosting** - Use FTP/SSH

See `DEPLOYMENT.md` for detailed instructions.

### Step 4: Setup Analytics (5 min)
1. Create Google Analytics account
2. Get your ID (G-XXXXXXX)
3. Add script to index.html head
4. Start tracking visitors

### Step 5: Optimize SEO (10 min)
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Update meta descriptions
- [ ] Add Open Graph images
- [ ] Submit to Bing Webmaster Tools

---

## 🔄 Edit Your Content

### Portfolio Items
In `index.html`, find the portfolio section and modify:
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="your-image.jpg" alt="Project title">
    </div>
    <h3>Project Title</h3>
    <p>Project description</p>
</div>
```

### Exhibitions
```html
<article class="exhibition-card">
    <div class="exhibition-number">01</div>
    <div class="exhibition-content">
        <h3>Exhibition Name</h3>
        <p class="exhibition-date">Location, Date</p>
        <a href="#" class="ticket-button">Buy Ticket</a>
    </div>
</article>
```

### About Section
```html
<div class="about-content">
    <h2>About Our Vision</h2>
    <p>Your about text here...</p>
</div>
```

---

## 🎨 Quick Color Changes

Popular color palettes (update in `styles.css`):

### Modern Minimal
```css
--color-accent: #FF1744;
--color-primary: #1A1A1A;
--color-secondary: #FFFFFF;
```

### Warm Professional
```css
--color-accent: #FF9500;
--color-primary: #2C2C2C;
--color-secondary: #F5F5F5;
```

### Tech Vibes
```css
--color-accent: #00D4FF;
--color-primary: #0A1428;
--color-secondary: #FFFFFF;
```

### Creative Bold
```css
--color-accent: #FF006E;
--color-primary: #000000;
--color-secondary: #FFFFFF;
```

---

## ✨ Features Already Included

✅ **Mobile Responsive** - Works on all devices
✅ **Fast & Optimized** - Zero dependencies
✅ **Accessible** - WCAG compliant
✅ **Dark Mode** - Auto-detects system preference
✅ **Smooth Animations** - Modern interactions
✅ **SEO Ready** - All structured data
✅ **Form Validation** - Client-side validation
✅ **Social Links** - Pre-configured
✅ **PWA Ready** - Can be installed as app
✅ **Service Worker** - Offline support

---

## 🚨 Common Issues & Solutions

### Issue: Page looks plain
**Solution**: Replace SVG placeholders with real images

### Issue: Links don't work
**Solution**: Make sure links start with `#` for internal links

### Issue: Form doesn't send emails
**Solution**: Setup with Formspree or EmailJS (see DEPLOYMENT.md)

### Issue: Mobile menu doesn't toggle
**Solution**: Check browser console (F12) for JavaScript errors

### Issue: Slow loading
**Solution**: Optimize images, use modern format (WebP)

---

## 📱 Mobile Check

Test on mobile by:
1. Open DevTools (F12)
2. Click device toggle (top-left)
3. Choose mobile device
4. Test interactions

Or test on real phone:
```bash
# Find your IP
ifconfig | grep inet

# Visit: http://YOUR_IP:8000
```

---

## 🔗 Deploy in 3 Steps

### Option 1: Netlify (5 minutes)
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial setup"
git push

# 2. Go to netlify.com → New site from Git
# Select your repository

# 3. Done! Your site is live
```

### Option 2: Vercel (5 minutes)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts
```

### Option 3: GitHub Pages (5 minutes)
```bash
# Already set up! Just enable in settings:
# Repository → Settings → Pages → Source: main
# Your site: https://username.github.io/huff-visuals
```

See `DEPLOYMENT.md` for full instructions and custom domains.

---

## 📊 Recommended Tools

**Performance Testing**
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://webpagetest.org)

**SEO Tools**
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://bing.com/webmasters)
- [SERP Simulator](https://moz.com/tools/serp-preview)

**Accessibility**
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

**Image Optimization**
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [ImageOptim](https://imageoptim.com)

---

## 📚 Need Help?

### Documentation
- `README.md` - Full project overview
- `BEST_PRACTICES.md` - Technical details
- `DEPLOYMENT.md` - Deployment & analytics

### External Resources
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [Google Web Fundamentals](https://web.dev)

### Video Tutorials
- "How to Deploy to Netlify"
- "Google Analytics Setup Guide"
- "SEO for Beginners"

---

## ✅ Checklist for Launch

- [ ] Update brand name and colors
- [ ] Add portfolio images
- [ ] Update social media links
- [ ] Setup email form
- [ ] Setup analytics
- [ ] Deploy to Netlify/Vercel
- [ ] Test on mobile
- [ ] Submit to Google
- [ ] Share on social media
- [ ] Celebrate! 🎉

---

## 🎓 Learning Next

After setup, consider learning:
1. **Git** - Version control for backup
2. **Basic SEO** - Get found in search
3. **Analytics** - Understand your visitors
4. **Photography** - Better portfolio content
5. **Web Design** - Make it even prettier

---

**You're all set! Start with your first edit and enjoy building your portfolio.** 

Questions? Check `BEST_PRACTICES.md` or `DEPLOYMENT.md` for more info.

---

**Last Updated**: June 25, 2026
**Version**: 1.0.0
