import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { CreateGiftCardInGiftCardProviderRequest } from "./requests/CreateGiftCardInGiftCardProviderRequest";
import { CreateGiftCardInGiftCardProviderResponse } from "./responses/CreateGiftCardInGiftCardProviderResponse";
import { GetGiftCardFromGiftCardProviderRequest } from "./requests/GetGiftCardFromGiftCardProviderRequest";
import { GetGiftCardFromGiftCardProviderResponse } from "./responses/GetGiftCardFromGiftCardProviderResponse";
import { ListAllGiftCardTransactionsResponseItem } from "./responses/ListAllGiftCardTransactionsResponseItem";
import { CreateGiftCardTransactionRequest } from "./requests/CreateGiftCardTransactionRequest";
import { GetGiftCardByTransactionIdResponse } from "./responses/GetGiftCardTransactionByIdResponse";
import { GetGiftCardAuthorizationTransactionResponse } from "./responses/GetGiftCardAuthorizationTransactionResponse";
import { CreateGiftCardSettlementTransactionRequest } from "./requests/CreateGiftCardSettlementTransactionRequest";
import { CreateGiftCardCancellationTransactionRequest } from "./requests/CreateGiftCardCancellationTransactionRequest";

export class Transaction extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/giftcardproviders";

  /**
   * Creates a giftcard in a giftcard provider.
   * @param {string} giftCardProviderId
   * @param {CreateGiftCardInGiftCardProviderRequest} data
   * @param {object} additionalHeaders
   */
  createGiftCardInGiftCardProvider(
    giftCardProviderId: string,
    data: CreateGiftCardInGiftCardProviderRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<CreateGiftCardInGiftCardProviderResponse>> {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data,
      additionalHeaders
    );
  }

  /**
   * Returns all giftcards from a giftcard provider according to the filters.
   * @param {string} giftCardProviderId
   * @param {GetGiftCardFromGiftCardProviderRequest} search
   * @param {object} additionalHeaders
   */
  getGiftCardFromGiftCardProviderById(
    giftCardProviderId: string,
    search: GetGiftCardFromGiftCardProviderRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<Array<GetGiftCardFromGiftCardProviderResponse>>> {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards/_search`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      search,
      additionalHeaders
    );
  }

  /**
   * Return all transaction from a giftcard.
   * @param {string} giftCardProviderId
   * @param {string} giftCardId
   * @param {object} additionalHeaders
   */
  listAllGiftCardTransactions(
    giftCardProviderId: string,
    giftCardId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<Array<ListAllGiftCardTransactionsResponseItem>>> {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards/${giftCardId}/transactions`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Creates a transaction to a giftcard.
   * @param {string} giftCardProviderId
   * @param {string} giftCardId
   * @param {CreateGiftCardTransactionRequest} data
   * @param {object} additionalHeaders
   */
  createGiftCardTransaction(
    giftCardProviderId: string,
    giftCardId: string,
    data: CreateGiftCardTransactionRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards/${giftCardId}/transactions`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data,
      additionalHeaders
    );
  }

  /**
   * Returns a specific transaction from a giftcard.
   * @param {string} giftCardProviderId
   * @param {string} giftCardId
   * @param {string} transactionId
   * @param {object} additionalHeaders
   */
  getGiftCardTransactionById(
    giftCardProviderId: string,
    giftCardId: string,
    transactionId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<GetGiftCardByTransactionIdResponse>> {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards/${giftCardId}/transactions/${transactionId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Returns the transaction authorization info.
   * @param {string} giftCardProviderId
   * @param {string} giftCardId
   * @param {string} transactionId
   * @param {object} additionalHeaders
   */
  getGiftCardAuthorizationTransaction(
    giftCardProviderId: string,
    giftCardId: string,
    transactionId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<GetGiftCardAuthorizationTransactionResponse>> {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards/${giftCardId}/transactions/${transactionId}/authorization`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Returns a collection of settlement transactions from a giftcard.
   * @param {string} giftCardProviderId
   * @param {string} giftCardId
   * @param {string} transactionId
   * @param {object} additionalHeaders
   */
  listAllGiftCardSettlementTransactions(
    giftCardProviderId: string,
    giftCardId: string,
    transactionId: string,
    additionalHeaders?: object
  ): Promise<
    VtexHttpResponse<Array<GetGiftCardAuthorizationTransactionResponse>>
  > {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards/${giftCardId}/transactions/${transactionId}/settlements`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Creates a settlement transaction to a giftcard.
   * @param {string} giftCardProviderId
   * @param {string} giftCardId
   * @param {string} transactionId
   * @param {CreateGiftCardSettlementTransactionRequest} data
   * @param {object} additionalHeaders
   */
  createGiftCardSettlementTransaction(
    giftCardProviderId: string,
    giftCardId: string,
    transactionId: string,
    data: CreateGiftCardSettlementTransactionRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<GetGiftCardAuthorizationTransactionResponse>> {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards/${giftCardId}/transactions/${transactionId}/settlements`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data,
      additionalHeaders
    );
  }

  /**
   * Returns a collection of cancellation transactions from a giftcard.
   * @param {string} giftCardProviderId
   * @param {string} giftCardId
   * @param {string} transactionId
   * @param {object} additionalHeaders
   */
  listAllGiftCardCancellationTransactions(
    giftCardProviderId: string,
    giftCardId: string,
    transactionId: string,
    additionalHeaders?: object
  ): Promise<
    VtexHttpResponse<Array<GetGiftCardAuthorizationTransactionResponse>>
  > {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards/${giftCardId}/transactions/${transactionId}/cancellations`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Creates a cancellation transaction to a giftcard.
   * @param {string} giftCardProviderId
   * @param {string} giftCardId
   * @param {string} transactionId
   * @param {data} CreateGiftCardCancellationTransactionRequest
   * @param {object} additionalHeaders
   */
  createGiftCardCancellationTransaction(
    giftCardProviderId: string,
    giftCardId: string,
    transactionId: string,
    data: CreateGiftCardCancellationTransactionRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${Transaction.BASE_PATH}/${giftCardProviderId}/giftcards/${giftCardId}/transactions/${transactionId}/cancellations`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data,
      additionalHeaders
    );
  }
}
