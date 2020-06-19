import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { PriceTables } from './apis/price-tables';

export class Pricing {
  /**
   * Price Tables API
   */
  readonly priceTables: PriceTables

  constructor(vtexHttpClient: VtexHttpClient) {
    this.priceTables = new PriceTables(vtexHttpClient);
  }
}
