# Skiper UI Clone

A modern frontend clone of Skiper UI built with cutting-edge web technologies. This project showcases beautiful UI components and smooth animations inspired by the original Skiper UI design.

## 🚀 Tech Stack

- **Next.js** - React framework for production
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Skiper UI** - Modern component library
- **Framer Motion** - Animation library (implied from project structure)

## ✨ Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme toggle
- 📱 Mobile-first approach
- ⚡ Fast and optimized performance
- 🎭 Smooth animations and transitions
- 🧩 Reusable component architecture

## 📦 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with custom CSS variables
│   └── page.tsx             # Main landing page
├── components/
│   ├── homeCards/           # Landing page card components
│   │   ├── AiInputCard.tsx
│   │   ├── CardCarouselParent.tsx
│   │   ├── SpecialCard.tsx
│   │   ├── TemplateCard.tsx
│   │   └── ThemeChange.tsx
│   ├── landingPage/
│   │   └── HeroContent.tsx  # Hero section component
│   ├── navbar/              # Navigation components
│   │   ├── Navbar.tsx
│   │   ├── NavPart1.tsx
│   │   └── NavPart2.tsx
│   └── ui/                  # Reusable UI components
│       ├── ai-input.tsx
│       ├── badge-button.tsx
│       ├── card-carousel.tsx
│       ├── minimal-card.tsx
│       ├── skiper-card.tsx
│       ├── theme-toggle-button.tsx
│       └── wrap-button.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd skiper-ui-clone
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
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 🎨 Components Overview

### Hero Section

- Eye-catching landing area with animated elements
- Call-to-action buttons with hover effects
- Responsive design with background decorations

### Card Carousel

- Interactive image carousel
- Smooth transitions between slides
- Touch/swipe support for mobile devices

### Template Cards

- Minimal card design with hover effects
- Image previews with descriptions
- Grid layout for multiple cards

### Special Cards

- Dynamic Skiper cards with step-by-step animations
- Multiple image states for different steps
- Responsive positioning and scaling

### Theme Toggle

- Multiple theme toggle buttons
- GIF integration for animated toggles
- Seamless dark/light mode switching

### AI Input Card

- Modern input design
- Badge integration
- Clean and focused layout

## 🔧 Configuration

The project uses several configuration files:

- `components.json` - Shadcn/ui configuration
- `globals.css` - Custom CSS variables and theme definitions
- `utils.ts` - Utility functions for className merging

## 🎯 Key Features Implemented

1. **Responsive Design**: Mobile-first approach with breakpoint optimizations
2. **Theme System**: Complete dark/light mode with CSS custom properties
3. **Animation System**: Smooth transitions and hover effects
4. **Component Library**: Reusable UI components following modern design patterns
5. **TypeScript Integration**: Full type safety across the application

## 🚀 Deployment

This project can be deployed on any platform that supports Next.js:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes and is a clone of the original Skiper UI design.

## 🙏 Acknowledgments

- Original design inspiration from [Skiper UI](https://skiper-ui.com/)
- Built with modern web technologies and best practices
- Thanks to the open-source community for the amazing tools

---

**Note**: This is a frontend-only clone created for learning and demonstration purposes. It replicates the visual design and user experience of the original Skiper UI website.
