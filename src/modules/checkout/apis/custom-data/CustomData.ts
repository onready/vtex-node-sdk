import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { SetSingleCustomFieldValueRequest } from "./requests/SetSingleCustomFieldValueRequest";

export class CustomData extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/checkout/pub/orderForm";

  /**
   * Your account may create apps, which contain custom fields, through the Update orderForm configuration request.
   * The values of these custom fields can then be updated by this request.To do that, you need to inform the ID
   * of the app you created with the configuration API (appId). In the body of the request, for each field created
   * in this app (appFieldName) you will inform a value (appFieldValue).
   * @param {string} orderFormId
   * @param {string} appId
   * @param {object} data
   */
  setMultipleCustomFieldValues(
    orderFormId: string,
    appId: string,
    data: object
  ): Promise<VtexHttpResponse> {
    const path = `${CustomData.BASE_PATH}/${orderFormId}/customData/${appId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Your account may create apps, which contain custom fields, through the Update orderForm configuration request.
   * The value of a specific custom field can then be updated by this request. To do that, you need to inform in the
   * URL the ID of the app you created with the configuration API (appId).
   * In the body of the request, you will inform the new value (appFieldValue, passed through the body) of the
   * specific field created in this app (identified by the appFieldName parameter, passed through the URL).
   * @param {string} orderFormId
   * @param {string} appId
   * @param {string} appFieldName
   * @param {SetSingleCustomFieldValueRequest} data
   */
  setSingleCustomFieldValue(
    orderFormId: string,
    appId: string,
    appFieldName: string,
    data: SetSingleCustomFieldValueRequest
  ): Promise<VtexHttpResponse> {
    const path = `${CustomData.BASE_PATH}/${orderFormId}/customData/${appId}/${appFieldName}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      data
    );
  }

  /**
   * Your account may create apps, which contain custom fields, through the Update orderForm configuration request.
   * The value of a specific custom field can then be updated by this request. To do that, you need to inform in the
   * URL the ID of the app you created with the configuration API (appId).
   * You also need to iform the specific field created in this app (identified by the appFieldName parameter, also
   * passed through the URL) whose value you want to remove.
   * @param {string} orderFormId
   * @param {string} appId
   * @param {string} appFieldName
   */
  deleteSingleCustomFieldValue(
    orderFormId: string,
    appId: string,
    appFieldName: string
  ): Promise<VtexHttpResponse> {
    const path = `${CustomData.BASE_PATH}/${orderFormId}/customData/${appId}/${appFieldName}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }
}
