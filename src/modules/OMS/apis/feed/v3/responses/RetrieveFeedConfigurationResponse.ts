interface Filter {
  status?: Array<string>;
}

interface Queue {
  visibilityTimeoutInSeconds?: number;
  MessageRetentionPeriodInSeconds?: number;
}

export interface RetrieveFeedConfigurationResponse {
  filter?: Filter;
  queue?: Queue;
  quantity?: number;
  approximateAgeOfOldestMessageInSeconds?: number;
}
