# Folioz Landing Page Documentation

## 🌟 Introduction

Thank you for purchasing Folioz - the modern, responsive HTML landing page template designed for creative professionals, agencies, and portfolio websites. This documentation will guide you through the template structure and customization process.

## 📦 What's Included

Your download contains:
```
Folioz/
|──documentation/
│   └── main.md.css
|   ├── index.html
|   ├── style.css
|   ├── logo.png
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── components/
├── images/
│   ├── hero-bg.jpg
│   ├── portfolio/
│   └── team/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── favicon/
└── documentation.pdf
```

## 🏗️ Template Structure

### HTML Files
- `index.html` - Main landing page

### Key Sections
1. **Navigation** - Sticky header with logo and menu
2. **Hero Section** - Eye-catching introduction with CTA
3. **Services** - Features and offerings
4. **Portfolio** - Work showcase grid
5. **Testimonials** - Client feedback carousel
6. **Team** - Team member profiles
7. **Contact** - Contact form and information
8. **Footer** - Additional links and social media

## 🎨 Customization Guide

### 1. Basic Information
Edit the following in `index.html`:

```html
<!-- Update company name -->
<title>Folioz - Creative Portfolio Template</title>
<meta name="description" content="Your business description">

<!-- Update logo -->
<a class="navbar-brand" href="index.html">
    <img src="images/logo.png" alt="Your Logo">
</a>
```

### 2. Colors and Styling
Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #f59e0b;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --white: #ffffff;
}
```

### 3. Content Updates

#### Hero Section
```html
<section class="hero">
    <h1>Your Main Headline</h1>
    <p>Your compelling subheadline goes here</p>
    <button class="cta-button">Get Started</button>
</section>
```

#### Services Section
Update the services grid with your offerings:

```html
<div class="service-card">
    <div class="service-icon">📱</div>
    <h3>Your Service</h3>
    <p>Service description</p>
</div>
```

### 4. Images Replacement
Replace placeholder images in the `images/` folder:
- `hero-bg.jpg` - Main background image
- `portfolio/` - Portfolio project images
- `team/` - Team member photos

## ⚙️ Configuration

### Contact Form Setup
Update the form action in `index.html`:

```html
<form action="https://your-form-endpoint.com" method="POST">
    <!-- Form fields -->
</form>
```

### Social Media Links
Update social media URLs in the footer:

```html
<div class="social-links">
    <a href="https://twitter.com/yourprofile">Twitter</a>
    <a href="https://linkedin.com/company/yourcompany">LinkedIn</a>
    <!-- Add other social platforms -->
</div>
```

## 📱 Responsive Design

Folioz is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Optimization

### Image Optimization
- Compress images before uploading
- Use WebP format for better performance
- Recommended size: Hero images ~150-200KB, Portfolio images ~50-100KB

### Loading Speed
- All CSS is minified
- JavaScript is optimized
- Lazy loading implemented for images

## 🔧 Advanced Customization

### Adding New Sections
1. Copy an existing section structure
2. Update content and styling
3. Add to navigation if needed

### Custom CSS
Add your custom styles in `css/style.css` at the bottom of the file:

```css
/* Your Custom Styles */
.your-custom-class {
    /* Your styles here */
}
```

### JavaScript Components
Main interactive features:
- Smooth scrolling navigation
- Portfolio filtering
- Testimonial carousel
- Mobile menu toggle

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support

### Documentation
- Check this documentation first
- Review commented code in HTML/CSS files

### Technical Support
- Email: support@yourcompany.com
- Response time: 24-48 hours
- Include: Description + Screenshots of issue

## 🔄 Updates

- Future updates will be available in your download account
- Changelog included with each update
- Backup your customizations before updating

## 📝 License

- Single project use
- Cannot resell or redistribute
- Attribution not required

## 🎯 Quick Start Checklist

- [ ] Update company name and logo
- [ ] Replace hero section content
- [ ] Customize color scheme
- [ ] Update services/features
- [ ] Add portfolio projects
- [ ] Insert team member information
- [ ] Configure contact form
- [ ] Test on different devices
- [ ] Optimize images
- [ ] Connect Google Analytics

## 💡 Pro Tips

1. **Keep it simple** - Don't overcrowd with too much information
2. **Clear CTAs** - Make call-to-action buttons prominent
3. **Quality images** - Use high-quality, relevant images
4. **Test thoroughly** - Check all links and forms
5. **Mobile-first** - Always preview mobile version first

---

**Thank you for choosing Folioz!** We're confident it will help you create a stunning online presence. If you have any questions, don't hesitate to contact our support team.

Happy customizing! 🚀