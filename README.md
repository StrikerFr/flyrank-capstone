# Flyrank Capstone

A modern starter application built with:
- [React 19](https://react.dev)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- ESLint & Prettier

## Features
- **Clean Folder Structure:** Organized directories for `components`, `hooks`, `pages`, `utils`, and `assets`.
- **Reusable Components:** Pre-built, customizable UI components (e.g., `Button`).
- **Code Formatting & Linting:** Integrated ESLint and Prettier for clean code.
- **Tailwind Setup:** Configured with Tailwind CSS v4 using `@tailwindcss/vite`.
- **Fast Development:** Instant server start and HMR via Vite.

## Project Structure
```text
flyrank-capstone/
├── public/             # Public static assets
├── src/
│   ├── assets/         # Images, global styles, etc.
│   ├── components/     # Reusable React components (e.g., Button)
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility and helper functions
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles (Tailwind v4 imports)
│   └── main.tsx        # Application entry point
├── CLAUDE.md           # AI assistant context
├── eslint.config.js    # ESLint 9 configuration
└── vite.config.ts      # Vite build configuration
```

## Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Linting
```bash
npm run lint
```
