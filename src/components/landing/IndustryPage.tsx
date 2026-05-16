"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import type { Industry } from "@/lib/industries";

const WA_NUMBER = "573015970982";

export function IndustryPage({ industry }: { industry: Industry }) {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(industry.ctaMessage)}`;
  const isVideo = industry.image.endsWith(".mp4");

  return (
    <main className="bg-black text-white">
      <Nav />

      <section
        id="hero"
        className="relative grain min-h-[90vh] w-full overflow-hidden bg-black"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 30%, rgba(255,45,141,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(168,85,247,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="absolute right-0 bottom-0 z-0 h-full w-full opacity-40 md:w-1/2 md:opacity-60">
          {isVideo ? (
            <video
              src={industry.image}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover grayscale"
            />
          ) : (
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              priority
              fetchPriority="high"
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-5 pt-28 pb-20 md:px-10 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white"
            >
              <ArrowLeft className="h-3 w-3" />
              Miranet · Inicio
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-white/60"
          >
            <span className="h-px w-12" style={{ background: "#ff2d8d" }} />
            Industria · {industry.name}
          </motion.p>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-balance leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            {industry.hero}
            <br />
            <span className="italic font-light" style={{ color: "#ff2d8d" }}>
              {industry.italic}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            {industry.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-black transition hover:-translate-y-0.5 hover:bg-pink-500 hover:text-white"
            >
              Hablemos de tu {industry.name.toLowerCase()}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#problemas"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
            >
              Por qué nosotros ↓
            </a>
          </motion.div>
        </div>
      </section>

      <section id="problemas" className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 md:text-[11px]">
              <span className="h-px w-8 bg-white/30" />
              01 · El problema
            </p>
            <h2 className="font-display text-balance text-4xl leading-[0.95] md:text-6xl">
              Lo que está{" "}
              <span style={{ color: "#ff2d8d" }} className="italic">
                frenando tu negocio.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {industry.pains.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-2xl md:rounded-3xl md:p-8"
              >
                <div
                  className="pointer-events-none absolute -top-px left-0 right-0 h-px opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,45,141,0.7), transparent)",
                  }}
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {p.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 50%, rgba(255,45,141,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-16 max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 md:text-[11px]">
              <span className="h-px w-8 bg-white/30" />
              02 · La solución
            </p>
            <h2 className="font-display text-balance text-4xl leading-[0.95] md:text-6xl">
              {industry.promise.split(".")[0]}.
              <br />
              <span style={{ color: "#ff2d8d" }} className="italic">
                {industry.promise.split(".").slice(1).join(".").trim()}
              </span>
            </h2>
          </div>
        </div>
      </section>

      <section id="servicios" className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 md:text-[11px]">
              <span className="h-px w-8 bg-white/30" />
              03 · Servicios recomendados
            </p>
            <h2 className="font-display text-balance text-4xl leading-[0.95] md:text-6xl">
              Para tu{" "}
              <span style={{ color: "#ff2d8d" }} className="italic">
                {industry.name.toLowerCase()}.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {industry.services.map((s, i) => (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 backdrop-blur-2xl md:p-10"
                style={{
                  boxShadow: `0 30px 80px -20px ${s.accent}20, 0 0 0 1px rgba(255,255,255,0.04)`,
                }}
              >
                <div
                  className="pointer-events-none absolute -top-px left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${s.accent}99, transparent)`,
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 -z-10"
                  style={{
                    background: `radial-gradient(60% 60% at 85% 0%, ${s.accent}22 0%, transparent 60%)`,
                  }}
                />

                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Servicio · {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="mt-3 font-display leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="mt-3 font-display italic"
                  style={{ color: s.accent, fontSize: "1.2rem" }}
                >
                  {s.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
                  {s.desc}
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-black transition hover:-translate-y-0.5"
                  style={{ background: s.accent }}
                >
                  Cotizar {s.name}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <div className="rounded-[2.5rem] border border-white/10 bg-zinc-950/70 p-10 backdrop-blur-2xl md:p-16">
            <div
              className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
            >
              <Check className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="font-display text-balance text-4xl leading-[0.95] md:text-6xl">
              ¿Hablamos de tu{" "}
              <span style={{ color: "#ff2d8d" }} className="italic">
                {industry.name.toLowerCase()}?
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/65 md:text-lg">
              Te respondemos en menos de 24h. Sin formularios largos, sin
              demos eternos — un mensaje directo y empezamos.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-white transition hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                boxShadow: "0 12px 30px -8px rgba(37,211,102,0.45)",
              }}
            >
              Escribir por WhatsApp
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              301 597 0982 · Miranet SAS · Medellín
            </p>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/5 bg-black py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 transition hover:text-white"
          >
            <ArrowLeft className="h-3 w-3" />
            Volver a Miranet
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} Miranet SAS · Verónica Jaramillo
          </p>
        </div>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
