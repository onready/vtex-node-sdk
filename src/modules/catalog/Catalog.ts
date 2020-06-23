import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { SKUService } from './apis/sku-service/SKUService';
import { CategoryAndBrand } from './apis/category-and-brand';

export class Catalog {
  /**
   * SKU Service API
   */
  readonly skuService: SKUService;

  /**
   * Category and Brand API
   */
  readonly categoryAndBrand: CategoryAndBrand;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.skuService = new SKUService(vtexHttpClient);
    this.categoryAndBrand = new CategoryAndBrand(vtexHttpClient);
  }
}
