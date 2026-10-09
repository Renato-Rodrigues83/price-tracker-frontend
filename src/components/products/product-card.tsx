import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import type { Offer } from "@/interfaces/offer";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface ProductCardProps {
  offer: Offer;
}

export function ProductCard({ offer }: ProductCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="p-0">
        <a
          href={offer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`Ver ${offer.title} na ${offer.store.name}`}>
          <div className="relative aspect-square w-full">
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              loading="eager"
              className="object-contain p-6 transition-transform duration-200 hover:scale-105"
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        </a>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            {offer.store.name}
          </span>

          <span className="text-xs text-muted-foreground">
            {offer.category.name}
          </span>
        </div>

        <a
          href={offer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="line-clamp-2 text-sm font-medium transition-colors hover:text-primary">
          {offer.title}
        </a>

        <div className="mt-auto">
          {offer.available ? (
            <p className="text-2xl font-bold">R$ {offer.price.toFixed(2)}</p>
          ) : (
            <p className="text-lg font-semibold text-muted-foreground">
              Indisponível
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="shrink-0 p-0 pt-0">
        <a
          href={offer.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full rounded-t-none",
          )}>
          Ver oferta
        </a>
      </CardFooter>
    </Card>
  );
}
