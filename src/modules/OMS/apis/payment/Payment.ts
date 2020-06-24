import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { RetrievePaymentTransactionResponse } from "./responses/RetrievePaymentTransactionResponse";

export class Payment extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/oms/pvt/orders/{orderId}";

  /**
   * Retrieve transaction details by order ID.
   * @param {string} orderId
   */
  retrievePaymentTransaction(
    orderId: string
  ): Promise<VtexHttpResponse<RetrievePaymentTransactionResponse>> {
    const path = `${Payment.BASE_PATH.replace(
      "{orderId}",
      orderId
    )}/payment-transaction`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Send a payment notification of a given order, by order ID.
   * @param {string} orderId
   * @param {string} paymentId
   */
  sendPaymentNotification(
    orderId: string,
    paymentId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Payment.BASE_PATH.replace(
      "{orderId}",
      orderId
    )}/payments/${paymentId}/payment-notification`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }
}
