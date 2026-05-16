export type Maleta = {
  slug: string;
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  gradient: string;
  accent: string;
};

export const MALETAS: Maleta[] = [
  {
    slug: "launch",
    emoji: "✈️",
    name: "Elevate",
    tagline: "Arranca fuerte.",
    description: "Identidad visual y presencia digital desde cero.",
    includes: [
      "Branding básico",
      "Optimización de redes",
      "Diseño de perfil",
      "Feed inicial",
      "Asesoría estratégica",
      "Identidad visual",
    ],
    gradient: "from-fuchsia-600/30 via-black to-black",
    accent: "#ff2d8d",
  },
  {
    slug: "social",
    emoji: "📱",
    name: "Social",
    tagline: "Presencia que conecta.",
    description: "Manejo de redes con estrategia y consistencia.",
    includes: [
      "Manejo de redes",
      "Calendario de contenido",
      "Diseño gráfico mensual",
      "Historias estratégicas",
      "Copys de publicaciones",
      "Estudio completo de marca",
    ],
    gradient: "from-purple-600/30 via-black to-black",
    accent: "#a855f7",
  },
  {
    slug: "creator",
    emoji: "🎥",
    name: "Creator",
    tagline: "Contenido que vende.",
    description: "Producción audiovisual auténtica para tu marca.",
    includes: [
      "Producción de contenido",
      "Grabación de video",
      "Fotografía profesional",
      "Edición",
      "Dirección creativa",
      "Cobertura en sitio",
    ],
    gradient: "from-pink-600/30 via-black to-black",
    accent: "#ec4899",
  },
  {
    slug: "ads",
    emoji: "🚀",
    name: "Ads",
    tagline: "Crece con datos.",
    description: "Campañas que convierten, no solo gustan.",
    includes: [
      "Campañas publicitarias",
      "Meta Ads",
      "Segmentación",
      "Remarketing",
      "Optimización",
      "Reportes mensuales",
    ],
    gradient: "from-violet-600/30 via-black to-black",
    accent: "#8b5cf6",
  },
  {
    slug: "luxury",
    emoji: "✨",
    name: "Luxury",
    tagline: "Lujo en cada frame.",
    description: "Audiovisual premium para marcas que se ven distinto.",
    includes: [
      "Audiovisual premium",
      "Dirección creativa",
      "Modelos y UGC",
      "Tomas con drone",
      "Estrategia visual",
      "Posicionamiento",
    ],
    gradient: "from-rose-500/30 via-black to-black",
    accent: "#f43f5e",
  },
  {
    slug: "influence",
    emoji: "🌍",
    name: "Influencer",
    tagline: "Voz amplificada.",
    description: "Creadores reales conectando con tu audiencia.",
    includes: [
      "Influencers",
      "Microinfluencers",
      "UGC creators",
      "Gestión de colaboraciones",
      "Estrategia de campaña",
      "Métricas de impacto",
    ],
    gradient: "from-indigo-600/30 via-black to-black",
    accent: "#6366f1",
  },
  {
    slug: "empire",
    emoji: "👑",
    name: "Diamond Elite",
    tagline: "Todo en uno.",
    description: "Estrategia 360 para escalar tu marca de verdad.",
    includes: [
      "Estrategia 360",
      "Branding completo",
      "Audiovisual",
      "Publicidad paga",
      "Community manager",
      "Landing page",
      "Automatizaciones",
      "Consultoría",
      "Escalamiento digital",
    ],
    gradient: "from-amber-500/20 via-fuchsia-700/20 to-black",
    accent: "#f59e0b",
  },
];
