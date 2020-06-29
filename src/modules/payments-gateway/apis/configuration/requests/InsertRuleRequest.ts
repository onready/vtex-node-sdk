interface SalesChannel {
  id?: string;
}

interface PaymentSystem {
  id?: number;
  name?: string;
  implementation?: string;
}

interface Connector {
  implementation?: string;
  affiliationId?: string;
}

interface Issuer {
  name?: string;
}

interface Antifraud {
  implementation?: string;
  affiliationId?: string;
}

export interface InsertRuleRequest {
  name?: string;
  salesChannels?: Array<SalesChannel>;
  paymentSystem?: PaymentSystem;
  connector?: Connector;
  issuer?: Issuer;
  antifraud?: Antifraud;
  installmentOptions?: string;
  isSelfAuthorized?: string;
  requiresAuthentication?: string;
  enabled?: boolean;
  installmentsService?: string;
  isDefault?: boolean;
  beginDate?: string;
  endDate?: string;
  condition?: string;
  multiMerchantList?: string;
  country?: string;
  dateIntervals?: string;
}
