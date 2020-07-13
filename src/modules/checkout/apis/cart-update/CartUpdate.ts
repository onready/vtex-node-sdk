import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { UpdateCartItemsRequest } from "./requests/UpdateCartItemsRequest";
import { ChangePriceRequest } from "./requests/ChangePriceRequest";

export class CartUpdate extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/checkout/pub/orderForm";

  /**
   * With the Items Update request you can:
   * 1) Add items to the cart
   * 2) Change the quantity of one or more items in a specific cart
   * 3) Remove items from the cart (by changing their quantity to 0).
   * @param {string} orderFormId
   * @param {UpdateCartItemsRequest} data
   */
  updateCartItems(
    orderFormId: string,
    data: UpdateCartItemsRequest
  ): Promise<VtexHttpResponse> {
    const path = `${CartUpdate.BASE_PATH}/${orderFormId}/items`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PATCH,
      data
    );
  }

  /**
   * This request changes the price of a specific item in a cart. You need to inform which cart you are
   * referring to, by sending its orderFormID; and what is the item whose price you want to change, by
   * sending its itemIndex. You also need to pass the new price value in the body. Remember that, to
   * use this endpoint, the feature of manual price must be active. To check if it's active, use the
   * Get orderForm configuration endpoint. To make it active, use the Update orderForm configuration
   * endpoint, making the allowManualPrice field true.
   * @param {string} orderFormId
   * @param {number} itemIndex
   * @param {ChangePriceRequest} data
   */
  changePrice(
    orderFormId: string,
    itemIndex: number,
    data: ChangePriceRequest
  ): Promise<VtexHttpResponse> {
    const path = `${CartUpdate.BASE_PATH}/${orderFormId}/items/${itemIndex}/price`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }
}
