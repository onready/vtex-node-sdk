import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Invoices } from "./apis/invoices";
import { Account } from "./apis/account";
import { StoreConfiguration } from "./apis/store-configuration";

export class CustomerCredit {
  /**
   * Invoices API
   */
  readonly invoices: Invoices;

  /**
   * Account API
   */
  readonly account: Account;

  /**
   * Store Configuration API
   */
  readonly storeConfiguration: StoreConfiguration;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.invoices = new Invoices(vtexHttpClient);
    this.account = new Account(vtexHttpClient);
    this.storeConfiguration = new StoreConfiguration(vtexHttpClient);
  }
}
