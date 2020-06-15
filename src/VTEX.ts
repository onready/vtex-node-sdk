import { VtexCredentials } from './VtexCredentials';

export class VTEX {
  private static buildErrorMessage(paramName: string): string {
    return `Param ${paramName} is required`;
  }

  private static validate(store: string, appKey: string, appToken: string): void {
    let errorMessage = null;
    if (!store) {
      errorMessage = VTEX.buildErrorMessage('store');
    } else if (!appKey) {
      errorMessage = VTEX.buildErrorMessage('appKey');
    } else if (!appToken) {
      errorMessage = VTEX.buildErrorMessage('appToken');
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
  }

  readonly #vtexCredentials: VtexCredentials;

  /**
   * @param {string} store
   * @param {string} appKey
   * @param {string} appToken
   * @param {string} environment Default: 'stable'
   */
  constructor(store: string, appKey: string, appToken: string, environment: string = 'stable') {
    VTEX.validate(store, appKey, appToken);
    this.#vtexCredentials = new VtexCredentials(store, appKey, appToken, environment);
  }
}
