export class VtexCredentials {
  store: string;

  appKey: string;

  appToken: string;

  environment: string;

  /**
   * @param {string} store
   * @param {string} appKey
   * @param {string} appToken
   */
  constructor(store: string, appKey: string, appToken: string, environment: string) {
    this.store = store;
    this.appKey = appKey;
    this.appToken = appToken;
    this.environment = environment;
  }
}
