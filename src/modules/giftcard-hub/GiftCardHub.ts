import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Provider } from "./apis/provider";
import { Transaction } from "./apis/transaction";

export class GiftCardHub {
  /**
   * Provider API
   */
  readonly provider: Provider;

  /**
   * Transaction API
   */
  readonly transaction: Transaction;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.provider = new Provider(vtexHttpClient);
    this.transaction = new Transaction(vtexHttpClient);
  }
}
