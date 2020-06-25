import { UpdateCollectionRequest } from "../requests/UpdateCollectionRequest";

export interface GetCollectionResponse extends UpdateCollectionRequest {
  Id?: number;
  Description?: string;
  TotalProducts?: number;
}
