export interface GetSellerByIdResponse {
  SellerId?: number;
  Name?: string;
  Email?: string;
  Description?: string;
  ExchangeReturnPolicy?: string;
  DeliveryPolicy?: string;
  UseHybridPaymentOptions?: boolean;
  UserName?: string;
  Password?: string;
  SecutityPrivacyPolicy?: string;
  CNPJ?: string;
  CSCIdentification?: string;
  ArchiveId?: number;
  UrlLogo?: string;
  ProductCommissionPercentage?: number;
  FreightCommissionPercentage?: number;
  CategoryCommissionPercentage?: number;
  FulfillmentEndpoint?: string;
  CatalogSystemEndpoint?: string;
  IsActive?: boolean;
  FulfillmentSellerId?: string;
  SellerType?: number;
  IsBetterScope?: boolean;
  Category?: string;
}
