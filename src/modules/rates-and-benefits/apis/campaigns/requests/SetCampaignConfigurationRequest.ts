interface LastModified {
  dateUtc?: string;
  user?: string;
}

interface TargetConfiguration {
  featured?: boolean;
  id?: string;
  name?: string;
  daysAgoOfPurchases?: number;
  origin?: string;
  idSellerIsInclusive?: boolean;
  idsSalesChannel?: Array<string>;
  areSalesChannelIdsExclusive?: boolean;
  marketingTags?: Array<string>;
  paymentsMethods?: Array<string>;
  stores?: Array<string>;
  campaigns?: Array<string>;
  storesAreInclusive?: boolean;
  categories?: Array<string>;
  categoriesAreInclusive?: boolean;
  brands?: Array<string>;
  brandsAreInclusive?: boolean;
  products?: Array<string>;
  productsAreInclusive?: boolean;
  collections1BuyTogether?: Array<string>;
  collections2BuyTogether?: Array<string>;
  minimumQuantityBuyTogether?: number;
  quantityToAffectBuyTogether?: number;
  enableBuyTogetherPerSku?: boolean;
  listSku1BuyTogether?: Array<string>;
  listSku2BuyTogether?: Array<string>;
  coupon?: Array<string>;
  totalValueFloor?: number;
  totalValueCeling?: number;
  totalValueIncludeAllItems?: boolean;
  totalValueMode?: string;
  collections?: Array<string>;
  collectionsIsInclusive?: boolean;
  restrictionsBins?: Array<string>;
  cardIssuers?: Array<string>;
  totalValuePurchase?: number;
  slasIds?: Array<string>;
  isSlaSelected?: boolean;
  isFirstBuy?: boolean;
  firstBuyIsProfileOptimistic?: boolean;
  compareListPriceAndPrice?: boolean;
  isDifferentListPriceAndPrice?: boolean;
  zipCodeRanges?: Array<any>;
  itemMaxPrice?: number;
  itemMinPrice?: number;
  installment?: number;
  isMinMaxInstallments?: boolean;
  minInstallment?: number;
  maxInstallment?: number;
  merchants?: Array<string>;
  clusterExpressions?: Array<string>;
  paymentsRules?: Array<string>;
  giftListTypes?: Array<string>;
  productsSpecifications?: Array<string>;
  affiliates?: Array<string>;
  maxUsage?: number;
  maxUsagePerClient?: number;
  multipleUsePerClient?: boolean;
  conditionId?: string;
}

export interface SetCampaignConfigurationRequest {
  beginDateUtc?: string;
  endDateUtc?: string;
  id?: string;
  name?: string;
  isActive?: boolean;
  isArchived?: boolean;
  lastModified?: LastModified;
  targetConfigurations?: Array<TargetConfiguration>;
}
