import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { GetCategoryTreeResponseItem } from './responses/GetCategoryTreeResponseItem';
import { GetCategoryByIdResponse } from './responses/GetCategoryByIdResponse';
import { UpdateCategoryRequest } from './requests/UpdateCategoryRequest';
import { GetBrandResponse } from './responses/GetBrandResponse';
import { UpdateBrandRequest } from './requests/UpdateBrandRequest';

export class CategoryAndBrand extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/catalog';

  /**
   * Retrieves the Category Tree of your store.
   * Get all the category levels registered in the Catalog or define the level
   * up to which you want to get.
   * @param {number} categoryLevels
   */
  getCategoryTree(categoryLevels?: number)
    : Promise<VtexHttpResponse<Array<GetCategoryTreeResponseItem>>> {
    const path = `${CategoryAndBrand.BASE_PATH}_system/pub/category/tree/${categoryLevels || ''}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves general information about a Category
   * @param {number} categoryId
   */
  getCategoryById(categoryId: number): Promise<VtexHttpResponse<GetCategoryByIdResponse>> {
    const path = `${CategoryAndBrand.BASE_PATH}/pvt/category/${categoryId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates a previously existing Category
   * @param {number} categoryId
   * @param {UpdateCategoryRequest} data
   */
  updateCategory(categoryId: number, data: UpdateCategoryRequest)
    : Promise<VtexHttpResponse<GetCategoryByIdResponse>> {
    const path = `${CategoryAndBrand.BASE_PATH}/pvt/category/${categoryId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, data);
  }

  /**
   * Creates a new Category from scratch
   * @param {UpdateCategoryRequest} data
   */
  createCategory(data: UpdateCategoryRequest)
    : Promise<VtexHttpResponse<GetCategoryByIdResponse>> {
    const path = `${CategoryAndBrand.BASE_PATH}/pvt/category`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, data);
  }

  /**
   * Retrieves all Brands registered in the store's Catalog.
   */
  getBrandList(): Promise<VtexHttpResponse<Array<GetBrandResponse>>> {
    const path = `${CategoryAndBrand.BASE_PATH}_system/pvt/brand/list`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a specific Brand by its ID.
   * @param {string} brandId
   */
  getBrand(brandId: string): Promise<VtexHttpResponse<GetBrandResponse>> {
    const path = `${CategoryAndBrand.BASE_PATH}_system/pvt/brand/${brandId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates a previously existing Brand
   * @param {string} brandId
   * @param {UpdateBrandRequest} brandData
   */
  updateBrand(brandId: string, brandData: UpdateBrandRequest)
    : Promise<VtexHttpResponse<UpdateBrandRequest>> {
    const path = `${CategoryAndBrand.BASE_PATH}/pvt/brand/${brandId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, brandData);
  }

  /**
   * Deletes an existing Brand
   * @param {string} brandId
   */
  deleteBrand(brandId: string): Promise<VtexHttpResponse> {
    const path = `${CategoryAndBrand.BASE_PATH}/pvt/brand/${brandId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates a new Brand from scratch
   * @param {UpdateBrandRequest} brandData
   */
  createBrand(brandData: UpdateBrandRequest): Promise<VtexHttpResponse<UpdateBrandRequest>> {
    const path = `${CategoryAndBrand.BASE_PATH}/pvt/brand`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, brandData);
  }
}
