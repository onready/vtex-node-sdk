import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class Segment extends AbstractApi {
  /**
   * You can add certain public fields in the querystring and the system
   * will attempt to fulfill it. Values such as cultureInfo and utm are
   * overwriteable, just keep in mind such changes will not be reflected
   * in the client's session.If you wish to change the value on the session
   * (and thus be reflected on the segment without special querystrings),
   * then use the PATCH request to session.
   * @param {string} params Example: param1=test&param2=test2
   */
  getSegment(params?: string): Promise<VtexHttpResponse> {
    const path = `/api/segments?${params || ""}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
