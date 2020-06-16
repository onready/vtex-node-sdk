import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { Orders } from './apis/orders';
import { Invoice } from './apis/invoice';
import { Tracking } from './apis/tracking';

export class OMS {
  /**
   * Orders API
   */
  readonly orders: Orders;

  /**
   * Invoice API
   */
  readonly invoice: Invoice;

  /**
   * Tracking API
   */
  readonly tracking: Tracking;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.orders = new Orders(vtexHttpClient);
    this.invoice = new Invoice(vtexHttpClient);
    this.tracking = new Tracking(vtexHttpClient);
  }
}
