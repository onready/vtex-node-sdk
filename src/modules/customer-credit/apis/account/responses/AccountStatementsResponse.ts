interface Statement {
  value?: number;
  date?: string;
  description?: string;
}

export interface AccountStatementsResponse {
  statements?: Array<Statement>;
  currentBalance?: number;
  intervalBalance?: number;
  previousBalance?: number;
}
