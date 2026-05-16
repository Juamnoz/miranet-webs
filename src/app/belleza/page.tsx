import type { Metadata } from "next";
import { IndustryPage } from "@/components/landing/IndustryPage";
import { INDUSTRIES } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Miranet · Belleza — Agenda llena, clientas reales",
  description:
    "Marketing para spas, cosmetología y estética. Posicionamiento como autoridad, contenido constante y campañas de captación y reactivación.",
};

export default function BellezaPage() {
  return <IndustryPage industry={INDUSTRIES.belleza} />;
}
