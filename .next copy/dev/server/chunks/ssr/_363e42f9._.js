module.exports = [
"[project]/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialCategories",
    ()=>initialCategories,
    "initialProducts",
    ()=>initialProducts
]);
const initialCategories = [
    {
        id: "1",
        name: "الكل"
    },
    {
        id: "2",
        name: "المقبلات"
    },
    {
        id: "3",
        name: "الأطباق الرئيسية"
    },
    {
        id: "4",
        name: "المشروبات"
    },
    {
        id: "5",
        name: "الحلويات"
    }
];
const initialProducts = [
    {
        id: "101",
        name: "حمص باللحمة",
        price: 25,
        categoryId: "2"
    },
    {
        id: "102",
        name: "متبل باذنجان",
        price: 18,
        categoryId: "2"
    },
    {
        id: "201",
        name: "مشويات مشكلة",
        price: 65,
        categoryId: "3"
    },
    {
        id: "202",
        name: "كبسة دجاج",
        price: 45,
        categoryId: "3"
    },
    {
        id: "301",
        name: "عصير برتقال طازج",
        price: 15,
        categoryId: "4"
    },
    {
        id: "302",
        name: "قهوة عربية",
        price: 12,
        categoryId: "4"
    },
    {
        id: "401",
        name: "كنافة نابلسية",
        price: 22,
        categoryId: "5"
    },
    {
        id: "402",
        name: "أم علي",
        price: 20,
        categoryId: "5"
    }
];
}),
"[project]/lib/store.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
;
// Singleton-style in-memory store
class Store {
    static instance;
    categories = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initialCategories"]
    ];
    products = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initialProducts"]
    ];
    constructor(){}
    static getInstance() {
        if (!Store.instance) {
            Store.instance = new Store();
        }
        return Store.instance;
    }
    // Category Actions
    addCategory(name) {
        const newCat = {
            id: Math.random().toString(36).substr(2, 9),
            name
        };
        this.categories.push(newCat);
        return newCat;
    }
    updateCategory(id, name) {
        this.categories = this.categories.map((c)=>c.id === id ? {
                ...c,
                name
            } : c);
    }
    deleteCategory(id) {
        this.categories = this.categories.filter((c)=>c.id !== id);
    // Also remove products in this category? 
    // Usually yes, but for simplicity let's keep them and they just won't show if they aren't 'All'
    }
    // Product Actions
    addProduct(name, price, categoryId) {
        const newProd = {
            id: Math.floor(Math.random() * 900 + 100).toString(),
            name,
            price,
            categoryId
        };
        this.products.push(newProd);
        return newProd;
    }
    updateProduct(id, name, price, categoryId) {
        this.products = this.products.map((p)=>p.id === id ? {
                ...p,
                name,
                price,
                categoryId
            } : p);
    }
    deleteProduct(id) {
        this.products = this.products.filter((p)=>p.id !== id);
    }
}
const store = Store.getInstance();
}),
"[project]/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4004e4b1d5fc15759cf20fcdd10d0143ee172a17f6":"addCategoryAction","4016bf787e6cca51703af870040213655568d2b775":"deleteCategoryAction","40e8fa7db100aaaeb8439dc5488b78f314f7bd7978":"deleteProductAction","40f37e38965d5d5a1017521da5b897556d99181a27":"addProductAction","604f6e95f3da431707c6ec05b60cc3e56de6ab810c":"updateProductAction","60f3323bdc0b010cd7195f815fc2394d41b4e3c472":"updateCategoryAction"},"",""] */ __turbopack_context__.s([
    "addCategoryAction",
    ()=>addCategoryAction,
    "addProductAction",
    ()=>addProductAction,
    "deleteCategoryAction",
    ()=>deleteCategoryAction,
    "deleteProductAction",
    ()=>deleteProductAction,
    "updateCategoryAction",
    ()=>updateCategoryAction,
    "updateProductAction",
    ()=>updateProductAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function addCategoryAction(formData) {
    const name = formData.get("name");
    if (!name) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].addCategory(name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
}
async function deleteCategoryAction(id) {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].deleteCategory(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
}
async function updateCategoryAction(id, formData) {
    const name = formData.get("name");
    if (!name) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].updateCategory(id, name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
}
async function addProductAction(formData) {
    const name = formData.get("name");
    const price = parseFloat(formData.get("price"));
    const categoryId = formData.get("categoryId");
    if (!name || isNaN(price) || !categoryId) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].addProduct(name, price, categoryId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
}
async function deleteProductAction(id) {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].deleteProduct(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
}
async function updateProductAction(id, formData) {
    const name = formData.get("name");
    const price = parseFloat(formData.get("price"));
    const categoryId = formData.get("categoryId");
    if (!name || isNaN(price) || !categoryId) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].updateProduct(id, name, price, categoryId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addCategoryAction,
    deleteCategoryAction,
    updateCategoryAction,
    addProductAction,
    deleteProductAction,
    updateProductAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCategoryAction, "4004e4b1d5fc15759cf20fcdd10d0143ee172a17f6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCategoryAction, "4016bf787e6cca51703af870040213655568d2b775", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCategoryAction, "60f3323bdc0b010cd7195f815fc2394d41b4e3c472", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProductAction, "40f37e38965d5d5a1017521da5b897556d99181a27", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductAction, "40e8fa7db100aaaeb8439dc5488b78f314f7bd7978", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductAction, "604f6e95f3da431707c6ec05b60cc3e56de6ab810c", null);
}),
"[project]/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4004e4b1d5fc15759cf20fcdd10d0143ee172a17f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addCategoryAction"],
    "4016bf787e6cca51703af870040213655568d2b775",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCategoryAction"],
    "40e8fa7db100aaaeb8439dc5488b78f314f7bd7978",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProductAction"],
    "40f37e38965d5d5a1017521da5b897556d99181a27",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProductAction"],
    "604f6e95f3da431707c6ec05b60cc3e56de6ab810c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductAction"],
    "60f3323bdc0b010cd7195f815fc2394d41b4e3c472",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCategoryAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_363e42f9._.js.map