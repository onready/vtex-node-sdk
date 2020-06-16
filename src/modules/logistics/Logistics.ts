import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { ShippingPolicies } from './apis/shipping-policies';
import { Carriers } from './apis/carriers';
import { Docks } from './apis/docks';
import { Warehouses } from './apis/warehouses';

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

  /**
   * Warehouses API
   */
  readonly warehouses: Warehouses;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.shippingPolicies = new ShippingPolicies(vtexHttpClient);
    this.carriers = new Carriers(vtexHttpClient);
    this.docks = new Docks(vtexHttpClient);
    this.warehouses = new Warehouses(vtexHttpClient);
  }
}
