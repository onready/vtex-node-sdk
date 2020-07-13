interface Seller {
  id?: string;
  name?: string;
}

interface Gift {
  id?: string;
  name?: string;
  quantity?: number;
  sellers?: Array<Seller>;
}

interface SkusGift {
  quantitySelectable?: number;
  gifts?: Array<Gift>;
}

export interface CreateOrUpdateCalculatorConfigurationRequest {
  idCalculatorConfiguration?: string;
  name?: string;
  beginDateUtc?: string;
  endDateUtc?: string;
  lastModified?: string;
  daysAgoOfPurchases?: number;
  isActive?: boolean;
  isArchived?: boolean;
  isFeatured?: boolean;
  disableDeal?: boolean;
  activeDaysOfWeek?: Array<string>;
  offset?: number;
  newOffset?: number;
  cumulative?: boolean;
  nominalShippingDiscountValue?: number;
  absoluteShippingDiscountValue?: number;
  nominalDiscountValue?: number;
  maximumUnitPriceDiscount?: number;
  percentualDiscountValue?: number;
  percentualShippingDiscountValue?: number;
  percentualTax?: number;
  shippingPercentualTax?: number;
  percentualDiscountValueList1?: number;
  percentualDiscountValueList2?: number;
  skusGift?: SkusGift;
  nominalRewardValue?: number;
  percentualRewardValue?: number;
  orderStatusRewardValue?: string;
  maxNumberOfAffectedItems?: number;
  origin?: string;
  idSellerIsInclusive?: boolean;
  idsSalesChannel?: Array<string>;
  marketingTags?: Array<string>;
  paymentsMethods?: Array<string>;
  campaigns?: Array<string>;
  categories?: Array<string>;
  categoriesAreInclusive?: boolean;
  brands?: Array<string>;
  brandsAreInclusive?: boolean;
  products?: Array<string>;
  productsAreInclusive?: boolean;
  collections1BuyTogether?: Array<string>;
  minimumQuantityBuyTogether?: number;
  quantityToAffectBuyTogether?: number;
  enableBuyTogetherPerSku?: boolean;
  listSku1BuyTogether?: Array<string>;
  listSku2BuyTogether?: Array<string>;
  totalValueFloor?: number;
  totalValueCeling?: number;
  totalValueMode?: string;
  collections?: Array<string>;
  collectionsIsInclusive?: boolean;
  restrictionsBins?: Array<string>;
  totalValuePurchase?: number;
  slasIds?: Array<string>;
  isSlaSelected?: boolean;
  isFirstBuy?: boolean;
  firstBuyIsProfileOptimistic?: boolean;
  compareListPriceAndPrice?: boolean;
  isDifferentListPriceAndPrice?: boolean;
  zipCodeRanges?: Array<string>;
  itemMaxPrice?: number;
  itemMinPrice?: number;
  isMinMaxInstallments?: boolean;
  minInstallment?: number;
  maxInstallment?: number;
  clusterExpressions?: Array<string>;
  giftListTypes?: Array<string>;
  affiliates?: Array<string>;
  maxUsage?: number;
  maxUsagePerClient?: number;
  multipleUsePerClient?: boolean;
  type?: string;
}
