import { unstable_cache } from "next/cache";
import { api } from "../api";
import { StoreListResponse } from "@/interfaces/store";

const getCachedStores = unstable_cache(
    async () => {
        const response = await api.get<StoreListResponse>("/stores")

        return response.data
    },
    ["stores"],
    {
        revalidate: 3600
    }
)

export async function getStores() {
    return getCachedStores()
}