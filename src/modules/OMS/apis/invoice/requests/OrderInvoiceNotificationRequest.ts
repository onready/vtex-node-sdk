interface Item {
  id?: string;
  price?: number;
  quantity?: number;
}

export interface OrderInvoiceNotificationRequest {
  type?: string;
  issuanceDate?: string;
  invoiceNumber?: string;
  invoiceValue?: string;
  invoiceKey?: string;
  invoiceUrl?: string;
  courier?: string;
  trackingNumber?: string;
  trackingUrl?: string;
  items?: Array<Item>;
  dispatchedDate?: string;
}
