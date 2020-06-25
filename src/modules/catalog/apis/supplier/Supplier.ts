import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { UpdateSupplierRequest } from "./requests/UpdateSupplierRequest";
import { UpdateSupplierResponse } from "./responses/UpdateSupplierResponse";

export class Supplier extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/catalog/pvt/supplier";

  /**
   * Updates general information of an existing Supplier
   * @param {number} supplierId
   * @param {UpdateSupplierRequest} supplierData
   */
  updateSupplier(
    supplierId: number,
    supplierData: UpdateSupplierRequest
  ): Promise<VtexHttpResponse<UpdateSupplierResponse>> {
    const path = `${Supplier.BASE_PATH}/${supplierId}`;
    return this.vtexHttpClient.performRequest(
      path,
      this.HTTP_METHODS.PUT,
      supplierData
    );
  }

  /**
   * Deletes an existing Supplier
   * @param {number} supplierId
   */
  deleteSupplier(supplierId: number): Promise<VtexHttpResponse> {
    const path = `${Supplier.BASE_PATH}/${supplierId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.DELETE);
  }

  /**
   * Creates a new Supplier from scratch
   * @param {UpdateSupplierRequest} supplierData
   */
  createSupplier(
    supplierData: UpdateSupplierRequest
  ): Promise<VtexHttpResponse<UpdateSupplierResponse>> {
    return this.vtexHttpClient.performRequest(
      Supplier.BASE_PATH,
      this.HTTP_METHODS.POST,
      supplierData
    );
  }
}
