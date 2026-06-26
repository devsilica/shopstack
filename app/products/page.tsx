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

import ProductSearch from "@/components/products/product-search";
import ProductSort from "@/components/products/product-sort";
import FilterSidebar from "@/components/products/filter-sidebar";

import { products } from "@/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [category, setCategory] = useState("All");

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }

    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

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
    }

    return filtered;
  }, [search, category, sort]);

  return (
    <>
      <Navbar />

      <ProductsHero />

      <Section className="pt-0">
        <Container>

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

          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

            <FilterSidebar
              categories={categories}
              selected={category}
              onSelect={setCategory}
            />

            <div className="space-y-10">

              <ProductGrid
                products={filteredProducts}
              />

              <ProductsPagination />

            </div>

          </div>

        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}