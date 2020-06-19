interface Item {
  id?: string;
  groupItemId?: string;
  quantity?: number;
  price?: number;
  modal?: string;
  additionalHandlingTime?: string;
  dimension?: any;
  kitItem?: Array<string>;
  unlimitedQuantity?: boolean;
}

interface Location {
  zipCode?: string;
  country?: string;
  deliveryPointId?: string;
  point?: string;
  inStore?: any;
}

interface SlaRequestItem {
  item?: Item;
  slaType?: string;
  slaTypeName?: string;
  freightTableName?: string;
  freightTableId?: string;
  listPrice?: number;
  promotionalPrice?: number;
  transitTime?: string;
  dockTime?: string;
  timeToDockPlusDockTime?: string;
  totalTime?: string;
  deliveryWindows?: string;
  wareHouseId?: string;
  dockId?: string;
  wmsEndPoint?: string;
  location?: Location;
  pickupStoreInfo?: string;
}

export interface CreateReservationResponse {
  LastUpdateDateUtc?: string;
  SalesChannel?: string;
  LockId?: string;
  ReservationDateUtc?: string;
  MaximumConfirmationDateUtc?: string;
  Status?: number;
  SlaRequest?: Array<SlaRequestItem>;
  PickupPointItemOptions?: string;
  CanceledDateUtc?: string;
  AuthorizedDateUtc?: string;
  ConfirmedDateUtc?: string;
  Errors?: Array<string>;
  IsSucess?: boolean;
}
