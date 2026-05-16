export type Brand = {
  slug: string;
  name: string;
  handle: string;
  url: string;
  country: "CO" | "US";
  category: string;
};

export const BRANDS: Brand[] = [
  {
    slug: "carmex",
    name: "Carmex Colombia",
    handle: "@carmex.co",
    url: "https://www.instagram.com/carmex.co?igsh=ZXY2NWJscmRkZ3hu",
    country: "CO",
    category: "Belleza",
  },
  {
    slug: "boraboramedellin",
    name: "Bora Bora Medellín",
    handle: "@boraboramedellin_",
    url: "https://www.instagram.com/boraboramedellin_?igsh=MjRvaW1vejU2bTdu",
    country: "CO",
    category: "Hospitality",
  },
  {
    slug: "lafondasportsbar",
    name: "La Fonda Sports Bar",
    handle: "@lafondasportsbar",
    url: "https://www.instagram.com/lafondasportsbar?igsh=MXU3N2I2a3oxdXc3MQ==",
    country: "US",
    category: "Restaurante",
  },
  {
    slug: "spakcosmetologia",
    name: "Kc Cosmetología",
    handle: "@spa_kcosmetologia",
    url: "https://www.instagram.com/spa_kcosmetologia?igsh=OGlieXI4YmN5a2Y4",
    country: "CO",
    category: "Belleza",
  },
  {
    slug: "sportclubmedellin",
    name: "Sport Club Medellín",
    handle: "@sport_club_medellin",
    url: "https://www.instagram.com/sport_club_medellin?igsh=MTZ2dDlpbDRkcmxkNg==",
    country: "CO",
    category: "Deporte",
  },
  {
    slug: "laparrillallanera",
    name: "La Parrilla Llanera Florida",
    handle: "@la_parrilla_llanera_florida",
    url: "https://www.instagram.com/la_parrilla_llanera_florida?igsh=c2t4YTF3eWEwYTYy",
    country: "US",
    category: "Restaurante",
  },
  {
    slug: "elranchomiami",
    name: "Rancho Miami",
    handle: "@elranchomiami",
    url: "https://www.instagram.com/elranchomiami?igsh=MW9td3A1OGx6Y2J2Yg==",
    country: "US",
    category: "Restaurante",
  },
];

export type Nicho = {
  name: string;
  maletas: string[];
  emoji: string;
};

export const NICHOS: Nicho[] = [
  { name: "Hoteles", maletas: ["Luxury", "Empire"], emoji: "🏨" },
  { name: "Restaurantes", maletas: ["Creator", "Luxury"], emoji: "🍽️" },
  { name: "Moda", maletas: ["Influencer", "Creator"], emoji: "👗" },
  { name: "Belleza", maletas: ["Social", "Creator"], emoji: "💄" },
  { name: "Airbnb", maletas: ["Luxury"], emoji: "🏡" },
  { name: "Empresas", maletas: ["Ads", "Empire"], emoji: "🏢" },
  { name: "Eventos", maletas: ["Creator", "Influencer"], emoji: "🎉" },
];
