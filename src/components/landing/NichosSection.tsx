"use client";

import { motion } from "motion/react";
import { NICHOS } from "@/lib/brands";

const IMAGES: Record<string, string> = {
  Hoteles:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
  Restaurantes:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
  Moda: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80",
  Belleza:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
  Airbnb:
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
  Empresas:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  Eventos:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
};

export function NichosSection() {
  return (
    <section id="nichos" className="relative bg-black">
      <div className="border-t border-white/5 bg-black/80 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="mb-5 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 md:text-[11px]">
            <span className="h-px w-8 bg-white/30" />
            04 · Industrias
          </p>
          <h2 className="font-display text-balance text-4xl leading-[0.95] md:text-7xl">
            Donde tu marca{" "}
            <span style={{ color: "#ff2d8d" }} className="italic">
              brilla.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/50 md:mt-6 md:text-base">
            Cada industria tiene un lenguaje propio. Trabajamos con el tuyo.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-[30vh] md:px-10 md:pb-[40vh]">
        {NICHOS.map((n, idx) => (
          <div
            key={n.name}
            className="sticky px-0 pt-4 md:px-2 md:pt-6"
            style={{
              top: `clamp(64px, calc(64px + ${idx * 18}px), 200px)`,
              marginBottom: idx === NICHOS.length - 1 ? 0 : "8vh",
              zIndex: idx + 1,
            }}
          >
            <motion.article
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/70 backdrop-blur-2xl md:rounded-[2.5rem]"
              style={{
                boxShadow:
                  "0 30px 80px -20px rgba(255,45,141,0.15), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(60% 60% at 85% 20%, rgba(255,45,141,0.22) 0%, transparent 60%), radial-gradient(40% 40% at 10% 90%, rgba(168,85,247,0.14) 0%, transparent 70%)",
                }}
              />
              <div
                className="pointer-events-none absolute -top-px left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,45,141,0.6), transparent)",
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto">
                  <img
                    src={IMAGES[n.name]}
                    alt={n.name}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-zinc-950/60" />
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-60"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 50% 50%, rgba(255,45,141,0.25), transparent 70%)",
                    }}
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-white/80 backdrop-blur md:left-6 md:top-6 md:px-3 md:text-[10px]">
                    {n.name}
                  </span>
                </div>

                <div className="flex flex-col justify-between gap-4 p-5 md:gap-10 md:p-14">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 md:text-[10px]">
                      {String(idx + 1).padStart(2, "0")} / {String(NICHOS.length).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-4xl leading-none md:mt-3 md:text-7xl">
                      {n.name}
                    </h3>
                  </div>

                  <div>
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 md:mb-4 md:text-[10px]">
                      Servicios recomendados
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                      {n.maletas.map((m) => (
                        <a
                          key={m}
                          href="#maletas"
                          className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white transition hover:border-white hover:bg-white hover:text-black md:px-5 md:py-2 md:text-xs"
                        >
                          {m}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        ))}
      </div>
    </section>
  );
}
