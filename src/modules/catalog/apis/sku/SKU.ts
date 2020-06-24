import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetSKUResponse } from "./responses/GetSKUResponse";
import { GetSKUByRefIdResponse } from "./responses/GetSKUByRefIdResponse";

export class SKU extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog";

  /**
   * Retrieves the IDs of all SKUs in the store. Presents the result with page size and pagination.
   * @param {number} page
   * @param {number} pageSize
   */
  listAllSKUIds(
    page: number,
    pageSize: number
  ): Promise<VtexHttpResponse<Array<number>>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitids?page=${page}&pagesize=${pageSize}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a specific SKU by its ID.
   * @param {string} skuId
   */
  getSKU(skuId: string): Promise<VtexHttpResponse<GetSKUResponse>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitbyid/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves information about a specific SKU by its RefId
   * @param {string} refId
   */
  getSKUByRefId(
    refId: string
  ): Promise<VtexHttpResponse<GetSKUByRefIdResponse>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit?refId=${refId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
