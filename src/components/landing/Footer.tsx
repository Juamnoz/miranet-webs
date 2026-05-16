"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { MALETAS } from "@/lib/maletas";

const TITLE_LINES = [
  { text: "Tu próximo gran", italic: false },
  { text: "proyecto", italic: false },
  { text: "comienza aquí.", italic: true },
];
const TITLE_TOTAL = TITLE_LINES.reduce((a, l) => a + l.text.length, 0);
const SWEEP_END = 0.85;

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
  const display = char === " " ? " " : char;
  return (
    <motion.span
      style={{ color }}
      className={italic ? "italic font-light" : ""}
    >
      {display}
    </motion.span>
  );
}

type FormState = {
  nombre: string;
  email: string;
  marca: string;
  servicio: string;
  mensaje: string;
};

const INITIAL: FormState = {
  nombre: "",
  email: "",
  marca: "",
  servicio: "",
  mensaje: "",
};

const WA_NUMBER = "573015970982";

export function Footer() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [openSelect, setOpenSelect] = useState(false);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end center"],
  });

  const update = (k: keyof FormState, v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() && !form.mensaje.trim()) {
      window.open(`https://wa.me/${WA_NUMBER}`, "_blank");
      return;
    }
    const parts = [
      "Hola Miranet 👋",
      "",
      form.nombre ? `Soy *${form.nombre}*${form.marca ? ` de *${form.marca}*` : ""}.` : null,
      form.email ? `Email: ${form.email}` : null,
      form.servicio ? `Servicio de interés: *${form.servicio}*` : null,
      "",
      form.mensaje || "Quisiera más información.",
    ].filter(Boolean);
    const text = encodeURIComponent(parts.join("\n"));
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <footer
      id="contacto"
      className="relative grain border-t border-white/5 bg-black"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 0%, rgba(255,45,141,0.18) 0%, transparent 70%), radial-gradient(50% 50% at 80% 100%, rgba(168,85,247,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-5 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
            <span className="h-px w-8 bg-white/30" />
            05 · Contacto
          </p>
          <h2
            ref={titleRef}
            className="font-display text-balance text-5xl leading-[0.95] md:text-8xl"
          >
            {(() => {
              let globalIdx = 0;
              return TITLE_LINES.map((line, lineIdx) => (
                <span key={lineIdx} className="block">
                  {[...line.text].map((char) => {
                    const idx = globalIdx++;
                    const start = (idx / TITLE_TOTAL) * SWEEP_END;
                    const end =
                      ((idx + 1) / TITLE_TOTAL) * SWEEP_END + 0.015;
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
                </span>
              ));
            })()}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-2xl md:rounded-[2rem] md:p-10 lg:col-span-7"
            style={{
              boxShadow:
                "0 30px 80px -25px rgba(255,45,141,0.18), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-px left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,45,141,0.6), transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(60% 60% at 85% 0%, rgba(255,45,141,0.12) 0%, transparent 60%)",
              }}
            />

            <div className="mb-8 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                Formulario · WhatsApp directo
              </p>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-400/80">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  style={{ boxShadow: "0 0 8px #22c55e" }}
                />
                Respondemos &lt; 24h
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Nombre"
                placeholder="¿Cómo te llamas?"
                value={form.nombre}
                onChange={(v) => update("nombre", v)}
                required
              />
              <Field
                label="Email"
                type="email"
                placeholder="tu@correo.com"
                value={form.email}
                onChange={(v) => update("email", v)}
              />
              <Field
                label="Marca · Empresa"
                placeholder="Nombre del negocio"
                value={form.marca}
                onChange={(v) => update("marca", v)}
                className="sm:col-span-2"
              />

              <div className="relative sm:col-span-2">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Servicio de interés
                </label>
                <button
                  type="button"
                  onClick={() => setOpenSelect((o) => !o)}
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-left text-sm text-white transition hover:border-white/25 focus:border-white/40 focus:outline-none"
                >
                  <span className={form.servicio ? "" : "text-white/30"}>
                    {form.servicio || "Elige uno (opcional)"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-white/40 transition ${openSelect ? "rotate-180" : ""}`}
                  />
                </button>
                {openSelect && (
                  <div className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/95 p-1 backdrop-blur-2xl">
                    {MALETAS.map((m) => (
                      <button
                        type="button"
                        key={m.slug}
                        onClick={() => {
                          update("servicio", `${m.name} · ${m.tagline}`);
                          setOpenSelect(false);
                        }}
                        className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/80 transition hover:bg-white/[0.05] hover:text-white"
                      >
                        <span className="font-display">{m.name}</span>
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.2em]"
                          style={{ color: m.accent }}
                        >
                          {m.tagline}
                        </span>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        update("servicio", "No estoy seguro");
                        setOpenSelect(false);
                      }}
                      className="w-full rounded-lg px-3 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 transition hover:bg-white/[0.05] hover:text-white"
                    >
                      No estoy seguro / Asesoría
                    </button>
                  </div>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Cuéntanos tu proyecto
                </label>
                <textarea
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => update("mensaje", e.target.value)}
                  placeholder="¿Qué necesitas resolver? ¿Hace cuánto tienes la marca? ¿Cuál es tu objetivo?"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition focus:border-white/40 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-white transition hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                  boxShadow: "0 12px 30px -8px rgba(37,211,102,0.45)",
                }}
              >
                Enviar a WhatsApp
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Se abre WhatsApp con tu mensaje pre-llenado
              </p>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            <ContactCard
              icon={MapPin}
              label="Dirección"
              value="Medellín · Colombia"
              extra="West Palm Beach · Miami"
            />
            <ContactCard
              icon={Phone}
              label="Celular · WhatsApp"
              value="301 597 0982"
              href="https://wa.me/573015970982"
              accent
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value="miranetsas@gmail.com"
              href="mailto:miranetsas@gmail.com"
            />
            <ContactCard
              icon={Instagram}
              label="Instagram"
              value="@miranetsas"
              href="https://instagram.com/miranetsas"
            />

            <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-5 backdrop-blur-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                Horario
              </p>
              <div className="mt-3 flex items-baseline justify-between">
                <p className="font-display text-2xl">Lun – Vie</p>
                <p className="font-mono text-xs text-white/60">9:00 – 18:00</p>
              </div>
              <div className="mt-1.5 flex items-baseline justify-between">
                <p className="font-display text-xl text-white/60">Sábado</p>
                <p className="font-mono text-xs text-white/60">10:00 – 14:00</p>
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                WhatsApp 24/7 · Respuesta &lt; 24h
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-10 md:flex-row">
          <Image
            src="/logo-miranet.png"
            alt="Miranet"
            width={160}
            height={50}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} Miranet SAS · Verónica Jaramillo
          </p>
        </div>
      </div>
    </footer>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
        {label}
        {required && <span className="ml-1 text-pink-400">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition focus:border-white/40 focus:outline-none"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  extra,
  href,
  accent,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  extra?: string;
  href?: string;
  accent?: boolean;
}) {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      {...(href
        ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" }
        : {})}
      className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 p-5 backdrop-blur-xl transition hover:border-white/25 hover:bg-zinc-950/70"
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/50 backdrop-blur"
        style={accent ? { boxShadow: "0 0 24px rgba(255,45,141,0.35)" } : undefined}
      >
        <Icon
          className={`h-5 w-5 ${accent ? "" : "text-white/70"}`}
          strokeWidth={1.5}
          style={accent ? { color: "#ff2d8d" } : undefined}
        />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          {label}
        </p>
        <p
          className={`mt-1 truncate font-display text-xl ${accent ? "" : "text-white"}`}
          style={accent ? { color: "#ff2d8d" } : undefined}
        >
          {value}
        </p>
        {extra && (
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            {extra}
          </p>
        )}
      </div>
      {href && (
        <ArrowRight className="h-4 w-4 text-white/30 transition group-hover:translate-x-1 group-hover:text-white" />
      )}
    </Comp>
  );
}
