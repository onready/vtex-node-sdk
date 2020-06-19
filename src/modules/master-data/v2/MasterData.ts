import { VtexHttpClient } from '../../../utils/VtexHttpClient';
import { Documents } from './apis/documents';

export class MasterData {
  /**
   * Documents API
   */
  readonly documents: Documents

  constructor(vtexHttpClient: VtexHttpClient) {
    this.documents = new Documents(vtexHttpClient);
  }
}
