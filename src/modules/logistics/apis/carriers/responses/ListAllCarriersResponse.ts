interface DayOfWeekForDelivery {
  dayOfWeek?: number;
  deliveryRanges?: Array<any>;
}

interface MaxDimension {
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
  maxSumDimension?: number;
}

export interface ListAllCarriersResponseItem {
  id?: string;
  slaType?: string;
  name?: string;
  scheduledDelivery?: boolean;
  maxRangeDelivery?: number;
  dayOfWeekForDelivery?: Array<DayOfWeekForDelivery>;
  dayOfWeekBlockeds?: Array<string>;
  freightValue?: Array<string>;
  factorCubicWeight?: number;
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
