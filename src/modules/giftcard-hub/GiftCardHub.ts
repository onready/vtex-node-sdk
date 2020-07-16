import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Provider } from "./apis/provider";

export class GiftCardHub {
  /**
   * Provider API
   */
  readonly provider: Provider;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.provider = new Provider(vtexHttpClient);
  }
}
