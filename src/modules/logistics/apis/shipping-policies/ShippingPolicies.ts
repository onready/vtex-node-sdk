import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';

export class ShippingPolicies extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/logistics/pvt/shipping-policies';

  /**
   * Lists existing shipping policies from carriers in your store, searching by their IDs.
   * @param {string} id
   */
  retrieveShippingPoliciesById(id: string): Promise<VtexHttpResponse> {
    const path = `${ShippingPolicies.BASE_PATH}/${id}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
