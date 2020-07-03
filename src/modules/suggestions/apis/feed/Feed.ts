import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class Feed extends AbstractApi {
  /**
   *
   * @param {string} params Example: q=search&seller=1
   */
  getSuggestions(params?: string): Promise<VtexHttpResponse> {
    const path = `/${this.vtexHttpClient.vtexCredentials.store}/suggestions?${
      params || ""
    }`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
