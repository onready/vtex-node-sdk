export interface CouponMassiveGenerationRequest {
  utmSource?: string;
  utmCampaign?: string;
  couponCode?: string;
  maxItemsPerClient?: number;
  expirationIntervalPerUse?: string;
}
