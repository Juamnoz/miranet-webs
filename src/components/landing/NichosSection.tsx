"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { NICHOS } from "@/lib/brands";

const LINKABLE: Record<string, string> = {
  Hoteles: "/hoteles",
  Restaurantes: "/restaurantes",
  Belleza: "/belleza",
};

const IMAGES: Record<string, string> = {
  Hoteles:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
  Restaurantes:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
  Moda: "/moda-card.jpg",
  Belleza:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
  Airbnb: "/airbnb-card.jpg",
  Empresas:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  Eventos:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
};

const VIDEOS: Record<string, { src: string; poster: string }> = {
  Belleza: { src: "/video-belleza.mp4", poster: "/poster-belleza.jpg" },
};

/**
 * Lazy autoplaying video.
 * - preload="none" so the browser does NOT fetch anything on page load.
 * - Poster image (~10KB) is shown until the video element scrolls into view.
 * - IntersectionObserver triggers .load() + .play() the first time the card
 *   is within 200px of the viewport, and pauses when fully off-screen to
 *   save battery / decode cycles on long pages.
 */
function LazyVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!loaded) {
              // Attach the real src lazily, then start playback.
              el.src = src;
              el.load();
              setLoaded(true);
            }
            // play() may reject in some browsers if not user-initiated;
            // we keep it muted+playsInline so it should succeed.
            void el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [src, loaded]);

  return (
    <video
      ref={ref}
      // No `src` until the element is near the viewport.
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      // Hint the browser that this isn't critical to LCP.
      // @ts-expect-error - fetchPriority is valid HTML5 but not yet in React types
      fetchpriority="low"
      className={className}
      aria-hidden
    />
  );
}

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
        {NICHOS.map((n, idx) => {
          const video = VIDEOS[n.name];
          const imageSrc = IMAGES[n.name];
          const linkTo = LINKABLE[n.name];
          const ArticleWrap = linkTo
            ? (props: React.HTMLAttributes<HTMLDivElement>) => (
                <Link href={linkTo} className="block">
                  <motion.article {...(props as React.ComponentProps<typeof motion.article>)} />
                </Link>
              )
            : motion.article;
          return (
            <div
              key={n.name}
              className="sticky px-0 pt-4 md:px-2 md:pt-6"
              style={{
                top: `clamp(64px, calc(64px + ${idx * 18}px), 200px)`,
                marginBottom: idx === NICHOS.length - 1 ? 0 : "8vh",
                zIndex: idx + 1,
              }}
            >
              <ArticleWrap
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/70 backdrop-blur-2xl md:rounded-[2.5rem] ${linkTo ? "cursor-pointer transition hover:border-white/25" : ""}`}
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
                    {video ? (
                      <LazyVideo
                        src={video.src}
                        poster={video.poster}
                        className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0 hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={imageSrc}
                        alt={n.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover grayscale transition duration-700 hover:grayscale-0 hover:scale-105"
                      />
                    )}
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

                  <div className="relative flex flex-col justify-between gap-4 p-5 md:gap-10 md:p-14">
                    {linkTo && (
                      <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 backdrop-blur transition group-hover:border-white group-hover:bg-white group-hover:text-black md:right-6 md:top-6 md:h-11 md:w-11">
                        <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.75} />
                      </span>
                    )}

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 md:text-[10px]">
                        {String(idx + 1).padStart(2, "0")} / {String(NICHOS.length).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-display text-4xl leading-none md:mt-3 md:text-7xl">
                        {n.name}
                      </h3>
                      {linkTo && (
                        <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 md:text-[10px]">
                          Ver landing dedicado →
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 md:mb-4 md:text-[10px]">
                        Servicios recomendados
                      </p>
                      <div className="flex flex-wrap gap-2 md:gap-2.5">
                        {n.maletas.map((m) =>
                          linkTo ? (
                            <span
                              key={m}
                              className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white md:px-5 md:py-2 md:text-xs"
                            >
                              {m}
                            </span>
                          ) : (
                            <a
                              key={m}
                              href="#maletas"
                              className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white transition hover:border-white hover:bg-white hover:text-black md:px-5 md:py-2 md:text-xs"
                            >
                              {m}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleWrap>
            </div>
          );
        })}
      </div>
    </section>
  );
}
