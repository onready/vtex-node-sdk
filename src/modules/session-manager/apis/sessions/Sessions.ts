import { AbstractApi } from "../../../AbstractApi";
import { CreateNewSessionRequest } from "./requests/CreateNewSessionRequest";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class Sessions extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/sessions";

  /**
   * The response should contain a session cookie.
   * Further POST or PATCH requests will edit the existing session
   * rather than creating a new one. All parameters in the body that are not within
   * the public namespace will be ignored. Querystring items will automatically be
   * added to the public namespace. Cookies relevant to the session manager execution
   * are also recorded.
   * @param {CreateNewSessionRequest} newSessionData
   */
  createNewSession(
    newSessionData: CreateNewSessionRequest
  ): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Sessions.BASE_PATH,
      this.HTTP_METHODS.POST,
      newSessionData
    );
  }

  /**
   * Items are the keys of the values you wish to get.
   * It follows the format namespace1.key1,namespace2.key2.
   * So if you wish to recover the data sent on the previous request,
   * it should be public.country,public.postalCode
   * @param {string} items
   */
  getSession(items: string): Promise<VtexHttpResponse> {
    const path = `${Sessions.BASE_PATH}?items=${items}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * This works exactly the same as the POST create session, but when the request
   * is sent with a vtex_session cookie, it retrieves the session first and then
   * applies the changes instead of generating a new one. As with the POST method,
   * only keys inside the public namespace on the body are considered, and querystrings
   * are automatically added to the public namespace.
   * @param {object} headers
   * @param {CreateNewSessionRequest} newSessionData
   */
  editSession(
    headers: object,
    newSessionData: CreateNewSessionRequest
  ): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Sessions.BASE_PATH,
      this.HTTP_METHODS.PATCH,
      newSessionData,
      headers
    );
  }
}
