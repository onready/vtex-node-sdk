interface Contact {
  name?: string;
  email?: string;
  phone?: string;
}

export interface SaveRequest {
  companyName?: string;
  isActive?: boolean;
  isOperating?: boolean;
  contact?: Contact;
}
