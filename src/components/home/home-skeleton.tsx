import { Skeleton } from "@/components/ui/skeleton";

export function FeaturedOfferSkeleton() {
  return (
    <div className="flex h-97.5 flex-col overflow-hidden rounded-xl border">
      <div className="h-47.5 shrink-0">
        <Skeleton className="h-full w-full rounded-none" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />

        <Skeleton className="mt-auto h-5 w-28" />
      </div>

      <div className="shrink-0 p-3 pt-0">
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
}
