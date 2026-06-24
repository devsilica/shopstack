export interface Product {
  id: string;
  slug: string;

  name: string;
  category: string;
  description: string;

  price: number;

  rating: number;
  reviewCount: number;

  image: string;

  isNew?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;

  inStock: boolean;
}