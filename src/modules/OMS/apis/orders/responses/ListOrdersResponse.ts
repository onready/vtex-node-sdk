interface Order {
  orderId?: string;
  creationDate?: string;
  clientName?: string;
  items?: string;
  totalValue?: number;
  paymentNames?: string;
  status?: string;
  statusDescription?: string;
  marketPlaceOrderId?: string;
  sequence?: string;
  salesChannel?: string;
  affiliateId?: string;
  origin?: string;
  workflowInErrorState?: boolean;
  workflowInRetry?: boolean;
  lastMessageUnread?: string;
  ShippingEstimatedDate?: string;
  ShippingEstimatedDateMax?: string;
  ShippingEstimatedDateMin?: string;
  orderIsComplete?: boolean;
  listId?: string;
  listType?: string;
  authorizedDate?: string;
  callCenterOperatorName?: string;
  totalItems?: number;
  currencyCode?: string;
}

interface Paging {
  total?: number;
  pages?: number;
  currentPage?: number;
  perPage?: number;
}

interface EmbeddedStats {
  totalValue?: any;
  totalItems?: any;
}

interface Stats {
  stats?: EmbeddedStats;
}

export interface ListOrdersResponse {
  list?: Array<Order>;
  facets?: Array<string>;
  paging?: Paging;
  stats?: Stats;
}
