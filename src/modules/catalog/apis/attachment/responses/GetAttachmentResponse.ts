export interface GetAttachmentResponse {
  Id?: number;
  Name?: string;
  IsActive?: boolean;
  IsRequired?: boolean;
  Domains?: Array<any>;
  FieldName?: string;
  MaxCaracters?: string;
  DomainValues?: string;
}
