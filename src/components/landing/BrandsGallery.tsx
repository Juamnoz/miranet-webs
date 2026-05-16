"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BRANDS, type Brand } from "@/lib/brands";

export function BrandsGallery() {
  const [active, setActive] = useState<Brand | null>(null);

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent("ui:modal", { detail: !!active })
    );
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="brands" className="relative bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 md:mb-5 md:text-[11px]">
              <span className="h-px w-8 bg-white/30" />
              03 / Portafolio
            </p>
            <h2 className="font-display text-balance text-4xl leading-[0.95] md:text-7xl">
              Marcas que{" "}
              <span style={{ color: "#ff2d8d" }} className="italic">
                confían
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            Trabajamos con marcas en Colombia y Estados Unidos. Click cualquiera
            para ver su perfil de Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {BRANDS.map((b, idx) => (
            <motion.button
              key={b.slug}
              onClick={() => setActive(b)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.04] md:p-6"
            >
              <div
                className="pointer-events-none absolute -top-px left-0 right-0 h-px opacity-0 transition group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #ff2d8d, transparent)",
                }}
              />

              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <img
                    src={`https://hatscripts.github.io/circle-flags/flags/${b.country.toLowerCase()}.svg`}
                    alt={b.country}
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded-full ring-1 ring-white/15"
                  />
                </div>

                <div className="relative my-2 flex flex-1 items-center justify-center md:my-3">
                  <div className="relative aspect-square h-full overflow-hidden rounded-xl md:rounded-2xl">
                    <Image
                      src={`/brands/${b.slug}.png`}
                      alt={b.name}
                      fill
                      sizes="(max-width: 768px) 40vw, 22vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-display text-[13px] leading-tight text-white md:text-base">
                    {b.name}
                  </p>
                  <p className="mt-1 truncate font-mono text-[9px] uppercase tracking-[0.15em] text-white/40 md:text-[10px]">
                    {b.handle}
                  </p>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -bottom-12 right-0 h-24 w-24 rounded-full opacity-0 blur-3xl transition group-hover:opacity-100"
                style={{ background: "rgba(255,45,141,0.25)" }}
              />
            </motion.button>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: BRANDS.length * 0.05 }}
            className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.01] p-4 backdrop-blur-sm md:p-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              {String(BRANDS.length + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-display text-2xl leading-tight">
                Tu marca
                <br />
                <span style={{ color: "#ff2d8d" }} className="italic">
                  aquí.
                </span>
              </p>
              <a
                href="#contacto"
                className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
              >
                Iniciar proyecto →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-white/[0.02] p-10">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src={`/brands/${active.slug}.png`}
                    alt={active.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(50% 50% at 50% 100%, rgba(255,45,141,0.18), transparent 70%)",
                  }}
                />
              </div>
              <div className="border-t border-white/5 p-7">
                <div className="flex items-center gap-2">
                  <img
                    src={`https://hatscripts.github.io/circle-flags/flags/${active.country.toLowerCase()}.svg`}
                    alt={active.country}
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] rounded-full ring-1 ring-white/15"
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {active.country === "CO" ? "Colombia" : "Estados Unidos"} ·{" "}
                    {active.category}
                  </p>
                </div>
                <h3 className="mt-2 font-display text-3xl">{active.name}</h3>
                <p className="mt-1 font-mono text-xs text-white/50">
                  {active.handle}
                </p>
                <div className="mt-7 flex gap-3">
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full bg-white px-5 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-black transition hover:bg-pink-500 hover:text-white"
                  >
                    Instagram ↗
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    className="rounded-full border border-white/15 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition hover:bg-white/5"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
