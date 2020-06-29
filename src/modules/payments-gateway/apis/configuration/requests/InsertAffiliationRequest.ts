interface ConfigurationItem {
  name?: string;
  value?: string;
}

export interface InsertAffiliationRequest {
  implementation?: string;
  name?: string;
  configuration?: Array<ConfigurationItem>;
  isdelivered?: boolean;
  isConfigured?: boolean;
}
