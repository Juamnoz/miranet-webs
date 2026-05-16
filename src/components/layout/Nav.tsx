"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#maletas", label: "Servicios", n: "02" },
  { href: "#brands", label: "Clientes", n: "03" },
  { href: "#nichos", label: "Industrias", n: "04" },
  { href: "#contacto", label: "Contacto", n: "05" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.dispatchEvent(
      new CustomEvent("ui:modal", { detail: open })
    );
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled || open
            ? "bg-black/30 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-6">
          <a href="#hero" className="flex items-center gap-2">
            <Image
              src="/logo-miranet.png"
              alt="Miranet"
              width={120}
              height={40}
              className="h-7 w-auto brightness-0 invert md:h-8"
              priority
            />
          </a>

          <ul className="hidden gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/573015970982"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-pink-500 hover:bg-pink-500 hover:text-white md:inline-block lg:px-5"
              style={{ borderColor: scrolled ? "#ff2d8d" : "rgba(255,255,255,0.15)" }}
            >
              Hablar
            </a>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/10 md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-2xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col px-5 pb-10 pt-24"
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(60% 50% at 80% 20%, rgba(255,45,141,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(168,85,247,0.14) 0%, transparent 70%)",
                }}
              />
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                Menú · Miranet
              </p>
              <ul className="flex flex-col gap-1">
                {LINKS.map((l, idx) => (
                  <motion.li
                    key={l.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + idx * 0.06, duration: 0.4 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-white/5 py-5"
                    >
                      <span className="font-display text-4xl">{l.label}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 transition group-hover:text-pink-400">
                        {l.n} →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto space-y-3"
              >
                <a
                  href="https://wa.me/573015970982?text=Hola%20Miranet"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-full py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white transition active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                  }}
                >
                  WhatsApp · 301 597 0982
                </a>
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Medellín · CO · 2026
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
