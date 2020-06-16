interface ConnectorResponse {
  Tid?: string;
  ReturnCode?: string;
  Message?: string;
  authId?: string;
}

interface Payment {
  id?: string;
  paymentSystem?: string;
  paymentSystemName?: string;
  value?: number;
  installments?: number;
  referenceValue?: number;
  cardHolder?: string;
  cardNumber?: string;
  firstDigits?: string;
  lastDigits?: string;
  cvv2?: string;
  expireMonth?: string;
  expireYear?: string;
  url?: string;
  giftCardId?: string;
  giftCardName?: string;
  giftCardCaption?: string;
  redemptionCode?: string;
  group?: string;
  tid?: string;
  dueDate?: string;
  connectorResponses?: Array<ConnectorResponse>;
}

export interface RetrievePaymentTransactionResponse {
  status?: string;
  isActive?: boolean;
  transactionId?: string;
  merchantName?: string;
  payments?: Array<Payment>;
}
