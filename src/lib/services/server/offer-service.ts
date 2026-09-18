import "server-only";

import { api } from "@/lib/api";
import type {
  Offer,
  OfferListResponse,
} from "@/interfaces/offer";

import { cacheLife, cacheTag } from "next/cache";

export async function getOfferByUrl(
  url: string,
): Promise<Offer | null> {
  "use cache";

  cacheLife({
    stale: 300,
    revalidate: 300,
    expire: 1800,
  });

  cacheTag(`offer:${url}`);

  const response = await api.get<OfferListResponse>(
    "/offers",
    {
      params: {
        url,
        page: 1,
        page_size: 1,
      },
    },
  );

  return response.data.data[0] ?? null;
}