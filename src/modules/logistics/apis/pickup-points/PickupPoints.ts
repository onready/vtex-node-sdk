import { AbstractApi } from "../../../AbstractApi";
import { CreateOrUpdatePickupPointRequest } from "./requests/CreateOrUpdatePickupPointRequest";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class PickupPoints extends AbstractApi {
  private static readonly BASE_PATH: string =
    "/api/logistics/pvt/configuration/pickuppoints";

  /**
   * Creates or updates pickup points in your store by Pickup Point ID.
   * @param {string} pickupPointId
   * @param {CreateOrUpdatePickupPointRequest} pickupPointData
   */
  createOrUpdatePickupPoint(
    pickupPointId: string,
    pickupPointData: CreateOrUpdatePickupPointRequest
  ): Promise<VtexHttpResponse<CreateOrUpdatePickupPointRequest>> {
    const path = `${PickupPoints.BASE_PATH}/${pickupPointId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      pickupPointData
    );
  }

  /**
   * Lists your store's pickup points while searching by ID.
   * @param {string} pickupPointId
   */
  listPickupPointById(
    pickupPointId: string
  ): Promise<VtexHttpResponse<CreateOrUpdatePickupPointRequest>> {
    const path = `${PickupPoints.BASE_PATH}/${pickupPointId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes a given pickup point for your store, by pickup point ID.
   * @param {string} pickupPointId
   */
  deletePickupPoint(pickupPointId: string): Promise<VtexHttpResponse> {
    const path = `${PickupPoints.BASE_PATH}/${pickupPointId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Lists paged pickup points in your store.
   * @param {string} params Example: page=1&pageSize=1&keyword=test
   */
  listPagedPickupPoints(params: string): Promise<VtexHttpResponse> {
    const path = `${PickupPoints.BASE_PATH}/_search?${params}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
