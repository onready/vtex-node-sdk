export interface RetrieveFeedOrderStatusResponse {
  eventId?: string;
  handle?: string;
  domain?: string;
  state?: string;
  lastState?: string;
  orderId?: string;
  lastChange?: string;
  currentChange?: string;
}
