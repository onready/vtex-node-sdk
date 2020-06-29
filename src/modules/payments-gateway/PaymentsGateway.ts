import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Installments } from "./apis/installments";

export class PaymentsGateway {
  /**
   * Installments API
   */
  readonly installments: Installments;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.installments = new Installments(vtexHttpClient);
  }
}
