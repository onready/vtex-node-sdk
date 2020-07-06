interface DataItem {
  account?: string;
  balance?: number;
  document?: string;
  documentType?: string;
  creditLimit?: number;
  lastUpdate?: string;
  description?: string;
  email?: string;
}

interface Summary {
  count?: number;
}

export interface SearchAllAccountsResponse {
  data?: Array<DataItem>;
  summary?: Summary;
}
