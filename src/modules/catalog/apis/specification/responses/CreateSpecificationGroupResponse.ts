import { CreateSpecificationGroupRequest } from "../requests/CreateSpecificationGroupRequest";

export interface CreateSpecificationGroupResponse
  extends CreateSpecificationGroupRequest {
  Id?: number;
  Position?: number;
}
