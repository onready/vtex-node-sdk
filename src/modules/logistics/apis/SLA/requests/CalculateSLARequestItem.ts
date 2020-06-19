interface Dimension {
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
}

interface Location {
  zipCode?: string;
  country?: string;
  point?: Array<number>;
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

export interface CalculateSLARequestItem {
  items?: Array<Item>;
  location?: Location;
  salesChannel?: string;
}
