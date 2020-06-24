interface Dimension {
  cubicweight?: number;
  height?: number;
  length?: number;
  weight?: number;
  width?: number;
}

interface RealDimension {
  realCubicweight?: number;
  realHeight?: number;
  realLength?: number;
  realWeight?: number;
  realWidth?: number;
}

interface Field {
  FieldName?: string;
  MaxCaracters?: string;
  DomainValues?: string;
}

interface Attachment {
  Id?: number;
  Name?: string;
  Keys?: Array<string>;
  Fields?: Array<Field>;
  IsActive?: boolean;
  IsRequired?: boolean;
}

interface SkuSeller {
  SellerId?: string;
  StockKeepingUnitId?: number;
  SellerStockKeepingUnitId?: string;
  IsActive?: boolean;
  FreightCommissionPercentage?: number;
  ProductCommissionPercentage?: number;
}

interface Image {
  ImageUrl?: string;
  ImageName?: string;
  FileId?: number;
}

interface SkuSpecification {
  FieldId?: number;
  FieldName?: string;
  FieldValueIds?: Array<number>;
  FieldValues?: Array<string>;
}

interface ProductSpecification {
  FieldId?: number;
  FieldName?: string;
  FieldValueIds?: Array<number>;
  FieldValues?: Array<string>;
}

interface AlternateId {
  Ean?: string;
  RefId?: string;
}

export interface GetSKUResponse {
  Id?: number;
  ProductId?: number;
  NameComplete?: string;
  ProductName?: string;
  ProductDescription?: string;
  SkuName?: string;
  IsActive?: boolean;
  IsTransported?: boolean;
  IsInventoried?: boolean;
  IsGiftCardRecharge?: boolean;
  ImageUrl?: string;
  DetailUrl?: string;
  CSCIdentification?: string;
  BrandId?: string;
  BrandName?: string;
  Dimension?: Dimension;
  RealDimension?: RealDimension;
  ManufacturerCode?: string;
  IsKit?: boolean;
  KitItems?: Array<string>;
  Services?: Array<string>;
  Categories?: Array<string>;
  Attachments?: Array<Attachment>;
  Collections?: Array<string>;
  SkuSellers?: Array<SkuSeller>;
  SalesChannels?: Array<number>;
  Images?: Array<Image>;
  SkuSpecifications?: Array<SkuSpecification>;
  ProductSpecifications?: Array<ProductSpecification>;
  ProductClustersIds?: string;
  ProductCategoryIds?: string;
  ProductGlobalCategoryId?: string;
  ProductCategories?: any;
  CommercialConditionId?: number;
  RewardValue?: number;
  AlternateIds?: Array<AlternateId>;
  AlternateIdValues?: Array<string>;
  EstimatedDateArrival?: string;
  MeasurementUnit?: string;
  UnitMultiplier?: number;
  InformationSource?: string;
  ModalType?: string;
}
