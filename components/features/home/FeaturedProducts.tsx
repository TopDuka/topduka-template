"use client";

import { useProducts } from "@/lib/hooks";
import { ProductGrid } from "@/components/features/products/ProductGrid";

export function FeaturedProducts() {
    const { data: products = [] } = useProducts();

    return (
        <ProductGrid
            products={products}
            title="Featured Products"
            subtitle="Featured"
            columns={4}
            rows={2}
            viewAllHref="/search?q="
        />
    );
}
