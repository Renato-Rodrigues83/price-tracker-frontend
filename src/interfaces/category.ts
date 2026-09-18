export interface Category {
    id: string;
    name: string;
    url: string
}

export interface CategoryListResponse {
    data: Category[];
}