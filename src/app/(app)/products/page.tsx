import { Suspense } from "react";

import { ProductsContent } from "./products-content";
import Loading from "./loading";

interface ProductsPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
    store?: string;
    category?: string;
    available?: string;
    min_price?: string;
    max_price?: string;
    sort?: string;
  }>;
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Produtos</h1>

        <p className="mt-2 text-muted-foreground">
          Confira as ofertas monitoradas pelo Price Tracker.
        </p>
      </div>

      <Suspense fallback={<Loading />}>
        <ProductsContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
