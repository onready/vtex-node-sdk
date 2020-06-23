import { AbstractApi } from '../../../../AbstractApi';
import { VtexHttpResponse } from '../../../../../utils/VtexHttpResponse';
import { CreateNewDocumentResponse } from './responses/CreateNewDocumentResponse';
import { GetDocumentResponse } from './responses/GetDocumentResponse';

export class Documents extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/dataentities';

  /**
   *
   * @param {string} dataEntityName
   * @param {any} documentData
   * @param {string} params Example: _schema=schema1
   */
  createNewDocument(dataEntityName: string, documentData: any, params?: string)
    : Promise<VtexHttpResponse<CreateNewDocumentResponse>> {
    const path = `${Documents.BASE_PATH}/${dataEntityName}/documents?${params || ''}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, documentData);
  }

  /**
   *
   * @param {string} dataEntityName
   * @param {any} documentData
   * @param {string} params Example: _schema=schema1
   */
  createOrUpdateEntireDocument(dataEntityName: string, documentData: any, params?: string)
    : Promise<VtexHttpResponse> {
    const path = `${Documents.BASE_PATH}/${dataEntityName}/documents?${params || ''}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, documentData);
  }

  /**
   *
   * @param {string} dataEntityName
   * @param {any} documentData
   * @param {string} params Example: _schema=schema1
   */
  createOrUpdatePartialDocument(dataEntityName: string, documentData: any, params?: string)
    : Promise<VtexHttpResponse> {
    const path = `${Documents.BASE_PATH}/${dataEntityName}/documents?${params || ''}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PATCH, documentData);
  }

  /**
   *
   * @param {string} dataEntityName
   * @param {string} id
   * @param {string} params Example: _schema=schema1&_where=where-statement
   */
  getDocument(dataEntityName: string, id: string, params?: string)
    : Promise<VtexHttpResponse<GetDocumentResponse>> {
    const path = `${Documents.BASE_PATH}/${dataEntityName}/documents/${id}?${params || ''}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} dataEntityName
   * @param {string} id
   * @param {any} documentData
   * @param {string} params Example: _schema=schema1&_where=where-statement
   */
  updateEntireDocument(dataEntityName: string, id: string, documentData: any, params?: string)
    : Promise<VtexHttpResponse> {
    const path = `${Documents.BASE_PATH}/${dataEntityName}/documents/${id}?${params || ''}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, documentData);
  }

  /**
   *
   * @param {string} dataEntityName
   * @param {string} id
   * @param {any} documentData
   * @param {string} params Example: _schema=schema1&_where=where-statement
   */
  updatePartialDocument(dataEntityName: string, id: string, documentData: any, params?: string)
    : Promise<VtexHttpResponse> {
    const path = `${Documents.BASE_PATH}/${dataEntityName}/documents/${id}?${params || ''}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PATCH, documentData);
  }

  /**
   *
   * @param {string} dataEntityName
   * @param {string} id
   */
  deleteDocument(dataEntityName: string, id: string): Promise<VtexHttpResponse> {
    const path = `${Documents.BASE_PATH}/${dataEntityName}/documents/${id}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
