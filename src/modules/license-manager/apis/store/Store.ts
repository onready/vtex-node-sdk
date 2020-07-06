import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { SaveRequest } from "./requests/SaveRequest";

export class Store extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/vlm/account/stores";

  getByAccount(): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Store.BASE_PATH,
      this.HTTP_METHODS.GET
    );
  }

  /**
   *
   * @param {any} data
   */
  create(data: any): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Store.BASE_PATH,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   *
   * @param {string} storeName
   * @param {SaveRequest} data
   */
  save(storeName: string, data: SaveRequest): Promise<VtexHttpResponse> {
    const path = `${Store.BASE_PATH}/${storeName}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   *
   * @param {string} storeName
   */
  delete(storeName: string): Promise<VtexHttpResponse> {
    const path = `${Store.BASE_PATH}/${storeName}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
