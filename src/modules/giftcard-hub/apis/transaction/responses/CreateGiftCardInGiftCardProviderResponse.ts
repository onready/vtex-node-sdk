interface Transaction {
  href?: string;
}

export interface CreateGiftCardInGiftCardProviderResponse {
  id?: string;
  redemptionToken?: string;
  redemptionCode?: string;
  balance?: number;
  relationName?: string;
  emissionDate?: string;
  expiringDate?: string;
  caption?: string;
  provider?: string;
  discount?: boolean;
  transaction?: Transaction;
}
