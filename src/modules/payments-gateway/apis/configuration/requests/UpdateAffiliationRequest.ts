import { InsertAffiliationRequest } from "./InsertAffiliationRequest";

export interface UpdateAffiliationRequest extends InsertAffiliationRequest {
  id?: string;
}
