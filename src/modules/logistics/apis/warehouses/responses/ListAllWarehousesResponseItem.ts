interface WarehouseDock {
  dockId?: string;
  name?: string;
  time?: string;
  cost?: string;
}

export interface ListAllWarehousesResponseItem {
  id?: string;
  name?: string;
  warehouseDocks?: Array<WarehouseDock>;
}
