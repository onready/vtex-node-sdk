import { AbstractApi } from "../../../../AbstractApi";
import { VtexHttpResponse } from "../../../../../utils/VtexHttpResponse";
import { ValidateDocumentByClustersRequestItem } from "./requests/ValidateDocumentByClustersRequestItem";

export class Clusters extends AbstractApi {
  /**
   * Lets you know if a particular document is in one or more clusters.
   * @param {string} dataEntityName
   * @param {string} id
   * @param {Array<ValidateDocumentByClustersRequestItem>} rules
   */
  validateDocumentByClusters(
    dataEntityName: string,
    id: string,
    rules: Array<ValidateDocumentByClustersRequestItem>
  ): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      `/api/dataentities/${dataEntityName}/documents/${id}/clusters`,
      this.HTTP_METHODS.POST,
      rules
    );
  }
}
