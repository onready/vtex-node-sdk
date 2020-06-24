import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { RetrieveUserOrdersResponse } from "./responses/RetrieveUserOrdersResponse";
import { GetOrderResponse } from "../orders/responses/GetOrderResponse";

export class UserOrders extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/oms/user/orders";

  /**
   * Lists all orders from a given client, filtering by their email.
   * @param {string} clientEmail
   * @param {number} page
   * @param {number} perPage
   */
  retrieveUserOrders(
    clientEmail: string,
    page: number,
    perPage: number
  ): Promise<VtexHttpResponse<RetrieveUserOrdersResponse>> {
    const path = `${UserOrders.BASE_PATH}?clientEmail=${clientEmail}&page=${page}&per_page=${perPage}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists all details from a user's order, through client's perspective.
   * @param {string} orderId
   * @param {string} clientEmail
   */
  retrieveUserOrderDetails(
    orderId: string,
    clientEmail: string
  ): Promise<VtexHttpResponse<GetOrderResponse>> {
    const path = `${UserOrders.BASE_PATH}/${orderId}?clientEmail=${clientEmail}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
