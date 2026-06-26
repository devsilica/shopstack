import ProductGrid from "@/components/commerce/product-grid";
import { products } from "@/data/products";

export default function SearchResults() {
  return <ProductGrid products={products} />;
}