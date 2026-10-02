import { FeaturedOfferSkeleton } from "@/components/home";

export default function Loading() {
  return (
    <div className="space-y-16">
      {Array.from({ length: 3 }).map((_, sectionIndex) => (
        <section key={sectionIndex} className="space-y-6">
          <div className="space-y-2">
            <div className="h-7 w-48 animate-pulse rounded-md bg-muted" />
            <div className="h-4 w-64 animate-pulse rounded-md bg-muted" />
          </div>

          <div className="relative px-14">
            <div className="flex gap-4 overflow-hidden">
              {Array.from({ length: 5 }).map((_, cardIndex) => (
                <div key={cardIndex} className="w-70 shrink-0">
                  <FeaturedOfferSkeleton />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
