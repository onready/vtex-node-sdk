import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Invoices } from "./apis/invoices";

export class CustomerCredit {
  /**
   * Invoices API
   */
  readonly invoices: Invoices;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.invoices = new Invoices(vtexHttpClient);
  }
}
