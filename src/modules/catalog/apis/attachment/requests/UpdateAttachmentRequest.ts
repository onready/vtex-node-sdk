export interface UpdateAttachmentRequest {
  Name?: string;
  IsActive?: boolean;
  IsRequired?: boolean;
  Domains?: Array<any>;
  FieldName?: string;
  MaxCaracters?: string;
  DomainValues?: string;
}
