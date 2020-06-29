interface Interactions {
  href?: string;
}

interface Settlements {
  href?: string;
}

interface Payments {
  href?: string;
}

interface Refunds {
  href?: string;
}

interface Cancellations {
  href?: string;
}

interface Field {
  name?: string;
  value?: string;
}

export interface StartNewTransactionResponse {
  id?: string;
  transactionId?: string;
  referenceKey?: string;
  interactions?: Interactions;
  settlements?: Settlements;
  payments?: Payments;
  refunds?: Refunds;
  cancellations?: Cancellations;
  timeoutStatus?: number;
  totalRefunds?: number;
  status?: string;
  value?: number;
  receiverUri?: string;
  startDate?: string;
  authorizationToken?: string;
  authorizationDate?: string;
  commitmentToken?: string;
  commitmentDate?: string;
  refundingToken?: string;
  refundingDate?: string;
  cancelationToken?: string;
  cancelationDate?: string;
  fields?: Array<Field>;
  ipAddress?: string;
  owner?: string;
  userAgent?: string;
  acceptHeader?: string;
  antifraudTid?: string;
  antifraudAffiliationId?: string;
  channel?: string;
  salesChannel?: string;
  urn?: string;
  softDescriptor?: string;
  markedForRecurrence?: boolean;
  buyer?: string;
}
