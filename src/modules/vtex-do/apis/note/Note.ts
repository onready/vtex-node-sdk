import { AbstractApi } from "../../../AbstractApi";
import { CreateNoteRequest } from "../task/requests/CreateNoteRequest";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";

export class Note extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/do/notes";

  /**
   * Creates new note in VTEX Do.
   * @param {CreateNoteRequest} note
   */
  createNote(note: CreateNoteRequest): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Note.BASE_PATH,
      this.HTTP_METHODS.POST,
      note
    );
  }

  /**
   * Retrieves notes related to a specific targetId.
   * @param {string} targetId
   */
  listNoteByTargetId(targetId: string): Promise<VtexHttpResponse> {
    const path = `${Note.BASE_PATH}?target.id=${targetId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a given note in VTEX Do, filtering by noteId.
   * @param {string} noteId
   */
  listNoteById(noteId: string): Promise<VtexHttpResponse> {
    const path = `${Note.BASE_PATH}/${noteId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
