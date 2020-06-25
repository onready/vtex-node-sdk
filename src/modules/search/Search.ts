import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { CrossSelling } from "./apis/cross-selling";

export class Search {
  /**
   * CrossSelling API
   */
  readonly crossSelling: CrossSelling;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.crossSelling = new CrossSelling(vtexHttpClient);
  }
}
