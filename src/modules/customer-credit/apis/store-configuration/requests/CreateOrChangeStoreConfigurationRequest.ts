interface DayItem {
  days?: number;
  timeOfDay?: string;
}

interface NotificationsSettings {
  daysPrior?: Array<DayItem>;
  daysAfter?: Array<DayItem>;
}

export interface CreateOrChangeStoreConfigurationRequest {
  dailyInterestRate?: string;
  invoicePostponementLimit?: string;
  taxRate?: string;
  maxPostponementDays?: string;
  defaultCreditValue?: string;
  maxPreAuthorizationGrowthRate?: string;
  myCreditsEnabled?: boolean;
  toleranceEnabled?: boolean;
  automaticCheckingAccountCreationEnabled?: boolean;
  postponementEnabled?: boolean;
  notificationsSettings?: NotificationsSettings;
}
