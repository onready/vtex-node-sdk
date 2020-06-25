import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class CrossSelling extends AbstractApi {
  private static readonly BASE_PATH: string =
    "/api/catalog_system/pub/products/crossselling";

  /**
   *
   * @param {string} productId
   */
  whoSawAlsoSaw(productId: string): Promise<VtexHttpResponse> {
    const path = `${CrossSelling.BASE_PATH}/whosawalsosaw/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} productId
   */
  whoSawAlsoBought(productId: string): Promise<VtexHttpResponse> {
    const path = `${CrossSelling.BASE_PATH}/whosawalsobought/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} productId
   */
  whoBoughtAlsoBought(productId: string): Promise<VtexHttpResponse> {
    const path = `${CrossSelling.BASE_PATH}/whoboughtalsobought/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} productId
   */
  accesories(productId: string): Promise<VtexHttpResponse> {
    const path = `${CrossSelling.BASE_PATH}/accessories/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} productId
   */
  similars(productId: string): Promise<VtexHttpResponse> {
    const path = `${CrossSelling.BASE_PATH}/similars/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} productId
   */
  suggestions(productId: string): Promise<VtexHttpResponse> {
    const path = `${CrossSelling.BASE_PATH}/suggestions/${productId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
