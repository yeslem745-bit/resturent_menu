export type Category = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  categoryId: string;
};

export const initialCategories: Category[] = [
  { id: "1", name: "الكل" },
  { id: "2", name: "المقبلات" },
  { id: "3", name: "الأطباق الرئيسية" },
  { id: "4", name: "المشروبات" },
  { id: "5", name: "الحلويات" },
];

export const initialProducts: Product[] = [
  { id: "101", name: "حمص باللحمة", price: 25, categoryId: "2" },
  { id: "102", name: "متبل باذنجان", price: 18, categoryId: "2" },
  { id: "201", name: "مشويات مشكلة", price: 65, categoryId: "3" },
  { id: "202", name: "كبسة دجاج", price: 45, categoryId: "3" },
  { id: "301", name: "عصير برتقال طازج", price: 15, categoryId: "4" },
  { id: "302", name: "قهوة عربية", price: 12, categoryId: "4" },
  { id: "401", name: "كنافة نابلسية", price: 22, categoryId: "5" },
  { id: "402", name: "أم علي", price: 20, categoryId: "5" },
];
