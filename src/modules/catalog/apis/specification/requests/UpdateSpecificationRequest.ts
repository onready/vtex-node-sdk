export interface UpdateSpecificationRequest {
  FieldTypeId?: number;
  CategoryId?: number;
  FieldGroupId?: number;
  Name?: string;
  Description?: string;
  Position?: number;
  IsFilter?: boolean;
  IsRequired?: boolean;
  IsOnProductDetails?: boolean;
  IsStockKeepingUnit?: boolean;
  IsWizard?: boolean;
  IsActive?: boolean;
  IsTopMenuLinkActive?: boolean;
  IsSideMenuLinkActive?: boolean;
  DefaultValue?: string;
}
