import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetRulesForPriceTableResponse } from "./responses/GetRulesForPriceTableResponse";

export class PriceTables extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/pricing/pipeline/catalog/";

  /**
   * This method will create the rules from a specific Price Table
   * @param {any} data
   */
  createRulesForPriceTable(
    data: GetRulesForPriceTableResponse
  ): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      PriceTables.BASE_PATH,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * This method will retrieve the rules from a specific Price Table.
   * @param {string} priceTableId
   */
  getRulesForPriceTable(
    priceTableId: string
  ): Promise<VtexHttpResponse<GetRulesForPriceTableResponse>> {
    const path = `${PriceTables.BASE_PATH}/${priceTableId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * This method will update the rules from a specific Price Table.
   * It will delete all the rules from the requested Price Table and
   * create new rules based on the content of the request
   * @param {string} priceTableId
   * @param {GetRulesForPriceTableResponse} data
   */
  updateRulesForPriceTable(
    priceTableId: string,
    data: GetRulesForPriceTableResponse
  ): Promise<VtexHttpResponse> {
    const path = `${PriceTables.BASE_PATH}/${priceTableId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }
}
