import { AbstractApi } from '../../../AbstractApi';
import { OrderInvoiceNotificationRequest } from './requests/OrderInvoiceNotificationRequest';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { OrderInvoiceNotificationResponse } from './responses/OrderInvoiceNotificationResponse';

export class Invoice extends AbstractApi {
  private static readonly BASE_PATH = '/api/oms/pvt/orders/{orderId}/invoice';

  /**
   * Sends Order invoice notifications.
   * We strongly suggest that you always send the object of the invoiced items.
   * With this practice, the rounding errors will be avoided.
   * It is not allowed to use more than once the Invoice Notification API
   * with the same {{invoiceNumber}}.
   * @param {string} orderId
   * @param {OrderInvoiceNotificationRequest} invoiceData
   * @returns {Promise<VtexHttpResponse<OrderInvoiceNotificationResponse>>}
   */
  orderInvoiceNotification(orderId: string, invoiceData: OrderInvoiceNotificationRequest)
    : Promise<VtexHttpResponse<OrderInvoiceNotificationResponse>> {
    const path = Invoice.BASE_PATH.replace('{orderId}', orderId);
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, invoiceData);
  }
}
