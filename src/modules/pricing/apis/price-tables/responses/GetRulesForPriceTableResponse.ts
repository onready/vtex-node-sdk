interface Context {
  categories?: any;
  brands?: any;
  stockStatuses?: any;
  internalCategories?: any;
  markupRange?: any;
  dateRange?: any;
}

interface Rule {
  id?: string;
  context?: Context;
  percentualModifier?: number;
}

export interface GetRulesForPriceTableResponse {
  tradePolicyId?: string;
  rules?: Array<Rule>;
}
