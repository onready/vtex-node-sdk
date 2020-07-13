import { CouponMassiveGenerationRequest } from "./CouponMassiveGenerationRequest";

export interface UpdateCouponRequest extends CouponMassiveGenerationRequest {
  isArchived?: boolean;
}
