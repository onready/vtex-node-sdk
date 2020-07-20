interface Item {
  id?: string;
  productId?: string;
  name?: string;
  price?: number;
  sellingPrice?: number;
  quantity?: number;
  totalShippingDiscount?: number;
  totalDiscount?: number;
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
}

interface OrderInfo {
  orderId?: string;
  sequence?: number;
  cart?: Cart;
  clientProfile?: ClientProfile;
  shipping?: Shipping;
}

interface HrefItem {
  href?: string;
}

export interface GetGiftCardByTransactionIdResponse {
  value?: number;
  description?: string;
  date?: string;
  requestId?: string;
  orderInfo?: OrderInfo;
  settlement?: HrefItem;
  cancellation?: HrefItem;
  authorization?: HrefItem;
  operation?: string;
}
