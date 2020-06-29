import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Installments } from "./apis/installments";
import { Configuration } from "./apis/configuration";
import { TransactionProcess } from "./apis/transaction-process";

export class PaymentsGateway {
  /**
   * Installments API
   */
  readonly installments: Installments;

  /**
   * Configuration API
   */
  readonly configuration: Configuration;

  /**
   * Transaction Process API
   */
  readonly transactionProcess: TransactionProcess;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.installments = new Installments(vtexHttpClient);
    this.configuration = new Configuration(vtexHttpClient);
    this.transactionProcess = new TransactionProcess(vtexHttpClient);
  }
}
