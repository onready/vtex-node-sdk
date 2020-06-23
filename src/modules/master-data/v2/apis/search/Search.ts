import { AbstractApi } from '../../../../AbstractApi';
import { VtexHttpResponse } from '../../../../../utils/VtexHttpResponse';
import { RestRange } from './requests/RestRange';

export class Search extends AbstractApi {
  /**
   *
   * @param {string} dataEntityName
   * @param {RestRange} range
   * @param {string} params Example: _schema=schema1&_where=where-statement
   */
  searchDocuments(dataEntityName: string, range?: RestRange, params?: string)
    : Promise<VtexHttpResponse> {
    const headers = range ? { 'REST-Range': `resources=${range.from}-${range.to}` } : null;
    return this.vtexHttpClient.performRequest(
      `/api/dataentities/${dataEntityName}/search?${params || ''}`,
      this.HTTP_METHODS.GET,
      null,
      headers,
    );
  }
}
