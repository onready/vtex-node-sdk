export interface RetrieveInvoiceByIdResponse {
  id?: string;
  status?: string;
  value?: number;
  checkingAccountId?: string;
  createdAt?: string;
  updatedAt?: string;
  paymentLink?: string;
  originalDueDate?: string;
  dueDate?: string;
  description?: string;
  observation?: string;
}
