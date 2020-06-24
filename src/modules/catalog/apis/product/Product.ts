import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetProductByIdResponse } from "./responses/GetProductByIdResponse";
import { UpdateProductRequest } from "./requests/UpdateProductRequest";
import { GetProductVariationsResponse } from "./responses/GetProductVariationsResponse";
import { GetProductSpecificationResponseItem } from "./responses/GetProductSpecificationResponseItem";
import { CreateProductSpecificationRequest } from "./requests/CreateProductSpecificationRequest";
import { CreateProductSpecificationResponse } from "./responses/CreateProductSpecificationResponse";
import { CreateSimilarProductCategoryResponse } from "./responses/CreateSimilarProductCategoryResponse";

export class Product extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog";

  /**
   * Retrieves the IDs of all products and SKUs from a specific category by this category's ID.
   * @param {number} categoryId
   * @param {number} from
   * @param {number} to
   */
  getProductAndSkuIds(
    categoryId: number,
    from: number,
    to: number
  ): Promise<VtexHttpResponse> {
    const path = `${Product.BASE_PATH}_system/pvt/products/GetProductAndSkuIds?categoryId=${categoryId}&_from=${from}&_to=${to}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a specific product by its ID.
   * @param {string} productId
   */
  getProductById(
    productId: string
  ): Promise<VtexHttpResponse<GetProductByIdResponse>> {
    const path = `${Product.BASE_PATH}/pvt/product/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates an existent Product
   * @param {string} productId
   * @param {UpdateProductRequest} productData
   */
  updateProduct(
    productId: string,
    productData: UpdateProductRequest
  ): Promise<VtexHttpResponse<UpdateProductRequest>> {
    const path = `${Product.BASE_PATH}/pvt/product/${productId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      productData
    );
  }

  /**
   * Retrieves a specific product by its Reference ID.
   * @param {string} refId
   */
  getProductByRefId(
    refId: string
  ): Promise<VtexHttpResponse<GetProductByIdResponse>> {
    const path = `${Product.BASE_PATH}_system/pvt/products/productgetbyrefid/${refId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves data about the product and all SKUs related to it by the product's ID.
   * @param {string} productId
   */
  getProductVariations(
    productId: string
  ): Promise<VtexHttpResponse<GetProductVariationsResponse>> {
    const path = `${Product.BASE_PATH}_system/pub/products/variations/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves the review rate of a product by this product's ID.
   * @param {string} productId
   */
  getProductReviewDate(productId: string): Promise<VtexHttpResponse> {
    const path = `/api/addon/pvt/review/GetProductRate/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates a new Product from scratch
   * @param {UpdateProductRequest} productData
   */
  createProduct(
    productData: UpdateProductRequest
  ): Promise<VtexHttpResponse<UpdateProductRequest>> {
    const path = `${Product.BASE_PATH}/pvt/product`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      productData
    );
  }

  /**
   * Retrieves all specifications of a product by the product's ID.
   * @param {string} productId
   */
  getProductSpecification(
    productId: string
  ): Promise<VtexHttpResponse<Array<GetProductSpecificationResponseItem>>> {
    const path = `${Product.BASE_PATH}_system/pvt/products/${productId}/specification`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates the value of a product specification by the product's ID.
   * The ID or name can be used to identify what product specification will be updated.
   * Specification fields must be previously created in your Catalog.
   * @param {string} productId
   * @param {Array<GetProductSpecificationResponseItem>} productSpecificationData
   */
  updateProductSpecification(
    productId: string,
    productSpecificationData: Array<GetProductSpecificationResponseItem>
  ): Promise<VtexHttpResponse<Array<GetProductSpecificationResponseItem>>> {
    const path = `${Product.BASE_PATH}_system/pvt/products/${productId}/specification`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      productSpecificationData
    );
  }

  /**
   * Creates a new Product Specification based on a previously defined Field
   * @param {string} productId
   * @param {CreateProductSpecificationRequest} productSpecificationData
   */
  createProductSpecification(
    productId: string,
    productSpecificationData: CreateProductSpecificationRequest
  ): Promise<VtexHttpResponse<CreateProductSpecificationResponse>> {
    const path = `${Product.BASE_PATH}/pvt/product/${productId}/specification`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      productSpecificationData
    );
  }

  /**
   * Deletes all Product Specifications
   * @param {string} productId
   */
  deleteAllProductSpecification(productId: string): Promise<VtexHttpResponse> {
    const path = `${Product.BASE_PATH}/pvt/product/${productId}/specification`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Deletes a specific Product Specification
   * @param {string} productId
   * @param {string} specificationId
   */
  deleteProductSpecification(
    productId: string,
    specificationId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Product.BASE_PATH}/pvt/product/${productId}/specification/${specificationId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates a Similar Category to a Product
   * @param {string} productId
   * @param {string} categoryId
   */
  createSimilarProductCategory(
    productId: string,
    categoryId: string
  ): Promise<VtexHttpResponse<CreateSimilarProductCategoryResponse>> {
    const path = `${Product.BASE_PATH}/pvt/product/${productId}/similarcategory/${categoryId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Deletes a Similar Category from a Product
   * @param {string} productId
   * @param {string} categoryId
   */
  deleteSimilarProductCategory(
    productId: string,
    categoryId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Product.BASE_PATH}/pvt/product/${productId}/similarcategory/${categoryId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
