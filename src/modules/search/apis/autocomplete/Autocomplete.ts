import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { AutocompleteResponse } from "./responses/AutocompleteResponse";

export class Autocomplete extends AbstractApi {
  autocomplete(
    productNameContains: string
  ): Promise<VtexHttpResponse<AutocompleteResponse>> {
    const path = `/buscaautocomplete?productNameContains=${productNameContains}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
