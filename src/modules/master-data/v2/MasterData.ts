import { VtexHttpClient } from "../../../utils/VtexHttpClient";
import { Documents } from "./apis/documents";
import { Search } from "./apis/search";
import { Scroll } from "./apis/scroll";
import { Schemas } from "./apis/schemas";
import { Indices } from "./apis/indices";
import { Clusters } from "./apis/clusters";
import { Versions } from "./apis/versions";

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

  /**
   * Indices API
   */
  readonly indices: Indices;

  /**
   * Clusters API
   */
  readonly clusters: Clusters;

  /**
   * Versions API
   */
  readonly versions: Versions;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.documents = new Documents(vtexHttpClient);
    this.search = new Search(vtexHttpClient);
    this.scroll = new Scroll(vtexHttpClient);
    this.schemas = new Schemas(vtexHttpClient);
    this.indices = new Indices(vtexHttpClient);
    this.clusters = new Clusters(vtexHttpClient);
    this.versions = new Versions(vtexHttpClient);
  }
}
