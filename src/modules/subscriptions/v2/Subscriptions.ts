import { VtexHttpClient } from "../../../utils/VtexHttpClient";
import { SubscriptionsApi } from "./apis/subscriptions";
import { SubscriptionGroup } from "./apis/subscription-group";
import { Report } from "./apis/report";

export class Subscriptions {
  /**
   * Subscriptions API
   */
  readonly subscriptions: SubscriptionsApi;

  /**
   * Subscription Group API
   */
  readonly subscriptionGroup: SubscriptionGroup;

  /**
   * Report API
   */
  readonly report: Report;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.subscriptions = new SubscriptionsApi(vtexHttpClient);
    this.subscriptionGroup = new SubscriptionGroup(vtexHttpClient);
    this.report = new Report(vtexHttpClient);
  }
}
