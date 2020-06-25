interface DataItem {
  SubCollectionId?: number;
  SkuId?: number;
}

export interface GetSubcollectionSKUResponse {
  Page?: number;
  Size?: number;
  TotalRows?: number;
  TotalPage?: number;
  Data?: Array<DataItem>;
}
