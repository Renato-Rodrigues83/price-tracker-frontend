import type { Offer } from "@/interfaces/offer";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  offers: Offer[];
}

export function ProductGrid({ offers }: ProductGridProps) {
  if (offers.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {offers.map((offer) => (
        <ProductCard key={offer.url} offer={offer} />
      ))}
    </div>
  );
}
