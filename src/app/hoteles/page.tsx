import type { Metadata } from "next";
import { IndustryPage } from "@/components/landing/IndustryPage";
import { INDUSTRIES } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Miranet · Hoteles — Marketing de lujo para hospitality",
  description:
    "Posicionamos hoteles boutique, luxury y resorts en Colombia y EE.UU. Reservas directas, contenido audiovisual y campañas que llenan habitaciones.",
};

export default function HotelesPage() {
  return <IndustryPage industry={INDUSTRIES.hoteles} />;
}
