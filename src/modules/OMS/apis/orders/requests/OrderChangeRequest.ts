interface OrderChangeItem {
  id?: string;
  price?: number;
  quantity?: number;
}

export interface OrderChangeRequest {
  reason?: string;
  discountValue?: number;
  incrementValue?: number;
  itemsRemoved?: Array<OrderChangeItem>
  itemsAdded?: Array<OrderChangeItem>
}
