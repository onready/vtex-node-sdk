import { AbstractApi } from "../../../../AbstractApi";

export class Scroll extends AbstractApi {
  /**
   *
   * @param {string} dataEntityName
   * @param {string} params See https://developers.vtex.com/reference/scroll#scrolldocuments
   */
  scrollDocuments(dataEntityName: string, params?: string) {
    return this.vtexHttpClient.performRequest(
      `/api/dataentities/${dataEntityName}/scroll?${params || ""}`,
      this.HTTP_METHODS.GET
    );
  }
}
