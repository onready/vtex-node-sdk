interface Target {
  id?: string;
  type?: string;
  url?: string;
}

interface Assignee {
  id?: string;
  name?: string;
  email?: string;
}

interface Follower {
  id?: string;
  name?: string;
  email?: string;
}

export interface CreateTaskRequest {
  target?: Array<Target>;
  domain?: string;
  context?: string;
  name?: string;
  priority?: string;
  surrogateKey?: string;
  description?: string;
  dueDate?: string;
  assignee?: Assignee;
  followers?: Array<Follower>;
  parentTaskId?: string;
}
