import { CreateSKUSubcollectionRequest } from "../requests/CreateSKUSubcollectionRequest";

export interface CreateSKUSubcollectionResponse
  extends CreateSKUSubcollectionRequest {
  SubCollectionId?: number;
}
