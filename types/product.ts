export interface Product {
  id: string;
  slug: string;

  name: string;
  category: string;
  brand: string;
  description: string;

  price: number;

  rating: number;
  reviewCount: number;

  // Main image (kept for backward compatibility)
  image: string;

  // Product gallery
  images: string[];

  // Product options
  colors: string[];
  sizes: string[];

  // Inventory
  inStock: boolean;
  stock: number;
  sku: string;

  // Specifications
  material: string;
  dimensions: string;
  weight: string;
  features: string[];

  // Product badges
  isNew?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
}