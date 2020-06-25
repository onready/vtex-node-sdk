import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetSellerByIdResponse } from "./responses/GetSellerByIdResponse";

export class Seller extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog_system/pvt";

  /**
   * Retrieves the seller's details by its ID.
   * @param {string} sellerId
   */
  getSellerById(
    sellerId: string
  ): Promise<VtexHttpResponse<GetSellerByIdResponse>> {
    const path = `${Seller.BASE_PATH}/seller/${sellerId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates a new seller.
   * @param {string} sellerId
   * @param {CreateSellerRequest} sellerData
   */
  createSeller(
    sellerId: string,
    sellerData: GetSellerByIdResponse
  ): Promise<VtexHttpResponse> {
    const path = `${Seller.BASE_PATH}/seller/${sellerId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      sellerData
    );
  }

  /**
   * Updates a seller.
   * @param {string} sellerId
   * @param {CreateSellerRequest} sellerData
   */
  updateSeller(
    sellerId: string,
    sellerData: GetSellerByIdResponse
  ): Promise<VtexHttpResponse> {
    const path = `${Seller.BASE_PATH}/seller/${sellerId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      sellerData
    );
  }

  /**
   * Retrieves the seller's details by its ID.
   * @param {string} params Example: sc=1&sellerType=1&isBetterScope=false
   */
  getSellerList(
    params?: string
  ): Promise<VtexHttpResponse<Array<GetSellerByIdResponse>>> {
    const path = `${Seller.BASE_PATH}/seller/list?${params || ""}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves the details of a seller's SKU by its ID.
   * @param {string} sellerId
   * @param {string} sellerSkuId
   */
  getSKUSeller(
    sellerId: string,
    sellerSkuId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Seller.BASE_PATH}/skuseller/${sellerId}/${sellerSkuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Remove the Seller SKU binding
   * @param {string} sellerId
   * @param {string} sellerSkuId
   */
  deleteSKUSellerAssociation(
    sellerId: string,
    sellerSkuId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Seller.BASE_PATH}/skuseller/${sellerId}/${sellerSkuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
