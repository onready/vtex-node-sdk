import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { PriceTables } from './apis/price-tables';
import { PricesAndFixedPrices } from './apis/prices-and-fixed-prices';
import { PricingConfig } from './apis/pricing-config';

export class Pricing {
  /**
   * Price Tables API
   */
  readonly priceTables: PriceTables

  /**
   * Prices and Fixed Prices API
   */
  readonly pricesAndFixedPrices: PricesAndFixedPrices;

  /**
   * Pricing Configuration API
   */
  readonly pricingConfig: PricingConfig;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.priceTables = new PriceTables(vtexHttpClient);
    this.pricesAndFixedPrices = new PricesAndFixedPrices(vtexHttpClient);
    this.pricingConfig = new PricingConfig(vtexHttpClient);
  }
}
