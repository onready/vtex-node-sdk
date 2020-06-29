import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { InsertAffiliationRequest } from "./requests/InsertAffiliationRequest";
import { UpdateAffiliationRequest } from "./requests/UpdateAffiliationRequest";
import { InsertRuleRequest } from "./requests/InsertRuleRequest";
import { UpdateRuleRequest } from "./requests/UpdateRuleRequest";
import { AvailablePaymentMethodsResponseItem } from "./responses/AvailablePaymentMethodsResponseItem";

export class Configuration extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/pvt";

  /**
   * Returns all affiliations that your provider can handle.
   */
  affiliations(): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/affiliations`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates a new affiliation and returns a successful response.
   * @param {InsertAffiliationRequest} affiliationData
   */
  insertAffiliation(
    affiliationData: InsertAffiliationRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/affiliations`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      affiliationData
    );
  }

  /**
   * Updates an existing affiliation.
   * @param {string} affiliationId
   * @param {InsertAffiliationRequest} affiliationData
   */
  updateAffiliation(
    affiliationId: string,
    affiliationData: UpdateAffiliationRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/affiliations/${affiliationId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      affiliationData
    );
  }

  /**
   * Returns associated data for the specified affiliation Id, like name and implementation, for example.
   * @param {string} affiliationId
   */
  affiliationById(affiliationId: string): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/affiliations/${affiliationId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Returns all rules conditions your provider can handle.
   */
  rules(): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Creates a new rule and returns a successful response.
   * @param {InsertRuleRequest} ruleData
   */
  insertRule(ruleData: InsertRuleRequest): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      ruleData
    );
  }

  /**
   * Returns rule by specified RuleId.
   * @param {string} ruleId
   */
  ruleById(ruleId: string): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules/${ruleId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates an existing rule.
   * @param {UpdateRuleRequest} ruleData
   */
  updateRule(
    ruleId: string,
    ruleData: UpdateRuleRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules/${ruleId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      ruleData
    );
  }

  /**
   * Deletes rules by specified Id.
   * @param {string} ruleId
   */
  deleteRule(ruleId: string): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules/${ruleId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Returns enabled payment methods, like visa, master, bankissueinvoice that are
   * shown for the final user and enabled to receive payment.
   */
  availablePaymentMethods(): Promise<
    VtexHttpResponse<AvailablePaymentMethodsResponseItem>
  > {
    const path = `${Configuration.BASE_PATH}/merchants/payment-systems`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
