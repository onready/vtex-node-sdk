interface BalanceItem {
  warehouseId?: string;
  warehouseName?: string;
  totalQuantity?: number;
  reservedQuantity?: number;
  hasUnlimitedQuantity?: boolean;
}

export interface ListInventoryBySkuResponse {
  skuId?: string;
  balance?: Array<BalanceItem>;
}
