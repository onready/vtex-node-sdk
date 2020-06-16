import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { CreateShippingPolicyRequest } from './requests/CreateShippingPolicyRequest';
import { UpdateShippingPolicyRequest } from './requests/UpdateShippingPolicyRequest';

export class ShippingPolicies extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/logistics/pvt/shipping-policies';

  /**
   * Lists existing shipping policies from carriers in your store, searching by their IDs.
   * @param {string} id
   */
  retrieveShippingPolicyById(id: string): Promise<VtexHttpResponse> {
    const path = `${ShippingPolicies.BASE_PATH}/${id}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes existing shipping policies from carriers in your store, searching by their IDs.
   * @param {string} id
   */
  deleteShippingPolicyById(id: string): Promise<VtexHttpResponse> {
    const path = `${ShippingPolicies.BASE_PATH}/${id}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Lists existing shipping policies from carriers in your store.
   */
  listShippingPolicies(): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(ShippingPolicies.BASE_PATH, this.HTTP_METHODS.GET);
  }

  /**
   * Creates new shipping policies from carriers in your store.
   * @param {CreateShippingPolicyRequest} shippingPolicy
   */
  createShippingPolicy(shippingPolicy: CreateShippingPolicyRequest): Promise<VtexHttpResponse> {
    return this.vtexHttpClient
      .performRequest(ShippingPolicies.BASE_PATH, this.HTTP_METHODS.POST, shippingPolicy);
  }

  /**
   * Updates information on existing Shipping Policies from carriers.
   * @param {string} id
   * @param {UpdateShippingPolicyRequest} shippingPolicy
   */
  updateShippingPolicy(id: string, shippingPolicy: UpdateShippingPolicyRequest)
    : Promise<VtexHttpResponse> {
    const path = `${ShippingPolicies.BASE_PATH}/${id}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, shippingPolicy);
  }
}
