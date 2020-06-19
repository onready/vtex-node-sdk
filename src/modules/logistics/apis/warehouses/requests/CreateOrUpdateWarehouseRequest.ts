interface WarehouseDock {
  dockId?: string;
  name?: string;
  time?: string;
  cost?: string;
  translateDays?: string;
  costToDisplay?: string;
}

export interface CreateOrUpdateWarehouseRequest {
  id?: string;
  name?: string;
  warehouseDocks?: Array<WarehouseDock>;
}
