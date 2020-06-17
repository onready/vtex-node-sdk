import { AbstractApi } from '../../../AbstractApi';
import { CreateOrUpdateHolidayRequest } from './requests/CreateOrUpdateHolidayRequest';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';

export class Holidays extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/logistics/pvt/configuration/holidays';

  /**
   * Creates or updates holidays through holiday ID.
   * @param {string} holidayId
   * @param {string} holidayData
   */
  createOrUpdateHoliday(holidayId: string, holidayData: CreateOrUpdateHolidayRequest)
    : Promise<VtexHttpResponse> {
    const path = `${Holidays.BASE_PATH}/${holidayId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, holidayData);
  }

  /**
   * Lists holiday's information by holiday ID.
   * @param {string} holidayId
   */
  listHolidayById(holidayId: string): Promise<VtexHttpResponse> {
    const path = `${Holidays.BASE_PATH}/${holidayId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Deletes given holidays set up in your store.
   * @param {string} holidayId
   */
  deleteHoliday(holidayId: string): Promise<VtexHttpResponse> {
    const path = `${Holidays.BASE_PATH}/${holidayId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Lists information of all holidays.
   */
  listAllHolidays(): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(Holidays.BASE_PATH, this.HTTP_METHODS.GET);
  }
}
