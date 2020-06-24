import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class TradePolicy extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog/pvt/product";

  /**
   * Retrieves a Trade Policy associated to a Product by its ID
   * @param {string} productId
   */
  getTradePolicyByProductId(productId: string): Promise<VtexHttpResponse> {
    const path = `${TradePolicy.BASE_PATH}/${productId}/salespolicy`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Associates a existing Trade Policy with a Product
   * @param {string} productId
   * @param {string} tradePolicyId
   */
  createProductToTradePolicy(
    productId: string,
    tradePolicyId: string
  ): Promise<VtexHttpResponse> {
    const path = `${TradePolicy.BASE_PATH}/${productId}/salespolicy/${tradePolicyId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Disassociates a Trade Policy to a Product
   * @param {string} productId
   * @param {string} tradePolicyId
   */
  deleteProductToTradePolicy(
    productId: string,
    tradePolicyId: string
  ): Promise<VtexHttpResponse> {
    const path = `${TradePolicy.BASE_PATH}/${productId}/salespolicy/${tradePolicyId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
