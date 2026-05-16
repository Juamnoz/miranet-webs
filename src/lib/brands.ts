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
  {
    slug: "tigocolombia",
    name: "Tigo Colombia",
    handle: "@tigocolombia",
    url: "https://www.instagram.com/tigocolombia?igsh=c2twMmlleTlxcjh5",
    country: "CO",
    category: "Telecom",
  },
  {
    slug: "templodepiedra",
    name: "Templo de Piedra",
    handle: "@templo_de_piedra_hotel_spa_",
    url: "https://www.instagram.com/templo_de_piedra_hotel_spa_?igsh=MXcycHk1aWw0ZTlmMg==",
    country: "CO",
    category: "Hotel & Spa",
  },
  {
    slug: "garden",
    name: "Garden Bienestar",
    handle: "@garden_bienestar_spa",
    url: "https://www.instagram.com/garden_bienestar_spa?igsh=MTI4dnJ0bzBpdnpxNg==",
    country: "CO",
    category: "Spa",
  },
  {
    slug: "mystic",
    name: "Mystic Restobar",
    handle: "@mysticrestaurante",
    url: "https://www.instagram.com/mysticrestaurante?igsh=NDc1MDJ6OHkwaWNj",
    country: "CO",
    category: "Restaurante",
  },
  {
    slug: "dulcecolombia",
    name: "Dulce Colombia",
    handle: "@dulcecolombiamed",
    url: "https://www.instagram.com/dulcecolombiamed?igsh=MWQwZXF1b3EzbnBleQ==",
    country: "CO",
    category: "Postres",
  },
  {
    slug: "almonte",
    name: "Almonte Restobar",
    handle: "@almonte_restaurante",
    url: "https://www.instagram.com/almonte_restaurante?igsh=MTQ3bW14Yng1YzE3Mw==",
    country: "CO",
    category: "Restaurante",
  },
  {
    slug: "leonor",
    name: "Leonor Colombia",
    handle: "@leonor_colombia",
    url: "https://www.instagram.com/leonor_colombia?igsh=MW02Z2M3NWd0ZzQ5dg==",
    country: "CO",
    category: "Moda",
  },
  {
    slug: "orowaka",
    name: "Orowaka Restaurante",
    handle: "@orowakarestaurante",
    url: "https://www.instagram.com/orowakarestaurante?igsh=MWJydGNqdGw4Y3ljNw==",
    country: "CO",
    category: "Restaurante",
  },
  {
    slug: "kaffas",
    name: "Kaffas USA",
    handle: "@kaffasusa",
    url: "https://www.instagram.com/kaffasusa?igsh=aW11aTluNHd2a2kz",
    country: "US",
    category: "Café",
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
  { name: "Belleza", maletas: ["Social", "Creator"], emoji: "💄" },
  { name: "Moda", maletas: ["Influencer", "Creator"], emoji: "👗" },
  { name: "Airbnb", maletas: ["Luxury"], emoji: "🏡" },
  { name: "Empresas", maletas: ["Ads", "Empire"], emoji: "🏢" },
  { name: "Eventos", maletas: ["Creator", "Influencer"], emoji: "🎉" },
];
