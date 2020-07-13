import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { OrderForm } from "./apis/order-form";
import { CartUpdate } from "./apis/cart-update";
import { CustomData } from "./apis/custom-data";

export class Checkout {
  /**
   * Order Form API
   */
  readonly orderForm: OrderForm;

  /**
   * Cart Update API
   */
  readonly cartUpdate: CartUpdate;

  /**
   * Custom Data API
   */
  readonly customData: CustomData;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.orderForm = new OrderForm(vtexHttpClient);
    this.cartUpdate = new CartUpdate(vtexHttpClient);
    this.customData = new CustomData(vtexHttpClient);
  }
}
