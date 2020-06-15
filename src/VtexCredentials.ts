export class VtexCredentials {
  store: string;

  appKey: string;

  appToken: string;

  /**
   * @param {string} store
   * @param {string} appKey
   * @param {string} appToken
   */
  constructor(store: string, appKey: string, appToken: string) {
    this.store = store;
    this.appKey = appKey;
    this.appToken = appToken;
  }
}
