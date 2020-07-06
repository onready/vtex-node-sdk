import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { UpdateUserRequest } from "./requests/UpdateUserRequest";

export class User extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/license-manager/users";

  /**
   * Allows you to get a user from the database, using the userId as the identifier.
   * @param {string} userId
   */
  getUser(userId: string): Promise<VtexHttpResponse> {
    const path = `${User.BASE_PATH}/${userId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Allows you to modify the values of a specific user, through the userId on the address.
   * The e-mail and name will be updated to reflect exactly the body that was sent - except
   * in the cases where the e-mail update would have generated an invalid user. Sending a body
   * with only an e-mail parameter will delete the name property of that user.
   * @param {string} userId
   * @param {UpdateUserRequest} userData
   */
  updateUser(
    userId: string,
    userData: UpdateUserRequest
  ): Promise<VtexHttpResponse> {
    const path = `${User.BASE_PATH}/${userId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      userData
    );
  }

  /**
   * Allows you to create a user by providing an e-mail (mandatory) and name (optional).
   * The e-mail must be in a valid format. The success response will contain the generated
   * userId for that user.
   * @param {UpdateUserRequest} userData
   */
  createUser(userData: UpdateUserRequest): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      User.BASE_PATH,
      this.HTTP_METHODS.POST,
      userData
    );
  }
}
