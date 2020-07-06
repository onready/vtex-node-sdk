import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { User } from "./apis/user";
import { Roles } from "./apis/roles";

export class LicenseManager {
  /**
   * User API
   */
  readonly user: User;

  /**
   * Roles API
   */
  readonly roles: Roles;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.user = new User(vtexHttpClient);
    this.roles = new Roles(vtexHttpClient);
  }
}
