import { AbstractApi } from "../../../AbstractApi";
import { SettleTheTransactionRequest } from "./requests/SettleTheTransactionRequest";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { SettleTheTransactionResponse } from "./responses/SettleTheTransactionResponse";

export class TransactionFlow extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/pvt/transactions";

  /**
   * Settles transaction's value.
   * @param {string} transactionId
   * @param {SettleTheTransactionRequest} data
   */
  settleTheTransaction(
    transactionId: string,
    data: SettleTheTransactionRequest
  ): Promise<VtexHttpResponse<SettleTheTransactionResponse>> {
    const path = `${TransactionFlow.BASE_PATH}/${transactionId}/settlement-request`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Refunds transaction's value that was previously settled.
   * @param {string} transactionId
   * @param {SettleTheTransactionRequest} data
   */
  refundTheTransaction(
    transactionId: string,
    data: SettleTheTransactionRequest
  ): Promise<VtexHttpResponse> {
    const path = `${TransactionFlow.BASE_PATH}/${transactionId}/refunding-request`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Cancel's transaction that was previously approved, but not settled.
   * @param {string} transactionId
   * @param {SettleTheTransactionRequest} data
   */
  cancelTheTransaction(
    transactionId: string,
    data: SettleTheTransactionRequest
  ): Promise<VtexHttpResponse> {
    const path = `${TransactionFlow.BASE_PATH}/${transactionId}/cancellation-request`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }
}
