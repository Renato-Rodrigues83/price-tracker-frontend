import { api } from "@/lib/api"
import type { PriceHistoryResponse } from "@/interfaces/price-history"


export async function getPriceHistory(
    offerURL: string,
): Promise<PriceHistoryResponse> {
    const response = await api.get<PriceHistoryResponse>(
        "/price-history",
        {
            params: {
                offer_url: offerURL,
            }
        }
    )
    
    return response.data
}