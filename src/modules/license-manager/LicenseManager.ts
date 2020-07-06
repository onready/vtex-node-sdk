import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { User } from "./apis/user";
import { Roles } from "./apis/roles";
import { AppKeys } from "./apis/app-keys";
import { AccessControl } from "./apis/access-control";
import { Store } from "./apis/store";
import { Account } from "./apis/account";

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

  /**
   * Access Control API
   */
  readonly accessControl: AccessControl;

  /**
   * Store API
   */
  readonly store: Store;

  /**
   * Account API
   */
  readonly account: Account;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.user = new User(vtexHttpClient);
    this.roles = new Roles(vtexHttpClient);
    this.appKeys = new AppKeys(vtexHttpClient);
    this.accessControl = new AccessControl(vtexHttpClient);
    this.store = new Store(vtexHttpClient);
    this.account = new Account(vtexHttpClient);
  }
}
