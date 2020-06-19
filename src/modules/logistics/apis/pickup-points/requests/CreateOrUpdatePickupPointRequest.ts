interface Country {
  acronym?: string;
  name?: string;
}

interface Location {
  latitude?: number;
  longitude?: number;
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
  reference?: string;
  location?: Location;
}

interface BusinessHour {
  dayOfWeek?: number;
  openingTime?: string;
  closingTime?: string;
}

export interface CreateOrUpdatePickupPointRequest {
  id?: string;
  name?: string;
  description?: string;
  instructions?: string;
  // eslint-disable-next-line camelcase
  formatted_address?: string;
  address?: Address;
  isActive?: boolean;
  businessHours?: Array<BusinessHour>;
  tagsLabel?: Array<string>;
  pickupHolidays?: Array<string>;
}
