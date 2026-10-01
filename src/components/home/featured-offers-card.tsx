import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "../ui/card";

import type { FeaturedOffersDTO } from "@/interfaces/featured-offers";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

interface FeaturedOffersCardProps {
  featuredOffers: FeaturedOffersDTO;
}

export function FeaturedOffersCard({
  featuredOffers,
}: FeaturedOffersCardProps) {
  return (
    <Card className="flex h-97.5 flex-col overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-47.5 shrink-0 bg-muted">
          <Image
            src={featuredOffers.image}
            alt={featuredOffers.title}
            fill
            loading="eager"
            className=" object-contain p-4"
            sizes="280px"
          />
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col p-3">
        <CardTitle className="line-clamp-3 text-sm font-medium leading-5">
          {featuredOffers.title}
        </CardTitle>

        <p className="mt-auto pt-3 text-base font-bold">
          R$ {featuredOffers.price.toFixed(2).replace(".", ",")}
        </p>
      </CardContent>

      <CardFooter className="shrink-0 p-3 pt-0">
        <a
          href={featuredOffers.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
          Ver oferta
        </a>
      </CardFooter>
    </Card>
  );
}
