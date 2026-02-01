"use client";

import { useState } from "react";
import { Category, Product } from "@/lib/data";
import ProductCard from "./ProductCard";

interface MenuDisplayProps {
    categories: Category[];
    products: Product[];
}

export default function MenuDisplay({ categories, products }: MenuDisplayProps) {
    const [selectedId, setSelectedId] = useState("1"); // Default to "الكل" (ID: 1)

    const filteredProducts = selectedId === "1"
        ? products
        : products.filter(p => p.categoryId === selectedId);

    return (
        <div className="max-w-4xl mx-auto px-4 pb-20 w-full">
            {/* Categories Filter - Scrollable Tabs */}
            <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar justify-start md:justify-center px-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedId(cat.id)}
                        className={`whitespace-nowrap px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold border ${selectedId === cat.id
                                ? "bg-gold text-white border-gold shadow-lg shadow-gold/20"
                                : "bg-transparent text-brown border-border hover:border-gold hover:text-gold"
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center text-brown/60 py-16 bg-white rounded-2xl border border-dashed border-border">
                    <p className="text-lg">لا توجد منتجات في هذا القسم</p>
                </div>
            )}
        </div>
    );
}
