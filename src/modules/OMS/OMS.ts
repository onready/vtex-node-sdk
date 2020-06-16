import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { Orders } from './apis/orders';
import { Invoice } from './apis/invoice';
import { Tracking } from './apis/tracking';
import { Payment } from './apis/payment';
import { Feed } from './apis/feed/v3';
import { OrderHook } from './apis/order-hook';
import { ExportOrderReport } from './apis/export-order-report';

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

  /**
   * Feed V3 API
   */
  readonly feed: Feed;

  /**
   * Order Hook API
   */
  readonly orderHook: OrderHook;

  /**
   * Export order report API
   */
  readonly exportOrderReport: ExportOrderReport;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.orders = new Orders(vtexHttpClient);
    this.invoice = new Invoice(vtexHttpClient);
    this.tracking = new Tracking(vtexHttpClient);
    this.payment = new Payment(vtexHttpClient);
    this.feed = new Feed(vtexHttpClient);
    this.orderHook = new OrderHook(vtexHttpClient);
    this.exportOrderReport = new ExportOrderReport(vtexHttpClient);
  }
}
