export interface DoAuthorizationRequest {
  transactionId?: string;
  softDescriptor?: string;
  prepareForRecurrency?: boolean;
}
