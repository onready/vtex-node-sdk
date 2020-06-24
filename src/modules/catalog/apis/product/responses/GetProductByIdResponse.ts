export interface GetProductByIdResponse {
  Id?: number;
  Name?: string;
  DepartmentId?: number;
  CategoryId?: number;
  BrandId?: number;
  LinkId?: string;
  RefId?: string;
  IsVisible?: boolean;
  Description?: string;
  DescriptionShort?: string;
  ReleaseDate?: string;
  KeyWords?: string;
  Title?: string;
  IsActive?: boolean;
  TaxCode?: string;
  MetaTagDescription?: string;
  SupplierId?: number;
  ShowWithoutStock?: boolean;
  ListStoreId?: Array<number>;
  AdWordsRemarketingCode?: string;
  LomadeeCampaignCode?: string;
}
