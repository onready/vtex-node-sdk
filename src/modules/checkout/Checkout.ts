import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { OrderForm } from "./apis/order-form";
import { CartUpdate } from "./apis/cart-update";

export class Checkout {
  /**
   * Order Form API
   */
  readonly orderForm: OrderForm;

  /**
   * Cart Update API
   */
  readonly cartUpdate: CartUpdate;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.orderForm = new OrderForm(vtexHttpClient);
    this.cartUpdate = new CartUpdate(vtexHttpClient);
  }
}
