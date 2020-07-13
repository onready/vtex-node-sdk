import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { OrderForm } from "./apis/order-form";

export class Checkout {
  /**
   * Order Form API
   */
  readonly orderForm: OrderForm;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.orderForm = new OrderForm(vtexHttpClient);
  }
}
