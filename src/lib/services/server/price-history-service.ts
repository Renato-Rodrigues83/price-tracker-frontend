import "server-only";

import { api } from "@/lib/api";
import type { PriceHistoryResponse } from "@/interfaces/price-history";

import { cacheLife, cacheTag } from "next/cache";

export async function getPriceHistory(
  offerURL: string,
): Promise<PriceHistoryResponse> {
  "use cache";

  cacheLife({
    stale: 300,
    revalidate: 300,
    expire: 1800,
  });

  cacheTag(`price-history:${offerURL}`);

  const response = await api.get<PriceHistoryResponse>(
    "/price-history",
    {
      params: {
        offer_url: offerURL,
      },
    },
  );

  return response.data;
}