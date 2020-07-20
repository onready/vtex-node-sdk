export interface CreateOrUpdateGiftCardProviderByIdRequest {
  serviceUrl?: string;
  oauthProvider?: string;
  caption?: string;
  preAuthEnabled?: boolean;
  cancelEnabled?: boolean;
  appToken?: string;
  appKey?: string;
}
