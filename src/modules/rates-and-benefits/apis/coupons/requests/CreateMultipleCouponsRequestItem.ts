interface CouponConfiguration {
  utmSource?: string;
  utmCampaign?: string;
  couponCode?: string;
  maxItemsPerClient?: number;
  expirationIntervalPerUse?: string;
}

export interface CreateMultipleCouponsRequestItem {
  quantity?: number;
  couponConfiguration?: CouponConfiguration;
}
