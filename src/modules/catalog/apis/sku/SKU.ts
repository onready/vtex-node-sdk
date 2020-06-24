import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetSKUResponse } from "./responses/GetSKUResponse";
import { GetSKUByRefIdResponse } from "./responses/GetSKUByRefIdResponse";
import { CreateSKURequest } from "./requests/CreateSKURequest";
import { CreateSKUResponse } from "./responses/CreateSKUResponse";
import { GetSKUListByProductIdResponseItem } from "./responses/GetSKUListByProductIdResponseItem";
import { GetSKUFileResponseItem } from "./responses/GetSKUFileResponseItem";
import { CreateSKUFileRequest } from "./requests/CreateSKUFileRequest";
import { GetSKUKitResponse } from "./responses/GetSKUKitResponse";
import { CreateSKUKitRequest } from "./requests/CreateSKUKitRequest";
import { GetSKUSpecificationsResponseItem } from "./responses/GetSKUSpecificationsResponseItem";
import { CreateSKUSpecificationRequest } from "./requests/CreateSKUSpecificationRequest";
import { UpdateSKURequest } from "./requests/UpdateSKURequest";
import { AssociateSKUAttachmentRequest } from "./requests/AssociateSKUAttachmentRequest";
import { AssociateSKUAttachmentResponse } from "./responses/AssociateSKUAttachmentResponse";
import { CreateSKUComplementRequest } from "./requests/CreateSKUComplementRequest";
import { CreateSKUComplementResponse } from "./responses/CreateSKUComplementResponse";

export class SKU extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog";

  /**
   * Retrieves the IDs of all SKUs in the store. Presents the result with page size and pagination.
   * @param {number} page
   * @param {number} pageSize
   */
  listAllSKUIds(
    page: number,
    pageSize: number
  ): Promise<VtexHttpResponse<Array<number>>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitids?page=${page}&pagesize=${pageSize}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a specific SKU by its ID.
   * @param {string} skuId
   */
  getSKU(skuId: string): Promise<VtexHttpResponse<GetSKUResponse>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitbyid/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves information about a specific SKU by its RefId
   * @param {string} refId
   */
  getSKUByRefId(
    refId: string
  ): Promise<VtexHttpResponse<GetSKUByRefIdResponse>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit?refId=${refId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates a new SKU from scratch
   * @param {CreateSKURequest} skuData
   */
  createSKU(
    skuData: CreateSKURequest
  ): Promise<VtexHttpResponse<CreateSKUResponse>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      skuData
    );
  }

  /**
   * Retrieves an SKU ID by the SKU's Reference ID.
   * @param {string} refId
   */
  getSkuIdByRefId(refId: string): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitidbyrefid/${refId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves an SKU by its Alternate ID.
   * @param {string} alternateId
   */
  getSKUByAlternateId(
    alternateId: string
  ): Promise<VtexHttpResponse<GetSKUResponse>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitbyalternateId/${alternateId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves an SKU by its EAN ID.
   * @param {string} ean
   */
  getSKUByEAN(ean: string): Promise<VtexHttpResponse<GetSKUResponse>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitbyean/${ean}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves the EAN of the SKU
   * @param {string} skuId
   */
  getEANBySKUId(skuId: string): Promise<VtexHttpResponse<Array<string>>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/ean`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes all EANs values of an SKU
   * @param {string} skuId
   */
  deleteAllSkuEAN(skuId: string): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/ean`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Retrieves a list with the SKUs related to a product by the product's ID.
   * @param {string} productId
   */
  getSKUListByProductId(
    productId: string
  ): Promise<VtexHttpResponse<Array<GetSKUListByProductIdResponseItem>>> {
    const path = `${SKU.BASE_PATH}_system/pvt/sku/stockkeepingunitByProductId/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Gets general information about all Files inside the SKU
   * @param {string} skuId
   */
  getSKUFile(
    skuId: string
  ): Promise<VtexHttpResponse<Array<GetSKUFileResponseItem>>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/file`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates a new Image on an SKU based on its URL
   * @param {string} skuId
   * @param {CreateSKUFileRequest} skuFileData
   */
  createSKUFile(
    skuId: string,
    skuFileData: CreateSKUFileRequest
  ): Promise<VtexHttpResponse<GetSKUFileResponseItem>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/file`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      skuFileData
    );
  }

  /**
   * Deletes all SKU Image Files
   * @param {string} skuId
   */
  deleteAllSKUFile(skuId: string): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/file`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Retrieves general information about the components of an SKU Kit by SKU ID or Parent SKU ID
   * @param {string} skuId
   * @param {string} parentSkuId
   */
  getSKUKitBySkuIDOrParentSkuId(
    skuId?: string,
    parentSkuId?: string
  ): Promise<VtexHttpResponse<GetSKUKitResponse>> {
    let params = "?";
    if (skuId) {
      params += `skuId=${skuId}`;
    }
    if (skuId && parentSkuId) {
      params += "&";
    }
    if (parentSkuId) {
      params += `parentSkuId=${parentSkuId}`;
    }
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunitkit${params}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates new component to a specific Kit
   * @param {CreateSKUKitRequest} skuKitData
   */
  createSKUKit(
    skuKitData: CreateSKUKitRequest
  ): Promise<VtexHttpResponse<GetSKUKitResponse>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunitkit`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      skuKitData
    );
  }

  /**
   * Deletes all Kit’s components based on the Parent SKU ID or deletes
   * a specific Kit’s component based on the SKU ID
   * @param {string} skuId
   * @param {string} parentSkuId
   */
  deleteSKUKitBySkuIDOrParentSkuId(
    skuId?: string,
    parentSkuId?: string
  ): Promise<VtexHttpResponse> {
    let params = "?";
    if (skuId) {
      params += `skuId=${skuId}`;
    }
    if (skuId && parentSkuId) {
      params += "&";
    }
    if (parentSkuId) {
      params += `parentSkuId=${parentSkuId}`;
    }
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunitkit${params}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Retrieves general information about an SKU Specification
   * @param {string} skuId
   */
  getSKUSpecifications(
    skuId: string
  ): Promise<VtexHttpResponse<Array<GetSKUSpecificationsResponseItem>>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/specification`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates a new Specification on a previously existing SKU
   * @param {string} skuId
   * @param {CreateSKUSpecificationRequest} skuSpecificationData
   */
  createSKUSpecification(
    skuId: string,
    skuSpecificationData: CreateSKUSpecificationRequest
  ): Promise<VtexHttpResponse<GetSKUSpecificationsResponseItem>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/specification`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      skuSpecificationData
    );
  }

  /**
   * Deletes all Product Specifications
   * @param {string} skuId
   */
  deleteAllSKUSpecifications(skuId: string): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/specification`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Receives a list of Reference IDs and returns the same list with the corresponding SKU IDs.
   * @param {Array<number>} refIdList
   */
  retrieveSkuIdListByRefIdList(
    refIdList: Array<number>
  ): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}_system/pub/sku/stockkeepingunitidsbyrefids`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      refIdList
    );
  }

  /**
   * Updates an existing SKU
   * @param {string} skuId
   * @param {UpdateSKURequest} skuData
   */
  updateSKU(
    skuId: string,
    skuData: UpdateSKURequest
  ): Promise<VtexHttpResponse<GetSKUByRefIdResponse>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      skuData
    );
  }

  /**
   * Associates an existing SKU to an existing Attachment
   * @param {AssociateSKUAttachmentRequest} skuAttachmentData
   */
  associateSKUAttachment(
    skuAttachmentData: AssociateSKUAttachmentRequest
  ): Promise<VtexHttpResponse<AssociateSKUAttachmentResponse>> {
    const path = `${SKU.BASE_PATH}/pvt/skuattachment`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      skuAttachmentData
    );
  }

  /**
   * Deletes an association of an SKU to an Attachment by its Sku ID
   * @param {string} skuId
   */
  deleteSKUAttachmentBySkuId(skuId: string): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}/pvt/skuattachment?skuId=${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Updates a new Image on an SKU based on its URL
   * @param {string} skuId
   * @param {string} skuFileId
   * @param {CreateSKUFileRequest} skuFileData
   */
  updateSKUFile(
    skuId: string,
    skuFileId: string,
    skuFileData: CreateSKUFileRequest
  ): Promise<VtexHttpResponse<GetSKUFileResponseItem>> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/file/${skuFileId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      skuFileData
    );
  }

  /**
   * Deletes a specific SKU Image File
   * @param {string} skuId
   * @param {string} skuFileId
   */
  deleteSKUImageByFileId(
    skuId: string,
    skuFileId: string
  ): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}/pvt/stockkeepingunit/${skuId}/file/${skuFileId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates a new SKU Complement on a Parent SKU
   * @param {CreateSKUComplementRequest} skuComplementData
   */
  createSKUComplement(
    skuComplementData: CreateSKUComplementRequest
  ): Promise<VtexHttpResponse<CreateSKUComplementResponse>> {
    const path = `${SKU.BASE_PATH}/pvt/skucomplement`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      skuComplementData
    );
  }

  /**
   * Deletes an association of an SKU to an Attachment by its Attachment ID
   * @param {string} attachmentId
   */
  deleteSKUAttachmentByAttachmentId(
    attachmentId: string
  ): Promise<VtexHttpResponse> {
    const path = `${SKU.BASE_PATH}/pvt/skuattachment/${attachmentId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
