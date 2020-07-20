interface Client {
  id?: string;
  email?: string;
  document?: string;
}

interface Item {
  productId?: string;
  id?: string;
  refId?: string;
  name?: string;
  price?: number;
  quantity?: number;
}

interface Cart {
  grandTotal?: number;
  relationName?: string;
  redemptionCode?: string;
  discounts?: number;
  shipping?: number;
  taxes?: number;
  items?: Array<Item>;
  itemsTotal?: number;
}

export interface CreateGiftCardSettlementTransactionRequest {
  client?: Client;
  cart?: Cart;
}
