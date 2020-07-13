import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { UpdateOrderFormConfigurationRequest } from "./requests/UpdateOrderFormConfigurationRequest";

export class Configuration extends AbstractApi {
  private static readonly BASE_PATH: string =
    "/api/checkout/pvt/configuration/orderForm";

  /**
   * Retrieves the settings that are currently applied to every orderForm in the account.
   * These settings are defined by the request Update orderForm configuration.
   * Always use this request to retrieve the current configuration before performing an update.
   * By doing so you ensure that you are modifying only the properties you want.
   */
  getOrderFormConfiguration(): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Configuration.BASE_PATH,
      this.HTTP_METHODS.GET
    );
  }

  /**
   * Determines settings that will apply to every orderForm in the account. For example, if you create an app
   * using this request, every orderForm of this account will have the custom fields created though it.
   * Important: always retrieve the current configuration before performing an update to ensure that you are
   * modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current
   * configuration, use the request Get orderForm configuration.
   * @param {UpdateOrderFormConfigurationRequest} data
   */
  updateOrderFormConfiguration(
    data: UpdateOrderFormConfigurationRequest
  ): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Configuration.BASE_PATH,
      this.HTTP_METHODS.POST,
      data
    );
  }
}
