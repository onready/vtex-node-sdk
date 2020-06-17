interface Dimension {
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
}

interface Item {
  id?: string;
  groupItemId?: string;
  kitItem?: Array<string>;
  quantity?: number;
  price?: number;
  additionalHandlingTime?: string;
  dimension?: Dimension;
}

interface InStore {
  isCheckedIn?: boolean;
  storeId?: string;
}

interface Location {
  zipCode?: string;
  country?: string;
  inStore?: InStore;
}

interface DeliveryItemOption {
  item?: Item;
  slaType?: string;
  slaTypeName?: string;
  listPrice?: number;
  promotionalPrice?: number;
  transitTime?: string;
  dockTime?: string;
  timeToDockPlusDockTime?: string;
  aditionalTimeBlockedDays?: string;
  totalTime?: string;
  deliveryWindows?: Array<string>;
  wareHouseId?: string;
  dockId?: string;
  location?: Location;
}

export interface CreateReservationRequest {
  salesChannel?: string;
  lockId?: string;
  autorizationExpirationTTL?: string;
  deliveryItemOptions?: Array<DeliveryItemOption>;
}
