interface PriceVariation {
  upperLimit?: number;
  lowerLimit?: number;
}

export interface GetPricingConfigResponse {
  hasMigrated?: boolean;
  migrationStatus?: string;
  defaultMarkup?: number;
  priceVariation?: PriceVariation;
  minimumMarkups?: number;
  tradePolicyConfigs?: any;
  sellersToOverride?: Array<any>;
  hasPriceInheritance?: boolean;
  hasOptionalBasePrice?: boolean;
  blockAccount?: boolean;
  blockedRoutes?: any;
  priceTableSelectionStrategy?: string;
  priceTableLimit?: number;
}
