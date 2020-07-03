import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Feed } from "./apis/feed";
import { Send } from "./apis/send";
import { Manage } from "./apis/manage";

export class Suggestions {
  /**
   * Feed API
   */
  readonly feed: Feed;

  /**
   * Feed API
   */
  readonly send: Send;

  /**
   * Manage API
   */
  readonly manage: Manage;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.feed = new Feed(vtexHttpClient);
    this.send = new Send(vtexHttpClient);
    this.manage = new Manage(vtexHttpClient);
  }
}
