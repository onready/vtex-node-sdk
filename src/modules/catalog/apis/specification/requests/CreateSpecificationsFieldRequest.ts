export interface CreateSpecificationsFieldRequest {
  Name?: string;
  CategoryId?: number;
  FieldId?: number;
  IsActive?: boolean;
  IsRequired?: boolean;
  FieldTypeId?: number;
  FieldValueId?: number;
  Description?: string;
  IsStockKeepingUnit?: boolean;
  IsFilter?: boolean;
  IsOnProductDetails?: boolean;
  Position?: number;
  IsWizard?: boolean;
  IsTopMenuLinkActive?: boolean;
  IsSideMenuLinkActive?: boolean;
  DefaultValue?: string;
  FieldGroupId?: number;
  FieldGroupName?: string;
}
