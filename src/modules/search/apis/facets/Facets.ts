import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class Facets extends AbstractApi {
  private static readonly BASE_PATH: string =
    "/api/catalog_system/pub/facets/search";

  /**
   *
   * @param {string} categoryName
   * @param {string} specificationValue
   * @param {string} map
   */
  facetsCategoryAndSpecification(
    categoryName: string,
    specificationValue: string,
    map: string
  ): Promise<VtexHttpResponse> {
    const path = `${Facets.BASE_PATH}/${categoryName}/${specificationValue}?${
      map || ""
    }`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
