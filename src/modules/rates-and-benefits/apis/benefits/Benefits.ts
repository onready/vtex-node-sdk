import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { CreateOrUpdateCalculatorConfigurationRequest } from "./requests/CreateOrUpdateCalculatorConfigurationRequest";

export class Benefits extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/rnb/pvt";

  /**
   * Fetches all benefits from an account
   */
  getAllBenefits(): Promise<VtexHttpResponse> {
    const path = `${Benefits.BASE_PATH}/benefits/calculatorconfiguration`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a specific benefit by its Promotion ID
   * @param {string} calculatorId
   */
  getCalculatorConfigurationById(
    calculatorId: string
  ): Promise<VtexHttpResponse> {
    const path = `${Benefits.BASE_PATH}/calculatorconfiguration/${calculatorId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Create or Update a specific benefit by its Promotion ID
   * @param {CreateOrUpdateCalculatorConfigurationRequest} data
   */
  createOrUpdateCalculatorConfiguration(
    data: CreateOrUpdateCalculatorConfigurationRequest
  ): Promise<VtexHttpResponse> {
    const path = `${Benefits.BASE_PATH}/calculatorconfiguration`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.POST,
      data
    );
  }
}
