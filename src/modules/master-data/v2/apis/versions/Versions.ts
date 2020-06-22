import { AbstractApi } from '../../../../AbstractApi';
import { VtexHttpResponse } from '../../../../../utils/VtexHttpResponse';
import { ListVersionsResponseItem } from './responses/ListVersionsResponseItem';
import { GetVersionResponse } from './responses/GetVersionResponse';
import { PutVersionResponse } from './responses/PutVersionResponse';

export class Versions extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/dataentities';

  /**
   * Allows to list the versions of a document.
   * @param {string} dataEntityName
   * @param {string} id
   */
  listVersions(dataEntityName: string, id: string)
    : Promise<VtexHttpResponse<Array<ListVersionsResponseItem>>> {
    const path = `${Versions.BASE_PATH}/${dataEntityName}/documents/${id}/versions`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Returns the version of a document.
   * @param {string} dataEntityName
   * @param {string} id
   * @param {string} versionId
   */
  getVersion(dataEntityName: string, id: string, versionId: string)
    : Promise<VtexHttpResponse<GetVersionResponse>> {
    const path = `${Versions.BASE_PATH}/${dataEntityName}/documents/${id}/versions/${versionId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates document with version values.
   * @param {string} dataEntityName
   * @param {string} id
   * @param {string} versionId
   */
  putVersion(dataEntityName: string, id: string, versionId: string)
    : Promise<VtexHttpResponse<PutVersionResponse>> {
    const path = `${Versions.BASE_PATH}/${dataEntityName}/documents/${id}/versions/${versionId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT);
  }
}
