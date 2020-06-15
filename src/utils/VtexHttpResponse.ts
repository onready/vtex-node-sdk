export class VtexHttpResponse {
  status: number;

  body: any;

  /**
   * @param {number} status
   * @param {any} body
   */
  constructor(status: number, body: any) {
    this.status = status;
    this.body = body;
  }
}
