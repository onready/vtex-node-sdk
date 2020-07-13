import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { OrderForm } from "./apis/order-form";
import { CartUpdate } from "./apis/cart-update";
import { CustomData } from "./apis/custom-data";
import { Configuration } from "./apis/configuration";

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

  /**
   * Configuration API
   */
  readonly configuration: Configuration;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.orderForm = new OrderForm(vtexHttpClient);
    this.cartUpdate = new CartUpdate(vtexHttpClient);
    this.customData = new CustomData(vtexHttpClient);
    this.configuration = new Configuration(vtexHttpClient);
  }
}
