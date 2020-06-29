interface ItemReturned {
  thumb?: string;
  name?: string;
  href?: string;
  criteria?: string;
}

export interface AutocompleteResponse {
  itemsReturned?: Array<ItemReturned>;
}
