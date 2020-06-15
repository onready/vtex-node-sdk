import * as nock from 'nock';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { VtexHttpClient } from '../src/utils/VtexHttpClient';
import { VtexCredentials } from '../src/VtexCredentials';

describe('VTEXHttpClient tests', () => {
  const vtexCredentials: VtexCredentials = new VtexCredentials('test', 'appKey', 'appSecret', 'stable');
  const vtexHttpClient = new VtexHttpClient(vtexCredentials);
  const BASE_URL: string = 'https://test.vtexcommercestable.com.br';
  const DEFAULT_RESPONSE_HEADERS: any = {
    'Content-Type': 'application/json',
  };

  const getFilepath = (filepath: string) => resolve(__dirname, `./${filepath}`);

  afterEach((done) => {
    nock.cleanAll();
    done();
  });

  test('performRequest, with get method, performs the request', () => new Promise((done) => {
    const path: string = '/api/oms/pvt/orders';
    const method: string = 'GET';
    const scope: nock.Scope = nock(BASE_URL)
      .get(path)
      .matchHeader('X-VTEX-API-AppKey', vtexCredentials.appKey)
      .matchHeader('X-VTEX-API-AppToken', vtexCredentials.appToken)
      .replyWithFile(200, getFilepath('vtexResponses/listOrders.json'), DEFAULT_RESPONSE_HEADERS);

    vtexHttpClient.performRequest(path, method).then(() => {
      expect(scope.isDone()).toBe(true);
      done();
    });
  }));

  test('performRequest, with post method with body, performs the request', () => new Promise((done) => {
    const path: string = '/api/oms/pvt/orders/orderId/changes';
    const method: string = 'POST';
    const requestBody: any = JSON.parse(readFileSync(getFilepath('vtexRequests/registerChangeOnOrder.json'), 'utf-8'));
    const scope: nock.Scope = nock(BASE_URL)
      .post(path, requestBody)
      .matchHeader('X-VTEX-API-AppKey', vtexCredentials.appKey)
      .matchHeader('X-VTEX-API-AppToken', vtexCredentials.appToken)
      .reply(200);

    vtexHttpClient.performRequest(path, method, requestBody).then(() => {
      expect(scope.isDone()).toBe(true);
      done();
    });
  }));
});
