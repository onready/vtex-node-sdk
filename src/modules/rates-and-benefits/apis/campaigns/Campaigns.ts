import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { SetCampaignConfigurationRequest } from "./requests/SetCampaignConfigurationRequest";

export class Campaigns extends AbstractApi {
  private static readonly BASE_PATH: string =
    "/api/rnb/pvt/campaignConfiguration";

  /**
   * Retrieves a specif campaign configuration by its campaign ID
   * @param {string} campaignId
   */
  getCampaignConfiguration(campaignId: string): Promise<VtexHttpResponse> {
    const path = `${Campaigns.BASE_PATH}/${campaignId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} campaignId
   * @param {any} data
   */
  matchCampaigns(campaignId: string, data?: any): Promise<VtexHttpResponse> {
    const path = `${Campaigns.BASE_PATH}/${campaignId}`;
    if (data) {
      return this.vtexHttpClient.performRequest(
        path,
        this.HTTP_METHODS.POST,
        data
      );
    }
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   *
   * @param {SetCampaignConfigurationRequest} data
   */
  setCampaignConfiguration(
    data: SetCampaignConfigurationRequest
  ): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Campaigns.BASE_PATH,
      this.HTTP_METHODS.POST,
      data
    );
  }
}
