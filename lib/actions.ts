"use server";

import { store } from "@/lib/store";
import { revalidatePath } from "next/cache";

// Category Actions
export async function addCategoryAction(formData: FormData) {
    const name = formData.get("name") as string;
    if (!name) return;
    store.addCategory(name);
    revalidatePath("/");
    revalidatePath("/admin");
}

export async function deleteCategoryAction(id: string) {
    store.deleteCategory(id);
    revalidatePath("/");
    revalidatePath("/admin");
}

export async function updateCategoryAction(id: string, formData: FormData) {
    const name = formData.get("name") as string;
    if (!name) return;
    store.updateCategory(id, name);
    revalidatePath("/");
    revalidatePath("/admin");
}


// Product Actions
export async function addProductAction(formData: FormData) {
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const categoryId = formData.get("categoryId") as string;

    if (!name || isNaN(price) || !categoryId) return;

    store.addProduct(name, price, categoryId);
    revalidatePath("/");
    revalidatePath("/admin");
}

export async function deleteProductAction(id: string) {
    store.deleteProduct(id);
    revalidatePath("/");
    revalidatePath("/admin");
}

export async function updateProductAction(id: string, formData: FormData) {
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const categoryId = formData.get("categoryId") as string;

    if (!name || isNaN(price) || !categoryId) return;

    store.updateProduct(id, name, price, categoryId);
    revalidatePath("/");
    revalidatePath("/admin");
}
