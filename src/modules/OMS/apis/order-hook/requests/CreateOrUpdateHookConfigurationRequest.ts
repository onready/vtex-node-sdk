interface Filter {
  status?: Array<string>;
}

interface Hook {
  url?: string;
  headers?: any;
}

export interface CreateOrUpdateHookConfigurationRequest {
  filter?: Filter;
  hook?: Hook;
}
