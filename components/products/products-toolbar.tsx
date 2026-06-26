import ProductsSearch from "./products-search";
import ProductsSort from "./products-sort";

export default function ProductsToolbar() {
  return (
    <div className="mb-12 flex flex-col gap-6 lg:flex-row">

      <ProductsSearch />

      <ProductsSort />

    </div>
  );
}