import { AbstractApi } from '../../../AbstractApi';
import { OrderInvoiceNotificationRequest } from './requests/OrderInvoiceNotificationRequest';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { OrderInvoiceNotificationResponse } from './responses/OrderInvoiceNotificationResponse';
import { SendTrackingNumberRequest } from './requests/SendTrackingNumberRequest';
import { SendTrackingNumberResponse } from './responses/SendTrackingNumberResponse';

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
   */
  orderInvoiceNotification(orderId: string, invoiceData: OrderInvoiceNotificationRequest)
    : Promise<VtexHttpResponse<OrderInvoiceNotificationResponse>> {
    const path = Invoice.BASE_PATH.replace('{orderId}', orderId);
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, invoiceData);
  }

  /**
   * Update invoice of a given order, with its tracking number.
   * @param {string} orderId
   * @param {string} invoiceNumber
   * @param {SendTrackingNumberRequest} trackingData
   */
  sendTrackingNumber(orderId: string, invoiceNumber: string,
    trackingData: SendTrackingNumberRequest)
    : Promise<VtexHttpResponse<SendTrackingNumberResponse>> {
    const path = Invoice.BASE_PATH.replace('{orderId}', orderId).concat(`/${invoiceNumber}`);
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PATCH, trackingData);
  }
}
