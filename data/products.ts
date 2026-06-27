import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "modern-lounge-chair",
    name: "Modern Lounge Chair",
    category: "Furniture",
    brand: "Nordic Living",
    description:
      "A premium lounge chair crafted with solid oak wood and soft linen upholstery, designed for exceptional comfort and timeless aesthetics.",
    price: 249,
    rating: 4.9,
    reviewCount: 142,

    image: "/images/products/chair.jpg",

    images: [
      "/images/products/chair.jpg",
      "/images/products/chair.jpg",
      "/images/products/chair.jpg",
      "/images/products/chair.jpg",
    ],

    colors: ["Black", "Beige", "Brown"],
    sizes: ["Standard"],

    inStock: true,
    stock: 24,
    sku: "SS-CHAIR-001",

    material: "Solid Oak & Linen",
    dimensions: "82 × 76 × 90 cm",
    weight: "18 kg",

    features: [
      "Solid oak frame",
      "Premium linen fabric",
      "Ergonomic comfort",
      "Easy assembly",
    ],

    isBestSeller: true,
  },

  {
    id: "2",
    slug: "linen-sofa",
    name: "Linen Sofa",
    category: "Living",
    brand: "Nordic Living",
    description:
      "A spacious linen sofa with plush cushions and a durable hardwood frame, perfect for modern interiors.",
    price: 799,
    rating: 4.8,
    reviewCount: 89,

    image: "/images/products/sofa.jpg",

    images: [
      "/images/products/sofa.jpg",
      "/images/products/sofa.jpg",
      "/images/products/sofa.jpg",
      "/images/products/sofa.jpg",
    ],

    colors: ["Cream", "Grey", "Navy"],
    sizes: ["2 Seater", "3 Seater"],

    inStock: true,
    stock: 12,
    sku: "SS-SOFA-001",

    material: "Hardwood & Linen",
    dimensions: "210 × 95 × 82 cm",
    weight: "54 kg",

    features: [
      "Deep seating",
      "Removable cushions",
      "Premium upholstery",
      "Solid wood frame",
    ],

    isNew: true,
  },

  {
    id: "3",
    slug: "oak-dining-table",
    name: "Oak Dining Table",
    category: "Dining",
    brand: "Oak Studio",
    description:
      "A handcrafted solid oak dining table built for everyday family gatherings and elegant dining spaces.",
    price: 649,
    rating: 4.7,
    reviewCount: 63,

    image: "/images/products/table.jpg",

    images: [
      "/images/products/table.jpg",
      "/images/products/table.jpg",
      "/images/products/table.jpg",
      "/images/products/table.jpg",
    ],

    colors: ["Natural Oak", "Walnut"],
    sizes: ["4 Seater", "6 Seater"],

    inStock: true,
    stock: 8,
    sku: "SS-TABLE-001",

    material: "100% Solid Oak",
    dimensions: "180 × 90 × 75 cm",
    weight: "42 kg",

    features: [
      "Solid wood",
      "Scratch resistant finish",
      "Handcrafted",
      "Easy maintenance",
    ],
  },

  {
    id: "4",
    slug: "minimal-floor-lamp",
    name: "Minimal Floor Lamp",
    category: "Lighting",
    brand: "Lumina",
    description:
      "A sleek minimalist floor lamp with adjustable brightness and a premium aluminum finish.",
    price: 189,
    rating: 4.6,
    reviewCount: 41,

    image: "/images/products/lamp.jpg",

    images: [
      "/images/products/lamp.jpg",
      "/images/products/lamp.jpg",
      "/images/products/lamp.jpg",
      "/images/products/lamp.jpg",
    ],

    colors: ["Black", "White"],
    sizes: ["Standard"],

    inStock: true,
    stock: 32,
    sku: "SS-LAMP-001",

    material: "Aluminum",
    dimensions: "165 × 35 × 35 cm",
    weight: "6 kg",

    features: [
      "LED lighting",
      "Energy efficient",
      "Adjustable brightness",
      "Minimal design",
    ],
  },
];