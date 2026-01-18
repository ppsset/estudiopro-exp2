# Electrical Installation Design Hub

Responsive, production-ready web app for electrical installation design professionals. Built with Next.js (App Router), TypeScript, and Tailwind.

## Features
- News feed with NFPA/IEC/BS standards and saved bookmarks
- Design tools with input/result layout and project saving
- Project workspace with module history and report builder
- Knowledge library with topic outlines and key terms
- Admin-ready RSS ingestion and source management

## Tech stack
- Next.js + React + TypeScript
- Tailwind CSS
- Prisma ORM (PostgreSQL)
- NextAuth (credentials/SSO-ready)

## Getting started

```bash
npm install
npm run dev
```

## Environment variables

Create a `.env.local` with:

```
DATABASE_URL=postgresql://user:password@localhost:5432/electrical_design
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace-with-a-secret
```

## Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

## Deployment (Vercel)
1. Push the repository to GitHub.
2. Create a new Vercel project.
3. Add the environment variables above in Vercel Settings.
4. Use the default build command: `next build`.

## Notes
- Reference notes are informational and should be validated against official NFPA/IEC/BS publications.
- Mock data can be replaced with real RSS ingestion without UI changes.
