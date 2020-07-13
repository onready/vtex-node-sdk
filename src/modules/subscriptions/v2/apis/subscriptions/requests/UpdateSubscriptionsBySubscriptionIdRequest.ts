interface Sku {
  id?: string;
  name?: string;
  productName?: string;
  imageUrl?: string;
  detailUrl?: string;
  nameComplete?: string;
}

interface Item {
  sku?: Sku;
  quantity?: number;
  priceAtSubscriptionDate?: number;
  sellingPrice?: number;
  endpoint?: string;
}

interface Frequency {
  periodicity?: string;
  interval?: number;
}

interface Validity {
  begin?: string;
  end?: string;
}

interface Plan {
  frequency?: Frequency;
  validity?: Validity;
  type?: string;
}

interface PaymentMethod {
  paymentSystem?: string;
  paymentAccountId?: string;
}

interface PurchaseSettings {
  purchaseDay?: string;
  paymentMethod?: PaymentMethod;
  seller?: string;
  salesChannel?: string;
  selectedSla?: string;
  currencyCode?: string;
}

interface AdditionalComponent {
  longName?: string;
  shortName?: string;
  types?: Array<string>;
}

export interface ShippingAddress {
  addressId?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  reference?: string;
  formattedAddress?: string;
  additionalComponents?: Array<AdditionalComponent>;
  geoCoordinate?: Array<number>;
  receiverName?: string;
  addressType?: string;
  addressName?: string;
}

interface MetadataItem {
  name?: string;
  properties?: any;
}

export interface UpdateSubscriptionsBySubscriptionIdRequest {
  item?: Item;
  plan?: Plan;
  purchaseSettings?: PurchaseSettings;
  shippingAddress?: ShippingAddress;
  status?: string;
  isSkipped?: boolean;
  metadata?: Array<MetadataItem>;
}
