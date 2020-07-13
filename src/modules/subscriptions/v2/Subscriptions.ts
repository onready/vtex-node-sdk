import { VtexHttpClient } from "../../../utils/VtexHttpClient";
import { SubscriptionsApi } from "./apis/subscriptions";
import { SubscriptionGroup } from "./apis/subscription-group";

export class Subscriptions {
  /**
   * Subscriptions API
   */
  readonly subscriptions: SubscriptionsApi;

  /**
   * Subscription Group API
   */
  readonly subscriptionGroup: SubscriptionGroup;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.subscriptions = new SubscriptionsApi(vtexHttpClient);
    this.subscriptionGroup = new SubscriptionGroup(vtexHttpClient);
  }
}
