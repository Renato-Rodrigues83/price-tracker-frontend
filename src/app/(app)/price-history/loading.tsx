import { PriceHistorySkeleton } from "@/components/price-history/price-history-skeleton";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8 space-y-2">
        <div className="h-9 w-64 animate-pulse rounded-md bg-muted" />

        <div className="h-5 w-96 animate-pulse rounded-md bg-muted" />
      </div>

      <PriceHistorySkeleton />
    </main>
  );
}
