import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { ShippingPolicies } from './apis/shipping-policies';
import { Carriers } from './apis/carriers';
import { Docks } from './apis/docks';

export class Logistics {
  /**
   * Shipping Policies API
   */
  readonly shippingPolicies: ShippingPolicies;

  /**
   * Carriers API
   */
  readonly carriers: Carriers;

  /**
   * Docks API
   */
  readonly docks: Docks;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.shippingPolicies = new ShippingPolicies(vtexHttpClient);
    this.carriers = new Carriers(vtexHttpClient);
    this.docks = new Docks(vtexHttpClient);
  }
}
