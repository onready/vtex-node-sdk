import { AbstractApi } from "../../../AbstractApi";
import { SaveSuggestionRequest } from "./requests/SaveSuggestionRequest";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class Send extends AbstractApi {
  /**
   * Insert or update a suggestion
   * @param {string} sellerId
   * @param {string} sellerSkuId
   * @param {SaveSuggestionRequest} data
   */
  saveSuggestion(
    sellerId: string,
    sellerSkuId: string,
    data: SaveSuggestionRequest
  ): Promise<VtexHttpResponse> {
    const path = `/${this.vtexHttpClient.vtexCredentials.store}/suggestions/${sellerId}/${sellerSkuId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }
}
