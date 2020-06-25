import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class Others extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog_system/pvt";

  /**
   * Notify a change in SKU Seller to VTEX
   * @param {string} stockKeepingUnitId
   */
  changeNotification(stockKeepingUnitId: string): Promise<VtexHttpResponse> {
    const path = `${Others.BASE_PATH}/skuseller/changenotification/${stockKeepingUnitId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieve details of Product Indexed Info
   * @param {string} productId
   */
  getIndexedInfo(productId: string): Promise<VtexHttpResponse> {
    const path = `${Others.BASE_PATH}products/GetIndexedInfo/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
