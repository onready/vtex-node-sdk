import { AbstractApi } from "../../../AbstractApi";
import { UpdateSKUServiceRequest } from "./requests/UpdateSKUServiceRequest";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { UpdateSKUServiceResponse } from "./responses/UpdateSKUServiceResponse";
import { AssociateSKUServiceRequest } from "./requests/AssociateSKUServiceRequest";
import { AssociateSKUServiceResponse } from "./responses/AssociateSKUServiceResponse";
import { AssociateSKUServiceAttachmentRequest } from "./requests/AssociateSKUServiceAttachmentRequest";
import { AssociateSKUServiceAttachmentResponse } from "./responses/AssociateSKUServiceAttachmentResponse";
import { UpdateSKUServiceValueRequest } from "./requests/UpdateSKUServiceValueRequest";
import { UpdateSKUServiceValueResponse } from "./responses/UpdateSKUServiceValueResponse";
import { UpdateSKUServiceTypeRequest } from "./requests/UpdateSKUServiceTypeRequest";
import { UpdateSKUServiceTypeResponse } from "./responses/UpdateSKUServiceTypeResponse";

export class SKUService extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog/pvt/skuservice";

  /**
   * Updates an SKU Service from an SKU
   * @param {number} skuServiceId
   * @param {UpdateSKUServiceRequest} data
   */
  updateSKUService(
    skuServiceId: number,
    data: UpdateSKUServiceRequest
  ): Promise<VtexHttpResponse<UpdateSKUServiceResponse>> {
    const path = `${SKUService.BASE_PATH}/${skuServiceId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Dissociates an SKU Service from an SKU
   * @param {number} skuServiceId
   */
  dissociateSKUService(skuServiceId: number): Promise<VtexHttpResponse> {
    const path = `${SKUService.BASE_PATH}/${skuServiceId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Associates an SKU Service to an SKU
   * @param {AssociateSKUServiceRequest} data
   */
  associateSKUService(
    data: AssociateSKUServiceRequest
  ): Promise<VtexHttpResponse<AssociateSKUServiceResponse>> {
    return this.vtexHttpClient.performRequest(
      SKUService.BASE_PATH,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * typeattachment/skuServiceTypeAttachmentId
   * @param {number} skuServiceTypeAttachmentId
   */
  dissociateAttachmentFromSKUServiceType(
    skuServiceTypeAttachmentId: number
  ): Promise<VtexHttpResponse> {
    const path = `${SKUService.BASE_PATH}typeattachment/${skuServiceTypeAttachmentId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Associates an Attachment for an existing SKU Service Type
   * @param {AssociateSKUServiceAttachmentRequest} data
   */
  associateSKUServiceAttachment(
    data: AssociateSKUServiceAttachmentRequest
  ): Promise<VtexHttpResponse<AssociateSKUServiceAttachmentResponse>> {
    const path = `${SKUService.BASE_PATH}typeattachment`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Dissociates an Attachment by its Attachment ID or SKU Service Type ID from an SKU Service Type
   * @param {number} attachmentId
   * @param {number} skuServiceTypeId
   */
  dissociateAttachmentByAttachmentIDorSKUServiceTypeID(
    attachmentId?: number,
    skuServiceTypeId?: number
  ): Promise<VtexHttpResponse> {
    let params = "?";
    if (attachmentId) {
      params += `attachmentId=${attachmentId}`;
    }
    if (attachmentId && skuServiceTypeId) {
      params += "&";
    }
    if (skuServiceTypeId) {
      params += `skuServiceTypeId=${skuServiceTypeId}`;
    }
    const path = `${SKUService.BASE_PATH}typeattachment${params}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Updates an existing SKU Service Value
   * @param {number} skuServiceValueId
   * @param {UpdateSKUServiceValueRequest} data
   */
  updateSKUServiceValue(
    skuServiceValueId: number,
    data: UpdateSKUServiceValueRequest
  ): Promise<VtexHttpResponse<UpdateSKUServiceValueResponse>> {
    const path = `${SKUService.BASE_PATH}value/${skuServiceValueId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Deletes an existing SKU Service Value
   * @param {number} skuServiceValueId
   */
  deleteSKUServiceValue(skuServiceValueId: number): Promise<VtexHttpResponse> {
    const path = `${SKUService.BASE_PATH}value/${skuServiceValueId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates an SKU Service Value for an existing SKU Service Type
   * @param {UpdateSKUServiceValueRequest} data
   */
  createSKUServiceValue(
    data: UpdateSKUServiceValueRequest
  ): Promise<VtexHttpResponse<UpdateSKUServiceValueResponse>> {
    const path = `${SKUService.BASE_PATH}value`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Updates an existing SKU Service Type
   * @param {number} skuServiceTypeId
   * @param {UpdateSKUServiceTypeRequest} data
   */
  updateSKUServiceType(
    skuServiceTypeId: number,
    data: UpdateSKUServiceTypeRequest
  ): Promise<VtexHttpResponse<UpdateSKUServiceTypeResponse>> {
    const path = `${SKUService.BASE_PATH}type/${skuServiceTypeId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Deletes an existing SKU Service Type
   * @param {number} skuServiceTypeId
   */
  deleteSKUServiceType(skuServiceTypeId: number): Promise<VtexHttpResponse> {
    const path = `${SKUService.BASE_PATH}type/${skuServiceTypeId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates an SKU Service Type from scratch
   * @param {UpdateSKUServiceTypeRequest} data
   */
  createSKUServiceType(
    data: UpdateSKUServiceTypeRequest
  ): Promise<VtexHttpResponse<UpdateSKUServiceTypeResponse>> {
    const path = `${SKUService.BASE_PATH}type`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }
}
