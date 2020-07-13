import { VtexHttpClient } from "../../../utils/VtexHttpClient";
import { SubscriptionsApi } from "./apis/subscriptions";
import { SubscriptionGroup } from "./apis/subscription-group";
import { Report } from "./apis/report";
import { Settings } from "./apis/settings";

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

  /**
   * Settings API
   */
  readonly settings: Settings;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.subscriptions = new SubscriptionsApi(vtexHttpClient);
    this.subscriptionGroup = new SubscriptionGroup(vtexHttpClient);
    this.report = new Report(vtexHttpClient);
    this.settings = new Settings(vtexHttpClient);
  }
}
