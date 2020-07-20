import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { StartNewTransactionRequest } from "./requests/StartNewTransactionRequest";
import { StartNewTransactionResponse } from "./responses/StartNewTransactionResponse";
import { SendPaymentsInformationPublicRequestItem } from "./requests/SendPaymentsInformationPublicRequestItem";
import { SendPaymentsWithSavedCreditCardRequestItem } from "./requests/SendPaymentsWithSavedCreditCardRequestItem";
import { SendAdditionalDataRequestItem } from "./requests/SendAdditionalDataRequestItem";
import { DoAuthorizationRequest } from "./requests/DoAuthorizationRequest";
import { PaymentDetailsResponse } from "./responses/PaymentDetailsResponse";
import { TransactionSettlementDetailsResponse } from "./responses/TransactionSettlementDetailsResponse";

export class TransactionProcess extends AbstractApi {
  private static readonly BASE_PATH: string = "/api";

  /**
   * This request is the first step to create a new transaction.
   * @param {StartNewTransactionRequest} transactionData
   * @param {object} additionalHeaders
   */
  startNewTransaction(
    transactionData: StartNewTransactionRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<StartNewTransactionResponse>> {
    const path = `${TransactionProcess.BASE_PATH}/pvt/transactions`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      transactionData,
      additionalHeaders
    );
  }

  /**
   * The second step to create a new transaction. Here, you have the option to send
   * the data in three diferent ways: doing a private request, a public request
   * or a private request that uses a saved Credit Card.
   * @param {string} transactionId
   * @param {string} orderId
   * @param {Array<SendPaymentsInformationPublicRequestItem>} data
   * @param {object} additionalHeaders
   */
  sendPaymentsInformationPublic(
    transactionId: string,
    orderId: string,
    data: Array<SendPaymentsInformationPublicRequestItem>,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${TransactionProcess.BASE_PATH}/pub/transactions/${transactionId}/payments?orderId=${orderId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data,
      additionalHeaders
    );
  }

  /**
   * The second step to create a new transaction. Here, you have the option to send the data
   * in three diferent ways: doing a private request, a public request or a private request
   * that uses a saved Credit Card.
   * @param {string} transactionId
   * @param {object} additionalHeaders
   */
  sendPaymentsWithSavedCreditCard(
    transactionId: string,
    data: Array<SendPaymentsWithSavedCreditCardRequestItem>,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${TransactionProcess.BASE_PATH}/pvt/transactions/${transactionId}/payments`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data,
      additionalHeaders
    );
  }

  /**
   * The third step to create a new transaction.
   * It will send the additional related data to the transaction, like billig and shipping adress.
   * @param {string} transactionId
   * @param {Array<SendAdditionalDataRequestItem>} data
   * @param {object} additionalHeaders
   */
  sendAdditionalData(
    transactionId: string,
    data: Array<SendAdditionalDataRequestItem>,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${TransactionProcess.BASE_PATH}/pvt/transactions/${transactionId}/additional-data`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data,
      additionalHeaders
    );
  }

  /**
   * The fouth and last step to create a new transaction.
   * It will authorized the new transction creation acorrdint
   * to the data previously informed in the latests requests.
   * @param {string} transactionId
   * @param {DoAuthorizationRequest} data
   * @param {object} additionalHeaders
   */
  doAuthorization(
    transactionId: string,
    data: DoAuthorizationRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${TransactionProcess.BASE_PATH}/pvt/transactions/${transactionId}/authorization-request`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data,
      additionalHeaders
    );
  }

  /**
   * Returns associated data for the specified transaction id, like value and status, for exemple.
   * @param {string} transactionId
   * @param {object} additionalHeaders
   */
  transactionDetails(
    transactionId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<StartNewTransactionResponse>> {
    const path = `${TransactionProcess.BASE_PATH}/pvt/transactions/${transactionId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Returns associated information details for the specified payment id.
   * @param {string} transactionId
   * @param {string} paymentId
   * @param {object} additionalHeaders
   */
  paymentDetails(
    transactionId: string,
    paymentId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<PaymentDetailsResponse>> {
    const path = `${TransactionProcess.BASE_PATH}/pvt/transactions/${transactionId}/payments/${paymentId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Returns associated settlements data for the specified transaction id.
   * @param {string} transactionId
   * @param {object} additionalHeaders
   */
  transactionSettlementDetails(
    transactionId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<TransactionSettlementDetailsResponse>> {
    const path = `${TransactionProcess.BASE_PATH}/pvt/transactions/${transactionId}/settlements`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }
}
