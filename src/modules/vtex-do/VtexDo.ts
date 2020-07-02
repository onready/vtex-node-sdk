import { VtexHttpClient } from "../../utils/VtexHttpClient";
import { Note } from "./apis/note";
import { Task } from "./apis/task";

export class VtexDo {
  /**
   * Notes API
   */
  readonly note: Note;

  /**
   * Search API
   */
  readonly task: Task;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.note = new Note(vtexHttpClient);
    this.task = new Task(vtexHttpClient);
  }
}
