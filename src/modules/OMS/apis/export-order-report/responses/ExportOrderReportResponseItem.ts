export interface ExportOrderReportResponseItem {
  id?: string;
  cancelled?: boolean;
  query?: string;
  filter?: string;
  email?: string;
  hostUri?: string;
  utcTime?: string;
  dateOfRequest?: string;
  startDate?: string;
  lasUpdateTime?: string;
  instanceId?: string;
  publishId?: string;
  linkToDownload?: string;
  completedDate?: string;
  rowsProcessed?: number;
  rowNumber?: number;
}
