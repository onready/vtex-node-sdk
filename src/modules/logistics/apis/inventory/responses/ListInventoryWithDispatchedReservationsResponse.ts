export interface ListInventoryWithDispatchedReservationsResponse {
  skuId?: string;
  warehouseId?: string;
  quantity?: number;
  isUnlimitedQuantity?: boolean;
  totalReservedQuantity?: number;
  dispatchedReservationsQuantity?: number;
  availableQuantity?: number;
}
