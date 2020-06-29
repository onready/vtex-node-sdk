export interface SettleTheTransactionResponse {
  token?: string;
  status?: number;
  statusDetail?: string;
  processingDate?: string;
  refundedValue?: number;
  refundedToken?: string;
  message?: string;
  connectorRefundedValue?: number;
  cancelledValue?: number;
}
