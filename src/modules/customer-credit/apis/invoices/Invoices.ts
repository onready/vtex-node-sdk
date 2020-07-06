import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { SearchAllInvoicesResponse } from "./responses/SearchAllInvoicesResponse";
import { RetrieveInvoiceByIdResponse } from "./responses/RetrieveInvoiceByIdResponse";
import { ChangeInvoiceRequest } from "./requests/ChangeInvoiceRequest";

export class Invoices extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/creditcontrol";

  /**
   * Returns all invoices according to the informed query params in the request.
   * @param {string} params Example: value=100&status=Paid
   */
  searchAllInvoices(
    params?: string
  ): Promise<VtexHttpResponse<SearchAllInvoicesResponse>> {
    const path = `${Invoices.BASE_PATH}/invoices?${params || ""}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Returns associated data for the specified Invoice Id, like status and value, for example.
   * @param {string} creditAccountId
   * @param {string} invoiceId
   */
  retrieveInvoiceById(
    creditAccountId: string,
    invoiceId: string
  ): Promise<VtexHttpResponse<RetrieveInvoiceByIdResponse>> {
    const path = `${Invoices.BASE_PATH}/accounts/${creditAccountId}/invoices/${invoiceId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Changes invoice's status from ancells invoice by specified Id.
   * @param {string} creditAccountId
   * @param {string} invoiceId
   */
  cancelInvoice(
    creditAccountId: string,
    invoiceId: string
  ): Promise<VtexHttpResponse<RetrieveInvoiceByIdResponse>> {
    const path = `${Invoices.BASE_PATH}/accounts/${creditAccountId}/invoices/${invoiceId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Returns associated invoices by specified creditAccountId, the param
   * that identifies a client in VTEX's system.
   * @param {string} creditAccountId
   */
  retrieveInvoiceByCreditAccountId(
    creditAccountId: string
  ): Promise<VtexHttpResponse<SearchAllInvoicesResponse>> {
    const path = `${Invoices.BASE_PATH}/accounts/${creditAccountId}/invoices`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Updates invoice's attributes status, paymentLink and observation.
   * @param {string} creditAccountId
   * @param {string} invoiceId
   * @param {ChangeInvoiceRequest} data
   */
  changeInvoice(
    creditAccountId: string,
    invoiceId: string,
    data: ChangeInvoiceRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Invoices.BASE_PATH}/accounts/${creditAccountId}/invoices/${invoiceId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }
}
