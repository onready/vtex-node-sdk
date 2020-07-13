import { UpdateCouponRequest } from "../requests/UpdateCouponRequest";

export interface GetCouponByCouponCodeResponse extends UpdateCouponRequest {
  lastModifiedUtc?: string;
}
