import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class Search extends AbstractApi {
  private static readonly BASE_PATH: string =
    "/api/catalog_system/pub/products/search";

  /**
   *
   * @param {string} search
   */
  productSearch(search: string): Promise<VtexHttpResponse> {
    const path = `${Search.BASE_PATH}/${search}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} params Example: ft=television&O=OrderByPriceDESC
   */
  productSearchFilteredAndOrdered(params: string): Promise<VtexHttpResponse> {
    const path = `${Search.BASE_PATH}?${params}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} productTextLink
   */
  searchByProductURL(productTextLink: string): Promise<VtexHttpResponse> {
    const path = `${Search.BASE_PATH}/${productTextLink}/p`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
