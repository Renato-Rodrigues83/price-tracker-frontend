export interface Store {
    id: string;
    name: string;
    base_URL: string;
}

export interface StoreListResponse {
    data: Store[];
}