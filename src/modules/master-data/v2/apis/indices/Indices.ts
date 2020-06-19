import { AbstractApi } from '../../../../AbstractApi';
import { VtexHttpResponse } from '../../../../../utils/VtexHttpResponse';
import { PutIndicesRequest } from './requests/PutIndicesRequest';

export class Indices extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/dataentities';

  /**
   * Return the list of indices by data entity.
   * @param {string} dataEntityName
   */
  getIndices(dataEntityName: string): Promise<VtexHttpResponse> {
    const path = `${Indices.BASE_PATH}/${dataEntityName}/indices`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Create an indice.
   * @param {string} dataEntityName
   * @param {PutIndicesRequest} indexData
   */
  putIndices(dataEntityName: string, indiceData: PutIndicesRequest): Promise<VtexHttpResponse> {
    const path = `${Indices.BASE_PATH}/${dataEntityName}/indices`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, indiceData);
  }

  /**
   * Return an indice.
   * @param {string} dataEntityName
   * @param {string} indiceName
   */
  getIndiceByName(dataEntityName: string, indiceName: string): Promise<VtexHttpResponse> {
    const path = `${Indices.BASE_PATH}/${dataEntityName}/indices/${indiceName}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
