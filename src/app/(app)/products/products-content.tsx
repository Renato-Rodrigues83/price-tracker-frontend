import { ProductFilters } from "@/components/products/product-filters";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductPagination } from "@/components/products/product-pagination";

import { getOffers } from "@/lib/services/offer-service";
import { getStores } from "@/lib/services/store-service";
import { getCategories } from "@/lib/services/category-service";

import type { OfferSort } from "@/interfaces/offer";

interface ProductsContentProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
    store?: string;
    category?: string;
    available?: string;
    min_price?: string;
    max_price?: string;
    sort?: string;
  }>;
}

export async function ProductsContent({ searchParams }: ProductsContentProps) {
  const params = await searchParams;

  const page = Number.parseInt(params.page ?? "1", 10) || 1;

  const [offers, stores, categories] = await Promise.all([
    getOffers({
      page,
      page_size: 30,
      search: params.search,
      store: params.store,
      category: params.category,
      available:
        params.available === undefined
          ? undefined
          : params.available === "true",
      min_price: params.min_price ? Number(params.min_price) : undefined,
      max_price: params.max_price ? Number(params.max_price) : undefined,
      sort: params.sort as OfferSort | undefined,
    }),

    getStores(),

    getCategories(),
  ]);

  /*if (categories) {
    console.log("[products] categories:", categories);
    console.log("[products] categories.data:", categories?.data);
  }*/

  return (
    <>
      <ProductFilters stores={stores.data} categories={categories.data} />

      <div className="mt-8">
        <ProductGrid offers={offers.data} />
      </div>

      <div className="mt-8">
        <ProductPagination
          currentPage={offers.pagination.page}
          totalPages={offers.pagination.total_pages}
        />
      </div>
    </>
  );
}
