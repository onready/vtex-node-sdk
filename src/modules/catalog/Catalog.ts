import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { SKUService } from "./apis/sku-service/SKUService";
import { CategoryAndBrand } from "./apis/category-and-brand";
import { Attachment } from "./apis/attachment";
import { Product } from "./apis/product";
import { TradePolicy } from "./apis/trade-policy";
import { SKU } from "./apis/sku";
import { Specification } from "./apis/specification";

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

  /**
   * Trade Policy API
   */
  readonly tradePolicy: TradePolicy;

  /**
   * SKU API
   */
  readonly sku: SKU;

  /**
   * Specification API
   */
  readonly specification: Specification;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.skuService = new SKUService(vtexHttpClient);
    this.categoryAndBrand = new CategoryAndBrand(vtexHttpClient);
    this.attachment = new Attachment(vtexHttpClient);
    this.product = new Product(vtexHttpClient);
    this.tradePolicy = new TradePolicy(vtexHttpClient);
    this.sku = new SKU(vtexHttpClient);
    this.specification = new Specification(vtexHttpClient);
  }
}
