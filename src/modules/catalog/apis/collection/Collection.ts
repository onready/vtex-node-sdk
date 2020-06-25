import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { GetCollectionResponse } from "./responses/GetCollectionResponse";
import { UpdateCollectionRequest } from "./requests/UpdateCollectionRequest";

export class Collection extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog/pvt/collection";

  /**
   * Gets general information of a Collection
   * @param {number} collectionId
   */
  getCollection(
    collectionId: number
  ): Promise<VtexHttpResponse<GetCollectionResponse>> {
    const path = `${Collection.BASE_PATH}/${collectionId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates a previously Collection
   * @param {number} collectionId
   * @param {UpdateCollectionRequest} collectionData
   */
  updateCollection(
    collectionId: number,
    collectionData: UpdateCollectionRequest
  ): Promise<VtexHttpResponse<UpdateCollectionRequest>> {
    const path = `${Collection.BASE_PATH}/${collectionId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      collectionData
    );
  }

  /**
   * Deletes a previously existing Collection
   * @param {number} collectionId
   */
  deleteCollection(collectionId: number): Promise<VtexHttpResponse> {
    const path = `${Collection.BASE_PATH}/${collectionId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates a new Collection
   * @param {UpdateCollectionRequest} collectionData
   */
  createCollection(
    collectionData: UpdateCollectionRequest
  ): Promise<VtexHttpResponse<GetCollectionResponse>> {
    return this.vtexHttpClient.performRequest(
      Collection.BASE_PATH,
      this.HTTP_METHODS.POST,
      collectionData
    );
  }
}
