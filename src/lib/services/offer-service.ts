import { api } from "@/lib/api"
import type {
    OfferFilters,
    OfferListResponse,
} from "@/interfaces/offer"


export async function getOffers(
    filters?: OfferFilters
): Promise<OfferListResponse> {
    const response = await api.get<OfferListResponse>("/offers", {
        params: {
            ...filters,
            page_size: filters?.page_size ?? 10,
        }
    })

    return response.data
}

