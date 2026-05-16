import type { Metadata } from "next";
import { IndustryPage } from "@/components/landing/IndustryPage";
import { INDUSTRIES } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Miranet · Restaurantes — Llena el salón cada noche",
  description:
    "Marketing y contenido para restaurantes, restobares y fine dining en Colombia y EE.UU. Producción audiovisual, redes y campañas que llenan reservas.",
};

export default function RestaurantesPage() {
  return <IndustryPage industry={INDUSTRIES.restaurantes} />;
}
