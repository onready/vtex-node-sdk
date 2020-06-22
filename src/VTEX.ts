import { VtexCredentials } from './VtexCredentials';
import { VtexHttpClient } from './utils/VtexHttpClient';
import { OMS } from './modules/OMS';
import { Logistics } from './modules/logistics';
import { Pricing } from './modules/pricing';
import { MasterData } from './modules/master-data/v2';
import { Catalog } from './modules/catalog';

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

  /**
   * OMS Module
   */
  readonly oms: OMS;

  /**
   * Logistics Module
   */
  readonly logistics: Logistics;

  /**
   * Pricing Module
   */
  readonly pricing: Pricing;

  /**
   * Master Data (V2) Module
   */
  readonly masterData: MasterData;

  /**
   * Catalog Module
   */
  readonly catalog: Catalog;

  /**
   * @param {string} store
   * @param {string} appKey
   * @param {string} appToken
   * @param {string} environment Default: 'stable'
   */
  constructor(store: string, appKey: string, appToken: string, environment: string = 'stable') {
    VTEX.validate(store, appKey, appToken);
    const vtexCredentials: VtexCredentials = new VtexCredentials(
      store, appKey, appToken, environment,
    );
    const vtexHttpClient: VtexHttpClient = new VtexHttpClient(vtexCredentials);

    // Create needed modules
    this.oms = new OMS(vtexHttpClient);
    this.logistics = new Logistics(vtexHttpClient);
    this.pricing = new Pricing(vtexHttpClient);
    this.masterData = new MasterData(vtexHttpClient);
    this.catalog = new Catalog(vtexHttpClient);
  }
}
