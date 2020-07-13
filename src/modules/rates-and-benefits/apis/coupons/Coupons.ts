import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { CreateMultipleCouponsRequestItem } from "./requests/CreateMultipleCouponsRequestItem";
import { GetCouponByCouponCodeResponse } from "./responses/GetCouponByCouponCodeResponse";
import { UpdateCouponRequest } from "./requests/UpdateCouponRequest";
import { CouponMassiveGenerationRequest } from "./requests/CouponMassiveGenerationRequest";
import { GetCouponUsageResponse } from "./responses/GetCouponUsageResponse";

export class Coupons extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/rnb/pvt";

  /**
   * Creates multiple coupons with different coupon codes
   * @param {Array<CreateMultipleCouponsRequestItem>} data
   */
  createMultipleCoupons(
    data: Array<CreateMultipleCouponsRequestItem>
  ): Promise<VtexHttpResponse<Array<string>>> {
    const path = `${Coupons.BASE_PATH}/multiple-coupons`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Create a new coupon
   * @param {CreateMultipleCouponsRequestItem} data
   */
  createCoupon(
    data: CreateMultipleCouponsRequestItem
  ): Promise<VtexHttpResponse> {
    const path = `${Coupons.BASE_PATH}/coupon`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Retrieves a specific coupon by its coupon code
   * @param {string} couponCode
   */
  getCouponByCouponCode(
    couponCode: string
  ): Promise<VtexHttpResponse<GetCouponByCouponCodeResponse>> {
    const path = `${Coupons.BASE_PATH}/coupon/${couponCode}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a specific archived coupon by its coupon code
   * @param {string} couponCode
   */
  getArchivedCouponByCouponCode(
    couponCode: string
  ): Promise<VtexHttpResponse<GetCouponByCouponCodeResponse>> {
    const path = `${Coupons.BASE_PATH}/archive/coupon/${couponCode}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Archive a specifc coupon by its coupon code
   * @param {string} couponCode
   */
  archiveCouponByCouponCode(couponCode: string): Promise<VtexHttpResponse> {
    const path = `${Coupons.BASE_PATH}/archive/coupon/${couponCode}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Update a specific coupon
   * @param {UpdateCouponRequest} data
   */
  updateCoupon(data: UpdateCouponRequest): Promise<VtexHttpResponse> {
    const path = `${Coupons.BASE_PATH}/coupon`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Fetches all coupons from an account
   */
  getAllCoupons(): Promise<
    VtexHttpResponse<Array<GetCouponByCouponCodeResponse>>
  > {
    const path = `${Coupons.BASE_PATH}/coupon`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Coupon massive generation
   * @param {number} quantity
   * @param {CouponMassiveGenerationRequest} data
   */
  couponMassiveGeneration(
    quantity: number,
    data: CouponMassiveGenerationRequest
  ): Promise<VtexHttpResponse<Array<string>>> {
    const path = `${Coupons.BASE_PATH}/coupons?quantity=${quantity}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Retrieves coupon usage
   * @param {string} couponCode
   */
  getCouponUsage(
    couponCode: string
  ): Promise<VtexHttpResponse<GetCouponUsageResponse>> {
    const path = `${Coupons.BASE_PATH}/coupon/usage/${couponCode}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Unarchive a specifc coupon by its coupon code
   * @param {string} couponCode
   */
  unarchiveCouponByCouponCode(couponCode: string): Promise<VtexHttpResponse> {
    const path = `${Coupons.BASE_PATH}/unarchive/coupon/${couponCode}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }
}
