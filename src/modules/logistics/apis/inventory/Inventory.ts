import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { ListInventoryBySkuResponse } from "./responses/ListInventoryBySkuResponse";
import { ListInventoryWithDispatchedReservationsResponse } from "./responses/ListInventoryWithDispatchedReservationsResponse";
import { UpdateInventoryBySkuAndWarehouseRequest } from "./requests/UpdateInventoryBySkuAndWarehouseRequest";

export class Inventory extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/logistics/pvt/inventory";

  /**
   * Lists your store's inventory by SKU ID
   * @param {string} skuId
   */
  listInventoryBySku(
    skuId: string
  ): Promise<VtexHttpResponse<ListInventoryBySkuResponse>> {
    const path = `${Inventory.BASE_PATH}/skus/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists inventory information per warehouse on your store.
   * @param {string} skuId
   * @param {string} warehouseId
   */
  listInventoryPerWarehouse(
    skuId: string,
    warehouseId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Inventory.BASE_PATH}/items/${skuId}/warehouses/${warehouseId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists inventory information per dock set up in your store.
   * @param {string} skuId
   * @param {string} dockId
   */
  listInventoryPerDock(
    skuId: string,
    dockId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Inventory.BASE_PATH}/items/${skuId}/docks/${dockId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists information of inventory per dock and warehouse.
   * @param {string} skuId
   * @param {string} dockId
   * @param {string} warehouseId
   */
  listInventoryPerDockAndWarehouse(
    skuId: string,
    dockId: string,
    warehouseId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Inventory.BASE_PATH}/items/${skuId}/docks/${dockId}/warehouses/${warehouseId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists inventory with dispatched reservations.
   * When the number of active reservations is more than 2000
   * the return is an error with status code 400 (BadRequest)
   * and the message: Too many active reservations.
   * @param {string} itemId
   * @param {string} warehouseId
   */
  listInventoryWithDispatchedReservations(
    itemId: string,
    warehouseId: string
  ): Promise<
    VtexHttpResponse<ListInventoryWithDispatchedReservationsResponse>
  > {
    const path = `${Inventory.BASE_PATH}/items/${itemId}/warehouses/${warehouseId}/dispatched`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates inventory by searching through SKU and warehouse.
   * @param {string} skuId
   * @param {string} warehouseId
   * @param {UpdateInventoryBySkuAndWarehouseRequest} inventoryData
   */
  updateInventoryBySkuAndWarehouse(
    skuId: string,
    warehouseId: string,
    inventoryData: UpdateInventoryBySkuAndWarehouseRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Inventory.BASE_PATH}/skus/${skuId}/warehouses/${warehouseId}/dispatched`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      inventoryData
    );
  }
}
