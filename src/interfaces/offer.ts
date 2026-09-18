import type { Pagination } from "./pagination";

export interface StoreRef {
  id: string;
  name: string;
}

export interface CategoryRef {
  id: string;
  name: string;
}

export interface Offer {
  url: string;
  scraped_at: string;
  title: string;
  normalized_title: string;
  price: number;
  image: string;
  available: boolean;

  store: StoreRef;
  category: CategoryRef;
}

export interface OfferFilters {
  store?: string;
  category?: string;
  available?: boolean;
  search?: string;
  min_price?: number;
  max_price?: number;
  sort?: OfferSort;
  page?: number;
  page_size?: number;
}

export type OfferSort =
  | "price_asc"
  | "price_desc"
  | "name_asc"
  | "name_desc";

export interface OfferListResponse {
  data: Offer[];
  pagination: Pagination;
}