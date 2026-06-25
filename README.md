# HUFF Visuals - Creative Portfolio

A modern, responsive portfolio website showcasing visual art, photography, and cinematography. Built with vanilla HTML, CSS, and JavaScript following best practices for performance, accessibility, and SEO.

## 📁 Project Structure

```
huff/
├── index.html           # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # Interactive features
├── README.md           # This file
├── robots.txt          # SEO sitemap rules
└── .gitignore          # Git ignore rules
```

## ✨ Features

- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Modern Aesthetics**: Clean typography, bold colors, smooth animations
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML
- **Performance Optimized**: Lazy loading, efficient CSS, minimal JavaScript
- **SEO Ready**: Proper meta tags, structured markup, sitemap
- **Mobile Navigation**: Touch-friendly hamburger menu
- **Form Validation**: Client-side form validation with user feedback
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Dark Mode Support**: Automatic dark mode detection
- **Analytics Ready**: GA4 integration hooks

## 🚀 Quick Start

1. **Open in Browser**: Simply open `index.html` in your web browser
2. **Local Server** (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-accent: #FFB84D;
    --color-primary: #000000;
    --color-secondary: #FFFFFF;
    /* ... other variables */
}
```

### Content
- Update portfolio items in the portfolio grid
- Modify exhibition data in the exhibitions section
- Replace social media links with your accounts

### Images
Replace SVG placeholders with actual images:
```html
<img src="your-image.jpg" alt="Description" loading="lazy">
```

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: All modern versions

## ♿ Accessibility

- ARIA labels and semantic HTML
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Reduced motion support

## 🔍 SEO

- Proper heading hierarchy
- Meta description tags
- Open Graph support
- Structured data ready
- Mobile-friendly design
- Fast loading times

## ⚡ Performance

- CSS-in-JS for critical styles
- SVG graphics for scalability
- Intersection Observer for animations
- Minimal JavaScript bundle
- No external dependencies

## 📊 Analytics Integration

To enable Google Analytics:

1. Add your GA4 measurement ID:
```html
<!-- In index.html head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
```

2. The script will automatically track:
   - Page views
   - External link clicks
   - Form interactions

## 🔐 Best Practices Implemented

✓ **Performance**
- Lazy loading for images
- CSS optimization
- Minimal JavaScript
- Service Worker ready

✓ **Security**
- No inline scripts
- Secure external links (rel="noopener noreferrer")
- CSP ready

✓ **Accessibility**
- WCAG 2.1 AA compliant
- Screen reader friendly
- Keyboard navigable
- Focus indicators

✓ **SEO**
- Semantic HTML
- Meta tags
- Structured data
- Sitemap support

✓ **Developer Experience**
- Clear code structure
- Well-documented
- Easy customization
- No build process needed

## 📧 Contact

For inquiries about the HUFF Visuals portfolio, use the contact form on the website.

---

Built with ❤️ for visual storytellers
