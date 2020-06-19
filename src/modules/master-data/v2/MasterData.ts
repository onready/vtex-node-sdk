import { VtexHttpClient } from '../../../utils/VtexHttpClient';
import { Documents } from './apis/documents';
import { Search } from './apis/search';
import { Scroll } from './apis/scroll';
import { Schemas } from './apis/schemas';

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

  /**
   * Schemas API
   */
  readonly schemas: Schemas;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.documents = new Documents(vtexHttpClient);
    this.search = new Search(vtexHttpClient);
    this.scroll = new Scroll(vtexHttpClient);
    this.schemas = new Schemas(vtexHttpClient);
  }
}
