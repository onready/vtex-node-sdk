import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Coupons } from "./apis/coupons";
import { Benefits } from "./apis/benefits";

export class RatesAndBenefits {
  /**
   * Coupons API
   */
  readonly coupons: Coupons;

  /**
   * Benefits API
   */
  readonly benefits: Benefits;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.coupons = new Coupons(vtexHttpClient);
    this.benefits = new Benefits(vtexHttpClient);
  }
}
