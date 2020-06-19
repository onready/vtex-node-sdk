import { VtexHttpClient } from '../../../utils/VtexHttpClient';
import { Documents } from './apis/documents';
import { Search } from './apis/search';
import { Scroll } from './apis/scroll';

export class MasterData {
  /**
   * Documents API
   */
  readonly documents: Documents;

  /**
   * Search API
   */
  readonly search: Search;

  /**
   * Scroll API
   */
  readonly scroll: Scroll;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.documents = new Documents(vtexHttpClient);
    this.search = new Search(vtexHttpClient);
    this.scroll = new Scroll(vtexHttpClient);
  }
}
