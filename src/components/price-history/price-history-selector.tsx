"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { getOffers } from "@/lib/services/offer-service";
import type { Offer } from "@/interfaces/offer";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PriceHistorySelectorProps {
  selectedOffer?: Offer | null;
}

export function PriceHistorySelector({
  selectedOffer,
}: PriceHistorySelectorProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search.trim()) {
      setOffers([]);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);

      try {
        const response = await getOffers({
          search: search.trim(),
          page: 1,
          page_size: 10,
        });

        setOffers(response.data);
      } catch (error) {
        console.error("Failed to search offers:", error);
        setOffers([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [search]);

  const handleSelect = (offer: Offer) => {
    const params = new URLSearchParams();

    params.set("offer_url", offer.url);

    router.push(`/price-history?${params.toString()}`);

    setOpen(false);
    setSearch("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between">
            <span className=" truncate">
              {selectedOffer ? selectedOffer.title : "Selecione um produto"}
            </span>

            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        }></PopoverTrigger>

      <PopoverContent className="w-[min(90vw,500px)] p-0">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Buscar produto..."
            value={search}
            onValueChange={setSearch}
          />

          <CommandList>
            {loading && <CommandEmpty>Buscando produtos...</CommandEmpty>}

            {!loading && search && offers.length === 0 && (
              <CommandEmpty>Nenhum produto encontrado.</CommandEmpty>
            )}

            {!loading && !search && (
              <CommandEmpty>Digite para buscar um produto.</CommandEmpty>
            )}

            {offers.length > 0 && (
              <CommandGroup>
                {offers.map((offer) => (
                  <CommandItem
                    key={offer.url}
                    value={offer.url}
                    onSelect={() => handleSelect(offer)}>
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        selectedOffer?.url === offer.url
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />

                    <div className="flex min-w-0 flex-col">
                      <span className="line-clamp-2 text-sm">
                        {offer.title}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        {offer.store.name} •{" "}
                        {offer.available
                          ? `R$ ${offer.price.toFixed(2)}`
                          : "Indisponível"}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
