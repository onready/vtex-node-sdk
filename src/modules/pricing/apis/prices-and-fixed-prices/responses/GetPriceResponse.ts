interface DateRange {
  from?: string;
  to?: string;
}

export interface FixedPrice {
  tradePolicyId?: string;
  value?: number;
  listPrice?: string;
  minQuantity?: number;
  dateRange?: DateRange;
}

export interface GetPriceResponse {
  itemId?: string;
  listPrice?: number;
  costPrice?: number;
  markup?: number;
  basePrice?: number;
  fixedPrices?: Array<FixedPrice>;
}
