import { VtexHttpClient } from "../utils/VtexHttpClient";

export abstract class AbstractApi {
  protected readonly vtexHttpClient: VtexHttpClient;

  protected readonly HTTP_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH",
  };

  constructor(vtexHttpClient: VtexHttpClient) {
    this.vtexHttpClient = vtexHttpClient;
  }
}
