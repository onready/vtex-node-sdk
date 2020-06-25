import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetAttachmentResponse } from "./responses/GetAttachmentResponse";
import { UpdateAttachmentRequest } from "./requests/UpdateAttachmentRequest";

export class Attachment extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog/pvt/attachment";

  /**
   * Gets information about a registered attachment
   * @param {string} attachmentId
   */
  getAttachment(
    attachmentId: string
  ): Promise<VtexHttpResponse<GetAttachmentResponse>> {
    const path = `${Attachment.BASE_PATH}/${attachmentId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates a previously existing SKU attachment with new information
   * @param {string} attachmentId
   * @param {UpdateAttachmentRequest} attachmentData
   */
  updateAttachment(
    attachmentId: string,
    attachmentData: UpdateAttachmentRequest
  ): Promise<VtexHttpResponse<GetAttachmentResponse>> {
    const path = `${Attachment.BASE_PATH}/${attachmentId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      attachmentData
    );
  }

  /**
   * Deletes a previously existing SKU attachment
   * @param {string} attachmentId
   */
  deleteAttachment(attachmentId: string): Promise<VtexHttpResponse> {
    const path = `${Attachment.BASE_PATH}/${attachmentId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates a new SKU attachment from scratch
   * @param {UpdateAttachmentRequest} attachmentData
   */
  createAttachment(
    attachmentData: UpdateAttachmentRequest
  ): Promise<VtexHttpResponse<GetAttachmentResponse>> {
    return this.vtexHttpClient.performRequest(
      Attachment.BASE_PATH,
      this.HTTP_METHODS.POST,
      attachmentData
    );
  }
}
