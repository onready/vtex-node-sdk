interface Country {
  acronym?: string;
  name?: string;
}

interface Address {
  postalCode?: string;
  country?: Country;
  city?: string;
  state?: string;
  neighborhood?: string;
  street?: string;
  number?: string;
  complement?: string;
  coordinates?: any;
}

interface PickupStoreInfo {
  isPickupStore?: boolean;
  storeId?: string;
  friendlyName?: string;
  address?: Address;
  additionalInfo?: string;
  dockId?: string;
}

export interface CreateOrUpdateDockRequest {
  id?: string;
  name?: string;
  priority?: number;
  dockTimeFake?: string;
  timeFakeOverhead?: string;
  salesChannels?: Array<string>;
  salesChannel?: string;
  freightTableIds?: Array<string>;
  wmsEndPoint?: string;
  pickupStoreInfo?: PickupStoreInfo;
  address?: Address;
}
