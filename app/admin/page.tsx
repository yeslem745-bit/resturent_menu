import { store } from "@/lib/store";
import AdminCategoryList from "@/components/AdminCategoryList";
import AdminProductList from "@/components/AdminProductList";
import AddCategoryForm from "@/components/AddCategoryForm";
import AddProductForm from "@/components/AddProductForm";

export default function AdminDashboard() {
    const categories = store.categories;
    const products = store.products;

    return (
        <div className="min-h-screen bg-background pt-12 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-bold text-brown border-b-2 border-gold inline-block pb-2">لوحة التحكم</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Categories Management */}
                    <div>
                        <h2 className="text-2xl font-bold text-brown-main mb-6 border-r-4 border-gold-main pr-4">إدارة الأقسام</h2>
                        <AddCategoryForm />
                        <AdminCategoryList categories={categories} />
                    </div>

                    {/* Products Management */}
                    <div>
                        <h2 className="text-2xl font-bold text-brown-main mb-6 border-r-4 border-gold-main pr-4">إدارة المنتجات</h2>
                        <AddProductForm categories={categories} />
                        <div className="mt-8">
                            <AdminProductList products={products} categories={categories} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
