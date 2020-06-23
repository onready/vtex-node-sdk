import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { SKUService } from "./apis/sku-service/SKUService";
import { CategoryAndBrand } from "./apis/category-and-brand";
import { Attachment } from "./apis/attachment";

export class Catalog {
  /**
   * SKU Service API
   */
  readonly skuService: SKUService;

  /**
   * Category and Brand API
   */
  readonly categoryAndBrand: CategoryAndBrand;

  /**
   * Attachment API
   */
  readonly attachment: Attachment;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.skuService = new SKUService(vtexHttpClient);
    this.categoryAndBrand = new CategoryAndBrand(vtexHttpClient);
    this.attachment = new Attachment(vtexHttpClient);
  }
}
