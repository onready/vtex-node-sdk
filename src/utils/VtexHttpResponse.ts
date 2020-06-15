export class VtexHttpResponse<T = any> {
  status: number;

  body: T;

  /**
   * @param {number} status
   * @param {T} body
   */
  constructor(status: number, body: T) {
    this.status = status;
    this.body = body;
  }
}
