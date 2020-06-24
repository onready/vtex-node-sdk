interface Measures {
  cubicweight?: number;
  height?: number;
  length?: number;
  weight?: number;
  width?: number;
}

interface Sku {
  sku?: number;
  skuname?: string;
  dimensions?: any;
  available?: boolean;
  availablequantity?: number;
  cacheVersionUsedToCallCheckout?: string;
  listPriceFormated?: string;
  listPrice?: number;
  taxFormated?: string;
  taxAsInt?: number;
  bestPriceFormated?: string;
  bestPrice?: number;
  installments?: number;
  installmentsValue?: number;
  installmentsInsterestRate?: number;
  image?: string;
  sellerId?: string;
  seller?: string;
  measures?: Measures;
  unitMultiplier?: number;
  rewardValue?: number;
}

export interface GetProductVariationsResponse {
  productId?: number;
  name?: string;
  salesChannel?: number;
  available?: boolean;
  displayMode?: number;
  dimensions?: string;
  dimensionsInputType?: string;
  dimensionsMap?: boolean;
  skus?: Array<Sku>;
}
