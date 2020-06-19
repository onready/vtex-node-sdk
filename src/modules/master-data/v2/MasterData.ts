import { VtexHttpClient } from '../../../utils/VtexHttpClient';
import { Documents } from './apis/documents';
import { Search } from './apis/search';

export class MasterData {
  /**
   * Documents API
   */
  readonly documents: Documents;

  /**
   * Search API
   */
  readonly search: Search;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.documents = new Documents(vtexHttpClient);
    this.search = new Search(vtexHttpClient);
  }
}
