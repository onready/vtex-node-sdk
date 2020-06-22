import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { SKUService } from './apis/sku-service/SKUService';

export class Catalog {
  /**
   * SKU Service API
   */
  readonly skuService: SKUService

  constructor(vtexHttpClient: VtexHttpClient) {
    this.skuService = new SKUService(vtexHttpClient);
  }
}
