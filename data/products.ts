import { Product } from "@/types/product";

export const products: Product[] = [
{
  id: "sofa-001",
  slug: "modern-linen-sofa",
  name: "Modern Linen Sofa",
  category: "Sofas",
  brand: "NordHaus",
  description:
    "A contemporary three-seater sofa upholstered in premium linen for luxurious everyday comfort.",
  price: 899,
  rating: 4.9,
  reviewCount: 186,
  image: "/images/products/sofas/modern-linen-sofa.jpg",
  images: ["/images/products/sofas/modern-linen-sofa.jpg"],
  colors: ["Beige", "Grey", "Charcoal"],
  sizes: ["3 Seater"],
  inStock: true,
  stock: 16,
  sku: "SF-001",
  material: "Solid Hardwood & Premium Linen",
  dimensions: "220 × 95 × 84 cm",
  weight: "56 kg",
  features: [
    "Premium linen upholstery",
    "Solid hardwood frame",
    "High-density foam cushions",
    "Removable cushion covers",
  ],
  isBestSeller: true,
},

{
  id: "chair-001",
  slug: "modern-accent-chair",
  name: "Modern Accent Chair",
  category: "Chairs",
  brand: "Studio Oak",
  description:
    "A stylish accent chair with premium upholstery and solid oak legs, perfect for modern interiors.",
  price: 349,
  rating: 4.8,
  reviewCount: 124,
  image: "/images/products/chairs/modern-accent-chair.jpg",
  images: ["/images/products/chairs/modern-accent-chair.jpg"],
  colors: ["Beige", "Olive", "Charcoal"],
  sizes: ["Standard"],
  inStock: true,
  stock: 22,
  sku: "CH-001",
  material: "Solid Oak & Premium Fabric",
  dimensions: "78 × 74 × 86 cm",
  weight: "18 kg",
  features: [
    "Solid oak legs",
    "Premium fabric upholstery",
    "High-density foam cushioning",
    "Contemporary design",
  ],
  isNew: true,
},

 {
  id: "table-001",
  slug: "round-oak-coffee-table",
  name: "Round Oak Coffee Table",
  category: "Coffee Tables",
  brand: "Oak & Stone",
  description:
    "A handcrafted round coffee table made from solid oak with a clean Scandinavian aesthetic.",
  price: 429,
  rating: 4.9,
  reviewCount: 97,
  image: "/images/products/coffee-tables/round-oak-coffee-table.jpg",
  images: ["/images/products/coffee-tables/round-oak-coffee-table.jpg"],
  colors: ["Natural Oak", "Walnut"],
  sizes: ["90 cm"],
  inStock: true,
  stock: 14,
  sku: "CT-001",
  material: "100% Solid Oak",
  dimensions: "90 × 90 × 42 cm",
  weight: "24 kg",
  features: [
    "Solid oak construction",
    "Scratch-resistant finish",
    "Minimal Scandinavian design",
    "Easy assembly",
  ],
  isBestSeller: true,
},

  {
  id: "bed-001",
  slug: "canopy-bed",
  name: "Canopy Bed",
  category: "Beds",
  brand: "Luma Home",
  description:
    "A luxurious canopy bed featuring a padded headboard and durable hardwood frame.",
  price: 1199,
  rating: 4.9,
  reviewCount: 156,
  image: "/images/products/beds/canopy-bed.jpg",
  images: ["/images/products/beds/canopy-bed.jpg"],
  colors: ["Cream", "Light Grey", "Charcoal"],
  sizes: ["Queen"],
  inStock: true,
  stock: 12,
  sku: "BD-001",
  material: "Solid Hardwood & Premium Fabric",
  dimensions: "215 × 165 × 120 cm",
  weight: "72 kg",
  features: [
    "Padded headboard",
    "Solid hardwood frame",
    "Premium fabric finish",
    "Noise-free support",
  ],
  isBestSeller: true,
},
{
  id: "nightstand-001",
  slug: "oak-nightstand",
  name: "Oak Nightstand",
  category: "Nightstands",
  brand: "Forma Living",
  description:
    "A compact solid oak nightstand with a spacious drawer and open shelf for bedside storage.",
  price: 199,
  rating: 4.8,
  reviewCount: 74,
  image: "/images/products/nightstands/oak-nightstand.jpg",
  images: ["/images/products/nightstands/oak-nightstand.jpg"],
  colors: ["Natural Oak", "Walnut"],
  sizes: ["Standard"],
  inStock: true,
  stock: 20,
  sku: "NS-001",
  material: "Solid Oak",
  dimensions: "50 × 40 × 55 cm",
  weight: "14 kg",
  features: [
    "Soft-close drawer",
    "Open storage shelf",
    "Solid oak construction",
    "Scratch-resistant finish",
  ],
  isNew: true,
},
{
  id: "dining-table-001",
  slug: "round-oak-dining-table",
  name: "Round Oak Dining Table",
  category: "Dining Tables",
  brand: "Casa Modern",
  description:
    "A beautifully crafted round dining table made from solid oak, designed for intimate family meals and modern dining spaces.",
  price: 799,
  rating: 4.9,
  reviewCount: 108,
  image: "/images/products/dining-tables/round-oak-dining-table.jpg",
  images: ["/images/products/dining-tables/round-oak-dining-table.jpg"],
  colors: ["Natural Oak", "Walnut"],
  sizes: ["4 Seater"],
  inStock: true,
  stock: 10,
  sku: "DT-001",
  material: "100% Solid Oak",
  dimensions: "120 × 120 × 75 cm",
  weight: "38 kg",
  features: [
    "Solid oak tabletop",
    "Scratch-resistant finish",
    "Seats four comfortably",
    "Modern Scandinavian style",
  ],
  isBestSeller: true,
},

{
  id: "dining-table-002",
slug: "marble-dining-table",
name: "Marble Dining Table",
category: "Dining Tables",
  brand: "Casa Modern",

  description:
    "A contemporary dining table featuring soft fabric upholstery, ergonomic support, and solid oak legs for everyday comfort.",

  price: 229,

  rating: 4.8,
  reviewCount: 92,

  image:
    "/images/products/dining-tables/marble-dining-table.jpg",

  images: [
    "/images/products/dining-tables/marble-dining-table.jpg",
  ],

  colors: [
    "Beige",
    "Grey",
    "Olive",
  ],

  sizes: [
    "Standard",
  ],

  inStock: true,
  stock: 18,

  sku: "DC-001",

  material: "Solid Oak & Premium Fabric",

  dimensions: "50 × 58 × 84 cm",

  weight: "9 kg",

  features: [
    "Ergonomic backrest",
    "Premium fabric upholstery",
    "Solid oak legs",
    "Scratch-resistant finish",
  ],

  isNew: true,
},

{
  id: "sofa-002",
  slug: "scandinavian-fabric-sofa",

  name: "Scandinavian Fabric Sofa",

  category: "Sofas",
  brand: "NordHaus",

  description:
    "A Scandinavian-inspired sofa with clean lines, premium fabric upholstery, and deep cushions designed for modern living spaces.",

  price: 949,

  rating: 4.8,
  reviewCount: 143,

  image: "/images/products/sofas/scandinavian-fabric-sofa.jpg",

  images: [
    "/images/products/sofas/scandinavian-fabric-sofa.jpg",
  ],

  colors: [
    "Light Grey",
    "Cream",
    "Sand",
  ],

  sizes: [
    "3 Seater",
  ],

  inStock: true,
  stock: 14,

  sku: "SF-002",

  material: "Solid Oak & Premium Fabric",

  dimensions: "225 × 94 × 85 cm",

  weight: "58 kg",

  features: [
    "Scandinavian design",
    "Premium fabric upholstery",
    "Solid oak frame",
    "High-density foam cushions",
  ],

  isNew: true,
},

{
  id: "chair-002",
  slug: "scandinavian-lounge-chair",

  name: "Scandinavian Lounge Chair",

  category: "Chairs",
  brand: "Studio Oak",

  description:
    "An elegant lounge chair crafted with solid oak and soft woven fabric for exceptional comfort and timeless Scandinavian style.",

  price: 399,

  rating: 4.9,
  reviewCount: 118,

  image: "/images/products/chairs/scandinavian-lounge-chair.jpg",

  images: [
    "/images/products/chairs/scandinavian-lounge-chair.jpg",
  ],

  colors: [
    "Beige",
    "Ivory",
    "Grey",
  ],

  sizes: [
    "Standard",
  ],

  inStock: true,
  stock: 17,

  sku: "CH-002",

  material: "Solid Oak & Woven Fabric",

  dimensions: "80 × 76 × 88 cm",

  weight: "17 kg",

  features: [
    "Solid oak construction",
    "Premium woven upholstery",
    "Ergonomic seat",
    "Minimal Scandinavian design",
  ],

  isBestSeller: true,
},

{
  id: "table-002",
  slug: "marble-coffee-table",

  name: "Marble Coffee Table",

  category: "Coffee Tables",
  brand: "Oak & Stone",

  description:
    "A luxurious marble coffee table with a polished stone top and sturdy metal frame, designed to elevate contemporary living rooms.",

  price: 549,

  rating: 4.8,
  reviewCount: 84,

  image: "/images/products/coffee-tables/marble-coffee-table.jpg",

  images: [
    "/images/products/coffee-tables/marble-coffee-table.jpg",
  ],

  colors: [
    "White Marble",
    "Black Marble",
  ],

  sizes: [
    "100 cm",
  ],

  inStock: true,
  stock: 11,

  sku: "CT-002",

  material: "Marble & Powder-Coated Steel",

  dimensions: "100 × 60 × 42 cm",

  weight: "32 kg",

  features: [
    "Premium marble top",
    "Modern steel base",
    "Scratch-resistant finish",
    "Easy to clean",
  ],

  isNew: true,
},

{
  id: "nightstand-002",
  slug: "walnut-nightstand",

  name: "Walnut Nightstand",

  category: "Nightstands",
  brand: "Forma Living",

  description:
    "A modern walnut nightstand with two spacious drawers, soft-close runners, and a timeless minimalist design.",

  price: 229,

  rating: 4.9,
  reviewCount: 81,

  image: "/images/products/nightstands/walnut-nightstand.jpg",

  images: [
    "/images/products/nightstands/walnut-nightstand.jpg",
  ],

  colors: [
    "Walnut",
    "Natural Oak",
  ],

  sizes: [
    "Standard",
  ],

  inStock: true,
  stock: 18,

  sku: "NS-002",

  material: "Solid Walnut Wood",

  dimensions: "52 × 42 × 56 cm",

  weight: "15 kg",

  features: [
    "Soft-close drawers",
    "Premium walnut finish",
    "Solid wood construction",
    "Minimal modern design",
  ],

  isBestSeller: true,
},
{
  id: "dining-chair-001",
  slug: "fabric-dining-chair",

  name: "Fabric Dining Chair",

  category: "Dining Chairs",
  brand: "Casa Modern",

  description:
    "A modern dining chair with premium fabric upholstery, ergonomic support, and solid oak legs.",

  price: 239,

  rating: 4.8,
  reviewCount: 91,

  image: "/images/products/dining-chairs/fabric-dining-chair.png",

  images: [
    "/images/products/dining-chairs/fabric-dining-chair.png",
  ],

  colors: [
    "Beige",
    "Grey",
    "Olive",
  ],

  sizes: [
    "Standard",
  ],

  inStock: true,
  stock: 20,

  sku: "DC-001",

  material: "Solid Oak & Premium Fabric",

  dimensions: "50 × 58 × 84 cm",

  weight: "8 kg",

  features: [
    "Ergonomic backrest",
    "Premium upholstery",
    "Solid oak legs",
    "Scratch-resistant finish",
  ],

  isBestSeller: true,
},

{
  id: "dining-chair-002",
  slug: "wishbone-dining-chair",

  name: "Wishbone Dining Chair",

  category: "Dining Chairs",
  brand: "Casa Modern",

  description:
    "A timeless wishbone chair handcrafted from solid ash wood with a woven natural seat.",

  price: 279,

  rating: 4.9,
  reviewCount: 118,

  image: "/images/products/dining-chairs/wishbone-dining-chair.png",

  images: [
    "/images/products/dining-chairs/wishbone-dining-chair.png",
  ],

  colors: [
    "Natural Oak",
    "Walnut",
    "Black",
  ],

  sizes: [
    "Standard",
  ],

  inStock: true,
  stock: 16,

  sku: "DC-002",

  material: "Solid Ash Wood",

  dimensions: "54 × 55 × 76 cm",

  weight: "7 kg",

  features: [
    "Handwoven seat",
    "Solid ash construction",
    "Iconic Scandinavian design",
    "Lightweight frame",
  ],

  isNew: true,
},

{
  id: "sofa-003",
  slug: "velvet-three-seater-sofa",

  name: "Velvet Three Seater Sofa",

  category: "Sofas",
  brand: "NordHaus",

  description:
    "A luxurious velvet sofa featuring deep seating, plush cushions, and a premium hardwood frame.",

  price: 1299,

  rating: 4.9,
  reviewCount: 173,

  image: "/images/products/sofas/velvet-three-seater-sofa.jpg",

  images: [
    "/images/products/sofas/velvet-three-seater-sofa.jpg",
  ],

  colors: [
    "Emerald",
    "Navy",
    "Charcoal",
  ],

  sizes: [
    "3 Seater",
  ],

  inStock: true,
  stock: 11,

  sku: "SF-003",

  material: "Velvet & Solid Hardwood",

  dimensions: "235 × 98 × 86 cm",

  weight: "63 kg",

  features: [
    "Premium velvet upholstery",
    "Deep comfort cushions",
    "Solid hardwood frame",
    "Luxury finish",
  ],

  isBestSeller: true,
}
,
{
  id: "chair-003",
  slug: "wooden-rocking-chair",

  name: "Wooden Rocking Chair",

  category: "Chairs",
  brand: "Studio Oak",

  description:
    "A beautifully crafted rocking chair made from solid oak, offering timeless comfort for reading and relaxation.",

  price: 319,

  rating: 4.8,
  reviewCount: 87,

  image: "/images/products/chairs/wooden-rocking-chair.jpg",

  images: [
    "/images/products/chairs/wooden-rocking-chair.jpg",
  ],

  colors: [
    "Natural Oak",
    "Walnut",
  ],

  sizes: [
    "Standard",
  ],

  inStock: true,
  stock: 15,

  sku: "CH-003",

  material: "100% Solid Oak",

  dimensions: "72 × 86 × 102 cm",

  weight: "16 kg",

  features: [
    "Smooth rocking motion",
    "Solid oak construction",
    "Ergonomic seat",
    "Hand-finished wood",
  ],

  isNew: true,
},
{
  id: "sofa-004",
  slug: "leather-sectional-sofa",

  name: "Leather Sectional Sofa",

  category: "Sofas",
  brand: "NordHaus",

  description:
    "A spacious L-shaped sectional sofa upholstered in premium genuine leather for luxurious modern living.",

  price: 1699,

  rating: 5.0,
  reviewCount: 214,

  image: "/images/products/sofas/leather-sectional-sofa.jpg",

  images: [
    "/images/products/sofas/leather-sectional-sofa.jpg",
  ],

  colors: [
    "Cognac",
    "Black",
    "Dark Brown",
  ],

  sizes: [
    "L-Shape",
  ],

  inStock: true,
  stock: 8,

  sku: "SF-004",

  material: "Genuine Leather & Hardwood",

  dimensions: "285 × 180 × 88 cm",

  weight: "81 kg",

  features: [
    "Premium genuine leather",
    "Solid hardwood frame",
    "Deep seating comfort",
    "Luxury finish",
  ],

  isBestSeller: true,
},
{
  id: "chair-004",
  slug: "eames-lounge-chair",

  name: "Eames Lounge Chair",

  category: "Chairs",
  brand: "Studio Oak",

  description:
    "An iconic lounge chair inspired by timeless mid-century modern design with premium leather upholstery.",

  price: 899,

  rating: 5.0,
  reviewCount: 193,

  image: "/images/products/chairs/eames-lounge-chair.jpg",

  images: [
    "/images/products/chairs/eames-lounge-chair.jpg",
  ],

  colors: [
    "Black",
    "Walnut",
    "Brown",
  ],

  sizes: [
    "Standard",
  ],

  inStock: true,
  stock: 10,

  sku: "CH-004",

  material: "Leather & Molded Walnut",

  dimensions: "84 × 84 × 86 cm",

  weight: "24 kg",

  features: [
    "Premium leather upholstery",
    "Walnut shell",
    "Aluminum base",
    "Luxury comfort",
  ],

  isBestSeller: true,
},
{
  id: "table-003",
  slug: "glass-coffee-table",

  name: "Glass Coffee Table",

  category: "Coffee Tables",
  brand: "Oak & Stone",

  description:
    "A minimalist tempered glass coffee table with a sleek steel frame for contemporary interiors.",

  price: 479,

  rating: 4.8,
  reviewCount: 103,

  image: "/images/products/coffee-tables/glass-coffee-table.jpg",

  images: [
    "/images/products/coffee-tables/glass-coffee-table.jpg",
  ],

  colors: [
    "Clear",
    "Smoke",
  ],

  sizes: [
    "110 cm",
  ],

  inStock: true,
  stock: 13,

  sku: "CT-003",

  material: "Tempered Glass & Steel",

  dimensions: "110 × 60 × 40 cm",

  weight: "27 kg",

  features: [
    "Tempered safety glass",
    "Modern steel frame",
    "Easy maintenance",
    "Minimal design",
  ],

  isNew: true,
},
{
  id: "bed-003",
  slug: "storage-bed",

  name: "Storage Bed",

  category: "Beds",
  brand: "Luma Home",

  description:
    "A premium upholstered storage bed with spacious under-bed compartments for modern bedrooms.",

  price: 1499,

  rating: 4.9,
  reviewCount: 164,

  image: "/images/products/beds/storage-bed.jpg",

  images: [
    "/images/products/beds/storage-bed.jpg",
  ],

  colors: [
    "Grey",
    "Beige",
    "Charcoal",
  ],

  sizes: [
    "Queen",
  ],

  inStock: true,
  stock: 9,

  sku: "BD-003",

  material: "Hardwood & Premium Fabric",

  dimensions: "220 × 165 × 118 cm",

  weight: "75 kg",

  features: [
    "Hidden storage compartments",
    "Padded headboard",
    "Premium upholstery",
    "Solid hardwood frame",
  ],

  isBestSeller: true,
},
];