# Full Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing 3+ years of full-stack development experience.

## 🚀 Features

### ✨ Design & UX

- **Modern & Clean Design**: Minimalist layout with professional aesthetics
- **Dark/Light Mode**: System-aware theme toggle with smooth transitions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle scroll animations and hover effects
- **Custom Scrollbar**: Styled scrollbars for better visual consistency

### 📱 Navigation & Layout

- **Fixed Navigation**: Sticky header that adapts on scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Navigate between sections seamlessly
- **Back to Top**: Quick return to top functionality

### 🎯 Sections Included

1. **Hero Section**

   - Professional avatar/logo
   - Dynamic typing animation
   - Call-to-action buttons
   - Social media links
   - Animated background elements

2. **About Section**

   - Professional summary
   - Tech stack visualization
   - Key strengths highlight
   - Personal touch with fun facts

3. **Skills Section**

   - Categorized skill display (Frontend, Backend, Database, Design)
   - Animated progress bars
   - Proficiency levels
   - Interactive skill cards

4. **Projects Section**

   - Filterable project gallery
   - Detailed project information
   - Live demo and GitHub links
   - Technology tags
   - Project status indicators

5. **Experience Section**

   - Professional timeline
   - Career progression visualization
   - Achievement highlights
   - Technology used per role
   - Interactive stats cards

6. **Contact Section**

   - Contact form with validation
   - Contact information
   - Social media links
   - Availability status indicator

7. **Footer**
   - Quick navigation links
   - Contact information
   - Copyright notice

### 🛠️ Technical Features

- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance**: Image optimization, lazy loading, and code splitting
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **TypeScript**: Fully typed for better development experience
- **Component Architecture**: Reusable, maintainable components
- **Smooth Scrolling**: Native CSS scroll behavior
- **Form Handling**: Contact form with validation and status feedback

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins from Google Fonts
- **Theme**: Next Themes for dark/light mode
- **Development**: ESLint, TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `app/layout.tsx` - Meta information and SEO data
- `app/_components/custom/hero.tsx` - Personal details and tagline
- `app/_components/custom/about.tsx` - Professional summary and skills
- `app/_components/custom/experience.tsx` - Work experience and achievements
- `app/_components/custom/projects.tsx` - Your project showcase
- `app/_components/custom/contact.tsx` - Contact information

### Styling

- **Colors**: Update color scheme in `tailwind.config.ts` and CSS custom properties
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Animations**: Customize animations in `app/_styles/globals.css`

### Content

- **Resume**: Add your resume PDF to the `public` folder
- **Images**: Add project screenshots and personal photos to `public/images`
- **Projects**: Update the projects array with your actual work
- **Skills**: Modify skill categories and proficiency levels

## 📁 Project Structure

```
app/
├── layout.tsx                 # Root layout with providers
├── page.tsx                   # Main page composition
├── _components/
│   ├── custom/               # Custom portfolio components
│   │   ├── hero.tsx         # Hero section
│   │   ├── about.tsx        # About section
│   │   ├── skills.tsx       # Skills showcase
│   │   ├── projects.tsx     # Project gallery
│   │   ├── experience.tsx   # Timeline & experience
│   │   ├── contact.tsx      # Contact form
│   │   ├── footer.tsx       # Footer
│   │   ├── header.tsx       # Navigation header
│   │   └── navigation.tsx   # Navigation links
│   └── ui/                  # Reusable UI components
├── _styles/
│   └── globals.css          # Global styles and animations
├── _providers/
│   └── theme-provider.tsx   # Theme context provider
└── _lib/
    └── utils.ts             # Utility functions

public/
├── images/                  # Static images
└── resume.pdf              # Downloadable resume

```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint rules
- `components.json` - shadcn/ui configuration

## 📱 Responsive Design

The portfolio is built with mobile-first approach:

- **Mobile**: < 640px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🌟 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Built-in bundle analyzer available
- **SEO**: Comprehensive meta tags and structured data

## 📈 SEO Features

- Meta tags for title, description, keywords
- Open Graph tags for social media sharing
- Twitter Card support
- Semantic HTML structure
- Accessible navigation
- Structured data for contact information

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **GitHub Pages**: Use `next export` for static site generation
- **Custom Server**: Use `npm run build && npm start`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS
- [Lucide](https://lucide.dev) for the beautiful icons
- [Vercel](https://vercel.com) for hosting and deployment

---

⭐ If you found this portfolio template helpful, please give it a star on GitHub!

📧 Questions? Feel free to reach out at [vasudev.tejam@email.com](mailto:vasudev.tejam@email.com)
