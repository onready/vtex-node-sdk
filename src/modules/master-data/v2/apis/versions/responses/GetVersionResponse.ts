interface DepartmentVisitedTag {
  DisplayValue?: string;
  Scores?: any;
}

interface Document {
  id?: string;
  dataEntityId?: string;
  accountId?: string;
  accountName?: string;
  followers?: Array<string>;
  email?: Array<string>;
  rclastsession?: Array<string>;
  rclastsessiondate?: Array<string>;
  checkouttag?: Array<string>;
  carttag?: Array<string>;
  departmentVisitedTag?: DepartmentVisitedTag;
}

export interface GetVersionResponse {
  id?: string;
  author?: string;
  document?: Document;
}
