# Image to PDF Converter

## Overview

This is a full-stack web application that allows users to convert multiple images into a single PDF document. The application features a modern React frontend with advanced customization options and an Express.js backend. Users can drag-and-drop images, reorder them, adjust conversion settings like page size and margins, and download the resulting PDF file. The app is built with TypeScript and uses shadcn/ui components for a polished user interface.

The application now includes a beautiful, responsive header with a custom SVG logo, navigation menu, dark/light theme toggle, and professional footer section. All processing remains client-side for complete privacy and security.

## User Preferences

Preferred communication style: Simple, everyday language.

## Deployment

### Vercel Deployment Structure
- **Root Configuration**: vercel.json configured for Vite framework
- **Build Output**: dist/public directory as specified in vite.config.ts
- **Client-Side Only**: No server-side dependencies for deployment
- **Static Assets**: All processing happens client-side using pdf-lib
- **API Routes**: Minimal API structure in /api folder for future extensibility

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript and Vite for development
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React hooks with custom hooks for complex logic
- **Client-side Routing**: Wouter for lightweight routing
- **Data Fetching**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions using connect-pg-simple
- **Development**: Vite middleware integration for hot module replacement

### PDF Generation
- **Client-side Processing**: pdf-lib library for creating PDFs entirely in the browser
- **No Server Processing**: Images are processed locally for privacy and performance
- **Supported Formats**: JPG, PNG, WebP, and other standard image formats

### Data Storage Strategy
- **Primary Storage**: PostgreSQL for user data and application state
- **In-Memory Fallback**: MemStorage class provides development/testing capability
- **File Handling**: Client-side only - no server-side file storage required

### Development Environment
- **Build Tool**: Vite with React plugin and runtime error overlay
- **Type Safety**: Comprehensive TypeScript configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Development Server**: Express with Vite middleware for full-stack development

### Component Architecture
- **Design System**: Consistent component library with variants and theming
- **Accessibility**: Built on Radix UI primitives for ARIA compliance
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Drag and Drop**: Native HTML5 drag and drop API implementation
- **Header & Navigation**: Professional sticky header with custom SVG logo and responsive navigation
- **Theme System**: Dark/light mode toggle with localStorage persistence and system preference detection
- **Component Structure**: Modular components including Header, Footer, ThemeToggle, and main converter sections

### Security and Privacy
- **Client-side Processing**: Images never leave the user's device
- **Type-safe Database**: Drizzle ORM prevents SQL injection
- **Environment Variables**: Secure configuration management
- **CORS and Security Headers**: Express middleware for security

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Database**: Neon Database (serverless PostgreSQL), Drizzle ORM, Drizzle Kit

### UI and Styling Dependencies
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Animations**: Class Variance Authority for component variants

### Utility Libraries
- **PDF Generation**: pdf-lib for client-side PDF creation
- **File Handling**: FileSaver.js for downloading generated files
- **Date Manipulation**: date-fns for date formatting and manipulation
- **Form Validation**: Zod for schema validation, React Hook Form for form state

### Development Dependencies
- **Replit Integration**: Replit-specific plugins for development environment
- **Session Management**: connect-pg-simple for PostgreSQL-based sessions
- **State Management**: TanStack React Query for server state caching

### Optional Enhancements
- **Carousel**: Embla Carousel React for image preview galleries
- **Command Palette**: cmdk for searchable command interfaces
- **Advanced UI**: Additional Radix UI components for rich interactions