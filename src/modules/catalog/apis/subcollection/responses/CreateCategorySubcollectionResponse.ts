import { CreateCategorySubcollectionRequest } from "../requests/CreateCategorySubcollectionRequest";

export interface CreateCategorySubcollectionResponse
  extends CreateCategorySubcollectionRequest {
  SubCollectionId?: number;
}
