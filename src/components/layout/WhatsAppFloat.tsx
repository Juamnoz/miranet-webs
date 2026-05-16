"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function WhatsAppFloat() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<boolean>).detail;
      setHidden(Boolean(detail));
    };
    document.addEventListener("ui:modal", handler);
    return () => document.removeEventListener("ui:modal", handler);
  }, []);

  return (
    <motion.a
      href="https://wa.me/573015970982?text=Hola%20Miranet%2C%20quiero%20cotizar"
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{
        opacity: hidden ? 0 : 1,
        scale: hidden ? 0.6 : 1,
        y: hidden ? 30 : 0,
      }}
      transition={{
        delay: hidden ? 0 : 1.5,
        type: "spring",
        damping: 14,
        stiffness: 180,
      }}
      whileHover={{ scale: hidden ? 0.6 : 1.06 }}
      whileTap={{ scale: hidden ? 0.6 : 0.95 }}
      style={{ pointerEvents: hidden ? "none" : "auto" }}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 md:bottom-8 md:right-8"
    >
      <span className="hidden translate-x-2 rounded-full border border-white/10 bg-zinc-950/85 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 opacity-0 backdrop-blur-2xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Cotizar por WhatsApp
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center">
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.5), transparent 70%)",
            animation: "wa-pulse 2.4s ease-out infinite",
          }}
        />
        <span
          className="absolute inset-0 rounded-full opacity-70"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.35), transparent 70%)",
            animation: "wa-pulse 2.4s ease-out infinite 0.8s",
          }}
        />
        <span
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 backdrop-blur-xl"
          style={{
            background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
            boxShadow:
              "0 12px 40px -8px rgba(37,211,102,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset",
          }}
        >
          <svg
            viewBox="0 0 32 32"
            className="h-6 w-6 fill-white"
            aria-hidden="true"
          >
            <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.255.589 4.463 1.708 6.412L3.2 28.8l6.555-1.715A12.74 12.74 0 0 0 16.001 28.8c7.07 0 12.8-5.73 12.8-12.8 0-3.42-1.332-6.633-3.749-9.05A12.71 12.71 0 0 0 16.001 3.2zm0 23.4a10.6 10.6 0 0 1-5.404-1.479l-.387-.23-4.022 1.053 1.073-3.917-.252-.402a10.6 10.6 0 0 1-1.62-5.625c0-5.86 4.76-10.6 10.612-10.6 2.832 0 5.49 1.105 7.494 3.108a10.55 10.55 0 0 1 3.106 7.492c0 5.86-4.76 10.6-10.6 10.6zm5.806-7.937c-.318-.16-1.881-.927-2.171-1.033-.291-.107-.503-.16-.715.16-.211.317-.821 1.033-1.007 1.244-.185.213-.371.24-.689.08-.317-.16-1.34-.494-2.553-1.576-.943-.842-1.582-1.882-1.767-2.2-.185-.317-.02-.488.139-.647.143-.142.317-.371.476-.556.16-.186.211-.318.317-.531.106-.213.053-.397-.027-.557-.08-.16-.715-1.722-.98-2.357-.257-.62-.52-.536-.715-.547l-.609-.011a1.17 1.17 0 0 0-.848.397c-.291.318-1.113 1.087-1.113 2.65 0 1.564 1.14 3.075 1.299 3.288.16.213 2.244 3.428 5.435 4.806.76.328 1.353.524 1.815.671.762.243 1.456.209 2.005.127.612-.092 1.881-.769 2.146-1.512.265-.742.265-1.378.185-1.512-.08-.133-.291-.213-.609-.371z" />
          </svg>
        </span>
      </span>
    </motion.a>
  );
}
