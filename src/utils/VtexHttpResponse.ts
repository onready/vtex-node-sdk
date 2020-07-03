import { IncomingHttpHeaders } from "http";

export class VtexHttpResponse<T = any> {
  /**
   * Response status
   */
  readonly status: number;

  /**
   * Response body
   */
  readonly body: T;

  /**
   * Response headers
   */
  readonly headers: IncomingHttpHeaders;

  /**
   * @param {number} status
   * @param {T} body
   * @param {IncomingHttpHeaders} headers
   */
  constructor(status: number, body: T, headers: IncomingHttpHeaders) {
    this.status = status;
    this.body = body;
    this.headers = headers;
  }
}
