"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "motion/react";

const TITLE_LINES = [
  { text: "Tu marca", italic: false },
  { text: "conectada", italic: true },
  { text: "con audiencias", italic: false },
  { text: "reales.", italic: true },
];

const TOTAL_CHARS = TITLE_LINES.reduce((acc, l) => acc + l.text.length, 0);
const SWEEP_END = 0.35;

function Letter({
  char,
  progress,
  start,
  end,
  italic,
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  italic: boolean;
}) {
  const color = useTransform(progress, [start, end], ["#ffffff", "#ff2d8d"]);
  const display = char === " " ? " " : char;
  return (
    <motion.span
      style={{ color }}
      className={italic ? "italic font-light" : ""}
    >
      {display}
    </motion.span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const [overlay, setOverlay] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const handler = (e: Event) =>
      setOverlay(Boolean((e as CustomEvent<boolean>).detail));
    document.addEventListener("ui:modal", handler);
    return () => document.removeEventListener("ui:modal", handler);
  }, []);

  const fotoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fotoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const fotoOpacity = useTransform(scrollYProgress, [0, 0.8], [0.9, 0.35]);
  const bgGlow = useTransform(scrollYProgress, [0, 1], [0.18, 0.45]);

  let globalIdx = 0;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative grain min-h-screen w-full bg-black snap-start"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: useMotionTemplate`radial-gradient(60% 60% at 80% 40%, rgba(255,45,141,${bgGlow}) 0%, transparent 60%), radial-gradient(50% 50% at 20% 80%, rgba(168,85,247,0.12) 0%, transparent 70%)`,
        }}
      />

      <motion.div
        style={{ y: fotoY, scale: fotoScale }}
        animate={{ opacity: overlay ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-4 bottom-4 z-30 md:right-16 md:bottom-10"
      >
        <div className="relative">
          <span className="absolute -left-12 top-6 hidden font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 [writing-mode:vertical-rl] md:block">
            Portrait · 01 / Miranet
          </span>

          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 md:rounded-[2rem]"
            style={{
              width: "clamp(180px, 38vw, 420px)",
              aspectRatio: "4 / 5",
              boxShadow:
                "0 30px 80px -25px rgba(255,45,141,0.35), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <Image
              src="/foto-vero.jpg"
              alt="Verónica Jaramillo"
              fill
              priority
              fetchPriority="high"
              quality={85}
              sizes="(max-width: 768px) 220px, 420px"
              className="object-cover object-top"
              style={{
                filter: "grayscale(100%) contrast(115%) brightness(0.92)",
              }}
            />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,45,141,0.28) 0%, transparent 45%, rgba(0,0,0,0) 60%, rgba(168,85,247,0.18) 100%)",
                mixBlendMode: "color",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 50% 30%, transparent 40%, rgba(0,0,0,0.55) 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute -top-px left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,45,141,0.7), transparent)",
              }}
            />

            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.3em] text-white/80 backdrop-blur md:left-5 md:top-5 md:px-3 md:text-[9px]">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "#ff2d8d", boxShadow: "0 0 8px #ff2d8d" }}
              />
              Founder
            </div>
          </div>

          <div className="absolute -bottom-5 right-2 left-2 rounded-xl border border-white/10 bg-zinc-950/90 px-3 py-2.5 backdrop-blur-2xl md:-bottom-6 md:right-4 md:left-4 md:rounded-2xl md:px-5 md:py-4"
            style={{
              boxShadow:
                "0 20px 50px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            <div className="flex items-center justify-between gap-2 md:gap-3">
              <div className="min-w-0">
                <p className="truncate font-display text-xs leading-tight md:text-base">
                  Verónica Jaramillo
                </p>
                <p className="mt-0.5 truncate font-mono text-[7px] uppercase tracking-[0.25em] text-white/50 md:text-[9px] md:tracking-[0.3em]">
                  CEO &amp; Founder · Miranet
                </p>
              </div>
              <div
                className="h-6 w-px shrink-0 md:h-8"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
              <p className="shrink-0 font-mono text-[7px] uppercase tracking-[0.25em] text-white/40 md:text-[9px] md:tracking-[0.3em]">
                Est.
                <br />
                <span className="text-white/70">2018</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-40 md:px-10 md:pt-32 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-white/60"
        >
          <span className="h-px w-12" style={{ background: "#ff2d8d" }} />
          Agencia de Marketing · Medellín
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.85] tracking-tight">
          {TITLE_LINES.map((line, lineIdx) => (
            <motion.span
              key={lineIdx}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 + lineIdx * 0.12 }}
              className="block"
            >
              {[...line.text].map((char) => {
                const idx = globalIdx++;
                const start = (idx / TOTAL_CHARS) * SWEEP_END;
                const end = ((idx + 1) / TOTAL_CHARS) * SWEEP_END + 0.015;
                return (
                  <Letter
                    key={idx}
                    char={char}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                    italic={line.italic}
                  />
                );
              })}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <p className="text-base leading-relaxed text-white/70">
            Llevamos más de 8 años transformando marcas en experiencias de
            lujo en Colombia y Estados Unidos. Branding, contenido audiovisual
            y marketing estratégico diseñado para negocios que buscan
            posicionamiento, exclusividad y crecimiento real.
          </p>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="#maletas"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-white px-7 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-black transition hover:bg-pink-500 hover:text-white sm:self-end"
            >
              Ver servicios
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#brands"
              className="inline-flex items-center gap-3 self-start font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 transition hover:text-white sm:self-end"
            >
              Marcas que confían
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-6 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 md:left-10 md:right-10"
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              ↓
            </motion.span>
            Scroll
          </span>
          <span className="hidden md:inline">
            © Miranet SAS · {new Date().getFullYear()}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
