interface Fields {
  holderName?: string;
  cardNumber?: string;
  validationCode?: string;
  dueDate?: string;
  document?: string;
  accountId?: string;
  address?: string;
  callbackUrl?: string;
}

interface Transaction {
  id?: string;
  merchantName?: string;
}

export interface SendPaymentsInformationPublicRequestItem {
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
