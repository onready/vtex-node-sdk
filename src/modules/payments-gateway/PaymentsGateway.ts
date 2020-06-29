import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Installments } from "./apis/installments";
import { Configuration } from "./apis/configuration";

export class PaymentsGateway {
  /**
   * Installments API
   */
  readonly installments: Installments;

  /**
   * Configuration API
   */
  readonly configuration: Configuration;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.installments = new Installments(vtexHttpClient);
    this.configuration = new Configuration(vtexHttpClient);
  }
}
