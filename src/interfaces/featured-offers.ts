import { Store } from "./store"

export interface FeaturedOffersDTO {
    store: Store
    position: number
    scraped_at: string
    title: string
    normalized_title: string
    price: number
    image: string
    url: string
    available: boolean
}

export interface FeaturedOffersListResponse {
    data: FeaturedOffersDTO[]
}