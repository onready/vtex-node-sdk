import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { SearchAllAccountsResponse } from "./responses/SearchAllAccountsResponse";
import { OpenAnAccountRequest } from "./requests/OpenAnAccountRequest";
import { RetrieveAnAccountByIdResponse } from "./responses/RetrieveAnAccountByIdResponse";
import { UpdateEmailAndDescriptionOfAnAccountRequest } from "./requests/UpdateEmailAndDescriptionOfAnAccountRequest";
import { AccountStatementsResponse } from "./responses/AccountStatementsResponse";
import { OpenOrChangeAccountRequest } from "./requests/OpenOrChangeAccountRequest";
import { OpenOrChangeAccountResponse } from "./responses/OpenOrChangeAccountResponse";
import { ChangeCreditLimitOfAnAccountRequest } from "./requests/ChangeCreditLimitOfAnAccountRequest";
import { DecreaseBalanceOfAnAccountRequest } from "./requests/DecreaseBalanceOfAnAccountRequest";
import { CreatePreAuthorizationRequest } from "./requests/CreatePreAuthorizationRequest";
import { AddAccountHolderRequest } from "./requests/AddAccountHolderRequest";
import { PartialOrTotalRefundSettlementResponse } from "./responses/PartialOrTotalRefundSettlementResponse";

export class Account extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/creditcontrol/accounts";

  /**
   *
   * @param {string} params Example: document=09173503401&email=abc@gmail.com&op=or
   */
  searchAllAccounts(
    params?: string
  ): Promise<VtexHttpResponse<SearchAllAccountsResponse>> {
    const path = `${Account.BASE_PATH}?${params || ""}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Open an account.
   * @param {OpenAnAccountRequest} data
   */
  openAnAccount(data: OpenAnAccountRequest): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Account.BASE_PATH,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Retrieve an account by id.
   * @param {string} creditAccountId
   */
  retrieveAnAccountById(
    creditAccountId: string
  ): Promise<VtexHttpResponse<RetrieveAnAccountByIdResponse>> {
    const path = `${Account.BASE_PATH}/${creditAccountId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Closes an account.
   * @param {string} creditAccountId
   */
  closeAnAccount(creditAccountId: string): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Update a checking account.
   * @param {string} creditAccountId
   * @param {UpdateEmailAndDescriptionOfAnAccountRequest} data
   */
  updateEmailAndDescriptionOfAnAccount(
    creditAccountId: string,
    data: UpdateEmailAndDescriptionOfAnAccountRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Get the account statements.
   * @param {string} creditAccountId
   */
  accountStatements(
    creditAccountId: string
  ): Promise<VtexHttpResponse<AccountStatementsResponse>> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/statements`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   *
   * @param {string} accountId
   * @param {OpenOrChangeAccountRequest} data
   */
  openOrChangeAccount(
    accountId: string,
    data: OpenOrChangeAccountRequest
  ): Promise<VtexHttpResponse<OpenOrChangeAccountResponse>> {
    const path = `${Account.BASE_PATH}/${accountId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Increase the credit limit of an account.
   * @param {string} creditAccountId
   * @param {ChangeCreditLimitOfAnAccountRequest} data
   */
  changeCreditLimitOfAnAccount(
    creditAccountId: string,
    data: ChangeCreditLimitOfAnAccountRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/creditlimit`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Create a debit value updating the account BALANCE.
   * @param {string} creditAccountId
   * @param {string} statementId
   * @param {DecreaseBalanceOfAnAccountRequest} data
   */
  decreaseBalanceOfAnAccount(
    creditAccountId: string,
    statementId: string,
    data: DecreaseBalanceOfAnAccountRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/statements/${statementId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Debit a value from checking account.
   * @param {string} creditAccountId
   * @param {string} transactionId
   * @param {DecreaseBalanceOfAnAccountRequest} data
   */
  createOrUpdateSettlement(
    creditAccountId: string,
    transactionId: string,
    data: DecreaseBalanceOfAnAccountRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/transactions/${transactionId}/settlement`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Authorization hold (also card authorization, preauthorization, or preauth) is the practice that holding
   * this balance as unavailable until either the merchant clears the transaction, also called settlement,
   * or the hold "falls off." This operation does not appear in statements but the available balance
   * will be updated. The result of this operation is generate a preauthorizationId to use in settlement.
   * @param {string} creditAccountId
   * @param {CreatePreAuthorizationRequest} data
   */
  createPreAuthorization(
    creditAccountId: string,
    data: CreatePreAuthorizationRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/transaction`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   * Authorization hold (also card authorization, preauthorization, or preauth) is the practice that holding
   * this balance as unavailable until either the merchant clears the transaction, also called settlement,
   * or the hold "falls off." This operation does not appear in statements but the available balance
   * will be updated.The result of this operation is generate a preauthorizationId to use in settlement.
   * @param {string} creditAccountId
   * @param {string} transactionId
   * @param {CreatePreAuthorizationRequest} data
   */
  createPreAuthorizationUsingId(
    creditAccountId: string,
    transactionId: string,
    data: CreatePreAuthorizationRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/transactions/${transactionId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   *
   * @param {string} creditAccountId
   * @param {string} transactionId
   */
  cancelPreAuthorization(
    creditAccountId: string,
    transactionId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/transactions/${transactionId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   *
   * @param {string} creditAccountId
   * @param {AddAccountHolderRequest} data
   */
  addAccountHolder(
    creditAccountId: string,
    data: AddAccountHolderRequest
  ): Promise<VtexHttpResponse<SearchAllAccountsResponse>> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/holders`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }

  /**
   *
   * @param {string} creditAccountId
   * @param {string} holderId
   */
  deleteAccountHolder(
    creditAccountId: string,
    holderId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/holders/${holderId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Increase the credit limit of a checking account.
   * @param {string} creditAccountId
   * @param {ChangeCreditLimitOfAnAccountRequest} data
   */
  changeToleranceOfAnAccount(
    creditAccountId: string,
    data: ChangeCreditLimitOfAnAccountRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/tolerance`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Refund a value from a already settled transaction.
   * @param {string} creditAccountId
   * @param {string} transactionId
   * @param {DecreaseBalanceOfAnAccountRequest} data
   */
  partialOrTotalRefundSettlement(
    creditAccountId: string,
    transactionId: string,
    data: DecreaseBalanceOfAnAccountRequest
  ): Promise<VtexHttpResponse<PartialOrTotalRefundSettlementResponse>> {
    const path = `${Account.BASE_PATH}/${creditAccountId}/transactions/${transactionId}/refunds`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }
}
