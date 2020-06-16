import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { CreateOrUpdateCarrierRequest } from './requests/CreateOrUpdateCarrierRequest';
import { ListAllCarriersResponseItem } from './responses/ListAllCarriersResponse';

export class Carriers extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/logistics/pvt/configuration';

  /**
   * Creates or updates carriers in your store
   * @param {CreateOrUpdateCarrierRequest} carrierData
   */
  createOrUpdateCarrier(carrierData: CreateOrUpdateCarrierRequest): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/carriers`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, carrierData);
  }

  /**
   * Get information about all carriers in your store.
   */
  listAllCarriers(): Promise<VtexHttpResponse<Array<ListAllCarriersResponseItem>>> {
    const path = `${Carriers.BASE_PATH}/carriers`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Lists information about your store's carriers by searching through the Carrier's ID.
   * @param {string} id
   */
  listCarrierByid(id: string): Promise<VtexHttpResponse<ListAllCarriersResponseItem>> {
    const path = `${Carriers.BASE_PATH}/carriers/${id}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes carrier by carrier ID.
   * @param {string} id
   */
  deleteCarrier(id: string): Promise<VtexHttpResponse> {
    const path = `${Carriers.BASE_PATH}/carriers/${id}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
