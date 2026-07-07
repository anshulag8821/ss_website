# Sarmak Website - Project Guidelines

## Tech Stack
React 18 + TypeScript + Vite with Radix UI components and Tailwind CSS.

## Build and Test
- **Dev server**: `npm run dev` (starts Vite on http://localhost:5173)
- **Build**: `npm run build` (compiles TypeScript, then runs Vite build)
- **Lint**: `npm run lint` (ESLint with TypeScript support)
- **Preview**: `npm run preview` (preview built app locally)

## Architecture & File Structure
```
src/
├── pages/         # Route components (each file = one route)
├── components/    
│   ├── ui/        # Radix-based primitive components (shadcn-style)
│   ├── Header.tsx, Footer.tsx  # Layout components
│   └── ...
├── hooks/         # Custom React hooks
├── lib/           # Utilities (utils.ts for class merging, etc.)
└── App.tsx        # Router setup
```

**Path Alias**: `@/*` resolves to `src/*` for imports.

## Code Style & Conventions

### Component Naming
- **Pages**: PascalCase file in `src/pages/`, export as default
- **Reusable components**: PascalCase in `src/components/`
- **UI primitives**: Lowercase (e.g., `button.tsx`, `dialog.tsx`), export as named exports

### Imports
- Use `@/` path alias for all src imports: `import Button from '@/components/ui/button'`
- Group imports: React first, then third-party, then local (`@/`)

### Styling
- Default to Tailwind CSS classes
- Use `clsx` (already imported in ui components) for conditional classes
- Component structure follows Radix UI + Tailwind patterns

### Forms
- Use `react-hook-form` for form logic
- Combine with UI components from `@/components/ui/form` for consistent styling
- Validation with `@hookform/resolvers`

### Routing
- React Router (`BrowserRouter`, `Routes`, `Route`)
- Route paths in `App.tsx`
- Page components receive no props from routes (use URL params if needed)

### SEO
- Use `react-helmet-async` (wrapped in `<HelmetProvider>` in App.tsx)
- Import `{ Helmet }` from `react-helmet-async` in pages that need custom meta tags

### Email Integration
- Contact form uses EmailJS
- Environment variables: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
- See README.md for EmailJS setup

## Common Tasks

### Add a New Page
1. Create file in `src/pages/PageName.tsx`
2. Export default a React component
3. Add route in `App.tsx` (import + `<Route path="/..." element={<PageName />} />`)
4. Link from navigation via Header component

### Add a New UI Component
1. Create file in `src/components/ui/component-name.tsx`
2. Build from Radix UI primitives (already in node_modules)
3. Export as named export, use Tailwind + `clsx` for styling

### Update Styling
- Modify Tailwind config in `tailwind.config.js` (e.g., custom colors)
- Use `npm run dev` for HMR during development

## Notes on Known Issues
- Several pages have duplicate files (e.g., `Home(1).tsx`, `Blog(1).tsx`) — these should be cleaned up or merged
- .env file needed with EmailJS credentials (create locally, not committed)
