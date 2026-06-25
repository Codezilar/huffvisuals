# Deployment & Customization Guide

## 🚀 Quick Deployment

### Option 1: Netlify (Recommended - 5 minutes)

1. **Create Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Deploy**
   ```bash
   # Clone your repository
   git clone https://github.com/yourusername/huff-visuals.git
   cd huff-visuals
   
   # Initialize git if needed
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/huff-visuals.git
   git push origin main
   ```

3. **Connect to Netlify**
   - New site → Import an existing project
   - Select GitHub repository
   - Build command: (leave empty)
   - Publish directory: . (root)
   - Deploy

4. **Custom Domain**
   - Site settings → Change site name
   - Add your domain name

---

### Option 2: Vercel (5 minutes)

1. **Create Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Deploy**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

3. **Link Custom Domain**
   - Vercel dashboard → Domains
   - Add your domain

---

### Option 3: GitHub Pages (Free)

1. **Setup**
   ```bash
   git remote add origin https://github.com/yourusername/huff-visuals.git
   git push origin main
   ```

2. **Enable Pages**
   - Repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. **Access Your Site**
   - `https://yourusername.github.io/huff-visuals/`

---

### Option 4: Traditional Hosting

1. **FTP Upload**
   ```bash
   # Install FileZilla or similar FTP client
   # Connect to your hosting server
   # Upload all files to public_html/
   ```

2. **SSH Deploy**
   ```bash
   ssh user@yourserver.com
   cd public_html
   git clone https://github.com/yourusername/huff-visuals.git .
   ```

---

## 🎨 Customization Guide

### 1. Update Content

**In `index.html`:**

```html
<!-- Update your name/brand -->
<span class="logo-text">YOUR_BRAND</span>

<!-- Update navigation links -->
<li><a href="#home" class="nav-link">Home</a></li>

<!-- Update hero section -->
<h1 class="hero-title">your title here</h1>
<p class="hero-subtitle">Your description</p>

<!-- Update stats -->
<span class="stat-number">+100k</span>
<span class="stat-label">Your achievement</span>

<!-- Update social links -->
<a href="https://instagram.com/yourprofile/" target="_blank">
```

### 2. Change Colors

**In `styles.css` (update :root variables):**

```css
:root {
    --color-accent: #FFB84D;        /* Yellow/Orange */
    --color-primary: #000000;       /* Black */
    --color-secondary: #FFFFFF;     /* White */
    --color-text: #333333;          /* Dark text */
    --color-text-light: #666666;    /* Light text */
}
```

**Color Combinations (hex codes):**
- Modern: `#FF6B6B`, `#4ECDC4`, `#1A535C`
- Warm: `#FF9500`, `#FFF3E0`, `#000000`
- Cool: `#2196F3`, `#E3F2FD`, `#1A237E`
- Vibrant: `#FF1744`, `#00E676`, `#FFD600`

### 3. Add Portfolio Items

**In `styles.css` (portfolio grid):**

Add new portfolio-item div:
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <!-- Add your image or SVG -->
    </div>
    <h3>Project Title</h3>
    <p>Project description</p>
</div>
```

### 4. Add Exhibitions

**In HTML (exhibitions section):**

```html
<article class="exhibition-card" data-exhibition-id="05">
    <div class="exhibition-number">05</div>
    <div class="exhibition-content">
        <h3>Exhibition Name</h3>
        <p class="exhibition-date">Location, Date</p>
        <a href="#" class="ticket-button">Buy Ticket</a>
    </div>
</article>
```

### 5. Replace SVG with Images

**Update portfolio images:**

```html
<!-- Replace SVG -->
<div class="portfolio-image">
    <img src="your-image.jpg" alt="Project description" loading="lazy">
</div>
```

**Update hero image:**
```html
<div class="hero-image-placeholder">
    <img src="hero-image.jpg" alt="Hero image" loading="lazy">
</div>
```

### 6. Update Contact Form

**Integrate with backend (example with Formspree):**

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

### 7. Setup Email Notifications

**Option A: Formspree (Easiest)**
1. Go to [formspree.io](https://formspree.io)
2. Create new form
3. Update form action

**Option B: EmailJS**
```javascript
// Add to script.js
emailjs.init("YOUR_PUBLIC_KEY");

const sendEmail = async (form) => {
    await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form);
};
```

**Option C: Netlify Forms**
```html
<!-- Add to form -->
<form name="contact" method="POST" netlify>
```

---

## 📊 Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get your Measurement ID (G-XXXXXXXXXX)

2. **Add to HTML**
   ```html
   <!-- Add before closing </head> tag -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Alternative: Plausible Analytics

```html
<!-- Privacy-focused alternative -->
<script defer data-domain="yoursite.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🔐 Security Checklist

- [ ] Enable HTTPS (automatic with Netlify/Vercel)
- [ ] Set CSP headers (ask hosting provider)
- [ ] Update robots.txt with your domain
- [ ] Configure sitemap.xml
- [ ] Add security.txt (optional)
- [ ] Enable 2FA on hosting account
- [ ] Review external resources

### Add CSP Header (Netlify)

Create `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' www.googletagmanager.com; style-src 'self' fonts.googleapis.com; font-src fonts.gstatic.com"
```

---

## 🌍 SEO Optimization

### 1. Update Meta Tags
```html
<meta name="description" content="Your site description (160 chars)">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="URL to your image">
```

### 2. Submit to Search Engines

**Google Search Console**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property
3. Upload sitemap.xml
4. Request indexing

**Bing Webmaster Tools**
1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add site
3. Upload sitemap.xml

### 3. Generate Sitemap Automatically

```bash
# Using Python
pip install python-sitemap
sitemap-generator https://yourdomain.com -o sitemap.xml
```

---

## 🐛 Troubleshooting

### Site Not Loading
```bash
# Check server logs
# Verify files are uploaded
# Clear browser cache (Ctrl+F5)
# Check console for errors (F12)
```

### Slow Performance
```bash
# Check Lighthouse score
# Optimize images
# Minify CSS/JS
# Enable caching headers
```

### Contact Form Not Working
```javascript
// Check browser console for errors
// Verify form action URL
// Test with different email service
// Check spam folder
```

---

## 📱 Post-Launch

### Week 1
- [ ] Monitor analytics
- [ ] Check for errors
- [ ] Test all links
- [ ] Verify forms work

### Month 1
- [ ] Build backlinks
- [ ] Update content
- [ ] Share on social media
- [ ] Monitor SEO rankings

### Ongoing
- [ ] Update portfolio
- [ ] Share new work
- [ ] Respond to inquiries
- [ ] Analyze traffic

---

## 💡 Pro Tips

1. **Add Password Protection**
   ```bash
   # For WIP site during development
   # Use Netlify protected sites feature
   ```

2. **A/B Testing**
   ```javascript
   // Test button colors, copy, etc.
   const isVariant = Math.random() > 0.5;
   ```

3. **Email List**
   ```html
   <!-- Add newsletter signup -->
   <form action="https://mailchimp.com/..." method="POST">
       <input type="email" placeholder="Your email">
       <button type="submit">Subscribe</button>
   </form>
   ```

4. **Social Proof**
   ```html
   <!-- Add testimonials section -->
   <section class="testimonials">
       <div class="testimonial">Client feedback</div>
   </section>
   ```

---

## 📚 Resources

- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [Google Search Console Help](https://support.google.com/webmasters)
- [MDN HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

**Happy Deploying! 🎉**
