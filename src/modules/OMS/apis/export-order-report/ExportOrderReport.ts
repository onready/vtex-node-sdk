import { AbstractApi } from '../../../AbstractApi';
import { VtexHttpResponse } from '../../../../utils/VtexHttpResponse';
import { ExportOrderReportResponseItem } from './responses/ExportOrderReportResponseItem';

export class ExportOrderReport extends AbstractApi {
  private static readonly BASE_PATH: string = '/api/oms/pvt/admin/reports';

  /**
   * @param {string} status 'inprogress' | 'completed'
   */
  exportOrderReport(status: string)
    : Promise<VtexHttpResponse<Array<ExportOrderReportResponseItem>>> {
    const path = `${ExportOrderReport.BASE_PATH}/${status}`;
    return this.vtexHttpClient.performRequest(path, this.HTTP_METHODS.GET);
  }
}
