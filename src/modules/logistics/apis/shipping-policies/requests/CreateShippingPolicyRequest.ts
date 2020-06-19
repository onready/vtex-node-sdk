interface WeekendAndHolidays {
  saturday?: boolean;
  sunday?: boolean;
  holiday?: boolean;
}

interface MaxDimension {
  largestMeasure?: number;
  maxMeasureSum?: number;
}

interface DeliveryRanges {
  startTime?: string;
  endTime?: string;
  listPrice?: number;
}

interface DayOfWeekForDelivery {
  dayOfWeek?: number;
  deliveryRanges?: DeliveryRanges;
}

interface DeliveryScheduleSettings {
  useDeliverySchedule?: boolean;
  maxRangeDelivery?: number;
  dayOfWeekForDelivery?: DayOfWeekForDelivery;
}

interface CubicWeightSettings {
  volumetricFactor?: number;
  minimunAcceptableVolumetricWeight?: number;
}

interface ModalSettings {
  modals?: Array<string>;
  useOnlyItemsWithDefinedModal?: boolean;
}

interface CarrierBusinessHours {
  openingTime?: string;
  closingTime?: string;
  dayOfWeek?: number;
}

interface BusinessHourSettings {
  carrierBusinessHours?: CarrierBusinessHours;
  isOpenOutsideBusinessHours?: boolean;
}

interface PickupPointsSettings {
  pickupPointIds?: Array<string>;
  pickupPointTags?: Array<string>;
  sellers?: Array<string>;
}

export interface CreateShippingPolicyRequest {
  id?: string;
  name?: string;
  shippingMethod?: string;
  weekendAndHolidays?: WeekendAndHolidays;
  maxDimension?: MaxDimension;
  numberOfItemsPerShipment?: number;
  minimumValueAceptable?: number;
  maximumValueAceptable?: number;
  deliveryScheduleSettings?: DeliveryScheduleSettings;
  carrierSchedule?: Array<string>;
  cubicWeightSettings?: CubicWeightSettings;
  modalSettings?: ModalSettings;
  businessHourSettings?: BusinessHourSettings;
  pickupPointsSettings?: PickupPointsSettings;
  isActive?: boolean;
}
