interface MaxDimension {
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
  maxSumDimension?: number;
}

interface DeliveryRange {
  startTime?: string;
  endTime?: string;
  listPrice?: number;
}

interface DayOfWeekForDeliveryItem {
  dayOfWeek?: number;
  deliveryRanges?: Array<DeliveryRange>;
}

export interface CreateOrUpdateCarrierRequest {
  id?: string;
  slaType?: string;
  name?: string;
  scheduledDelivery?: boolean;
  maxRangeDelivery?: number;
  dayOfWeekForDelivery?: Array<DayOfWeekForDeliveryItem>;
  dayOfWeekBlockeds?: Array<string>;
  freightValue?: Array<string>;
  factorCubicWeight?: string;
  freightTableProcessStatus?: number;
  freightTableValueError?: string;
  modals?: Array<string>;
  onlyItemsWithDefinedModal?: boolean;
  deliveryOnWeekends?: boolean;
  carrierSchedule?: Array<string>;
  maxDimension?: MaxDimension;
  exclusiveToDeliveryPoints?: boolean;
  minimunCubicWeight?: number;
  isPolygon?: boolean;
  numberOfItemsPerShipment?: string;
}
