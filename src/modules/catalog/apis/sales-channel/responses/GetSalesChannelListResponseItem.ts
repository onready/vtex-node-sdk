interface CurrencyFormatInfo {
  CurrencyDecimalDigits?: number;
  CurrencyDecimalSeparator?: string;
  CurrencyGroupSeparator?: string;
  CurrencyGroupSize?: string;
  StartsWithCurrencySymbol?: boolean;
}

export interface GetSalesChannelListResponseItem {
  Id?: number;
  Name?: string;
  IsActive?: boolean;
  ProductClusterId?: number;
  CountryCode?: string;
  CultureInfo?: string;
  TimeZone?: string;
  CurrencyCode?: string;
  CurrencySymbol?: string;
  CurrencyLocale?: number;
  CurrencyFormatInfo?: CurrencyFormatInfo;
  Origin?: string;
  Position?: number;
  ConditionRule?: number;
}
