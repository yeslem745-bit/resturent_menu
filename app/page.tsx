import Hero from "@/components/Hero";
import MenuDisplay from "@/components/MenuDisplay";
import { store } from "@/lib/store";

export default function Home() {
  const categories = store.categories;
  const products = store.products;

  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <MenuDisplay
        categories={categories}
        products={products}
      />
    </div>
  );
}
