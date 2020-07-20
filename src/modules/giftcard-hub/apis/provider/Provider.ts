import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { ListAllGiftCardProvidersResponseItem } from "./responses/ListAllGiftCardProvidersResponseItem";
import { CreateOrUpdateGiftCardProviderByIdRequest } from "./requests/CreateOrUpdateGiftCardProviderByIdRequest";

export class Provider extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/giftcardproviders";

  /**
   * Returns a collection of giftcard providers from a store.
   * @param {number} from
   * @param {number} to
   * @param {object} additionalHeaders
   */
  listAllGiftCardProviders(
    from?: number,
    to?: number,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<Array<ListAllGiftCardProvidersResponseItem>>> {
    let headers: any = {};
    if (from && to) {
      headers["REST-Range"] = `${from}-${to}`;
    }
    if (additionalHeaders) {
      headers = { ...headers, ...additionalHeaders };
    }
    return this.vtexHttpClient.performRequest(
      Provider.BASE_PATH,
      this.HTTP_METHODS.GET,
      null,
      headers
    );
  }

  /**
   * Returns a giftcard provider from a store.
   * @param {string} giftCardProviderId
   * @param {object} additionalHeaders
   */
  getGiftCardProviderById(
    giftCardProviderId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<ListAllGiftCardProvidersResponseItem>> {
    const path = `${Provider.BASE_PATH}/${giftCardProviderId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Create or update a giftcard provider from a store.
   * @param {string} giftCardProviderId
   * @param {CreateOrUpdateGiftCardProviderByIdRequest} data
   * @param {object} additionalHeaders
   */
  createOrUpdateGiftCardProviderById(
    giftCardProviderId: string,
    data: CreateOrUpdateGiftCardProviderByIdRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<ListAllGiftCardProvidersResponseItem>> {
    const path = `${Provider.BASE_PATH}/${giftCardProviderId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data,
      additionalHeaders
    );
  }

  /**
   * Delete a giftcard provider from a store.
   * @param {string} giftCardProviderId
   * @param {object} additionalHeaders
   */
  deleteGiftCardProviderById(
    giftCardProviderId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<ListAllGiftCardProvidersResponseItem>> {
    const path = `${Provider.BASE_PATH}/${giftCardProviderId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.DELETE,
      null,
      additionalHeaders
    );
  }
}
