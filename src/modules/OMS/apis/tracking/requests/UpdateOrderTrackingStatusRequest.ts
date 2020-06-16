interface Event {
  city?: string;
  state?: string;
  description?: string;
  date?: string;
}

export interface UpdateOrderTrackingStatusRequest {
  isDelivered?: boolean;
  deliveredDate?: string;
  events?: Array<Event>;
}
