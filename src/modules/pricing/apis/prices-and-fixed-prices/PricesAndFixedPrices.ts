import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { GetPriceResponse, FixedPrice } from './responses/GetPriceResponse';
import { GetComputedPriceByPriceTableResponse } from './responses/GetComputedPriceByPriceTableResponse';

export class PricesAndFixedPrices extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/pricing/prices/';

  /**
   * Retrieves price data by SKU Id It is possible that on the property fixedPrices
   * exists a list of specific prices for Trade Policies and Minimium Quantities of the SKU.
   * Fixed Prices may also be scheduled
   * @param {string} skuId
   */
  getPrice(skuId: string): Promise<VtexHttpResponse<GetPriceResponse>> {
    const path = `${PricesAndFixedPrices.BASE_PATH}/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Removes an SKU price. This action removes both Base Price and
   * all available Fixed Prices for and SKU in all trade policies
   * @param {string} skuId
   */
  deletePrice(skuId: string): Promise<VtexHttpResponse> {
    const path = `${PricesAndFixedPrices.BASE_PATH}/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates or updates an SKU Price or Fixed Price.
   * The Fixed Price is an optional price of the SKU for a specific Trade Policy
   * with a specific Minimum Quantity to be activated
   * @param {string} skuId
   * @param {GetPriceResponse} priceData
   */
  createOrEditPriceOrFixedPrice(skuId: string, priceData: GetPriceResponse)
    : Promise<VtexHttpResponse> {
    const path = `${PricesAndFixedPrices.BASE_PATH}/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, priceData);
  }

  /**
   * Fixed Prices are a sub resource of Prices.
   * This method get an array of Fixed Prices for an SKU in a Trade Policy with Minimum Quantities
   * @param {string} skuId
   */
  getFixedPrices(skuId: string): Promise<VtexHttpResponse<Array<FixedPrice>>> {
    const path = `${PricesAndFixedPrices.BASE_PATH}/${skuId}/fixed`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * This method will create or update the Fixed Prices of an SKU just for an specific Price Table
   * (according to its Trade Policy)
   * @param {string} skuId
   * @param {string} priceTableId
   * @param {Array<FixedPrice>} fixedPrices
   */
  createOrEditFixedPricesOnPriceTable(skuId: string, priceTableId: string,
    fixedPrices: Array<FixedPrice>): Promise<VtexHttpResponse> {
    const path = `${PricesAndFixedPrices.BASE_PATH}/${skuId}/fixed/${priceTableId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, fixedPrices);
  }

  /**
   * Gets all Fixed Prices on a price table (or trade policy)
   * @param {string} skuId
   * @param {string} priceTableId
   */
  getFixedPricesOnPriceTable(skuId: string, priceTableId: string)
    : Promise<VtexHttpResponse<Array<FixedPrice>>> {
    const path = `${PricesAndFixedPrices.BASE_PATH}/${skuId}/fixed/${priceTableId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes all Fixed Prices of an SKU in a specific Price Table (or Trade Policy)
   * @param {string} skuId
   * @param {string} priceTableId
   */
  deleteFixedPricesOnPriceTable(skuId: string, priceTableId: string): Promise<VtexHttpResponse> {
    const path = `${PricesAndFixedPrices.BASE_PATH}/${skuId}/fixed/${priceTableId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   *
   * @param {string} skuId
   * @param {string} priceTableId
   * @param {string} params Example: categoryIds=1&brandId=1&quantity=2
   */
  getComputedPriceByPriceTable(skuId: string, priceTableId: string, params: string)
    : Promise<VtexHttpResponse<GetComputedPriceByPriceTableResponse>> {
    const path = `${PricesAndFixedPrices.BASE_PATH}/${skuId}/computed/${priceTableId}?${params}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
