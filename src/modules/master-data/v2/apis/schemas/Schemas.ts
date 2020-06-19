import { AbstractApi } from '../../../../AbstractApi';
import { VtexHttpResponse } from '../../../../../utils/VtexHttpResponse';

export class Schemas extends AbstractApi {
  private static readonly BASE_URL: string = '/api/dataentities';

  /**
   * Return the schemas saved.
   * @param {string} dataEntityName
   */
  getSchemas(dataEntityName: string): Promise<VtexHttpResponse> {
    const path = `${Schemas.BASE_URL}/${dataEntityName}/schemas`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Return the schema saved.
   * @param {string} dataEntityName
   * @param {string} schemaName
   */
  getSchemaByName(dataEntityName: string, schemaName: string): Promise<VtexHttpResponse> {
    const path = `${Schemas.BASE_URL}/${dataEntityName}/schemas/${schemaName}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Save the schema.
   * @param {string} dataEntityName
   * @param {string} schemaName
   * @param {any} schemaData
   */
  saveSchemaByName(dataEntityName: string, schemaName: string, schemaData: any)
    : Promise<VtexHttpResponse> {
    const path = `${Schemas.BASE_URL}/${dataEntityName}/schemas/${schemaName}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, schemaData);
  }
}
