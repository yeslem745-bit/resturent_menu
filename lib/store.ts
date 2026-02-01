import { Category, Product, initialCategories, initialProducts } from "./data";

// Singleton-style in-memory store
class Store {
    private static instance: Store;
    public categories: Category[] = [...initialCategories];
    public products: Product[] = [...initialProducts];

    private constructor() { }

    public static getInstance(): Store {
        if (!Store.instance) {
            Store.instance = new Store();
        }
        return Store.instance;
    }

    // Category Actions
    addCategory(name: string) {
        const newCat = { id: Math.random().toString(36).substr(2, 9), name };
        this.categories.push(newCat);
        return newCat;
    }

    updateCategory(id: string, name: string) {
        this.categories = this.categories.map(c => c.id === id ? { ...c, name } : c);
    }

    deleteCategory(id: string) {
        this.categories = this.categories.filter(c => c.id !== id);
        // Also remove products in this category? 
        // Usually yes, but for simplicity let's keep them and they just won't show if they aren't 'All'
    }

    // Product Actions
    addProduct(name: string, price: number, categoryId: string) {
        const newProd = {
            id: Math.floor(Math.random() * 900 + 100).toString(),
            name,
            price,
            categoryId
        };
        this.products.push(newProd);
        return newProd;
    }

    updateProduct(id: string, name: string, price: number, categoryId: string) {
        this.products = this.products.map(p => p.id === id ? { ...p, name, price, categoryId } : p);
    }

    deleteProduct(id: string) {
        this.products = this.products.filter(p => p.id !== id);
    }
}

export const store = Store.getInstance();
