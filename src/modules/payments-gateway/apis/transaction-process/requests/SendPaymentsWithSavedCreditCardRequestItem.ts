interface Fields {
  validationCode?: string;
  accountId?: string;
  firstDigits?: string;
  address?: string;
  callbackUrl?: string;
}

interface Transaction {
  id?: string;
  merchantName?: string;
}

export interface SendPaymentsWithSavedCreditCardRequestItem {
  paymentSystem?: number;
  installments?: number;
  currencyCode?: string;
  value?: number;
  installmentsInterestRate?: number;
  installmentsValue?: number;
  referenceValue?: number;
  fields?: Fields;
  transaction?: Transaction;
}
