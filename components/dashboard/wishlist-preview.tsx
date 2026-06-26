import ProductGrid from "@/components/commerce/product-grid";
import { products } from "@/data/products";

export default function WishlistPreview() {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-semibold">
        Wishlist Preview
      </h2>

      <ProductGrid products={products.slice(0, 4)} />
    </div>
  );
}