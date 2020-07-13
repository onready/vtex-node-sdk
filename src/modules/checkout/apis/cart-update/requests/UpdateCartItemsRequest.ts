interface OrderItem {
  quantity?: number;
  index?: number;
  seller?: string;
  id?: string;
}

export interface UpdateCartItemsRequest {
  orderItems?: Array<OrderItem>;
}
