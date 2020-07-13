interface PaymentConfiguration {
  requiresAuthenticationForPreAuthorizedPaymentOption?: boolean;
  allowInstallmentsMerge?: boolean;
}

interface TaxConfiguration {
  url?: string;
  authorizationHeader?: string;
  allowExecutionAfterErrors?: boolean;
  integratedAuthentication?: boolean;
  appId?: string;
}

interface Apps {
  id?: string;
  fields?: Array<string>;
  major?: number;
}

export interface UpdateOrderFormConfigurationRequest {
  paymentConfiguration?: PaymentConfiguration;
  taxConfiguration?: TaxConfiguration;
  minimumQuantityAccumulatedForItems?: number;
  decimalDigitsPrecision?: number;
  minimumValueAccumulated?: number;
  apps?: Apps;
  allowMultipleDeliveries?: boolean;
  allowManualPrice?: boolean;
  maxNumberOfWhiteLabelSellers?: number;
  maskFirstPurchaseData?: boolean;
}
