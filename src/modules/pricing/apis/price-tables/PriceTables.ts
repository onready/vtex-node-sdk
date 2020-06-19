import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';

export class PriceTables extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/pricing/pipeline/catalog/';

  /**
   * This method will create the rules from a specific Price Table
   * @param {any} data
   */
  createRulesForPriceTable(data: any): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(PriceTables.BASE_PATH, this.HTTP_METHODS.POST, data);
  }
}
