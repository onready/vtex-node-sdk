import { AbstractApi } from "../../../AbstractApi";
import { CreateOrUpdateHookConfigurationRequest } from "./requests/CreateOrUpdateHookConfigurationRequest";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class OrderHook extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/orders/hook/config";

  /**
   * Configure filter rules to Order Hook
   * @param {CreateOrUpdateHookConfigurationRequest} hookConfiguration
   */
  createOrUpdateHookConfiguration(
    hookConfiguration: CreateOrUpdateHookConfigurationRequest
  ): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      OrderHook.BASE_PATH,
      this.HTTP_METHODS.POST,
      hookConfiguration
    );
  }

  /**
   * Deletes Hook configuration.
   */
  deleteHookConfiguration(): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      OrderHook.BASE_PATH,
      this.HTTP_METHODS.DELETE
    );
  }
}
