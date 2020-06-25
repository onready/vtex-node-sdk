interface Total {
  id?: string;
  name?: string;
  value?: number;
}

interface ItemAttachment {
  content?: any;
  name?: string;
}

interface AdditionalInfo {
  brandName?: string;
  brandId?: string;
  categoriesIds?: string;
  productClusterId?: string;
  commercialConditionId?: string;
  dimension?: any;
  offeringInfo?: string;
  offeringType?: string;
  offeringTypeId?: string;
}

interface Item {
  uniqueId?: string;
  id?: string;
  productId?: string;
  ean?: string;
  lockId?: string;
  itemAttachment?: ItemAttachment;
  attachments?: Array<string>;
  quantity?: number;
  seller?: string;
  name?: string;
  refId?: string;
  price?: number;
  listPrice?: number;
  manualPrice?: string;
  priceTags?: Array<string>;
  imageUrl?: string;
  detailUrl?: string;
  components?: Array<string>;
  bundleItems?: Array<string>;
  params?: Array<string>;
  offerings?: Array<string>;
  sellerSku?: string;
  priceValidUntil?: string;
  commission?: number;
  tax?: number;
  preSaleDate?: string;
  additionalInfo?: AdditionalInfo;
  measurementUnit?: string;
  unitMultiplier?: number;
  sellingPrice?: number;
  isGift?: boolean;
  shippingPrice?: string;
  rewardValue?: number;
  freightCommission?: number;
  priceDefinitions?: string;
  taxCode?: string;
  parentItemIndex?: string;
  parentAssemblyBinding?: string;
}

interface ClientProfileData {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  documentType?: string;
  document?: string;
  phone?: string;
  corporateName?: string;
  tradeName?: string;
  corporateDocument?: string;
  stateInscription?: string;
  corporatePhone?: string;
  isCorporate?: boolean;
  userProfileId?: string;
  customerClass?: string;
}

interface RatesAndBenefitsData {
  id?: string;
  rateAndBenefitsIdentifiers?: Array<string>;
}

interface Address {
  addressType?: string;
  receiverName?: string;
  addressId?: string;
  postalCode?: string;
  city?: string;
  state?: string;
  country?: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  complement?: string;
  reference?: string;
  geoCoordinates?: Array<string>;
}

interface LogisticsInfo {
  itemIndex?: number;
  selectedSla?: string;
  lockTTL?: string;
  price?: number;
  listPrice?: number;
  sellingPrice?: number;
  deliveryWindow?: string;
  deliveryCompany?: string;
  shippingEstimate?: string;
  shippingEstimateDate?: string;
  slas?: Array<any>;
  shipsTo?: Array<string>;
  deliveryIds?: Array<any>;
  deliveryChannel?: string;
  pickupStoreInfo?: any;
  addressId?: string;
  polygonName?: string;
}

interface SelectedAddress {
  addressId?: string;
  addressType?: string;
  receiverName?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  postalCode?: string;
  city?: string;
  state?: string;
  country?: string;
  reference?: string;
  geoCoordinates?: Array<string>;
}

interface ShippingData {
  id?: string;
  address?: Address;
  logisticsInfo?: Array<LogisticsInfo>;
  trackingHints?: string;
  selectedAddresses?: Array<SelectedAddress>;
}

interface Transaction {
  isActive?: boolean;
  transactionId?: string;
  merchantName?: string;
  payments?: Array<any>;
}

interface PaymentData {
  transactions?: Array<Transaction>;
}

interface PackageAttachment {
  packages?: Array<string>;
}

interface Seller {
  id?: string;
  name?: string;
  logo?: string;
}

interface ChangeData {
  reason?: string;
  discountValue?: number;
  incrementValue?: number;
  itemsAdded?: Array<string>;
  itemsRemoved?: Array<any>;
  receipt?: any;
}

interface ChangesAttachment {
  id?: string;
  changesData?: Array<ChangeData>;
}

interface CurrencyFormatInfo {
  CurrencyDecimalDigits?: number;
  CurrencyDecimalSeparator?: string;
  CurrencyGroupSeparator?: string;
  CurrencyGroupSize?: number;
  StartsWithCurrencySymbol?: boolean;
}

interface StorePreferencesData {
  countryCode?: string;
  currencyCode?: string;
  currencyFormatInfo?: CurrencyFormatInfo;
  currencyLocale?: number;
  currencySymbol?: string;
  timeZone?: string;
}

interface Marketplace {
  baseURL?: string;
  isCertified?: string;
  name?: string;
}

export interface GetOrderResponse {
  emailTracked?: string;
  approvedBy?: string;
  cancelledBy?: string;
  cancelReason?: string;
  orderId?: string;
  sequence?: string;
  marketplaceOrderId?: string;
  marketplaceServicesEndpoint?: string;
  sellerOrderId?: string;
  origin?: string;
  affiliateId?: string;
  salesChannel?: string;
  merchantName?: string;
  status?: string;
  statusDescription?: string;
  value?: number;
  creationDate?: string;
  lastChange?: string;
  orderGroup?: string;
  totals?: Array<Total>;
  items?: Array<Item>;
  marketplaceItems?: Array<string>;
  clientProfileData?: ClientProfileData;
  giftRegistryData?: string;
  marketingData?: string;
  ratesAndBenefitsData?: RatesAndBenefitsData;
  shippingData?: ShippingData;
  paymentData?: PaymentData;
  packageAttachment?: PackageAttachment;
  sellers?: Array<Seller>;
  callCenterOperatorData?: string;
  followUpEmail?: string;
  lastMessage?: string;
  hostname?: string;
  invoiceData?: string;
  changesAttachment?: ChangesAttachment;
  openTextField?: string;
  roundingError?: number;
  orderFormId?: string;
  commercialConditionData?: string;
  isCompleted?: boolean;
  customData?: string;
  storePreferencesData?: StorePreferencesData;
  allowCancellation?: boolean;
  allowEdition?: boolean;
  isCheckedIn?: boolean;
  marketplace?: Marketplace;
  authorizedDate?: string;
  invoicedDate?: string;
}
