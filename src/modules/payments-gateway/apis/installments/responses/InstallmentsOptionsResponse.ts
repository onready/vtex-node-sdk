interface Payment {
  id?: number;
  name?: string;
  bin?: string;
  value?: number;
  isDefault?: boolean;
  self?: any;
}

interface Option {
  quantity?: number;
  value?: number;
  interestRate?: number;
}

interface Installment {
  payment?: Payment;
  options?: Array<Option>;
}

export interface InstallmentsOptionsResponse {
  value?: number;
  installments?: Array<Installment>;
}
