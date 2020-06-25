import { CreateBrandSubcollectionRequest } from "../requests/CreateBrandSubcollectionRequest";

export interface CreateBrandSubcollectionResponse
  extends CreateBrandSubcollectionRequest {
  SubCollectionId?: number;
}
