interface Specification {
  fieldName?: string;
  fieldValue?: string;
}

interface Image {
  imageName?: string;
  imageUrl?: string;
}

interface Pricing {
  Currency?: string;
  SalePrice?: number;
  CurrencySymbol?: string;
}

export interface SaveSuggestionRequest {
  ProductId?: number;
  ProductName?: string;
  NameComplete?: string;
  ProductDescription?: string;
  BrandName?: string;
  SkuName?: string;
  SellerId?: number;
  Height?: number;
  Width?: number;
  Length?: number;
  WeightKg?: number;
  Updated?: boolean;
  RefId?: string;
  SellerStockKeepingUnitId?: number;
  CategoryFullPath?: string;
  SkuSpecifications?: Array<Specification>;
  ProductSpecifications?: Array<Specification>;
  Images?: Array<Image>;
  EAN?: string;
  MeasurementUnit?: string;
  UnitMultiplier?: number;
  AvailableQuantity?: number;
  Pricing?: Pricing;
}
