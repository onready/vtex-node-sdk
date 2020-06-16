import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { Orders } from './apis/orders';
import { Invoice } from './apis/invoice';
import { Tracking } from './apis/tracking';
import { Payment } from './apis/payment';

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

  /**
   * Payment API
   */
  readonly payment: Payment;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.orders = new Orders(vtexHttpClient);
    this.invoice = new Invoice(vtexHttpClient);
    this.tracking = new Tracking(vtexHttpClient);
    this.payment = new Payment(vtexHttpClient);
  }
}
