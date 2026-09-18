export interface PriceHistoryDTO {
    price: number;
    available: boolean;
    collected_at: string;
}

export interface PriceHistoryResponse {
    data: PriceHistoryDTO[];
}