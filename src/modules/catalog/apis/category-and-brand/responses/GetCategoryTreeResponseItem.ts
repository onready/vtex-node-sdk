export interface GetCategoryTreeResponseItem {
  id?: number;
  name?: string;
  hasChildren?: boolean;
  url?: string;
  children?: Array<GetCategoryTreeResponseItem>;
  Title?: string;
  MetaTagDescription?: string;
}
