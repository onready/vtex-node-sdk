interface Country {
  value?: string;
}

interface PostalCode {
  value?: string;
}

interface Public {
  country?: Country;
  postalCode?: PostalCode;
}

export interface CreateNewSessionRequest {
  public?: Public;
}
