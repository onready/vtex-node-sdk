import { InsertRuleRequest } from "./InsertRuleRequest";

export interface UpdateRuleRequest extends InsertRuleRequest {
  id?: string;
}
