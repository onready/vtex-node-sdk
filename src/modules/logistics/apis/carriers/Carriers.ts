import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { CreateOrUpdateCarrierRequest } from "./requests/CreateOrUpdateCarrierRequest";
import { ListAllCarriersResponseItem } from "./responses/ListAllCarriersResponse";
import { CreateOrUpdateFreightValuesRequestItem } from "./requests/CreateOrUpdateFreightValuesRequestItem";
import { ListFreightValuesResponseItem } from "./responses/ListFreightValuesResponseItem";

export class Carriers extends AbstractApi {
  private static readonly BASE_PATH: string =
    "/api/logistics/pvt/configuration";

  /**
   * Creates or updates carriers in your store
   * @param {CreateOrUpdateCarrierRequest} carrierData
   */
  createOrUpdateCarrier(
    carrierData: CreateOrUpdateCarrierRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/carriers`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      carrierData
    );
  }

  /**
   * Get information about all carriers in your store.
   */
  listAllCarriers(): Promise<
    VtexHttpResponse<Array<ListAllCarriersResponseItem>>
  > {
    const path = `${Carriers.BASE_PATH}/carriers`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists information about your store's carriers by searching through the Carrier's ID.
   * @param {string} carrierId
   */
  listCarrierByid(
    carrierId: string
  ): Promise<VtexHttpResponse<ListAllCarriersResponseItem>> {
    const path = `${Carriers.BASE_PATH}/carriers/${carrierId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes carrier by carrier ID.
   * @param {string} carrierId
   */
  deleteCarrier(carrierId: string): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/carriers/${carrierId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates or updates the freight values of your store's carriers.
   * @param {string} carrierId
   * @param {Array<CreateOrUpdateFreightValuesRequestItem>} freightValues
   */
  createOrUpdateFreightValues(
    carrierId: string,
    freightValues: Array<CreateOrUpdateFreightValuesRequestItem>
  ): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/freights/${carrierId}/values/update`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      freightValues
    );
  }

  /**
   * Lists freight values apoointed to your store's carriers, searching by carrier ID and cep.
   * @param {string} carrierId
   * @param {string} cep
   */
  listFreightValues(
    carrierId: string,
    cep: string
  ): Promise<VtexHttpResponse<Array<ListFreightValuesResponseItem>>> {
    const path = `${Carriers.BASE_PATH}/freights/${carrierId}/${cep}/values`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists all blocked delivery windows of your store's carriers, searching by carrier ID
   * @param {string} carrierId
   */
  retrieveBlockedDeliveryWindows(carrierId: string): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/carriers/${carrierId}/getdayofweekblocked`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Adds blocked delivery windows for your store's carriers.
   * @param {string} carrierId
   * @param {string} deliveryWindow
   */
  addBlockedDeliveryWindows(
    carrierId: string,
    deliveryWindow: string
  ): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/carriers/${carrierId}/adddayofweekblocked`;
    const body = `"${deliveryWindow}"`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      body
    );
  }

  /**
   * Adds blocked delivery windows for your store's carriers.
   * @param {string} carrierId
   * @param {string} deliveryWindow
   */
  removeBlockedDeliveryWindows(
    carrierId: string,
    deliveryWindow: string
  ): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/carriers/${carrierId}/removedayofweekblocked`;
    const body = `"${deliveryWindow}"`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      body
    );
  }

  /**
   * Activates a given carrier of your store and carrier ID.
   * @param {string} carrierId
   */
  activateCarrier(carrierId: string): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/carriers/${carrierId}/activation`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Deactivates a given carrier of your store and carrier ID.
   * @param {string} carrierId
   */
  deactivateCarrier(carrierId: string): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/carriers/${carrierId}/deactivation`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }
}
