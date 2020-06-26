import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { CrossSelling } from "./apis/cross-selling";
import { Search as SearchApi } from "./apis/search";

export class Search {
  /**
   * CrossSelling API
   */
  readonly crossSelling: CrossSelling;

  /**
   * Search API
   */
  readonly search: SearchApi;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.crossSelling = new CrossSelling(vtexHttpClient);
    this.search = new SearchApi(vtexHttpClient);
  }
}
