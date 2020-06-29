interface Validator {
  regex?: string;
  mask?: string;
  cardCodeMask?: string;
  cardCodeRegex?: string;
  weights?: Array<number>;
  useCvv?: boolean;
  useExpirationDate?: boolean;
  useCardHolderName?: boolean;
  useBillingAddress?: boolean;
  validCardLengths?: string;
}

interface Rule {
  id?: string;
  connectorImplementation?: string;
  antifraudImplementation?: string;
}

export interface AvailablePaymentMethodsResponseItem {
  id?: number;
  name?: string;
  connectorId?: number;
  requiresDocument?: boolean;
  requiresPhone?: boolean;
  implementation?: string;
  connectorImplementation?: string;
  antifraudConnectorImplementation?: string;
  groupName?: string;
  isCustom?: boolean;
  isSelfAuthorized?: boolean;
  allowInstallments?: boolean;
  allowMultiple?: boolean;
  allowIssuer?: boolean;
  allowCountry?: boolean;
  allowCommercialPolicy?: boolean;
  allowCommercialCondition?: boolean;
  allowPeriod?: boolean;
  isAvailable?: boolean;
  description?: string;
  validator?: Validator;
  rules?: Array<Rule>;
  fields?: string;
  dueDate?: string;
  allowNotification?: boolean;
  affiliationId?: string;
}
