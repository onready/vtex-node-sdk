import { AbstractApi } from "../../../AbstractApi";
import { CreateNewAppKeyRequest } from "./requests/CreateNewAppKeyRequest";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { CreateNewAppKeyResponse } from "./responses/CreateNewAppKeyResponse";
import { UpdateAppKeyRequest } from "./requests/UpdateAppKeyRequest";

export class AppKeys extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/vlm/appkeys";

  /**
   *
   * @param {CreateNewAppKeyRequest} appKeyData
   */
  createNewAppKey(
    appKeyData: CreateNewAppKeyRequest
  ): Promise<VtexHttpResponse<CreateNewAppKeyResponse>> {
    return this.vtexHttpClient.performRequest(
      AppKeys.BASE_PATH,
      this.HTTP_METHODS.POST,
      appKeyData
    );
  }

  getAppKeysFromAccount(): Promise<
    VtexHttpResponse<Array<CreateNewAppKeyResponse>>
  > {
    return this.vtexHttpClient.performRequest(
      AppKeys.BASE_PATH,
      this.HTTP_METHODS.GET
    );
  }

  /**
   *
   * @param {string} id
   * @param {UpdateAppKeyRequest} data
   */
  updateAppKey(
    id: string,
    data: UpdateAppKeyRequest
  ): Promise<VtexHttpResponse> {
    const path = `${AppKeys.BASE_PATH}/${id}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   *
   * @param {any} data
   */
  bulkUpdateAppKeys(data: any): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      AppKeys.BASE_PATH,
      this.HTTP_METHODS.PUT,
      data
    );
  }
}
