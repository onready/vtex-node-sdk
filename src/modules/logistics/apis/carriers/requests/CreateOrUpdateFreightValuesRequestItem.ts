export interface CreateOrUpdateFreightValuesRequestItem {
  absoluteMoneyCost?: string;
  country?: string;
  maxVolume?: number;
  operationType?: number;
  pricePercent?: number;
  pricePercentByWeight?: number;
  timeCost?: string;
  weightEnd?: number;
  weightStart?: number;
  zipCodeEnd?: string;
  zipCodeStart?: string;
  polygon?: string;
}
