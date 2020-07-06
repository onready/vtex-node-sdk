import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Invoices } from "./apis/invoices";
import { Account } from "./apis/account";

export class CustomerCredit {
  /**
   * Invoices API
   */
  readonly invoices: Invoices;

  /**
   * Account API
   */
  readonly account: Account;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.invoices = new Invoices(vtexHttpClient);
    this.account = new Account(vtexHttpClient);
  }
}
