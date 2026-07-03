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
];