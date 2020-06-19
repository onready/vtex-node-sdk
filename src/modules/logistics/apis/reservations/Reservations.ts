import { AbstractApi } from '../../../AbstractApi';
import { CreateReservationRequest } from './requests/CreateReservationRequest';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { CreateReservationResponse } from './responses/CreateReservationResponse';

export class Reservations extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/logistics/pvt/inventory/reservations';

  /**
   * Creates reservation
   * @param {CreateReservationRequest} reservation
   */
  createReservation(reservation: CreateReservationRequest)
    : Promise<VtexHttpResponse<CreateReservationResponse>> {
    return this.vtexHttpClient
      .performRequest(Reservations.BASE_PATH, this.HTTP_METHODS.POST, reservation);
  }

  /**
   * Lists reservation's information by ID.
   * @param {string} reservationId
   */
  listReservationById(reservationId: string): Promise<VtexHttpResponse<CreateReservationResponse>> {
    const path = `${Reservations.BASE_PATH}/${reservationId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Confirms reservation by reservation ID.
   * @param {string} reservationId
   */
  confirmReservation(reservationId: string): Promise<VtexHttpResponse> {
    const path = `${Reservations.BASE_PATH}/${reservationId}/confirm`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Acknowledges reservations made by reservation ID.
   * @param {string} reservationId
   */
  acknowledgmentReservation(reservationId: string): Promise<VtexHttpResponse> {
    const path = `${Reservations.BASE_PATH}/${reservationId}/acknowledge`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Cancels reservation by reservation ID.
   * @param {string} reservationId
   */
  cancelReservation(reservationId: string): Promise<VtexHttpResponse> {
    const path = `${Reservations.BASE_PATH}/${reservationId}/cancel`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST);
  }

  /**
   * Lists reservations in your store, by searching through warehouse and SKU.
   * @param {string} warehouseId
   * @param {string} skuId
   */
  listReservationByWarehouseAndSku(warehouseId: string, skuId: string): Promise<VtexHttpResponse> {
    const path = `${Reservations.BASE_PATH}/${warehouseId}/${skuId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
