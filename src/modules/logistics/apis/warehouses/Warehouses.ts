import { AbstractApi } from '../../../AbstractApi';
import { CreateOrUpdateWarehouseRequest } from './requests/CreateOrUpdateWarehouseRequest';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { ListAllWarehousesResponseItem } from './responses/ListAllWarehousesResponseItem';

export class Warehouses extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/logistics/pvt/configuration/warehouses';

  /**
   * Creates or updates your store's warehouses
   * @param {CreateOrUpdateWarehouseRequest} warehouse
   */
  createOrUpdateWarehouse(warehouse: CreateOrUpdateWarehouseRequest): Promise<VtexHttpResponse> {
    return this.vtexHttpClient
      .performRequest(Warehouses.BASE_PATH, this.HTTP_METHODS.POST, warehouse);
  }

  /**
   * Lists information about all warehouses set up in your store.
   */
  listAllWarehouses(): Promise<VtexHttpResponse<Array<ListAllWarehousesResponseItem>>> {
    return this.vtexHttpClient.performRequest(Warehouses.BASE_PATH, this.HTTP_METHODS.GET);
  }

  /**
   * Lists the information of a given warehouse, searching by warehouse ID.
   * @param {string} warehouseId
   */
  listWarehouseById(warehouseId: string): Promise<VtexHttpResponse<ListAllWarehousesResponseItem>> {
    const path = `${Warehouses.BASE_PATH}/${warehouseId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes given warehouse by warehouse ID.
   * @param {string} warehouseId
   */
  removeWarehouse(warehouseId: string): Promise<VtexHttpResponse> {
    const path = `${Warehouses.BASE_PATH}/${warehouseId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Activates a given warehouse, by warehouse ID.
   * @param {string} warehouseId
   */
  activateWarehouse(warehouseId: string): Promise<VtexHttpResponse> {
    const path = `${Warehouses.BASE_PATH}/${warehouseId}/activation`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Deactivates a given warehouse, by warehouse ID.
   * @param {string} warehouseId
   */
  deactivateWarehouse(warehouseId: string): Promise<VtexHttpResponse> {
    const path = `${Warehouses.BASE_PATH}/${warehouseId}/deactivation`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }
}
