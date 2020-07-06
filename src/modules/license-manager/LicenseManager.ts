import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { User } from "./apis/user";

export class LicenseManager {
  /**
   * User API
   */
  readonly user: User;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.user = new User(vtexHttpClient);
  }
}
