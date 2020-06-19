export interface CalculateSLAResponseItem {
  itemId?: string;
  quantity?: number;
  availabilityQuantity?: number;
  salesChannel?: string;
  slaType?: string;
  slaTypeName?: string;
  freightTableName?: string;
  freightTableId?: string;
  listPrice?: number;
  transitTime?: string;
  dockTime?: string;
  timeToDockPlusDockTime?: string;
  aditionalTimeBlockedDays?: string;
  totalTime?: string;
  deliveryWindows?: Array<any>;
  wareHouseId?: string;
  dockId?: string;
  location?: any;
  deliveryOnWeekends?: boolean;
  carrierSchedule?: Array<string>;
  restrictedFreight?: string;
  coordinates?: string;
  pickupStoreInfo?: string;
}
