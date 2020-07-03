interface Product {
  name?: string;
  description?: string;
  categoryId?: number;
  brandId?: number;
  specifications?: string;
}

interface Sku {
  name?: string;
  eans?: Array<string>;
  refId?: string;
  height?: number;
  width?: number;
  length?: number;
  weight?: number;
  images?: any;
  unitMultiplier?: number;
  measurementUnit?: string;
  specifications: any;
}

export interface MatchRequest {
  matcherId?: string;
  score?: string;
  skuRef?: string;
  productRef?: string;
  product?: Product;
  sku?: Sku;
}
