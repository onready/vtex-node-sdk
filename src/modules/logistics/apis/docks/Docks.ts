import { AbstractApi } from "../../../AbstractApi";
import { CreateOrUpdateDockRequest } from "./requests/CreateOrUpdateDockRequest";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class Docks extends AbstractApi {
  private static readonly BASE_PATH: string =
    "/api/logistics/pvt/configuration/docks";

  /**
   * Creates or updates docks to be used in your logistic operation.
   * @param {CreateOrUpdateDockRequest} dock
   */
  createOrUpdateDock(
    dock: CreateOrUpdateDockRequest
  ): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Docks.BASE_PATH,
      this.HTTP_METHODS.POST,
      dock
    );
  }

  /**
   * Informs a list of all docks.
   */
  listAllDocks(): Promise<VtexHttpResponse<Array<CreateOrUpdateDockRequest>>> {
    return this.vtexHttpClient.performRequest(
      Docks.BASE_PATH,
      this.HTTP_METHODS.GET
    );
  }

  /**
   * Informs a given dock's information, searching by dock ID.
   * @param {string} dockId
   */
  listDockById(
    dockId: string
  ): Promise<VtexHttpResponse<CreateOrUpdateDockRequest>> {
    const path = `${Docks.BASE_PATH}/${dockId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes dock by dock ID.
   * @param {string} dockId
   */
  deleteDock(dockId: string): Promise<VtexHttpResponse> {
    const path = `${Docks.BASE_PATH}/${dockId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Activates dock through dock ID.
   * @param {string} dockId
   */
  activateDock(dockId: string): Promise<VtexHttpResponse> {
    const path = `${Docks.BASE_PATH}/${dockId}/activation`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Deactivates dock through dock ID.
   * @param {string} dockId
   */
  deactivateDock(dockId: string): Promise<VtexHttpResponse> {
    const path = `${Docks.BASE_PATH}/${dockId}/deactivation`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }
}
