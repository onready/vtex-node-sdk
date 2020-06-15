import { VtexHttpClient } from '../utils/VtexHttpClient';

export class OMS {
  readonly #vtexHttpClient: VtexHttpClient;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.#vtexHttpClient = vtexHttpClient;
  }
}
