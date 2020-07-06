import { OpenOrChangeAccountRequest } from "../requests/OpenOrChangeAccountRequest";

export interface OpenOrChangeAccountResponse
  extends OpenOrChangeAccountRequest {
  balance?: string;
  status?: string;
  updatedAt?: string;
  createdAt?: string;
  description?: string;
  availableCredit?: number;
  preAuthorizedCredit?: number;
  tolerance?: number;
  availableBalance?: number;
}
