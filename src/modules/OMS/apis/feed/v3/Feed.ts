import { AbstractApi } from "../../../../AbstractApi";
import { VtexHttpResponse } from "../../../../../utils/VtexHttpResponse";
import { RetrieveFeedOrderStatusResponse } from "./responses/RetrieveFeedOrderStatusResponse";
import { CommitItemFeedOrderStatusRequest } from "./requests/CommitItemFeedOrderStatusRequest";
import { UpdateFeedConfigurationRequest } from "./requests/UpdateFeedConfigurationRequest";
import { RetrieveFeedConfigurationResponse } from "./responses/RetrieveFeedConfigurationResponse";

export class Feed extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/orders/feed";

  /**
   * Lists feed order events.
   * @param {number} maxlot
   */
  retrieveFeedOrderStatus(
    maxlot: number
  ): Promise<VtexHttpResponse<Array<RetrieveFeedOrderStatusResponse>>> {
    const path = `${Feed.BASE_PATH}?maxlot=${maxlot}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Acknowledges an item's feed order status.
   * @param {CommitItemFeedOrderStatusRequest} events
   */
  commitItemFeedOrderStatus(
    events: CommitItemFeedOrderStatusRequest
  ): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Feed.BASE_PATH,
      this.HTTP_METHODS.POST,
      events
    );
  }

  /**
   * Configures the filter rule applied to Feed V3.
   * @param {UpdateFeedConfigurationRequest} feedConfig
   */
  updateFeedConfiguration(
    feedConfig: UpdateFeedConfigurationRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Feed.BASE_PATH}/config`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      feedConfig
    );
  }

  /**
   * Lists a given Feed's configuration details.
   */
  retrieveFeedConfiguration(): Promise<
    VtexHttpResponse<RetrieveFeedConfigurationResponse>
  > {
    const path = `${Feed.BASE_PATH}/config`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes the configuration set up in Feed v3.
   */
  deleteFeedConfiguration(): Promise<VtexHttpResponse> {
    const path = `${Feed.BASE_PATH}/config`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
