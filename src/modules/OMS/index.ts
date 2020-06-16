import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { Orders } from './apis/orders';
import { Invoice } from './apis/invoice';

export class OMS {
  /**
   * Orders API
   */
  readonly orders: Orders;

  /**
   * Invoice API
   */
  readonly invoice: Invoice;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.orders = new Orders(vtexHttpClient);
    this.invoice = new Invoice(vtexHttpClient);
  }
}
