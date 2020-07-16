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
   * @param {object} additionalHeaders
   */
  affiliations(additionalHeaders?: object): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/affiliations`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Creates a new affiliation and returns a successful response.
   * @param {InsertAffiliationRequest} affiliationData
   * @param {object} additionalHeaders
   */
  insertAffiliation(
    affiliationData: InsertAffiliationRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/affiliations`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      affiliationData,
      additionalHeaders
    );
  }

  /**
   * Updates an existing affiliation.
   * @param {string} affiliationId
   * @param {InsertAffiliationRequest} affiliationData
   * @param {object} additionalHeaders
   */
  updateAffiliation(
    affiliationId: string,
    affiliationData: UpdateAffiliationRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/affiliations/${affiliationId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      affiliationData,
      additionalHeaders
    );
  }

  /**
   * Returns associated data for the specified affiliation Id, like name and implementation, for example.
   * @param {string} affiliationId
   * @param {object} additionalHeaders
   */
  affiliationById(
    affiliationId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/affiliations/${affiliationId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Returns all rules conditions your provider can handle.
   * @param {object} additionalHeaders
   */
  rules(additionalHeaders?: object): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Creates a new rule and returns a successful response.
   * @param {InsertRuleRequest} ruleData
   * @param {object} additionalHeaders
   */
  insertRule(
    ruleData: InsertRuleRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      ruleData,
      additionalHeaders
    );
  }

  /**
   * Returns rule by specified RuleId.
   * @param {string} ruleId
   * @param {object} additionalHeaders
   */
  ruleById(
    ruleId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules/${ruleId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }

  /**
   * Updates an existing rule.
   * @param {UpdateRuleRequest} ruleData
   * @param {object} additionalHeaders
   */
  updateRule(
    ruleId: string,
    ruleData: UpdateRuleRequest,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules/${ruleId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      ruleData,
      additionalHeaders
    );
  }

  /**
   * Deletes rules by specified Id.
   * @param {string} ruleId
   * @param {object} additionalHeaders
   */
  deleteRule(
    ruleId: string,
    additionalHeaders?: object
  ): Promise<VtexHttpResponse> {
    const path = `${Configuration.BASE_PATH}/rules/${ruleId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.DELETE,
      null,
      additionalHeaders
    );
  }

  /**
   * Returns enabled payment methods, like visa, master, bankissueinvoice that are
   * shown for the final user and enabled to receive payment.
   * @param {object} additionalHeaders
   */
  availablePaymentMethods(
    additionalHeaders?: object
  ): Promise<VtexHttpResponse<AvailablePaymentMethodsResponseItem>> {
    const path = `${Configuration.BASE_PATH}/merchants/payment-systems`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.GET,
      null,
      additionalHeaders
    );
  }
}
