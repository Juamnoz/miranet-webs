# CLAUDE.md — miranet-sas

Standards for high-quality web dev. Read before code.

---

## Stack

- **Frontend** Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui — port 3002
- **Backend** Hono + Drizzle ORM + PostgreSQL — port 3001
- **State** Zustand (client), TanStack Query (server)
- **Forms** react-hook-form + Zod
- **Auth** JWT (15m) + refresh (30d)
- **Animations** Motion (Framer Motion v12)
- **Icons** lucide-react

---

## Dev Commands

```bash
# Frontend
npm install
npm run dev          # localhost:3002 (Turbopack)
npm run build
npm run typecheck
npm run lint

# Backend
cd api && npm install
npm run dev          # localhost:3001 (tsx watch)
npm run db:generate  # after schema change
npm run db:migrate
npm run db:studio
```

No test suite yet. No tsc gate — fix direct errors.

---

## Folder Layout

```
miranet-sas/
├── src/                    # Next.js frontend
│   ├── app/
│   │   ├── dashboard/      # protected
│   │   ├── api/            # route handlers (BFF only — heavy logic in /api)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/             # shadcn primitives
│   │   └── layout/         # nav, sidebar, footer
│   ├── lib/
│   │   ├── api.ts          # ALL HTTP calls go here (JWT attach)
│   │   └── utils.ts        # cn(), formatters
│   ├── stores/             # Zustand stores
│   ├── hooks/              # custom hooks
│   └── types/              # shared types
│
└── api/                    # Hono backend
    └── src/
        ├── index.ts        # route mount
        ├── db/schema.ts    # Drizzle schema — source of truth
        ├── middleware/auth.ts
        ├── routes/
        ├── utils/
        └── scripts/        # seeds, migrations
```

---

## Quality Rules

### Code
- TypeScript strict. No `any` — use `unknown` + narrowing.
- Zod schemas at all boundaries (API in/out, form input, env vars).
- Server Components by default. `"use client"` only when needed (state, effects, browser APIs).
- No premature abstractions. 3 similar lines beats wrong abstraction.
- No comments explaining WHAT — names do that. Comments only for non-obvious WHY.
- No dead code. Delete unused completely, don't leave `_var` or `// removed`.

### Performance
- Image: `next/image` always. Never raw `<img>`.
- Fonts: `next/font` with subset + display swap.
- Dynamic imports for client-heavy components.
- Server-side data fetching when possible. Stream with Suspense.
- No client-side waterfalls. Parallel fetches in Server Components.

### Accessibility
- Semantic HTML before ARIA. `<button>` not `<div onClick>`.
- Keyboard nav: every interactive element reachable + focus-visible.
- Color contrast WCAG AA min. Test light + dark.
- Form labels associated. Errors announced.

### Security
- Never trust client input. Validate with Zod server-side.
- JWT in httpOnly cookie OR Authorization header — never localStorage for sensitive.
- Parameterize SQL via Drizzle. No raw string concat.
- CORS strict — `CORS_ORIGIN` env, no wildcard in prod.
- Rate-limit auth endpoints.
- No secrets in client bundle. `NEXT_PUBLIC_*` is public.

### Styling
- Tailwind v4. Use design tokens (`bg-background`, `text-foreground`), not hardcoded `bg-white`.
- Dark + light mode both work. Test toggle.
- Mobile-first. Breakpoints `sm md lg xl 2xl`.
- shadcn/ui as primitive layer. Compose, don't fork.
- Animations: Motion. Stagger containers for lists. Respect `prefers-reduced-motion`.

### State
- Zustand for global client state (auth, UI prefs).
- TanStack Query for server state — no manual `useEffect` + fetch.
- URL state for filters/pagination via `useSearchParams`.
- Local state with `useState` when scope is component-only.

### API Design (Hono)
- `/v1/...` prefix all routes.
- Zod validator middleware on every body/query.
- Error responses: `{ error: string, code?: string, details?: unknown }`.
- 4xx for client errors, 5xx for server. Never leak stack traces.
- Pagination: cursor-based when list > 100 items.

### DB (Drizzle)
- Single `schema.ts` file. All tables there.
- After change: `db:generate` → review migration → `db:migrate`.
- Foreign keys explicit. `onDelete` cascade/restrict explicit.
- Index any column you query on.
- UUID primary keys (not autoincrement) for portability.

---

## Auth Pattern

JWT payload: `{ sub, email, role, orgId }`.

Roles: `superadmin` → `owner | admin | member`.

Middleware extracts + attaches to `c.set("user", ...)`. Protected routes call `requireAuth()`.

---

## Forbidden

- `vercel deploy` for backend (Hono runs elsewhere — VPS/container).
- Hardcoded colors (`bg-white`, `text-zinc-500`). Use tokens.
- `console.log` in committed code. Use proper logger.
- `useEffect` for data fetching. Use TanStack Query or RSC.
- Mixing client + server logic in same file without `"use client"` boundary.
- Skipping Zod validation "because we control the caller".

---

## Skills Available

`.claude/skills/` has 39+ curated skills. Use via Skill tool:
- `nextjs`, `hono-routing`, `tailwind-v4-shadcn`, `drizzle-orm-d1`
- `ai-sdk-core`, `ai-sdk-ui`, `claude-api`, `openai-api`, `google-gemini-api`
- `clerk-auth`, `better-auth`
- `zustand-state-management`, `tanstack-query`, `react-hook-form-zod`
- `vercel-react-best-practices`, `accessibility`, `seo-meta`
- `playwright-local`, `webapp-testing`, `testing-library`, `vitest`
- `motion`, `tailwind-patterns`, `theme-factory`, `frontend-design`
- `vercel/nextjs`, `vercel/ai-sdk`, `vercel/shadcn` (official Vercel skills)

---

## Memory

Persistent context in `memory/MEMORY.md`. Update with project decisions, user feedback, external refs. See file for index.

---

## Commit Style

Conventional Commits. Subject ≤50 chars. Body only when "why" not obvious.

```
feat(auth): add refresh token rotation
fix(api): reservation date overlap check off-by-one
chore(deps): bump next to 16.0.1
```

Co-author Claude when AI-assisted:
```
Co-Authored-By: Claude <noreply@anthropic.com>
```
