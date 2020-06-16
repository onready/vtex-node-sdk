import * as https from 'https';
import { ClientRequest, IncomingMessage } from 'http';
import { VtexCredentials } from '../VtexCredentials';
import { VtexHttpResponse } from './VtexHttpResponse';

export class VtexHttpClient {
  private readonly defaultRequestOptions: https.RequestOptions;

  /**
   * @param {VtexCredentials} vtexCredentials
   */
  constructor(vtexCredentials: VtexCredentials) {
    this.defaultRequestOptions = {
      hostname: `${vtexCredentials.store}.vtexcommerce${vtexCredentials.environment}.com.br`,
      port: 443,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-VTEX-API-AppKey': vtexCredentials.appKey,
        'X-VTEX-API-AppToken': vtexCredentials.appToken,
      },
    };
  }

  /**
   * @param {string} path
   * @param {('GET'|'POST'|'PUT'|'DELETE'|'PATCH')} method
   * @param {any} body
   */
  performRequest(path: string, method: string, body?: any): Promise<VtexHttpResponse> {
    return new Promise((resolve, reject) => {
      const requestOptions: https.RequestOptions = {
        ...this.defaultRequestOptions,
        path,
        method,
      };
      const request: ClientRequest = https.request(requestOptions, (response: IncomingMessage) => {
        let responseBody: string = '';

        response.on('data', (chunk) => {
          responseBody += chunk;
        });

        response.on('end', () => {
          if (response.statusCode) {
            let jsonResponse;
            try {
              jsonResponse = JSON.parse(responseBody);
            } catch (error) {
              jsonResponse = null;
            }
            const vtexHttpResponse: VtexHttpResponse = new VtexHttpResponse(
              response.statusCode, jsonResponse,
            );
            if (response.statusCode < 400) {
              resolve(vtexHttpResponse);
            } else {
              reject(vtexHttpResponse);
            }
          } else {
            reject(new Error('Request failed'));
          }
        });
      });

      request.on('error', (error) => reject(error));

      if (body) {
        let bodyString: string;
        if (typeof body === 'string') {
          bodyString = body;
        } else {
          bodyString = JSON.stringify(body);
        }
        request.write(bodyString);
      }
      request.end();
    });
  }
}
