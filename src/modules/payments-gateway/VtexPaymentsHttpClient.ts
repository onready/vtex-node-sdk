import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { VtexCredentials } from "../../VtexCredentials";

export class VtexPaymentsHttpClient extends VtexHttpClient {
  /**
   * @param {VtexCredentials} vtexCredentials
   */
  constructor(vtexCredentials: VtexCredentials) {
    super(vtexCredentials);
    this.defaultRequestOptions.hostname = `${vtexCredentials.store}.vtexpayments.com.br`;
  }
}
