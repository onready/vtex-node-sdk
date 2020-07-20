interface Item {
  id?: string;
  productId?: string;
  refId?: string;
  name?: string;
  value?: number;
  price?: number;
  quantity?: number;
  shippingDiscount?: number;
  discount?: number;
  priceTags?: Array<string>;
}

interface Cart {
  items?: Array<Item>;
  grandTotal?: number;
  discounts?: number;
  shipping?: number;
  taxes?: number;
  itemsTotal?: number;
}

interface ClientProfile {
  email?: string;
  firstName?: string;
  lastName?: string;
  document?: string;
  documentType?: string;
  phone?: string;
  birthDate?: string;
  isCorporate?: boolean;
}

interface Shipping {
  receiverName?: string;
  postalCode?: string;
  city?: string;
  state?: string;
  country?: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  complement?: string;
  reference?: string;
}

interface OrderInfo {
  orderId?: string;
  sequence?: number;
  cart?: Cart;
  clientProfile?: ClientProfile;
  shipping?: Shipping;
}

export interface CreateGiftCardTransactionRequest {
  operation?: string;
  value?: number;
  description?: string;
  redemptionToken?: string;
  redemptionCode?: string;
  requestId?: string;
  orderInfo?: OrderInfo;
}
