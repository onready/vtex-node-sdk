import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class AccessControl extends AbstractApi {
  /**
   *
   * @param {string} resourceKey
   */
  checkResourceAccess(resourceKey: string): Promise<VtexHttpResponse> {
    const path = `/api/license-manager/resources/${resourceKey}/access`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
