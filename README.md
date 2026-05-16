# miranet-sas

SaaS web app. Next.js 16 + Hono + Drizzle + Postgres.

## Quick start

```bash
# Frontend
cp .env.example .env.local
npm install
npm run dev          # http://localhost:3002

# Backend (in another terminal)
cd api
cp .env.example .env
npm install
npm run dev          # http://localhost:3001
```

## Structure

- `src/` Next.js frontend (App Router)
- `api/` Hono backend + Drizzle schema
- `.claude/skills/` curated Claude Code skills
- `memory/MEMORY.md` persistent context for Claude
- `CLAUDE.md` quality standards + dev guide

## Docs

See `CLAUDE.md` for stack, conventions, quality rules.
