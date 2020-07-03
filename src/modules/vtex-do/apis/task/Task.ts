import { AbstractApi } from "../../../AbstractApi";
import { VtexHttpResponse } from "../../../../utils/VtexHttpResponse";
import { CreateTaskRequest } from "./requests/CreateTaskRequest";

export class Task extends AbstractApi {
  private static readonly BASE_PATH: string = "/api/do/tasks";

  /**
   * Creates a new task in VTEX Do.
   * @param {CreateTaskRequest} task
   */
  createTask(task: CreateTaskRequest): Promise<VtexHttpResponse> {
    return this.vtexHttpClient.performRequest(
      Task.BASE_PATH,
      this.HTTP_METHODS.POST,
      task
    );
  }

  /**
   * List tasks filtering Assignees by their emails and status
   * @param {string} email
   * @param {string} status
   */
  listTasksByAsiggnee(
    email: string,
    status: string
  ): Promise<VtexHttpResponse> {
    const path = `${Task.BASE_PATH}?assignee.email=${email}&status=${status}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * List tasks filtering targets by the targetId and status;
   * @param {string} targetId
   * @param {string} status
   */
  listTasksByTargetId(
    targetId: string,
    status: string
  ): Promise<VtexHttpResponse> {
    const path = `${Task.BASE_PATH}?target.id=${targetId}&status=${status}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * List paged tasks: filtering by page, perPage and status. Optionally you can filter by context
   * @param {number} page
   * @param {number} perPage
   * @param {string} status
   * @param {string} context
   */
  listTasksByPage(
    page: number,
    perPage: number,
    status: string,
    context?: string
  ): Promise<VtexHttpResponse> {
    const path = `${
      Task.BASE_PATH
    }?page=${page}&perPage=${perPage}&status=${status}${
      context ? `&context=${context}` : ""
    }`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Retrieves a give task, filtering by taskId.
   * @param {string} taskId
   */
  listTaskById(taskId: string): Promise<VtexHttpResponse> {
    const path = `${Task.BASE_PATH}/${taskId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }

  /**
   * Updates a given task's status, for example, filtering by taskId.
   * @param {string} taskId
   * @param {string} status
   */
  updateTask(taskId: string, status: string): Promise<VtexHttpResponse> {
    const path = `${Task.BASE_PATH}/${taskId}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.PUT, {
      status,
    });
  }

  /**
   * Add comment to a task
   * @param {string} text
   */
  addCommentToTask(taskId: string, text: string): Promise<VtexHttpResponse> {
    const path = `${Task.BASE_PATH}/${taskId}/comments`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.POST, {
      text,
    });
  }
}
