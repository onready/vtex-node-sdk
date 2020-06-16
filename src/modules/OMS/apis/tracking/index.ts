import { AbstractApi } from '../../../AbstractApi';
import { UpdateOrderTrackingStatusRequest } from './requests/UpdateOrderTrackingStatusRequest';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { UpdateOrderTrackingStatusResponse } from './responses/UpdateOrderTrackingStatusResponse';

export class Tracking extends AbstractApi {
  /**
   * Sends a tracking event to an order, by order ID.
   * @param {string} orderId
   * @param {string} invoiceNumber
   * @param {UpdateOrderTrackingStatusRequest} trackingData
   */
  updateOrderTrackingStatus(orderId: string, invoiceNumber: string,
    trackingData: UpdateOrderTrackingStatusRequest)
    : Promise<VtexHttpResponse<UpdateOrderTrackingStatusResponse>> {
    const path = `/api/oms/pvt/orders/${orderId}/invoice/${invoiceNumber}/tracking`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, trackingData);
  }
}
