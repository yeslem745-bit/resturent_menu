"use client";

import { deleteCategoryAction, updateCategoryAction } from "@/lib/actions";
import { Category } from "@/lib/data";
import { useState } from "react";

export default function AdminCategoryList({ categories }: { categories: Category[] }) {
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editName, setEditName] = useState("");

    return (
        <div className="bg-white rounded-xl shadow-md border border-gold-main/20 overflow-hidden">
            <table className="w-full text-right">
                <thead className="bg-brown-main text-gold-main">
                    <tr>
                        <th className="p-4">اسم القسم</th>
                        <th className="p-4 text-center">إجراءات</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gold-main/10">
                    {categories.filter(c => c.id !== "1").map((cat) => (
                        <tr key={cat.id} className="hover:bg-brown-main/5 transition-colors">
                            <td className="p-4 font-bold text-brown-main">
                                {editingId === cat.id ? (
                                    <input
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        className="border border-gold-main/40 px-2 py-1 rounded w-full outline-none focus:ring-1 focus:ring-gold-main"
                                    />
                                ) : (
                                    cat.name
                                )}
                            </td>
                            <td className="p-4 text-center space-x-2 space-x-reverse">
                                {editingId === cat.id ? (
                                    <>
                                        <button
                                            onClick={async () => {
                                                const formData = new FormData();
                                                formData.append("name", editName);
                                                await updateCategoryAction(cat.id, formData);
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
                                            setEditingId(cat.id);
                                            setEditName(cat.name);
                                        }}
                                        className="bg-gold-main/10 text-gold-main px-3 py-1 rounded-md hover:bg-gold-main hover:text-brown-main transition-all text-sm"
                                    >
                                        تعديل
                                    </button>
                                )}
                                <button
                                    onClick={async () => {
                                        if (confirm("هل أنت متأكد من حذف هذا القسم؟")) {
                                            await deleteCategoryAction(cat.id);
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
