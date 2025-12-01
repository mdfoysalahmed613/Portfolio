# Portfolio Website - AI Coding Instructions

## Project Overview

This is a Next.js 16 portfolio website with App Router, featuring MDX blog support, static project showcases, and a warm earthy design system. Built with React 19, TypeScript, Tailwind CSS 4, and Shadcn UI components.

## Architecture & Key Patterns

### Content Management System

- **Blog posts** are MDX files in `assets/blogs/[slug]/index.mdx` with metadata in `lib/blogs.ts`
- **Projects** are data objects in `lib/projects.ts` with images in `assets/images/projects/`
- Both use static generation with `generateStaticParams()` for optimal performance
- Add new blog: create folder in `assets/blogs/`, add MDX + image, export from `assets/blogs/index.ts`, register in `lib/blogs.ts`

### Routing Structure

- `app/page.tsx` - Homepage with all sections (Hero, Skills, Services, Projects, Contact)
- `app/blog/page.tsx` - Blog listing
- `app/blog/[slug]/page.tsx` - Individual blog post with MDX rendering
- `app/projects/[slug]/page.tsx` - Project detail pages
- Navigation uses section anchors (`/#skills`, `/#contact`) for homepage sections

### Styling System

- Tailwind CSS 4 with custom CSS variables in `app/globals.css`
- Warm color palette: `--primary: #c75605` (orange), `--background: #f6f4ee` (beige), `--foreground: #4d2f19` (brown)
- Shadcn UI components in `components/ui/` (badge, button, card, tabs, sonner)
- Use `cn()` from `lib/utils.ts` for conditional classes (clsx + tailwind-merge)
- Framer Motion for animations (see `components/common/nav.tsx` for patterns)

### MDX Configuration

- MDX loader configured in `next.config.ts` with `pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]`
- Prose styling in blog template: `prose prose-lg max-w-none prose-headings:font-bold...`
- MDX components can be customized in `mdx-components.tsx` (currently using defaults)

### TypeScript Patterns

- Path alias `@/*` maps to project root (configured in `tsconfig.json`)
- Interface exports from lib files: `IBlog` in `lib/blogs.ts`, `Project` in `lib/projects.ts`
- Async params in App Router: `const { slug } = await params` (Next.js 16 pattern)

## Development Workflow

### Commands

- `pnpm dev` - Start dev server with Turbopack (fast refresh enabled)
- `pnpm build` - Production build with Turbopack
- `pnpm start` - Run production server
- `pnpm lint` - ESLint check

### Environment Variables

- `NEXT_PUBLIC_BASE_URL` required for metadata/SEO (default: `http://localhost:3000`)
- Set in `.env.local` for development, Vercel for production

### Adding New Components

- Client components need `"use client"` directive (e.g., `components/common/nav.tsx`)
- Server components are default (e.g., `app/blog/page.tsx`)
- Shadcn components are installed via CLI, styled with CSS variables

## Component Conventions

### Layout Components

- `app/layout.tsx` provides global layout: Navbar → children → Footer
- SEO metadata configured here with OpenGraph, Twitter cards, keywords
- Google Analytics, Vercel Speed Insights, and Toaster included globally

### Section Components

- Homepage sections in `components/home/` (hero, skills, services, projects, contact, work-flow)
- Common components in `components/common/` (nav, footer, scroll-to-top, share-blog, hamburger)
- Each section is self-contained with animations and responsive design

### Icon Usage

- Lucide React for UI icons (`lucide-react`)
- React Icons for brand icons (`react-icons/fa6`)
- Example: `<Download />` from lucide, `<FaGithub />` from react-icons

## SEO & Metadata

- Every page exports async `generateMetadata()` for dynamic SEO
- Blog posts include keywords array, OpenGraph images, article type
- Projects include tech stack as keywords, images with dimensions
- Structured data via Next.js metadata API (no JSON-LD currently)

## Testing & Deployment

- Deployed on Vercel with automatic CI/CD from `main` branch
- No test suite currently; rely on TypeScript + ESLint
- Build validates MDX compilation, type safety, and Next.js optimizations

## Key Files Reference

- `lib/blogs.ts`, `lib/projects.ts` - Content registries
- `app/layout.tsx` - Global metadata and layout wrapper
- `components.json` - Shadcn UI configuration
- `app/globals.css` - Design system CSS variables
- `next.config.ts` - MDX and page extension configuration
