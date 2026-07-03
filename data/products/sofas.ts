import { Product } from "@/types/product";

export const sofas: Product[] = [
  {
    id: "sofa-001",
    slug: "modern-linen-sofa",

    name: "Modern Linen Sofa",

    category: "Sofas",
    brand: "NordHaus",

    description:
      "A contemporary three-seater sofa upholstered in premium linen with deep cushions and a solid hardwood frame for lasting comfort.",

    price: 899,

    rating: 4.9,
    reviewCount: 186,

    image:
      "/images/products/sofas/modern-linen-sofa.jpg",

    images: [
      "/images/products/sofas/modern-linen-sofa.jpg",
    ],

    colors: [
      "Beige",
      "Grey",
      "Charcoal",
    ],

    sizes: [
      "3 Seater",
    ],

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
  
];