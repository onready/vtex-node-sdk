interface Item {
  id?: string;
  quantity?: number;
  seller?: string;
}

export interface DoOrderFormSimulationRequest {
  items?: Array<Item>;
  country?: string;
}
