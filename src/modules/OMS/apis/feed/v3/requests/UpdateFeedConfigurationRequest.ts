interface Filter {
  status?: Array<string>;
}

interface Queue {
  visibilityTimeoutInSeconds?: number;
  MessageRetentionPeriodInSeconds?: number;
}

export interface UpdateFeedConfigurationRequest {
  filter?: Filter;
  queue?: Queue;
}
