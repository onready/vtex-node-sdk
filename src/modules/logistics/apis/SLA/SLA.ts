import { AbstractApi } from "../../../AbstractApi";
import { CalculateSLARequestItem } from "./requests/CalculateSLARequestItem";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { CalculateSLAResponseItem } from "./responses/CalculateSLAResponseItem";

export class SLA extends AbstractApi {
  /**
   * Used by checkout to calculate Service Level Agreement.
   * @param {Array<CalculateSLARequestItem>} data
   */
  calculateSLA(
    data: Array<CalculateSLARequestItem>
  ): Promise<VtexHttpResponse<Array<Array<CalculateSLAResponseItem>>>> {
    return this.vtexHttpClient.performRequest(
      "/api/logistics/pvt/shipping/calculate",
      this.HTTP_METHODS.POST,
      data
    );
  }
}
