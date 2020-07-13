import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Coupons } from "./apis/coupons";

export class RatesAndBenefits {
  /**
   * Coupons API
   */
  readonly coupons: Coupons;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.coupons = new Coupons(vtexHttpClient);
  }
}
