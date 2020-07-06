import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { User } from "./apis/user";
import { Roles } from "./apis/roles";
import { AppKeys } from "./apis/app-keys";

export class LicenseManager {
  /**
   * User API
   */
  readonly user: User;

  /**
   * Roles API
   */
  readonly roles: Roles;

  /**
   * App Keys API
   */
  readonly appKeys: AppKeys;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.user = new User(vtexHttpClient);
    this.roles = new Roles(vtexHttpClient);
    this.appKeys = new AppKeys(vtexHttpClient);
  }
}
