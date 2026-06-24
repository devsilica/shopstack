export interface Product {
  id: string;
  title: string;
  category: string;

  description: string;

  price: number;

  rating: number;

  reviews: number;

  image: string;

  isNew?: boolean;

  isBestSeller?: boolean;

  inStock: boolean;
}