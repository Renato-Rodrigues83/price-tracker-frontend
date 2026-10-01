import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import type { FeaturedOffersDTO } from "@/interfaces/featured-offers";
import { FeaturedOffersCard } from "./featured-offers-card";

interface FeaturedOffersSectionProps {
  featuredOffers: FeaturedOffersDTO[];
  storeId: string;
  title: string;
  description: string;
}

export function FeaturedOffersSection({
  featuredOffers,
  storeId,
  title,
  description,
}: FeaturedOffersSectionProps) {
  const storeOffers = featuredOffers
    .filter((featuredOffers) => featuredOffers.store.id === storeId)
    .sort((a, b) => a.position - b.position);

  if (storeOffers.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 space-y-6">
      <div className=" ml-10">
        <h2 className=" text-2xl font-bold">{title}</h2>

        <p className=" text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="relative px-14">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}>
          <CarouselContent>
            {storeOffers.map((featuredOffers) => (
              <CarouselItem
                key={`${featuredOffers.store.id}-${featuredOffers.position}`}
                className="basis-60 sm:basis-62.5 md:basis-65 lg:basis-70">
                <div className="p-1">
                  <FeaturedOffersCard featuredOffers={featuredOffers} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-10 w-10 -left-12 cursor-pointer" />
          <CarouselNext className=" h-10 w-10 -right-12 cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
}
