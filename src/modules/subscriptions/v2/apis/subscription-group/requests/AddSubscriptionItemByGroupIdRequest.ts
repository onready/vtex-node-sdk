interface Sku {
  id?: string;
  name?: string;
  productName?: string;
  imageUrl?: string;
  detailUrl?: string;
  nameComplete?: string;
}

export interface AddSubscriptionItemByGroupIdRequest {
  sku?: Sku;
  quantity?: number;
  priceAtSubscriptionDate?: number;
  sellingPrice?: number;
  endpoint?: string;
}
