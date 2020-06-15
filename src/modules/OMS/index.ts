import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { Orders } from './apis/orders';

export class OMS {
  /**
   * Orders API
   */
  readonly orders: Orders;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.orders = new Orders(vtexHttpClient);
  }
}
