import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { OrderChangeRequest } from './requests/OrderChangeRequest';
import { OrderChangeResponse } from './responses/OrderChangeResponse';
import { GetOrderResponse } from './responses/GetOrderResponse';
import { ListOrdersResponse } from './responses/ListOrdersResponse';
import { AddLogInOrderRequest } from './requests/AddLogInOrderRequest';
import { ListOrderAttachmentResponse } from './responses/ListOrderAttachmentResponse';

export class Orders extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/oms/pvt/orders';

  /**
   * Lists order details by searching through order ID.
   * @param {string} orderId
   */
  getOrder(orderId: string): Promise<VtexHttpResponse<GetOrderResponse>> {
    const path: string = `${Orders.BASE_PATH}/${orderId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieve a list of orders according to the given params.
   * @param {string} params URL params (Example: orderBy=creationDate,desc&page=3)
   */
  listOrders(params: string): Promise<VtexHttpResponse<ListOrdersResponse>> {
    const path = `${Orders.BASE_PATH}?${params}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Change a Status Order to start-handling by Order ID.
   * @param {string} orderId
   */
  startHandlingOrder(orderId: string): Promise<VtexHttpResponse> {
    const path = `${Orders.BASE_PATH}/${orderId}/start-handling`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Cancel an order by its order ID.
   * @param {string} orderId
   */
  cancelOrder(orderId: string): Promise<VtexHttpResponse> {
    const path = `${Orders.BASE_PATH}/${orderId}/cancel`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Register an order change of product or amount.
   * Order status that allows Order Change: {{handling}},
   * {{waiting-for-fulfillment}}, and {{ready-for-invoicing}}.
   * @param {string} orderId
   * @param {OrderChangeRequest} orderChange
   */
  registerChangeOnOrder(orderId: string, orderChange: OrderChangeRequest)
    : Promise<VtexHttpResponse<OrderChangeResponse>> {
    const path = `${Orders.BASE_PATH}/${orderId}/changes`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, orderChange);
  }

  /**
   * Add a Log in Interactions Order Array.
   * @param {string} orderId
   * @param {AddLogInOrderRequest} log
   */
  addLogInOrder(orderId: string, log: AddLogInOrderRequest): Promise<VtexHttpResponse> {
    const path = `${Orders.BASE_PATH}/${orderId}/interactions`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, log);
  }

  /**
   * Retrieve an order attachment, by its name and order ID.
   * @param {string} orderId
   * @param {string} attachmentName
   */
  listOrderAttachment(orderId: string, attachmentName: string)
    : Promise<VtexHttpResponse<ListOrderAttachmentResponse>> {
    const path = `${Orders.BASE_PATH}/${orderId}/message-attachment?attachmentName=${attachmentName}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
