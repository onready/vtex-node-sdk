import { AbstractApi } from "../../../../AbstractApi";
import { VtexHttpResponse } from "../../../../../utils/VtexHttpResponse";
import {
  UpdateSubscriptionsBySubscriptionIdRequest,
  ShippingAddress,
} from "./requests/UpdateSubscriptionsBySubscriptionIdRequest";

export class SubscriptionsApi extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/rns/subscriptions";

  /**
   * Lists Subscription's details, searching by subscriptionId.
   * @param {string} subscriptionId
   */
  retrieveSubscriptionById(subscriptionId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionsApi.BASE_PATH}/${subscriptionId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Update, add or alter information of a given Subscription, filtering by SubscriptionId.
   * @param {string} subscriptionId
   * @param {UpdateSubscriptionsBySubscriptionIdRequest} data
   */
  updateSubscriptionsBySubscriptionId(
    subscriptionId: string,
    data: UpdateSubscriptionsBySubscriptionIdRequest
  ): Promise<VtexHttpResponse> {
    const path = `${SubscriptionsApi.BASE_PATH}/${subscriptionId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PATCH,
      data
    );
  }

  /**
   * Cancels all Subscriptions of a subscription group. This operation does not have a rollback.
   * Once cancelled, it cannot be re-activated
   * @param {string} subscriptionId
   */
  cancelSubscriptionsBySubscriptionId(
    subscriptionId: string
  ): Promise<VtexHttpResponse> {
    const path = `${SubscriptionsApi.BASE_PATH}/${subscriptionId}/cancel`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PATCH);
  }

  /**
   * Retrieves a list of Subscriptions linked to your store.
   */
  getSubscriptionList(): Promise<VtexHttpResponse> {
    const path = `${SubscriptionsApi.BASE_PATH}/list`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves details of a given customer's subscriptions, searching by that customer's customerId.
   * @param {string} customerId
   */
  retrieveCustomerSubscriptions(customerId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionsApi.BASE_PATH}?customerId=${customerId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Inserts address's information to complement the Subscription details.
   * @param {string} subscriptionId
   * @param {Array<ShippingAddress>} data
   */
  insertAddressesForSubscription(
    subscriptionId: string,
    data: Array<ShippingAddress>
  ): Promise<VtexHttpResponse> {
    const path = `${SubscriptionsApi.BASE_PATH}/${subscriptionId}/addresses`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Lists frequency options for the Subscription, filtering by subscriptionID.
   * @param {string} subscriptionId
   */
  getFrequencyOptionsBySubscriptionId(
    subscriptionId: string
  ): Promise<VtexHttpResponse> {
    const path = `${SubscriptionsApi.BASE_PATH}/${subscriptionId}/frequency-options`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
