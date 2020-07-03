interface Target {
  id?: string;
  type?: string;
  url?: string;
}

export interface CreateNoteRequest {
  target?: Target;
  domain?: string;
  description?: string;
}
