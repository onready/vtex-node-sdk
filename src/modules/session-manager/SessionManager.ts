import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Sessions } from "./apis/sessions";
import { Segment } from "./apis/segment";

export class SessionManager {
  /**
   * Sessions API
   */
  readonly sessions: Sessions;

  /**
   * Segment API
   */
  readonly segment: Segment;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.sessions = new Sessions(vtexHttpClient);
    this.segment = new Segment(vtexHttpClient);
  }
}
