export type Product = {
    id: string;
    name: string;
    price: number;
    categoryId: string;
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="bg-card p-5 rounded-2xl shadow-sm border border-border hover:shadow-gold transition-all duration-300 flex justify-between items-center group">
            <div>
                <h3 className="text-lg font-bold text-brown mb-1 group-hover:text-gold transition-colors">
                    {product.name}
                </h3>
                <span className="text-xs text-brown/40 font-mono">
                    #{product.id}
                </span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-bold text-gold">
                    {product.price}
                </span>
                <span className="text-xs text-gold/80 mr-1">ر.س</span>
            </div>
        </div>
    );
}
