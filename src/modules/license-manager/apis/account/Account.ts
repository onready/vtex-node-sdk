import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { SaveRequest } from "./requests/SaveRequest";

export class Account extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/vlm/account";

  get(): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Account.BASE_PATH,
      this.HTTP_METHODS.GET
    );
  }

  /**
   *
   * @param {SaveRequest} data
   */
  save(data: SaveRequest): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Account.BASE_PATH,
      this.HTTP_METHODS.PATCH,
      data
    );
  }
}
