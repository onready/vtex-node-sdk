import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { GetCategoryTreeResponseItem } from './responses/GetCategoryTreeResponseItem';

export class CategoryAndBrand extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/catalog_system';

  /**
   * Retrieves the Category Tree of your store.
   * Get all the category levels registered in the Catalog or define the level
   * up to which you want to get.
   * @param {number} categoryLevels
   */
  getCategoryTree(categoryLevels?: number)
    : Promise<VtexHttpResponse<Array<GetCategoryTreeResponseItem>>> {
    const path = `${CategoryAndBrand.BASE_PATH}/pub/category/tree/${categoryLevels || ''}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
