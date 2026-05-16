# miranet-sas — Memory

## Project
miranet-sas: SaaS web app. Stack Next.js 16 + Hono + Drizzle + Postgres.
- Frontend `/Users/admin/Desktop/miranet-sas` → :3002
- Backend `/Users/admin/Desktop/miranet-sas/api` → :3001
- DB: Postgres (TBD: VPS, Neon, Supabase)

## Status
- Scaffold inicial creado 2026-05-16
- Sin DB conectada aún
- Sin auth implementada aún
- Sin features definidas

## Convenciones
Ver `CLAUDE.md` raíz para reglas de calidad completas.

## Decisiones pendientes
- [ ] Host DB (Neon vs VPS vs Supabase)
- [ ] Auth provider (custom JWT vs Clerk vs better-auth)
- [ ] Deploy target frontend (Vercel)
- [ ] Deploy target backend (Railway / Fly / VPS)
- [ ] Dominio
- [ ] Vertical / dominio del negocio

## Reglas de trabajo
- Responder siempre en español
- No correr `tsc` ni builds de verificación a menos que se pida
- Conventional Commits + co-author Claude cuando aplica
- Editar archivos existentes antes de crear nuevos

## Skills disponibles
`.claude/skills/` — 39 skills curadas. Ver `CLAUDE.md` para lista.
