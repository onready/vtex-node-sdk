import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetRolesByUserOrAppKeyResponseItem } from "./responses/GetRolesByUserOrAppKeyResponseItem";

export class Roles extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/license-manager/users";

  /**
   * Allows you to add roles to a particular user by specifying the list of id's
   * of roles on the body of the request. Such id's can be looked up on the License Manager UI.
   * @param {string} userId
   * @param {Array<number>} rolesIds
   */
  putRolesInUserOrAppKey(
    userId: string,
    rolesIds: Array<number>
  ): Promise<VtexHttpResponse> {
    const path = `${Roles.BASE_PATH}/${userId}/roles`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      rolesIds
    );
  }

  /**
   *
   * @param {string} userId
   */
  getRolesByUserOrAppKey(
    userId: string
  ): Promise<VtexHttpResponse<Array<GetRolesByUserOrAppKeyResponseItem>>> {
    const path = `${Roles.BASE_PATH}/${userId}/roles`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Allows you to remove a role from a specific user. This method only allows
   * the removal of one role per request.
   * @param {string} userId
   * @param {number} roleId
   */
  removeRoleFromUserOrAppKey(
    userId: string,
    roleId: number
  ): Promise<VtexHttpResponse> {
    const path = `${Roles.BASE_PATH}/${userId}/roles/${roleId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
