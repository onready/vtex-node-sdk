interface Self {
  href?: string;
}

interface Field {
  name?: string;
  value?: string;
}

export interface PaymentDetailsResponse {
  id?: string;
  paymentSystem?: string;
  paymentSystemName?: string;
  merchantName?: string;
  group?: string;
  isCustom?: boolean;
  allowInstallments?: boolean;
  allowIssuer?: boolean;
  allowNotification?: boolean;
  isAvailable?: boolean;
  description?: string;
  self: Self;
  tid: string;
  returnCode: string;
  returnMessage: string;
  status: string;
  connector: string;
  ConnectorResponses: string;
  connectorResponse: string;
  ShowConnectorResponses: boolean;
  value: number;
  installmentsInterestRate: number;
  installmentsValue: number;
  referenceValue: number;
  installments: number;
  currencyCode: string;
  provider: string;
  fields?: Array<Field>;
  sheets?: string;
}
