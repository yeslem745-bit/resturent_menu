"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple mock logic: any password works for this demo
        if (password) {
            router.push("/admin");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-brown-main/5 px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gold-main/20 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-brown-main mb-2">تسجيل الدخول للمشرف</h1>
                    <p className="text-brown-light/60">أدخل كلمة المرور لإدارة الموقع</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-brown-main mb-2">
                            كلمة المرور
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gold-main/20 focus:outline-none focus:ring-2 focus:ring-gold-main/40 transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gold-main text-brown-main py-3 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg hover:shadow-gold-main/20"
                    >
                        دخول
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-brown/40">
                    نظام إدارة المطعم
                </div>
            </div>
        </div>
    );
}
