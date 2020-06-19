export interface ListFreightValuesResponseItem {
  zipCodeStart?: string;
  zipCodeEnd?: string;
  weightStart?: number;
  weightEnd?: number;
  absoluteMoneyCost?: number;
  pricePercent?: number;
  pricePercentByWeight?: number;
  maxVolume?: number;
  timeCost?: string;
  country?: string;
  operationType?: number;
  restrictedFreights?: Array<string>;
  polygon?: string;
  minimumValueInsurance?: number;
}
