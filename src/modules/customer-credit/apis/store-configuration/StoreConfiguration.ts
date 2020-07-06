import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { RetrieveStoreConfigurationResponse } from "./responses/RetrieveStoreConfigurationResponse";
import { CreateOrChangeStoreConfigurationRequest } from "./requests/CreateOrChangeStoreConfigurationRequest";

export class StoreConfiguration extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/creditcontrol/storeconfig";

  /**
   * Get store configuration data.
   */
  retrieveStoreConfiguration(): Promise<
    VtexHttpResponse<RetrieveStoreConfigurationResponse>
  > {
    return this.vtexHttpClient.performRequest(
      StoreConfiguration.BASE_PATH,
      this.HTTP_METHODS.GET
    );
  }

  /**
   * Create or change store configuration data.
   * @param {CreateOrChangeStoreConfigurationRequest} data
   */
  createOrChangeStoreConfiguration(
    data: CreateOrChangeStoreConfigurationRequest
  ): Promise<VtexHttpResponse<RetrieveStoreConfigurationResponse>> {
    return this.vtexHttpClient.performRequest(
      StoreConfiguration.BASE_PATH,
      this.HTTP_METHODS.PUT,
      data
    );
  }
}
