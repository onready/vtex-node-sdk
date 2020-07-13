import { AbstractApi } from "../../../../AbstractApi";
import { VtexHttpResponse } from "../../../../../utils/VtexHttpResponse";
import {
  UpdateSubscriptionsBySubscriptionIdRequest,
  ShippingAddress,
} from "../subscriptions/requests/UpdateSubscriptionsBySubscriptionIdRequest";
import { AddSubscriptionItemByGroupIdRequest } from "./requests/AddSubscriptionItemByGroupIdRequest";

export class SubscriptionGroup extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/rns/subscriptions-group";

  /**
   * Lists Subscription details, filtering by groupId.
   * @param {string} groupId
   */
  getSubscriptionByGroupId(groupId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * If you need to update information within a given Subscription group,
   * you don't need to insert the whole JSON body in your request.
   * Just add an array of the parameter with the desired information you want to alter.
   * @param {string} groupId
   * @param {UpdateSubscriptionsBySubscriptionIdRequest} data
   */
  updateSubscriptionByGroupId(
    groupId: string,
    data: UpdateSubscriptionsBySubscriptionIdRequest
  ): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PATCH,
      data
    );
  }

  /**
   * Retrieves all subscription groups in your store.
   */
  listAllSubscriptionGroups(): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      SubscriptionGroup.BASE_PATH,
      this.HTTP_METHODS.GET
    );
  }

  /**
   * Retrieves a list of Subscription groups in your store.
   */
  getSubscriptionGroupList(): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/list`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves Subscription simulations, filtering by groupId.
   * @param {string} groupId
   */
  getSimulationBySubscriptionGroup(groupId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/simulate/${groupId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} groupId
   */
  cancelSubscriptionByGroupId(groupId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/cancel`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PATCH);
  }

  /**
   * Adds an SKU to a given Subscription, filtering by groupId.
   * @param {string} groupId
   * @param {AddSubscriptionItemByGroupIdRequest} data
   */
  addSubscriptionItemByGroupId(
    groupId: string,
    data: AddSubscriptionItemByGroupIdRequest
  ): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/additem`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Lists addresses linked to a given Subscription group, filtering by groupId.
   * @param {string} groupId
   */
  getAddressesByGroupId(groupId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/addresses`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Insert address information of a given Subscription group, filtering by groupId.
   * @param {string} groupId
   * @param {ShippingAddress} data
   */
  insertAddressesByGroupId(
    groupId: string,
    data: ShippingAddress
  ): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/addresses`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Retrieves payment system's information of a given Subscription group, filtering by groupId.
   * @param {string} groupId
   */
  getPaymentSystemByGroupId(groupId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/payment-systems`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists frequency options of a given Subscription group, filtering by groupId.
   * @param {string} groupId
   */
  getFrequencyOptionsByGroupId(groupId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/frequency-options`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.
   * @param {string} groupId
   * @param {string} instanceId
   */
  retrySubscriptionByGroupId(
    groupId: string,
    instanceId: string
  ): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/instances/${instanceId}/retry`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Retrieves the conversation of a given Subscription group, filtering by groupId.
   * @param {string} groupId
   */
  getConversationMessageByGroupId(groupId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/conversation-message`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves Subscription groups listed as 'will create', filtering by groupId.
   * @param {string} groupId
   */
  listWillCreateByGroupId(groupId: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/will-create`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves details about a given subscription group's configuration, filtering by groupId.
   * @param {string} groupId
   */
  listSubscriptionGroupConfiguration(
    groupId: string
  ): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/${groupId}/config`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists details of a given subscription group's next purchase, filtering by dateStr.
   * @param {string} dateStr Reference date that retrieves all next purchases, starting from the dateStr inserted. Must be in the format of {{yyyyMMdd}}
   */
  getNextPurchase(dateStr: string): Promise<VtexHttpResponse> {
    const path = `${SubscriptionGroup.BASE_PATH}/nextPurchase/${dateStr}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
