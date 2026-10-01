import { FeaturedOffersListResponse } from "@/interfaces/featured-offers";
import { api } from "@/lib/api";
import { unstable_cache } from "next/cache";

const getCachedFeaturedOffers = unstable_cache(
    async () => {
        const response = await api.get<FeaturedOffersListResponse>("/featured-offers")

        return response.data
    },

    ["featured-offers"],

    {
        revalidate: 300,
    }
)

export async function getFeaturedOffers() {
    return getCachedFeaturedOffers()
}