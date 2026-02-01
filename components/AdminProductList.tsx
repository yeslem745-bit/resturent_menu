"use client";

import { deleteProductAction, updateProductAction } from "@/lib/actions";
import { Product, Category } from "@/lib/data";
import { useState } from "react";

export default function AdminProductList({
    products,
    categories
}: {
    products: Product[],
    categories: Category[]
}) {
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editProduct, setEditProduct] = useState<Partial<Product>>({});

    const getCategoryName = (id: string) => categories.find(c => c.id === id)?.name || "غير معروف";

    return (
        <div className="bg-white rounded-xl shadow-md border border-gold-main/20 overflow-hidden">
            <table className="w-full text-right">
                <thead className="bg-brown-main text-gold-main">
                    <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">المنتج</th>
                        <th className="p-4">السعر</th>
                        <th className="p-4">القسم</th>
                        <th className="p-4 text-center">إجراءات</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gold-main/10">
                    {products.map((product) => (
                        <tr key={product.id} className="hover:bg-brown-main/5 transition-colors">
                            <td className="p-4 text-brown-light/60 text-sm">#{product.id}</td>
                            <td className="p-4 font-bold text-brown-main">
                                {editingId === product.id ? (
                                    <input
                                        value={editProduct.name}
                                        onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                                        className="border border-gold-main/40 px-2 py-1 rounded w-full outline-none"
                                    />
                                ) : (
                                    product.name
                                )}
                            </td>
                            <td className="p-4 text-gold-main font-bold">
                                {editingId === product.id ? (
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={editProduct.price}
                                        onChange={(e) => setEditProduct({ ...editProduct, price: parseFloat(e.target.value) })}
                                        className="border border-gold-main/40 px-2 py-1 rounded w-24 outline-none"
                                    />
                                ) : (
                                    `${product.price} ر.س`
                                )}
                            </td>
                            <td className="p-4">
                                {editingId === product.id ? (
                                    <select
                                        value={editProduct.categoryId}
                                        onChange={(e) => setEditProduct({ ...editProduct, categoryId: e.target.value })}
                                        className="border border-gold-main/40 px-2 py-1 rounded outline-none bg-white"
                                    >
                                        {categories.filter(c => c.id !== "1").map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <span className="bg-gold-main/10 text-gold-main px-2 py-1 rounded-md text-sm">
                                        {getCategoryName(product.categoryId)}
                                    </span>
                                )}
                            </td>
                            <td className="p-4 text-center space-x-2 space-x-reverse">
                                {editingId === product.id ? (
                                    <>
                                        <button
                                            onClick={async () => {
                                                const formData = new FormData();
                                                formData.append("name", editProduct.name || "");
                                                formData.append("price", (editProduct.price || 0).toString());
                                                formData.append("categoryId", editProduct.categoryId || "");
                                                await updateProductAction(product.id, formData);
                                                setEditingId(null);
                                            }}
                                            className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition-all"
                                        >
                                            حفظ
                                        </button>
                                        <button
                                            onClick={() => setEditingId(null)}
                                            className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-500 transition-all"
                                        >
                                            إلغاء
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setEditingId(product.id);
                                            setEditProduct(product);
                                        }}
                                        className="bg-gold-main/10 text-gold-main px-3 py-1 rounded-md hover:bg-gold-main hover:text-brown-main transition-all text-sm"
                                    >
                                        تعديل
                                    </button>
                                )}
                                <button
                                    onClick={async () => {
                                        if (confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
                                            await deleteProductAction(product.id);
                                        }
                                    }}
                                    className="bg-red-500/10 text-red-600 px-3 py-1 rounded-md hover:bg-red-600 hover:text-white transition-all text-sm"
                                >
                                    حذف
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
