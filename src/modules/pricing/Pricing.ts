import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { PriceTables } from './apis/price-tables';
import { PricesAndFixedPrices } from './apis/prices-and-fixed-prices';

export class Pricing {
  /**
   * Price Tables API
   */
  readonly priceTables: PriceTables

  /**
   * Prices and Fixed Prices API
   */
  readonly pricesAndFixedPrices: PricesAndFixedPrices;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.priceTables = new PriceTables(vtexHttpClient);
    this.pricesAndFixedPrices = new PricesAndFixedPrices(vtexHttpClient);
  }
}
