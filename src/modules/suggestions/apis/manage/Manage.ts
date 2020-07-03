import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpClient } from "../../../../utils/VtexHttpClient";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { MatchRequest } from "./requests/MatchRequest";

export class Manage extends AbstractApi {
  private readonly basePath: string;

  constructor(vtexHttpClient: VtexHttpClient) {
    super(vtexHttpClient);
    this.basePath = `/${vtexHttpClient.vtexCredentials.store}/suggestions`;
  }

  /**
   *
   * @param {string} sellerId
   * @param {string} sellerSkuId
   */
  getSuggestion(
    sellerId: string,
    sellerSkuId: string
  ): Promise<VtexHttpResponse> {
    const path = `${this.basePath}/${sellerId}/${sellerSkuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} sellerId
   * @param {string} sellerSkuId
   */
  deleteSuggestion(
    sellerId: string,
    sellerSkuId: string
  ): Promise<VtexHttpResponse> {
    const path = `${this.basePath}/${sellerId}/${sellerSkuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Get all versions for a specific suggestion
   * @param {string} sellerId
   * @param {string} sellerSkuId
   */
  getVersions(
    sellerId: string,
    sellerSkuId: string
  ): Promise<VtexHttpResponse> {
    const path = `${this.basePath}/${sellerId}/${sellerSkuId}/versions`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Get a specific version for a suggestion. To list the versions available,
   * use 'GET Versions' request. Replace {{version}} parameter with the chosen version.
   * @param {string} sellerId
   * @param {string} sellerSkuId
   * @param {string} version
   */
  getSuggestionByVersion(
    sellerId: string,
    sellerSkuId: string,
    version: string
  ): Promise<VtexHttpResponse> {
    const path = `${this.basePath}/${sellerId}/${sellerSkuId}/versions/${version}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Apply a match for a version of a suggestion. All information inside curly brackets should be replaced,
   * some of them are highlighted below.{{score}}: Should be a decimal value that represents the confidence
   * level.Default rules for score: score < 30: suggestion will be denied; score > 30 and < 80 - suggestion
   * status continue as 'Pending'; score >= 80 - suggestion will be accepted and processed in accordance with
   * body specification. The executions rules are defined by existence of information in request body, below
   * is the precedence order and information about each match type. skuRef: should be specifed when type is
   * a sku match; productRef: should be specified when type is a product match.
   * @param {string} sellerId
   * @param {string} sellerSkuId
   * @param {string} version
   * @param {string} matchId
   * @param {MatchRequest} data
   */
  match(
    sellerId: string,
    sellerSkuId: string,
    version: string,
    matchId: string,
    data: MatchRequest
  ): Promise<VtexHttpResponse> {
    const path = `${this.basePath}/${sellerId}/${sellerSkuId}/versions/${version}/matches/${matchId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }
}
