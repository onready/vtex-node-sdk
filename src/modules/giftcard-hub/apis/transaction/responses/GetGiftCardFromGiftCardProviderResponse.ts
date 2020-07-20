interface Self {
  href?: string;
}

export interface GetGiftCardFromGiftCardProviderResponse {
  id?: string;
  serviceUrl?: string;
  oauthProvider?: string;
  preAuthEnable?: boolean;
  cancelEnabled?: boolean;
  _self?: Self;
}
