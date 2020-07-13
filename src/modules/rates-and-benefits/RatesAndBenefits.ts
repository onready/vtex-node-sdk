import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Coupons } from "./apis/coupons";
import { Benefits } from "./apis/benefits";
import { Campaigns } from "./apis/campaigns";

export class RatesAndBenefits {
  /**
   * Coupons API
   */
  readonly coupons: Coupons;

  /**
   * Benefits API
   */
  readonly benefits: Benefits;

  /**
   * Campaigns API
   */
  readonly campaigns: Campaigns;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.coupons = new Coupons(vtexHttpClient);
    this.benefits = new Benefits(vtexHttpClient);
    this.campaigns = new Campaigns(vtexHttpClient);
  }
}
