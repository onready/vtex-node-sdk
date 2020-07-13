import { AbstractApi } from "../../../../AbstractApi";
import { VtexHttpResponse } from "../../../../../utils/VtexHttpResponse";

export class Report extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/rns/report";

  /**
   * Retrieves Subscriptions' reports, filtering by status. The report will be sent by email,
   * to the address inserted in the API's path.
   * @param {string} requesterEmail
   * @param {number} status Binary OR of the following status: 1 - ACTIVE; 2 - PAUSED; 4 - CANCELED; 8 - EXPIRED
   */
  retrieveSubscriptionReportByStatus(
    requesterEmail: string,
    status: number
  ): Promise<VtexHttpResponse> {
    const path = `${Report.BASE_PATH}/subscriptionsByStatus?requesterEmail=${requesterEmail}&status=${status}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a report with the subscriptions created at the date interval requested
   * @param {string} requesterEmail
   * @param {number} beginDate begin date of report interval, use format yyyyMMdd
   * @param {number} endDate end date of report interval, use format yyyyMMdd
   */
  retrieveSubscriptionReportByDate(
    requesterEmail: string,
    beginDate: number,
    endDate: number
  ): Promise<VtexHttpResponse> {
    const path = `${Report.BASE_PATH}/subscriptionsByDate?requesterEmail=${requesterEmail}&beginDate=${beginDate}&endDate=${endDate}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested
   * @param {string} requesterEmail
   * @param {number} beginDate begin date of report interval, use format yyyyMMdd
   * @param {number} endDate end date of report interval, use format yyyyMMdd
   */
  retrieveSubscriptionReportBySchedule(
    requesterEmail: string,
    beginDate: number,
    endDate: number
  ): Promise<VtexHttpResponse> {
    const path = `${Report.BASE_PATH}/subscriptionsScheduled?requesterEmail=${requesterEmail}&beginDate=${beginDate}&endDate=${endDate}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a report regarding the Subscriptions created during the date interval of orders.
   * @param {string} requesterEmail
   * @param {number} beginDate begin date of report interval, use format yyyyMMdd
   * @param {number} endDate end date of report interval, use format yyyyMMdd
   */
  retrieveSubscriptionReportByOrderDate(
    requesterEmail: string,
    beginDate: number,
    endDate: number
  ): Promise<VtexHttpResponse> {
    const path = `${Report.BASE_PATH}/subscriptionsOrderByDate?requesterEmail=${requesterEmail}&beginDate=${beginDate}&endDate=${endDate}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a report regarding Subscriptions updated in the date interval chosen.
   * The report will be sent by email, to the address inserted in the API's path.
   * @param {string} requesterEmail
   * @param {number} beginDate begin date of report interval, use format yyyyMMdd
   * @param {number} endDate end date of report interval, use format yyyyMMdd
   */
  retrieveSubscriptionReportByUpdate(
    requesterEmail: string,
    beginDate: number,
    endDate: number
  ): Promise<VtexHttpResponse> {
    const path = `${Report.BASE_PATH}/subscriptionsUpdated?requesterEmail=${requesterEmail}&beginDate=${beginDate}&endDate=${endDate}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves the Subscription's report status, filtering by its reportId.
   * @param {string} reportId
   */
  getReportStatusById(reportId: string): Promise<VtexHttpResponse> {
    const path = `${Report.BASE_PATH}/reportStatus/${reportId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
