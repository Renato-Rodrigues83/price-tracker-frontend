import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-lg border">
            <Skeleton className="aspect-square w-full" />

            <div className="space-y-3 p-4">
              <Skeleton className="h-4 w-24" />

              <Skeleton className="h-10 w-full" />

              <Skeleton className="h-7 w-32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
