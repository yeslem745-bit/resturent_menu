"use client";

import { addCategoryAction } from "@/lib/actions";
import { useRef } from "react";

export default function AddCategoryForm() {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form
            ref={formRef}
            action={async (formData) => {
                await addCategoryAction(formData);
                formRef.current?.reset();
            }}
            className="bg-white p-6 rounded-xl shadow-md border border-gold-main/20 mb-8"
        >
            <h3 className="text-xl font-bold text-brown-main mb-4">إضافة قسم جديد</h3>
            <div className="flex gap-4">
                <input
                    name="name"
                    placeholder="اسم القسم (مثال: شوربات)"
                    className="flex-1 px-4 py-2 rounded-lg border border-gold-main/20 focus:ring-2 focus:ring-gold-main/20 outline-none"
                    required
                />
                <button
                    type="submit"
                    className="bg-brown-main text-gold-main px-6 py-2 rounded-lg font-bold hover:bg-brown-light transition-all"
                >
                    إضافة
                </button>
            </div>
        </form>
    );
}
