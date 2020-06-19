interface MaxDimension {
  largestMeasure?: number;
  maxMeasureSum?: number;
}

export interface UpdateShippingPolicyRequest {
  name?: string;
  shippingMethod?: string;
  deliveryOnWeekends?: boolean;
  maxDimension?: MaxDimension;
  isActive?: boolean;
}
