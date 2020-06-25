import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetSalesChannelListResponseItem } from "./responses/GetSalesChannelListResponseItem";

export class SalesChannel extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog_system";

  /**
   * Retrieves a list with details about the store's sales channels.
   */
  getSalesChannelList(): Promise<
    VtexHttpResponse<Array<GetSalesChannelListResponseItem>>
  > {
    const path = `${SalesChannel.BASE_PATH}/pvt/saleschannel/list`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a specific sales channel by its ID.
   * @param {string} salesChannelId
   */
  getSalesChannelById(
    salesChannelId: string
  ): Promise<VtexHttpResponse<GetSalesChannelListResponseItem>> {
    const path = `${SalesChannel.BASE_PATH}/pub/saleschannel/${salesChannelId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
