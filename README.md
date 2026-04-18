# Portfolio Website

Professional portfolio website built with React, Vite, and CSS Modules.

## 🚀 Features

- **Responsive Design** - Mobile-first approach for all devices
- **Smooth Animations** - Framer Motion for beautiful transitions
- **Professional Layout** - Includes Hero, About, Skills, Projects, Experience, and Contact sections
- **Contact Form** - React Hook Form with validation
- **CSS Modules** - Scoped styling for better maintainability
- **SEO Friendly** - Optimized metadata and semantic HTML
- **Fast Performance** - Built with Vite for optimal build speed

## 📋 Sections

1. **Header/Navigation** - Sticky header with smooth navigation
2. **Hero** - Eye-catching landing section with CTA buttons
3. **About** - Personal introduction with stats
4. **Skills** - Technology stack showcase
5. **Projects** - Portfolio of work with preview overlays
6. **Experience** - Timeline of professional experience
7. **Contact** - Contact form and social links
8. **Footer** - Social media links and copyright

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Hook Form** - Form management
- **CSS Modules** - Scoped styling

## 📦 Installation

```bash
# Clone or download the project
cd portfolio-web

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Edit Personal Information
- Update `src/components/Hero.jsx` for hero section text
- Update `src/components/About.jsx` for bio and stats
- Update `src/components/Contact.jsx` for contact info
- Update `src/components/Footer.jsx` for social links

### Add Projects
Edit the `projects` array in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    image: 'image-url',
    tech: ['React', 'Node.js'],
    github: 'github-url',
    demo: 'demo-url'
  }
]
```

### Add Experience
Edit the `experiences` array in `src/components/Experience.jsx`:

```javascript
const experiences = [
  {
    id: 1,
    company: 'Company Name',
    position: 'Your Position',
    period: '2023 - 2024',
    description: 'Job description',
    skills: ['Skill1', 'Skill2']
  }
]
```

### Update Skills
Edit the `skillCategories` array in `src/components/Skills.jsx`

### Change Colors
Update the gradient colors in CSS files. Main colors used:
- Primary Gradient: `#667eea` to `#764ba2`
- Accent: `#ffd700` (gold)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

### GitHub Pages
Update `vite.config.js` and deploy the `dist` folder

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Your Name - [Your Website/Portfolio]

---

Made with ❤️ using React & Vite
