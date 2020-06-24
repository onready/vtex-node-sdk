import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetSKUResponse } from "./responses/GetSKUResponse";
import { GetSKUByRefIdResponse } from "./responses/GetSKUByRefIdResponse";
import { CreateSKURequest } from "./requests/CreateSKURequest";
import { CreateSKUResponse } from "./responses/CreateSKUResponse";
import { GetSKUListByProductIdResponseItem } from "./responses/GetSKUListByProductIdResponseItem";
import { GetSKUFileResponseItem } from "./responses/GetSKUFileResponseItem";
import { CreateSKUFileRequest } from "./requests/CreateSKUFileRequest";
import { GetSKUKitResponse } from "./responses/GetSKUKitResponse";

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

  /**
   * Creates a new SKU from scratch
   * @param {CreateSKURequest} skuData
   */
  createSKU(
    skuData: CreateSKURequest
  ): Promise<VtexHttpResponse<CreateSKUResponse>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      skuData
    );
  }

  /**
   * Retrieves an SKU ID by the SKU's Reference ID.
   * @param {string} refId
   */
  getSkuIdByRefId(refId: string): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitidbyrefid/${refId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves an SKU by its Alternate ID.
   * @param {string} alternateId
   */
  getSKUByAlternateId(
    alternateId: string
  ): Promise<VtexHttpResponse<GetSKUResponse>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitbyalternateId/${alternateId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves an SKU by its EAN ID.
   * @param {string} ean
   */
  getSKUByEAN(ean: string): Promise<VtexHttpResponse<GetSKUResponse>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitbyean/${ean}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves the EAN of the SKU
   * @param {string} skuId
   */
  getEANBySKUId(skuId: string): Promise<VtexHttpResponse<Array<string>>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/ean`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes all EANs values of an SKU
   * @param {string} skuId
   */
  deleteAllSkuEAN(skuId: string): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/ean`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Retrieves a list with the SKUs related to a product by the product's ID.
   * @param {string} productId
   */
  getSKUListByProductId(
    productId: string
  ): Promise<VtexHttpResponse<Array<GetSKUListByProductIdResponseItem>>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitByProductId/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Gets general information about all Files inside the SKU
   * @param {string} skuId
   */
  getSKUFile(
    skuId: string
  ): Promise<VtexHttpResponse<Array<GetSKUFileResponseItem>>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/file`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates a new Image on an SKU based on its URL
   * @param {string} skuId
   * @param {CreateSKUFileRequest} skuFileData
   */
  createSKUFile(
    skuId: string,
    skuFileData: CreateSKUFileRequest
  ): Promise<VtexHttpResponse<GetSKUFileResponseItem>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/file`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      skuFileData
    );
  }

  /**
   * Deletes all SKU Image Files
   * @param {string} skuId
   */
  deleteAllSKUFile(skuId: string): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/file`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Retrieves general information about the components of an SKU Kit by SKU ID or Parent SKU ID
   * @param {string} skuId
   * @param {string} parentSkuId
   */
  getSKUKitBySkuIDOrParentSkuId(
    skuId?: string,
    parentSkuId?: string
  ): Promise<VtexHttpResponse<GetSKUKitResponse>> {
    let params = "?";
    if (skuId) {
      params += `skuId=${skuId}`;
    }
    if (skuId && parentSkuId) {
      params += "&";
    }
    if (parentSkuId) {
      params += `parentSkuId=${parentSkuId}`;
    }
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunitkit${params}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
