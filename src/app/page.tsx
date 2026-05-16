import { Nav } from "@/components/layout/Nav";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { MaletasSection } from "@/components/landing/MaletasSection";
import { BrandsGallery } from "@/components/landing/BrandsGallery";
import { NichosSection } from "@/components/landing/NichosSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Nav />
      <Hero />
      <Stats />
      <MaletasSection />
      <BrandsGallery />
      <NichosSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
