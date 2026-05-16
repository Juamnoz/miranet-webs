"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Rocket,
  MessageCircle,
  Camera,
  TrendingUp,
  Sparkles,
  Users,
  Crown,
  ArrowLeft,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { MALETAS } from "@/lib/maletas";

const ICONS: Record<string, LucideIcon> = {
  launch: Rocket,
  social: MessageCircle,
  creator: Camera,
  ads: TrendingUp,
  luxury: Sparkles,
  influence: Users,
  empire: Crown,
};

export function MaletasSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.clientWidth * 0.6;
      const idx = Math.round(el.scrollLeft / Math.max(cardW, 1));
      setActiveIdx(Math.min(idx, MALETAS.length - 1));
      setCanPrev(el.scrollLeft > 10);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="maletas" className="relative bg-black py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 md:mb-5 md:text-[11px]">
              <span className="h-px w-8 bg-white/30" />
              02 · Servicios
            </p>
            <h2 className="font-display text-balance text-4xl leading-[0.95] md:text-7xl">
              Soluciones que{" "}
              <span style={{ color: "#ff2d8d" }} className="italic">
                escalan.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/50 md:mt-6 md:text-base">
              Siete formas de construir, posicionar y escalar tu marca. Elige
              por dónde empezar.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-white/70 backdrop-blur transition hover:border-white/40 hover:bg-white/[0.06] hover:text-white disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Siguiente"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-white/70 backdrop-blur transition hover:border-white/40 hover:bg-white/[0.06] hover:text-white disabled:opacity-30"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
              {String(activeIdx + 1).padStart(2, "0")} / {String(MALETAS.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-5 pb-6 md:snap-proximity md:gap-5 md:px-10"
        style={{
          scrollPaddingLeft: "1.25rem",
          touchAction: "pan-x pan-y",
          overscrollBehaviorX: "contain",
        }}
      >
        {MALETAS.map((m, idx) => {
          const Icon = ICONS[m.slug];
          return (
            <motion.article
              key={m.slug}
              data-card
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative snap-start shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 backdrop-blur-2xl"
              style={{
                width: "min(440px, calc(100vw - 2.5rem))",
                boxShadow:
                  "0 24px 60px -20px rgba(255,45,141,0.18), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background: `radial-gradient(60% 60% at 85% 15%, ${m.accent}33 0%, transparent 60%), radial-gradient(45% 45% at 10% 95%, rgba(168,85,247,0.18) 0%, transparent 70%)`,
                }}
              />
              <div
                className="pointer-events-none absolute -top-px left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${m.accent}99, transparent)`,
                }}
              />

              <span
                className="pointer-events-none absolute -right-8 top-1/2 -z-10 -translate-y-1/2 select-none font-display font-bold leading-none tracking-tighter"
                style={{
                  fontSize: "18rem",
                  color: "transparent",
                  WebkitTextStroke: `1px ${m.accent}1a`,
                  opacity: 0.7,
                }}
                aria-hidden
              >
                {m.name.charAt(0)}
              </span>

              <div className="relative flex h-full flex-col gap-5 p-7 md:p-8">
                <div className="flex items-start justify-between">
                  <div
                    className="font-display leading-[0.8] tracking-tighter"
                    style={{
                      fontSize: "clamp(4.5rem, 9vw, 7rem)",
                      color: "transparent",
                      WebkitTextStroke: `1.2px ${m.accent}`,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40 backdrop-blur"
                    style={{ boxShadow: `0 0 24px ${m.accent}33` }}
                  >
                    <Icon
                      className="h-4 w-4"
                      style={{ color: m.accent }}
                      strokeWidth={1.5}
                    />
                  </span>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Servicio {String(idx + 1).padStart(2, "0")} / 07
                  </p>
                  <h3
                    className="mt-2 font-display leading-[0.9] tracking-tight"
                    style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
                  >
                    {m.name}
                  </h3>
                  <p
                    className="mt-2 font-display italic"
                    style={{ color: m.accent, fontSize: "1.05rem" }}
                  >
                    {m.tagline}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/65">
                    {m.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {m.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-mono text-[10px] uppercase tracking-[0.05em] text-white/75"
                    >
                      <span
                        className="mt-1 h-[3px] w-2.5 shrink-0 rounded-full"
                        style={{ background: m.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#contacto"
                    className="group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-black transition hover:-translate-y-0.5"
                    style={{ background: m.accent }}
                  >
                    Cotizar
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="#brands"
                    className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
                  >
                    Ver casos
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}

        <div className="shrink-0" style={{ width: "1px" }} aria-hidden />
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-center gap-2 px-6 md:px-10">
        {MALETAS.map((m, i) => (
          <button
            key={m.slug}
            aria-label={`Ir a ${m.name}`}
            onClick={() => {
              const el = trackRef.current;
              if (!el) return;
              const card = el.querySelectorAll<HTMLElement>("[data-card]")[i];
              if (card) el.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
            }}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === activeIdx ? 32 : 12,
              background: i === activeIdx ? m.accent : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
