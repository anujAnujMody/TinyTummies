<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Context

## Stack
- Next.js 16.2.4 (App Router, Turbopack, React 19)
- React 19.2.4 (React Compiler enabled by default)
- TypeScript 5.x (strict mode)
- Tailwind CSS 4.x
- Framer Motion 12.x (animations)
- Lenis 1.x (smooth scroll)

## Architecture
- `app/` — App Router (Server Components by default)
- `components/sections/` — Page sections (Hero, Pricing, etc.)
- `components/ui/` — Reusable UI primitives (Button, Badge, etc.)
- `components/islands/` — Client Component wrappers (SmoothScroll, ScrollReveal)
- `data/` — Static JSON data (menu.json)
- `public/` — Static assets (images, logos, mascots)

## Key Conventions
- Default to Server Components; add `"use client"` only for interactivity
- Use `next/image` for all images with proper width/height/alt
- Use `next/font` for custom fonts (Nunito, Inter)
- Export `metadata` or `generateMetadata()` for SEO on every page
- React Compiler handles memoization automatically — no manual `useMemo`/`useCallback`
- Turbopack is default for dev and production builds

## Docs Index
Before writing any Next.js code, read the relevant doc from the bundled docs:
- `node_modules/next/dist/docs/app/` — App Router guides
- `node_modules/next/dist/docs/app/api-reference/` — API reference
- `node_modules/next/dist/docs/app/building-your-application/` — Building apps
- `node_modules/next/dist/docs/app/building-your-application/routing/` — Routing
- `node_modules/next/dist/docs/app/building-your-application/data-fetching/` — Data fetching
- `node_modules/next/dist/docs/app/building-your-application/rendering/` — Rendering (RSC, SSR)
- `node_modules/next/dist/docs/app/building-your-application/caching/` — Caching
- `node_modules/next/dist/docs/app/building-your-application/styling/` — Styling (Tailwind)
- `node_modules/next/dist/docs/app/building-your-application/optimizing/` — Optimizing (images, fonts, metadata)
- `node_modules/next/dist/docs/app/building-your-application/configuring/` — Configuring (TypeScript, ESLint)
- `node_modules/next/dist/docs/app/building-your-application/deploying/` — Deploying

## Agent Skills
This project uses the following skills in `.opencode/skills/`:
- `next-best-practices` — Next.js App Router, RSC, async APIs, metadata
- `react-best-practices` — React 19 compiler-first patterns
- `nextjs-anti-patterns` — Common AI-generated mistakes
- `code-review-and-quality` — 5-axis review before merge
- `code-reviewer` — Staff Engineer review persona
- `github-pr-review` — PR review with inline suggestions
- `git-workflow-and-versioning` — Atomic commits, branch discipline
- `performance-optimization` — Core Web Vitals, bundle analysis
- `security-and-hardening` — OWASP prevention, secrets management
- `vercel-deploy` — Edge functions, ISR, deployment config
- `ui-ux-pro-max` — Design systems, colors, typography
