export type Industry = {
  slug: "hoteles" | "restaurantes" | "belleza";
  name: string;
  hero: string;
  italic: string;
  intro: string;
  image: string;
  pains: { title: string; desc: string }[];
  promise: string;
  services: { name: string; tagline: string; desc: string; accent: string }[];
  ctaMessage: string;
};

export const INDUSTRIES: Record<Industry["slug"], Industry> = {
  hoteles: {
    slug: "hoteles",
    name: "Hoteles",
    hero: "Tu hotel merece",
    italic: "ser deseado.",
    intro:
      "Hoteles boutique, luxury y resorts: convertimos cada amenidad, vista y experiencia en una razón para reservar directamente.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1800&q=85",
    pains: [
      {
        title: "Dependes de Booking y Expedia",
        desc: "Cedes 18–25% de cada noche en comisiones. El huésped no recuerda tu marca, solo el portal.",
      },
      {
        title: "Tu Instagram no genera reservas",
        desc: "Likes que no se convierten. Fotos sin narrativa, sin pauta, sin embudo de venta.",
      },
      {
        title: "Compites por precio",
        desc: "Cuando un hotel se ve común, solo le queda bajar tarifas. La marca crea valor que justifica la tarifa.",
      },
    ],
    promise:
      "Posicionamos tu hotel como destino, no como habitación. Contenido audiovisual de lujo, embudo de reservas directas, y campañas que llegan al huésped correcto.",
    services: [
      {
        name: "Luxury",
        tagline: "Lujo en cada frame.",
        desc: "Audiovisual premium con dirección creativa, modelos, drone y enfoque editorial.",
        accent: "#f43f5e",
      },
      {
        name: "Diamond Elite",
        tagline: "Todo en uno.",
        desc: "Estrategia 360: branding, audiovisual, ads, community manager, landing y automatizaciones.",
        accent: "#f59e0b",
      },
    ],
    ctaMessage:
      "Hola Miranet, soy de un hotel y quiero recibir más reservas directas.",
  },
  restaurantes: {
    slug: "restaurantes",
    name: "Restaurantes",
    hero: "Llena el salón cada",
    italic: "noche.",
    intro:
      "Restobares, fine dining, gastrobars: tu cocina es arte. Tu marketing también debería serlo.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=85",
    pains: [
      {
        title: "Mesas vacías los días lentos",
        desc: "Lunes y martes flojos. Sin estrategia de contenido constante, la marca desaparece de la mente del comensal.",
      },
      {
        title: "Tu carta es un PDF aburrido",
        desc: "Los platos que más venden necesitan ser vistos. Foto, video, reels: arma de venta de primera línea.",
      },
      {
        title: "Reseñas inconsistentes",
        desc: "Sin gestión activa de redes y reputación, una mala reseña tumba 30 buenas. La marca firme protege la operación.",
      },
    ],
    promise:
      "Convertimos cada plato en contenido que se comparte, cada experiencia en un reel que llena reservas. Manejamos redes, campañas y producción audiovisual end-to-end.",
    services: [
      {
        name: "Creator",
        tagline: "Contenido que vende.",
        desc: "Producción audiovisual auténtica de platos, ambiente y momentos clave.",
        accent: "#ec4899",
      },
      {
        name: "Luxury",
        tagline: "Lujo en cada frame.",
        desc: "Para restaurantes premium: dirección creativa, modelos, drone, narrativa editorial.",
        accent: "#f43f5e",
      },
    ],
    ctaMessage:
      "Hola Miranet, tengo un restaurante y quiero llenar más mesas con marketing.",
  },
  belleza: {
    slug: "belleza",
    name: "Belleza",
    hero: "Cliente nuevo en",
    italic: "agenda llena.",
    intro:
      "Spas, cosmetología, estética avanzada, salones: tu trabajo se ve. Hagamos que se vea por las personas correctas.",
    image: "/video-belleza.mp4",
    pains: [
      {
        title: "Citas vacías entre semana",
        desc: "Tu técnica es excelente, pero el flujo de clientes es irregular. La marca constante crea demanda constante.",
      },
      {
        title: "Compites con franquicias gigantes",
        desc: "Sin posicionamiento claro, los grandes te eclipsan. La marca personal y el contenido especializado te diferencian.",
      },
      {
        title: "Instagram lleno de fotos antes/después que no convierten",
        desc: "Resultados no bastan. Necesitas storytelling, testimonios reales y campañas que lleven al booking.",
      },
    ],
    promise:
      "Construimos tu marca como autoridad en estética. Contenido visual constante, manejo de redes, campañas de captación y reactivación de clientes.",
    services: [
      {
        name: "Social",
        tagline: "Presencia que conecta.",
        desc: "Manejo de redes con estrategia y consistencia. Calendario, diseño y copys mensuales.",
        accent: "#a855f7",
      },
      {
        name: "Creator",
        tagline: "Contenido que vende.",
        desc: "Producción audiovisual de procedimientos, espacio y testimonios reales.",
        accent: "#ec4899",
      },
    ],
    ctaMessage:
      "Hola Miranet, tengo un negocio de belleza y quiero más clientes en agenda.",
  },
};
