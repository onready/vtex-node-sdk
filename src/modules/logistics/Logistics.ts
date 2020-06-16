import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { ShippingPolicies } from './apis/shipping-policies';

export class Logistics {
  readonly shippingPolicies: ShippingPolicies;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.shippingPolicies = new ShippingPolicies(vtexHttpClient);
  }
}
