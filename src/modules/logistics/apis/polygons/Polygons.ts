import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { CreateOrUpdatePolygonRequest } from './requests/CreateOrUpdatePolygonRequest';

export class Polygons extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/logistics/pvt/configuration/geoshape';

  /**
   * Lists stored polygons.
   * @param {number} page
   * @param {number} perPage
   */
  listPagedPolygons(page: number, perPage: number): Promise<VtexHttpResponse> {
    const path = `${Polygons.BASE_PATH}?page=${page}&perPage=${perPage}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates or updates your store's polygons by geoshape coordinates and polygon name.
   * @param {CreateOrUpdatePolygonRequest} polygonData
   */
  createOrUpdatePolygon(polygonData: CreateOrUpdatePolygonRequest): Promise<VtexHttpResponse> {
    return this.vtexHttpClient
      .performRequest(Polygons.BASE_PATH, this.HTTP_METHODS.PUT, polygonData);
  }

  /**
   * Lists your store's polygons by searching through polygon name
   * @param {string} polygonName
   */
  listPolygonByName(polygonName: string): Promise<VtexHttpResponse> {
    const path = `${Polygons.BASE_PATH}/${polygonName}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes polygon set up in your store, by polygon name.
   * @param {string} polygonName
   */
  deletePolygon(polygonName: string): Promise<VtexHttpResponse> {
    const path = `${Polygons.BASE_PATH}/${polygonName}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
