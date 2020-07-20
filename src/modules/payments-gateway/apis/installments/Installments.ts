import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { InstallmentsOptionsResponse } from "./responses/InstallmentsOptionsResponse";

export class Installments extends AbstractApi {
  /**
   * Returns the best installment options according to the informed params.
   * @param {string} params Example: request.value=1&request.salesChannel=2
   * @param {object} additionalHeaders
   */
  installmentsOptions(
    params: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<InstallmentsOptionsResponse>> {
    const path = `/api/pvt/installments?${params}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }
}
