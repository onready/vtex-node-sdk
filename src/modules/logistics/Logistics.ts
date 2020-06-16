import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { ShippingPolicies } from './apis/shipping-policies';
import { Carriers } from './apis/carriers';

export class Logistics {
  /**
   * Shipping Policies API
   */
  readonly shippingPolicies: ShippingPolicies;

  /**
   * Carriers API
   */
  readonly carriers: Carriers;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.shippingPolicies = new ShippingPolicies(vtexHttpClient);
    this.carriers = new Carriers(vtexHttpClient);
  }
}
