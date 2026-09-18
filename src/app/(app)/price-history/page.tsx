import { Suspense } from "react";

import { PriceHistorySkeleton } from "@/components/price-history/price-history-skeleton";
import { PriceHistoryContent } from "./price-history-content";

interface PriceHistoryPageProps {
  searchParams: Promise<{
    offer_url?: string;
  }>;
}

export default function PriceHistory({ searchParams }: PriceHistoryPageProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Histórico de preços</h1>

        <p className="mt-2 text-muted-foreground">
          Acompanhe a evolução dos preços das ofertas monitoradas.
        </p>
      </div>

      <Suspense fallback={<PriceHistorySkeleton />}>
        <PriceHistoryContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
