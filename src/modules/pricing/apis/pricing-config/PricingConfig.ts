import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetPricingConfigResponse } from "./responses/GetPricingConfigResponse";
import { GetPricingV2ActiveStatusResponse } from "./responses/GetPricingV2ActiveStatusResponse";

export class PricingConfig extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/pricing";

  /**
   * Retrieves Pricing Module Configuration
   */
  getPricingConfig(): Promise<VtexHttpResponse<GetPricingConfigResponse>> {
    const path = `${PricingConfig.BASE_PATH}/config`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Gets Pricing v2 Active Status
   */
  getPricingV2ActiveStatus(): Promise<
    VtexHttpResponse<GetPricingV2ActiveStatusResponse>
  > {
    const path = `${PricingConfig.BASE_PATH}/migration`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
