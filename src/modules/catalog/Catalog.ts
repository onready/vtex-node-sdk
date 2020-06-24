import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { SKUService } from "./apis/sku-service/SKUService";
import { CategoryAndBrand } from "./apis/category-and-brand";
import { Attachment } from "./apis/attachment";
import { Product } from "./apis/product";

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

  /**
   * Product API
   */
  readonly product: Product;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.skuService = new SKUService(vtexHttpClient);
    this.categoryAndBrand = new CategoryAndBrand(vtexHttpClient);
    this.attachment = new Attachment(vtexHttpClient);
    this.product = new Product(vtexHttpClient);
  }
}
