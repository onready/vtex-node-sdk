import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetSubcollectionResponse } from "./responses/GetSubcollectionResponse";
import { GetSubcollectionSKUResponse } from "./responses/GetSubcollectionSKUResponse";
import { CreateCategorySubcollectionRequest } from "./requests/CreateCategorySubcollectionRequest";
import { CreateCategorySubcollectionResponse } from "./responses/CreateCategorySubcollectionResponse";
import { CreateBrandSubcollectionRequest } from "./requests/CreateBrandSubcollectionRequest";
import { CreateBrandSubcollectionResponse } from "./responses/CreateBrandSubcollectionResponse";
import { CreateSKUSubcollectionRequest } from "./requests/CreateSKUSubcollectionRequest";
import { CreateSKUSubcollectionResponse } from "./responses/CreateSKUSubcollectionResponse";
import { CreateSubcollectionRequest } from "./requests/CreateSubcollectionRequest";

export class Subcollection extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog/pvt";

  /**
   * Retrieves all Subcollections by its Collection ID
   * @param {number} collectionId
   */
  getSubcollectionByCollectionId(
    collectionId: number
  ): Promise<VtexHttpResponse<Array<GetSubcollectionResponse>>> {
    const path = `${Subcollection.BASE_PATH}/collection/${collectionId}/subcollection`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves all SKUs from a Subcollection
   * @param {number} subcollectionId
   * @param {number} page
   * @param {number} size
   */
  getSubcollectionSKU(
    subcollectionId: number,
    page: number,
    size: number
  ): Promise<VtexHttpResponse<GetSubcollectionSKUResponse>> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}/stockkeepingunit?page=${page}&size=${size}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates a single Category in a SubCollection
   * @param {number} subcollectionId
   * @param {CreateCategorySubcollectionRequest} categorySubcollectionData
   */
  createCategorySubcollection(
    subcollectionId: number,
    categorySubcollectionData: CreateCategorySubcollectionRequest
  ): Promise<VtexHttpResponse<CreateCategorySubcollectionResponse>> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}/category`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      categorySubcollectionData
    );
  }

  /**
   * Deletes a Category from a SubCollection
   * @param {number} subcollectionId
   * @param {number} categoryId
   */
  deleteCategorySubcollection(
    subcollectionId: number,
    categoryId: number
  ): Promise<VtexHttpResponse> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}/category/${categoryId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Deletes a Brand from a SubCollection
   * @param {number} subcollectionId
   * @param {number} brandId
   */
  deleteBrandSubcollection(
    subcollectionId: number,
    brandId: number
  ): Promise<VtexHttpResponse> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}/brand/${brandId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates a single Brand in a SubCollection
   * @param {number} subcollectionId
   * @param {CreateBrandSubcollectionRequest} brandSubcollectionData
   */
  createBrandSubcollection(
    subcollectionId: number,
    brandSubcollectionData: CreateBrandSubcollectionRequest
  ): Promise<VtexHttpResponse<CreateBrandSubcollectionResponse>> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}/brand`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      brandSubcollectionData
    );
  }

  /**
   * Deletes an SKU from a SubCollection
   * @param {number} subcollectionId
   * @param {number} skuId
   */
  deleteSKUSubcollection(
    subcollectionId: number,
    skuId: number
  ): Promise<VtexHttpResponse> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}/stockkeepingunit/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   *
   * @param {number} subcollectionId
   * @param {CreateSKUSubcollectionRequest} skuSubcollectionData
   */
  createSKUSubcollection(
    subcollectionId: number,
    skuSubcollectionData: CreateSKUSubcollectionRequest
  ): Promise<VtexHttpResponse<CreateSKUSubcollectionResponse>> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}/stockkeepingunit`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      skuSubcollectionData
    );
  }

  /**
   * Creates a new SubCollection inclusion or exclusion under a Collection
   * @param {CreateSubcollectionRequest} subcollectionData
   */
  createSubcollection(
    subcollectionData: CreateSubcollectionRequest
  ): Promise<VtexHttpResponse<GetSubcollectionResponse>> {
    const path = `${Subcollection.BASE_PATH}/subcollection`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      subcollectionData
    );
  }

  /**
   * Gets information about a SubCollection
   * @param {number} subcollectionId
   */
  getSubcollection(
    subcollectionId: number
  ): Promise<VtexHttpResponse<GetSubcollectionResponse>> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates a previously SubCollection
   * @param {number} subcollectionId
   * @param {CreateSubcollectionRequest} subcollectionData
   */
  updateSubcollection(
    subcollectionId: number,
    subcollectionData: CreateSubcollectionRequest
  ): Promise<VtexHttpResponse<CreateSubcollectionRequest>> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      subcollectionData
    );
  }

  /**
   * Deletes a previously SubCollection
   * @param {number} subcollectionId
   */
  deleteSubcollection(subcollectionId: number): Promise<VtexHttpResponse> {
    const path = `${Subcollection.BASE_PATH}/subcollection/${subcollectionId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
