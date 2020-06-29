interface Request {
  id?: string;
  date?: string;
  value?: number;
}

interface Payment {
  href?: string;
}

interface Action {
  paymentId?: string;
  payment?: Payment;
  date?: string;
  type?: string;
  value?: number;
  connectorResponse?: string;
}

export interface TransactionSettlementDetailsResponse {
  requests?: Array<Request>;
  actions?: Array<Action>;
}
