export interface GetCategoryByIdResponse {
  Id?: number;
  Name?: string;
  FatherCategoryId?: number;
  Title?: string;
  Description?: string;
  Keywords?: string;
  IsActive?: boolean;
  LomadeeCampaignCode?: string;
  AdWordsRemarketingCode?: string;
  ShowInStoreFront?: boolean;
  ShowBrandFilter?: boolean;
  ActiveStoreFrontLink?: boolean;
  GlobalCategoryId?: number;
  StockKeepingUnitSelectionMode?: string;
  Score?: number;
  LinkId?: string;
  HasChildren?: boolean;
}
