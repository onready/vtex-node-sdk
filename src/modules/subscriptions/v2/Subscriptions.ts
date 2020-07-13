import { VtexHttpClient } from "../../../utils/VtexHttpClient";
import { SubscriptionsApi } from "./apis/subscriptions";

export class Subscriptions {
  /**
   * Subscriptions API
   */
  readonly subscriptions: SubscriptionsApi;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.subscriptions = new SubscriptionsApi(vtexHttpClient);
  }
}
