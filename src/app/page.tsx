"use client";

import { useMemo, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { Filters } from "@/components/Filters";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductModal } from "@/components/ProductModal";
import { Product } from "@/types/product";

export default function HomePage() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(unique)];
  }, [products]);

  const query = search.trim();
  const visibleProducts = products.filter((product) => {
    const matchesSearch = product.title.includes(query);
    return (category === "all" || product.category === category) && matchesSearch;
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Product Explorer</h1>
        <p className="text-sm text-slate-500" suppressHydrationWarning>
          Last updated at {new Date().toLocaleTimeString()}
        </p>
      </header>

      <Filters
        search={search}
        category={category}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />

      {error && (
        <p className="mt-8 text-red-600" role="alert">
          {error}
        </p>
      )}

      {!error && (
        <ProductGrid
          products={visibleProducts}
          onSelect={setSelected}
          loading={loading}
        />
      )}

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
