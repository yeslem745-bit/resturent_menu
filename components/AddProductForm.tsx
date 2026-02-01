"use client";

import { addProductAction } from "@/lib/actions";
import { Category } from "@/lib/data";
import { useRef } from "react";

export default function AddProductForm({ categories }: { categories: Category[] }) {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form
            ref={formRef}
            action={async (formData) => {
                await addProductAction(formData);
                formRef.current?.reset();
            }}
            className="bg-white p-6 rounded-xl shadow-md border border-gold-main/20"
        >
            <h3 className="text-xl font-bold text-brown-main mb-4">إضافة منتج جديد</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    name="name"
                    placeholder="اسم المنتج"
                    className="px-4 py-2 rounded-lg border border-gold-main/20 focus:ring-2 focus:ring-gold-main/20 outline-none"
                    required
                />
                <input
                    name="price"
                    type="number"
                    step="0.01"
                    placeholder="السعر (ر.س)"
                    className="px-4 py-2 rounded-lg border border-gold-main/20 focus:ring-2 focus:ring-gold-main/20 outline-none"
                    required
                />
                <select
                    name="categoryId"
                    className="px-4 py-2 rounded-lg border border-gold-main/20 focus:ring-2 focus:ring-gold-main/20 outline-none bg-white"
                    required
                >
                    <option value="">اختر القسم</option>
                    {categories.filter(c => c.id !== "1").map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="w-full mt-4 bg-gold-main text-brown-main py-2 rounded-lg font-bold hover:bg-gold-light transition-all shadow-md"
            >
                إضافة المنتج
            </button>
        </form>
    );
}
