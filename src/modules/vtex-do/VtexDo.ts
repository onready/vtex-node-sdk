import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Note } from "./apis/note";
import { Task } from "./apis/task";

export class VtexDo {
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
