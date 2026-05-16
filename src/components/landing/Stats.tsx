"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Sparkles,
  Users,
  TrendingUp,
  Clock,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  desc: string;
  icon: LucideIcon;
  accent: string;
};

const STATS: Stat[] = [
  {
    value: 60,
    suffix: "+",
    label: "Marcas",
    desc: "Branding e identidad lanzadas desde cero.",
    icon: Sparkles,
    accent: "#ff2d8d",
  },
  {
    value: 75,
    suffix: "+",
    label: "Creadores",
    desc: "Red activa de influencers y UGC en CO y US.",
    icon: Users,
    accent: "#a855f7",
  },
  {
    value: 80,
    suffix: "+",
    label: "Campañas",
    desc: "Meta Ads, TikTok y Google con métricas reales.",
    icon: TrendingUp,
    accent: "#ec4899",
  },
  {
    value: 8,
    suffix: "",
    label: "Años",
    desc: "Construyendo resultados, no solo seguidores.",
    icon: Clock,
    accent: "#f43f5e",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-14 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-12 md:items-end md:gap-12">
          <div className="md:col-span-7">
            <p className="mb-4 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 md:mb-5 md:text-[11px]">
              <span className="h-px w-8 bg-white/30" />
              01 · Experiencia
            </p>
            <h2 className="font-display text-balance text-4xl leading-[0.95] md:text-7xl">
              8 años haciendo{" "}
              <span style={{ color: "#ff2d8d" }} className="italic">
                que las marcas crezcan.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base">
              Trabajamos con marcas en Colombia y Estados Unidos. Los números
              no son ego: son la prueba de que el método funciona.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                Activos en CO · US
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {STATS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 p-4 backdrop-blur-2xl md:rounded-3xl md:p-7"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.03), 0 20px 60px -25px rgba(0,0,0,0.6)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(60% 80% at 80% 0%, ${s.accent}22 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="pointer-events-none absolute -top-px left-0 right-0 h-px opacity-50"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)`,
                  }}
                />

                <div className="flex items-start justify-between">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-black/40 backdrop-blur md:h-10 md:w-10 md:rounded-xl"
                    style={{ boxShadow: `0 0 20px ${s.accent}33` }}
                  >
                    <Icon
                      className="h-3 w-3 md:h-4 md:w-4"
                      style={{ color: s.accent }}
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30 md:text-[10px] md:tracking-[0.3em]">
                    0{idx + 1}/04
                  </span>
                </div>

                <div className="mt-4 md:mt-10">
                  <p
                    className="font-display text-4xl leading-none tracking-tighter md:text-7xl"
                    style={{ color: s.accent }}
                  >
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 font-display text-base leading-tight text-white md:mt-4 md:text-2xl">
                    {s.label}
                  </p>
                  <p className="mt-1.5 hidden font-mono text-[10px] uppercase tracking-[0.15em] leading-relaxed text-white/55 md:mt-2 md:block">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 flex gap-0.5 md:mt-8 md:gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-0.5 flex-1 rounded-full transition-all duration-500 md:h-1"
                      style={{
                        background:
                          i < Math.round((s.value / 100) * 12) || idx === 3
                            ? s.accent
                            : "rgba(255,255,255,0.08)",
                        opacity: idx === 3 ? (i < 8 ? 1 : 0.15) : 1,
                      }}
                    />
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2 md:tracking-[0.3em]">
          <span>Medellín · West Palm Beach · Miami</span>
          <span className="hidden h-3 w-px bg-white/15 md:inline-block" />
          <span>Industrias: hotelería · gastro · belleza · retail · eventos</span>
          <span className="hidden h-3 w-px bg-white/15 md:inline-block" />
          <span>Idiomas: ES · EN</span>
        </div>
      </div>
    </section>
  );
}
