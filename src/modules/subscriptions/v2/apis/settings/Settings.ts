import { AbstractApi } from "../../../../AbstractApi";
import { VtexHttpResponse } from "../../../../../utils/VtexHttpResponse";

export class Settings extends AbstractApi {
  /**
   * Lists the details of a given Subscription's settings.
   */
  getSubscriptionSettings(): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      "/api/rns/settings",
      this.HTTP_METHODS.GET
    );
  }
}
