import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { CrossSelling } from "./apis/cross-selling";
import { Search as SearchApi } from "./apis/search";
import { Facets } from "./apis/facets";
import { Autocomplete } from "./apis/autocomplete";

export class Search {
  /**
   * CrossSelling API
   */
  readonly crossSelling: CrossSelling;

  /**
   * Search API
   */
  readonly search: SearchApi;

  /**
   * Facets API
   */
  readonly facets: Facets;

  /**
   * Autocomplete API
   */
  readonly autocomplete: Autocomplete;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.crossSelling = new CrossSelling(vtexHttpClient);
    this.search = new SearchApi(vtexHttpClient);
    this.facets = new Facets(vtexHttpClient);
    this.autocomplete = new Autocomplete(vtexHttpClient);
  }
}
