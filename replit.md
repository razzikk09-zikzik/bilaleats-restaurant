# Mount Road Bilal - Restaurant Website

## Overview

Mount Road Bilal is a modern, fully responsive restaurant website showcasing kebabs and biriyani offerings. The application serves as a digital presence for a restaurant chain with multiple branches, featuring menu displays, branch locations, contact forms, and online ordering capabilities. Built with a brown and white color scheme to match the restaurant's branding, the website emphasizes clean design, smooth animations, and mobile-first responsiveness.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management
- React Hook Form with Zod validation for form handling

**UI Framework:**
- Shadcn UI component library with Radix UI primitives
- Tailwind CSS for utility-first styling
- Custom design system with brand colors (browns, cream, white)
- CSS variables for theming support
- AOS.js library for scroll animations

**Component Structure:**
- Single-page application (SPA) with smooth scrolling sections
- Modular component architecture:
  - `Navbar`: Sticky navigation with scroll effects
  - `Hero`: Landing section with logo and call-to-action
  - `About`: Timeline-based restaurant history
  - `Menu`: Filterable menu items with categories
  - `Branches`: Branch locations with embedded Google Maps
  - `Contact`: Form submission with validation
  - `Footer`: Social links and quick navigation
  - `WhatsAppFloat`: Floating WhatsApp contact button

**State Management:**
- React Query for async data fetching and caching
- React Hook Form for form state
- Local component state with useState/useEffect hooks

### Backend Architecture

**Server Technology:**
- Express.js server with TypeScript
- ESM module system
- Development mode with tsx, production with esbuild bundling

**API Design:**
- RESTful endpoint structure
- Single contact form submission endpoint: `POST /api/contact`
- JSON request/response format
- Middleware for request logging and body parsing

**Request Flow:**
1. Client submits contact form
2. Server validates data using Zod schema
3. Submission stored in storage layer
4. Email notification sent to restaurant
5. Success response returned to client

**Error Handling:**
- Centralized error handling with try-catch blocks
- Graceful email failure handling (submission saved even if email fails)
- Client-friendly error messages
- Request logging for debugging

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using Map data structure
- Interface-based storage layer (IStorage) for abstraction
- UUID-based unique identifiers for submissions

**Database Schema (Drizzle ORM):**
- PostgreSQL configured via Drizzle Kit
- `contact_submissions` table with fields:
  - id (UUID primary key)
  - name (required text)
  - email (required text)
  - phone (optional text)
  - message (required text)
  - createdAt (timestamp with default)

**Schema Validation:**
- Drizzle-zod integration for type-safe validation
- Shared schema definitions between client and server
- Runtime validation with Zod schemas

**Migration Strategy:**
- Drizzle Kit for schema migrations
- Configuration supports Neon serverless PostgreSQL
- Schema defined in `shared/schema.ts` for code sharing

### Authentication and Authorization

**Current State:**
- No authentication system implemented
- Public access to all pages and contact form
- Email submissions are unprotected

**Future Considerations:**
- Admin dashboard would require authentication
- Session management with connect-pg-simple (already installed)
- Role-based access control for viewing submissions

### Email System

**Email Service:**
- Nodemailer for SMTP email delivery
- Configurable SMTP settings via environment variables
- HTML email templates with branded styling

**Email Configuration:**
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD for credentials
- RESTAURANT_EMAIL/CONTACT_EMAIL for recipient
- Email includes all form submission details with styled formatting

**Error Resilience:**
- Non-blocking email failures to ensure form submissions are saved
- Error logging for troubleshooting
- Graceful degradation if email service is unavailable

## External Dependencies

### Third-Party Services

**Google Maps:**
- Embedded iframe maps for each branch location
- Static map URLs configured in branch data
- No API key required for embed functionality

**Email Provider:**
- SMTP service (Gmail or custom provider)
- Requires valid credentials in environment variables

**WhatsApp Integration:**
- Direct WhatsApp link for instant messaging
- Phone number configured in component (currently hardcoded)

### NPM Packages

**Core Framework:**
- `express`: Web server framework
- `react`, `react-dom`: UI library
- `vite`: Build tool and dev server
- `typescript`: Type safety

**Database & ORM:**
- `drizzle-orm`: TypeScript ORM
- `drizzle-zod`: Schema validation
- `@neondatabase/serverless`: PostgreSQL driver for Neon

**UI Components:**
- `@radix-ui/*`: Headless UI primitives (20+ components)
- `class-variance-authority`: Component variant styling
- `tailwindcss`: Utility CSS framework
- `lucide-react`: Icon library

**Forms & Validation:**
- `react-hook-form`: Form state management
- `zod`: Runtime validation
- `@hookform/resolvers`: Zod integration for forms

**Data Fetching:**
- `@tanstack/react-query`: Server state management
- Automatic caching and refetching

**Email:**
- `nodemailer`: Email sending
- `@types/nodemailer`: TypeScript definitions

**Routing:**
- `wouter`: Lightweight React router

**Development Tools:**
- `tsx`: TypeScript execution for development
- `esbuild`: Production bundling
- `@replit/*` plugins: Development experience enhancements

### Environment Variables Required

- `DATABASE_URL`: PostgreSQL connection string
- `SMTP_HOST`: Email server hostname
- `SMTP_PORT`: Email server port
- `SMTP_USER`: Email authentication username
- `SMTP_PASSWORD`: Email authentication password
- `RESTAURANT_EMAIL`: Recipient email for contact form submissions

### Asset Management

**Static Assets:**
- Restaurant logo stored in `attached_assets/`
- Vite alias configuration for asset imports
- Menu item images via external URLs (Unsplash)

**Font Loading:**
- Google Fonts integration (Montserrat, Poppins)
- Custom font variables in CSS