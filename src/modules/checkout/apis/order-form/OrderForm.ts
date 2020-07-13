import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { DoOrderFormSimulationRequest } from "./requests/DoOrderFormSimulationRequest";

export class OrderForm extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/checkout";

  /**
   * The orderForm simulation endpoint is used to simulate a cart in VTEX Checkout. It receives an SKU ID,
   * the quantity of items in the cart, the ID of the Seller and the country in ISO ALPHA-3 Code (eg. BRA, USA, ARG).
   * It sends back all information about the cart, such as the selling price of each item, rates and benefits data,
   * payment and logistics info. This is useful whenever you need to know the avaiability of fulfilling an order
   * for a specific cart setting, since the API response will let you know the updated price, inventory and
   * shipping data.
   * @param {DoOrderFormSimulationRequest} data
   */
  doOrderFormSimulation(
    data: DoOrderFormSimulationRequest
  ): Promise<VtexHttpResponse> {
    const path = `${OrderForm.BASE_PATH}/pub/orderforms/simulation`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * This call removes all items from a given cart, leaving it empty. The ID of the specific cart whose
   * items you want to remove is passed as an URL paramater, replacing the variable orderFormId in this example.
   * The orderFormId is the identification number of a given cart. That is, it's the ID of a specific orderForm.
   * @param {string} orderFormId
   */
  removeAllItems(orderFormId: string): Promise<VtexHttpResponse> {
    const path = `${OrderForm.BASE_PATH}/pub/orderform/${orderFormId}/items/removeAll`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, {});
  }

  /**
   * This call removes all user information, leaving the orderForm anonymous. That is, it keeps the items of
   * the cart in the orderForm. This call works by creating a new orderForm, setting a new cookie and returning
   * a redirect 302 to the cart URL (/checkout/#/orderform).
   * @param {string} orderFormId
   */
  removeAllPersonalData(orderFormId: string): Promise<VtexHttpResponse> {
    const path = `${OrderForm.BASE_PATH}/changeToAnonymousUser/${orderFormId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
