import { RetrieveInvoiceByIdResponse } from "./RetrieveInvoiceByIdResponse";

interface Summary {
  total?: number;
  count?: number;
}

export interface SearchAllInvoicesResponse {
  data?: Array<RetrieveInvoiceByIdResponse>;
  summary?: Summary;
}
