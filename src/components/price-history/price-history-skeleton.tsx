import { Skeleton } from "@/components/ui/skeleton";

export function PriceHistorySkeleton() {
  return (
    <div className="space-y-8">
      {/* Selector */}
      <Skeleton className="h-10 w-full" />

      {/* Summary / product information */}
      <div className="space-y-3">
        <Skeleton className="h-6 w-72" />
        <Skeleton className="h-4 w-40" />
      </div>

      {/* Chart */}
      <div className="rounded-lg border p-4">
        <div className="mb-6 space-y-2">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>

        <Skeleton className="h-[400px] w-full" />
      </div>
    </div>
  );
}
