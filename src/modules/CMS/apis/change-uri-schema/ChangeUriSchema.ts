import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class ChangeUriSchema extends AbstractApi {
  private static readonly BASE_PATH: string =
    "/api/catalog_system/pvt/virtualfolder";

  /**
   * Will be applied to all folders in all websites on the entire account.
   * @param {string} schema desired protocol; could be http or https
   */
  changeEntireAccount(schema: string): Promise<VtexHttpResponse> {
    const path = `${ChangeUriSchema.BASE_PATH}/changeurischema/${schema}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT);
  }

  /**
   * Will be applied to all folders in the specific website for the account.
   * @param {string} webSiteId specific website ID that wanted change
   * @param {string} schema desired protocol; could be http or https
   */
  changeSpecificWebsite(
    webSiteId: string,
    schema: string
  ): Promise<VtexHttpResponse> {
    const path = `${ChangeUriSchema.BASE_PATH}/site/${webSiteId}/changeurischema/${schema}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT);
  }
}
