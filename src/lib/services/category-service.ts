import { unstable_cache } from "next/cache";
import { api } from "@/lib/api";
import { CategoryListResponse } from "@/interfaces/category";

const getCachedCategories = unstable_cache(
    async () => {
        const response = await api.get<CategoryListResponse>("/categories")
        
        return response.data
    },
    ["categories"],
    {
        revalidate: 3600,
    }
)

export async function getCategories() {
    return getCachedCategories()
}