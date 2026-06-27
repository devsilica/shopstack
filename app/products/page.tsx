"use client";

import { useMemo, useState } from "react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import ProductGrid from "@/components/commerce/product-grid";

import ProductsHero from "@/components/products/products-hero";
import ProductsPagination from "@/components/products/products-pagination";
import ProductsResults from "@/components/products/products-results";
import EmptyProducts from "@/components/products/empty-products";

import ProductSearch from "@/components/products/product-search";
import ProductSort from "@/components/products/product-sort";
import FilterSidebar from "@/components/products/filter-sidebar";

import { products } from "@/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");

  const [price, setPrice] = useState(1000);
  const [rating, setRating] = useState(0);

  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const brands = [
    ...new Set(products.map((product) => product.brand)),
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category
    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }

    // Brand
    if (brand !== "All") {
      filtered = filtered.filter(
        (product) => product.brand === brand
      );
    }

    // Search
    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Price
    filtered = filtered.filter(
      (product) => product.price <= price
    );

    // Rating
    filtered = filtered.filter(
      (product) => product.rating >= rating
    );

    // Stock
    if (inStockOnly) {
      filtered = filtered.filter(
        (product) => product.inStock
      );
    }

    // Sorting
    switch (sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return filtered;
  }, [
    search,
    sort,
    category,
    brand,
    price,
    rating,
    inStockOnly,
  ]);

  return (
    <>
      <Navbar />

      <ProductsHero />

      <Section className="pt-0">
        <Container>

          {/* Toolbar */}

          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <ProductSearch
              value={search}
              onChange={setSearch}
            />

            <ProductSort
              value={sort}
              onChange={setSort}
            />
          </div>

          {/* Layout */}

          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

            <FilterSidebar
              categories={categories}
              selected={category}
              onSelect={setCategory}
              maxPrice={1000}
              selectedPrice={price}
              onPriceChange={setPrice}
              rating={rating}
              onRatingChange={setRating}
              brands={brands}
              selectedBrand={brand}
              onBrandChange={setBrand}
              inStockOnly={inStockOnly}
              onStockChange={setInStockOnly}
            />

            <div className="space-y-10">

              <ProductsResults
                showing={filteredProducts.length}
                total={products.length}
              />

              {filteredProducts.length > 0 ? (
                <>
                  <ProductGrid
                    products={filteredProducts}
                  />

                  <ProductsPagination />
                </>
              ) : (
                <EmptyProducts />
              )}

            </div>

          </div>

        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}