import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miranet · Agencia de Marketing",
  description:
    "Tu marca conectada con audiencias reales. Branding, contenido y publicidad para marcas que quieren crecer.",
  metadataBase: new URL("https://miranetsas.com.co"),
  openGraph: {
    title: "Miranet · Agencia de Marketing",
    description: "Tu marca conectada con audiencias reales.",
    type: "website",
    locale: "es_CO",
    images: ["/foto-vero.jpg"],
  },
  icons: {
    icon: "/logo-miranet.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Warm the TCP/TLS connection for late-loading SVG flags and Unsplash images */}
        <link rel="preconnect" href="https://hatscripts.github.io" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://hatscripts.github.io" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
