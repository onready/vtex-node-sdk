import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetSpecificationNonStructuredResponse } from "./responses/GetSpecificationNonStructuredResponse";
import { CreateSpecificationsFieldRequest } from "./requests/CreateSpecificationsFieldRequest";
import { CreateSpecificationGroupRequest } from "./requests/CreateSpecificationGroupRequest";
import { CreateSpecificationGroupResponse } from "./responses/CreateSpecificationGroupResponse";
import { UpdateSpecificationGroupRequest } from "./requests/UpdateSpecificationGroupRequest";
import { CreateSpecificationValueRequest } from "./requests/CreateSpecificationValueRequest";
import { GetSpecificationValueResponse } from "./responses/GetSpecificationValueResponse";

export class Specification extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog";

  /**
   * Gets general information about unmapped Specifications of a Seller SKU in a Marketplace by its unique ID
   * @param {number} skuId
   */
  getSpecificationNonStructuredBySkuId(
    skuId: number
  ): Promise<VtexHttpResponse<GetSpecificationNonStructuredResponse>> {
    const path = `${Specification.BASE_PATH}/pvt/specification/nonstructured/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes unmapped Specifications of a Seller SKU in a Marketplace by its unique ID
   * @param {number} skuId
   */
  deleteSpecificationNonStructuredBySkuId(
    skuId: number
  ): Promise<VtexHttpResponse> {
    const path = `${Specification.BASE_PATH}/pvt/specification/nonstructured/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates a specification field in a category.
   * @param {CreateSpecificationsFieldRequest} specificationFieldData
   */
  createSpecificationsField(
    specificationFieldData: CreateSpecificationsFieldRequest
  ): Promise<VtexHttpResponse<CreateSpecificationsFieldRequest>> {
    const path = `${Specification.BASE_PATH}_system/pvt/specification/field`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      specificationFieldData
    );
  }

  /**
   * Updates a specification field in a category.
   * @param {CreateSpecificationsFieldRequest} specificationFieldData
   */
  updateSpecificationsField(
    specificationFieldData: CreateSpecificationsFieldRequest
  ): Promise<VtexHttpResponse<CreateSpecificationsFieldRequest>> {
    const path = `${Specification.BASE_PATH}_system/pvt/specification/field`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      specificationFieldData
    );
  }

  /**
   * Create a specification group.
   * @param {CreateSpecificationGroupRequest} specificationGroupData
   */
  createSpecificationGroup(
    specificationGroupData: CreateSpecificationGroupRequest
  ): Promise<VtexHttpResponse<CreateSpecificationGroupResponse>> {
    const path = `${Specification.BASE_PATH}_system/pvt/specification/group`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      specificationGroupData
    );
  }

  /**
   * Update a specification group
   * @param {UpdateSpecificationGroupRequest} specificationGroupData
   */
  updateSpecificationGroup(
    specificationGroupData: UpdateSpecificationGroupRequest
  ): Promise<VtexHttpResponse<CreateSpecificationGroupResponse>> {
    const path = `${Specification.BASE_PATH}_system/pvt/specification/group`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      specificationGroupData
    );
  }

  /**
   * Creates a new Specification Value for a Category
   * @param {CreateSpecificationValueRequest} specificationValueData
   */
  createSpecificationValue(
    specificationValueData: CreateSpecificationValueRequest
  ): Promise<VtexHttpResponse<CreateSpecificationValueRequest>> {
    const path = `${Specification.BASE_PATH}/pvt/specificationvalue`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      specificationValueData
    );
  }

  /**
   * Creates a specification field value by the specification field's ID.
   * @param {CreateSpecificationValueRequest} specificationFieldValueData
   */
  createSpecificationFieldValue(
    specificationFieldValueData: CreateSpecificationValueRequest
  ): Promise<VtexHttpResponse<CreateSpecificationValueRequest>> {
    const path = `${Specification.BASE_PATH}_system/pvt/specification/fieldValue`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      specificationFieldValueData
    );
  }

  /**
   * CUpdates a specification field value by the specification field's ID.
   * @param {CreateSpecificationValueRequest} specificationFieldValueData
   */
  updateSpecificationFieldValue(
    specificationFieldValueData: CreateSpecificationValueRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Specification.BASE_PATH}_system/pvt/specification/fieldValue`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      specificationFieldValueData
    );
  }

  /**
   * Gets general information about unmapped Specifications of a Seller SKU in a Marketplace
   * @param {number} id
   */
  getSpecificationNonStructured(
    id: number
  ): Promise<VtexHttpResponse<GetSpecificationNonStructuredResponse>> {
    const path = `${Specification.BASE_PATH}/pvt/specification/nonstructured/${id}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes unmapped Specifications of a Seller SKU in a Marketplace by its unique ID
   * @param {number} id
   */
  deleteSpecificationNonStructured(id: number): Promise<VtexHttpResponse> {
    const path = `${Specification.BASE_PATH}/pvt/specification/nonstructured/${id}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Retrieves general information about a Specification Value
   * @param {number} specificationValueId
   */
  getSpecificationValue(
    specificationValueId: number
  ): Promise<VtexHttpResponse<GetSpecificationValueResponse>> {
    const path = `${Specification.BASE_PATH}/pvt/specificationvalue/${specificationValueId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {number} specificationValueId
   * @param {CreateSpecificationValueRequest} specificationValueData
   */
  updateSpecificationValue(
    specificationValueId: number,
    specificationValueData: CreateSpecificationValueRequest
  ): Promise<VtexHttpResponse<CreateSpecificationValueRequest>> {
    const path = `${Specification.BASE_PATH}/pvt/specificationvalue/${specificationValueId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      specificationValueData
    );
  }
}
