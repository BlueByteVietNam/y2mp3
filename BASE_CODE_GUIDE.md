# NextVita Base Code Guide

## Overview

NextVita is a modern, performant web application base built with Next.js that maintains perfect 100 scores across Performance, Accessibility, Best Practices, and SEO. This guide explains the refactored architecture designed to serve as a foundation for all your web applications.

## Key Features

- ✅ 100% Lighthouse scores maintained
- 🎨 Modular component architecture
- ⚙️ Centralized configuration system
- 🌓 Theme system with dark mode support
- 🪝 Custom hooks for common operations
- 🔧 Environment variables management
- 📦 TypeScript with strict mode
- 🚀 Optimized for performance

## Project Structure

```
nextvita/
├── components/
│   ├── common/       # Shared components
│   ├── forms/        # Form components
│   ├── layout/       # Layout components (Header, Footer, Layout)
│   ├── seo/          # SEO-related components
│   └── ui/           # UI components (Button, Card, Hero, etc.)
├── config/
│   ├── analytics.config.ts  # Analytics configuration
│   ├── seo.config.ts       # SEO configuration
│   ├── site.config.ts      # Site-wide configuration
│   └── theme.config.ts     # Theme configuration
├── contexts/
│   └── ThemeContext.tsx    # Theme provider
├── hooks/
│   ├── useDebounce.ts      # Debounce hook
│   ├── useLocalStorage.ts  # Local storage hook
│   └── useMediaQuery.ts    # Media query hook
├── lib/
│   ├── utils/              # Utility functions
│   └── env.ts              # Environment variables management
├── pages/                  # Next.js pages
├── public/                 # Static assets
├── styles/
│   ├── main.css           # Main styles
│   ├── mvp.css            # MVP CSS framework
│   └── theme.css          # Theme variables
└── types/                  # TypeScript type definitions
```

## Configuration System

### Site Configuration (`config/site.config.ts`)

Centralized site configuration including navigation, metadata, and links:

```typescript
import { siteConfig } from "@/config/site.config";

// Access site name, URL, navigation items, etc.
console.log(siteConfig.name);
console.log(siteConfig.navigation);
```

### Theme Configuration (`config/theme.config.ts`)

Design tokens for consistent styling:

```typescript
import { themeConfig } from "@/config/theme.config";

// Access colors, fonts, spacing, breakpoints
console.log(themeConfig.colors.primary);
```

### Environment Variables

Use the environment management utility:

```typescript
import { env } from "@/lib/env";

// Get optional environment variable
const gaId = env.get("NEXT_PUBLIC_GA_ID");

// Get required environment variable (throws if missing)
const siteUrl = env.getRequired("NEXT_PUBLIC_SITE_URL");
```

## Component Usage

### Layout Components

```tsx
import { Layout } from "@/components/layout";

export default function Page() {
  return (
    <Layout>
      <h1>Your content here</h1>
    </Layout>
  );
}
```

### UI Components

```tsx
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Hero } from "@/components/ui/Hero";

// Button with link
<Button href="/about" variant="primary">Learn More</Button>

// Card component
<Card 
  title="Feature"
  description="Description text"
  footer={<Button>Action</Button>}
/>

// Hero section
<Hero 
  title="Welcome"
  subtitle="Build amazing web apps"
/>
```

## Custom Hooks

### useMediaQuery

```tsx
import { useMediaQuery } from "@/hooks";

const isMobile = useMediaQuery("(max-width: 640px)");
```

### useLocalStorage

```tsx
import { useLocalStorage } from "@/hooks";

const [value, setValue] = useLocalStorage("key", "defaultValue");
```

### useDebounce

```tsx
import { useDebounce } from "@/hooks";

const debouncedSearchTerm = useDebounce(searchTerm, 500);
```

## Theme System

The theme system uses CSS custom properties for optimal performance:

```css
/* Access theme variables in CSS */
.custom-element {
  color: var(--color-primary);
  padding: var(--spacing-md);
  font-family: var(--font-body);
}
```

### Dark Mode

Implement the theme provider in your app:

```tsx
import { ThemeProvider } from "@/contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

## Utility Functions

### Class Name Helper

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class")} />
```

### Formatters

```tsx
import { formatDate, formatRelativeTime, slugify } from "@/lib/utils";

formatDate(new Date()); // "January 11, 2025"
formatRelativeTime(date); // "2 hours ago"
slugify("Hello World!"); // "hello-world"
```

## Performance Optimization

1. **Image Optimization**: Use Next.js Image component with proper dimensions
2. **Code Splitting**: Automatic with Next.js dynamic imports
3. **CSS Variables**: Theme system uses CSS custom properties (no runtime JS)
4. **Static Generation**: Pre-render pages at build time when possible

## Accessibility Features

1. **Semantic HTML**: Use proper HTML5 elements
2. **ARIA Labels**: Included on interactive elements
3. **Keyboard Navigation**: All interactive elements accessible via keyboard
4. **Color Contrast**: Theme colors meet WCAG standards

## SEO Configuration

SEO is handled automatically through the Layout component:

```tsx
// For custom page SEO
import { NextSeo } from "next-seo";

<NextSeo
  title="Page Title"
  description="Page description"
  canonical={`${siteConfig.url}/page-path`}
/>
```

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and configure
3. Install dependencies: `npm install`
4. Run development server: `npm run dev`
5. Build for production: `npm run build`

## Customization Checklist

- [ ] Update `config/site.config.ts` with your site information
- [ ] Modify `config/theme.config.ts` for your brand colors
- [ ] Replace logo files in `/public`
- [ ] Update `config/seo.config.ts` with your SEO defaults
- [ ] Configure analytics in `.env.local`
- [ ] Customize components in `/components/ui`

## Maintaining 100% Scores

To ensure the base code maintains perfect Lighthouse scores:

1. **Performance**:
   - Keep bundle sizes small
   - Use static generation when possible
   - Optimize images with Next.js Image
   - Minimize JavaScript execution

2. **Accessibility**:
   - Use semantic HTML
   - Include proper ARIA attributes
   - Ensure keyboard navigation
   - Maintain color contrast ratios

3. **Best Practices**:
   - Use HTTPS
   - Avoid deprecated APIs
   - Include proper meta tags
   - Follow security best practices

4. **SEO**:
   - Include meta descriptions
   - Use proper heading hierarchy
   - Add structured data when applicable
   - Ensure mobile responsiveness

## Testing

Run type checking:
```bash
npm run type-check
```

Build the project:
```bash
npm run build
```

Test Lighthouse scores:
```bash
npm run build && npm run start
# Then run Lighthouse on http://localhost:3000
```