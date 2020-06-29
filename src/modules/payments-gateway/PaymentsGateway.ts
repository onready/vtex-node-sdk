import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Installments } from "./apis/installments";
import { Configuration } from "./apis/configuration";
import { TransactionProcess } from "./apis/transaction-process";
import { TransactionFlow } from "./apis/transaction-flow";

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

  /**
   * Transaction Flow API
   */
  readonly transactionFlow: TransactionFlow;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.installments = new Installments(vtexHttpClient);
    this.configuration = new Configuration(vtexHttpClient);
    this.transactionProcess = new TransactionProcess(vtexHttpClient);
    this.transactionFlow = new TransactionFlow(vtexHttpClient);
  }
}
