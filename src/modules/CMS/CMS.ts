import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { ChangeUriSchema } from "./apis/change-uri-schema";

export class CMS {
  /**
   * Change Uri Schema API
   */
  readonly changeUriSchema: ChangeUriSchema;

  constructor(vtexHttpCLient: VtexHttpClient) {
    this.changeUriSchema = new ChangeUriSchema(vtexHttpCLient);
  }
}
